// Guitar app local server + diff relay
const http = require('http');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const ROOT = path.join(__dirname);
const PORT = 7788;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.json': 'application/json',
  '.jpg':  'image/jpeg',
  '.png':  'image/png',
  '.ico':  'image/x-icon',
};

const server = http.createServer((req, res) => {
  // CORS for local tunnel
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  // Diff relay endpoint
  if (req.method === 'POST' && req.url === '/send-diff') {
    let body = '';
    req.on('data', d => body += d);
    req.on('end', () => {
      try {
        const { diff } = JSON.parse(body);
        if (!diff) { res.writeHead(400); res.end('{"ok":false}'); return; }
        // Inject message into zeta agent session
        const safe = diff.replace(/'/g, "'\\''");
        execSync(`/opt/homebrew/bin/openclaw agent --agent zeta --message '📋 曲谱diff:\n${safe}'`, {
          timeout: 15000,
          env: { ...process.env }
        });
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end('{"ok":true}');
      } catch (e) {
        console.error('send-diff error:', e.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: e.message }));
      }
    });
    return;
  }

  // Static file server
  let filePath = req.url.split('?')[0];
  if (filePath === '/') filePath = '/index.html';
  const full = path.join(ROOT, filePath);

  // Security: don't escape ROOT
  if (!full.startsWith(ROOT)) { res.writeHead(403); res.end('Forbidden'); return; }

  fs.readFile(full, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    const ext = path.extname(full);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, () => console.log(`Guitar server ready on :${PORT}`));
