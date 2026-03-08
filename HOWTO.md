# 如何新增一首歌

## 需要改的文件

| 文件 | 做什么 |
|------|--------|
| `js/songs.js` | 加歌曲数据（必须） |
| `js/chords.js` | 加新和弦指法（如有新和弦） |

`index.html` 和 `js/app.js` **不需要动**。

---

## Step 1 · 获取歌词和弦

**优先**：搜 `yopu 歌名` 或直接访问 yopu.co，用 browser 工具读 `document.body.innerText`。
yopu 的格式是和弦标注在歌词内联显示，容易解析，质量更好。

备用：chord4.com，用浏览器开发者工具读原始文本：

```js
document.querySelector('pre').innerText
```

注意：和弦行在上，歌词行在下，按字符位置对应。

---

## Step 2 · 在 `js/songs.js` 末尾添加

```js
{
  id: 'my_song',           // 唯一 ID，英文小写
  title: '歌曲名',
  artist: '艺术家',
  baseKey: 'G',            // 原曲实际调
  playKey: 'G',            // 弹奏用调（有 capo 时填开放和弦调）
  capo: 0,                 // 几品 capo
  chords: ['G','D','Em','C'],  // 本歌用到的和弦（用于顶部和弦栏）
  sections: [
    { title: '主歌', lines: [
      // 每行是一个数组，每个元素是一个「和弦+歌词」段
      [{ chord:'G', lyric:'第一句歌词' }, { chord:'D', lyric:'继续' }],
      [{ chord:'Em', lyric:'第二句' }, { chord:'C', lyric:'结尾' }],
      // 没有和弦标注的段落，chord 填空字符串：
      [{ chord:'', lyric:'纯歌词部分' }, { chord:'G', lyric:'有和弦' }],
    ]},
    { title: '副歌', lines: [
      // ...
    ]},
  ],
},
```

---

## Step 3 · 如有新和弦，在 `js/chords.js` 的 `CHORDS` 对象里添加

```js
Xx: { desc:'描述文字', frets:[-1, 0, 2, 2, 1, 0] },
// 横按和弦加 barre 字段：
Xx: { desc:'...（横按N品）', frets:[...], barre: N },
```

`frets` 六个数字对应 E A D G B e 弦，`-1` 不弹，`0` 开放。

---

## Step 4 · 本地预览

```bash
cd guitar-app
python3 -m http.server 8765
# 另一个终端：
cloudflared tunnel --url http://localhost:8765
```

确认 OK 后：

```bash
git add js/ && git commit -m "add: 歌名" && git push
```

---

## baseKey / playKey / capo 关系

| 情况 | baseKey | playKey | capo |
|------|---------|---------|------|
| 原调直接弹 | G | G | 0 |
| 原调 Bb，用 G 指法 Capo 3 | Bb | G | 3 |
| 原调 A，直接弹 | A | A | 0 |

变调按键会根据这三个值自动计算新的 Key/Play/Capo 显示。
