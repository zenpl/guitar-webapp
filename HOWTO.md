# 如何新增一首歌

## 需要改的文件

| 文件 | 做什么 |
|------|--------|
| `js/songs.js` | 加歌曲数据（必须） |
| `js/chords.js` | 加新和弦指法（如有新和弦） |

`index.html` 和 `js/app.js` **不需要动**。

---

## Step 1 · 获取歌词和弦

**优先**：yopu.co（中文歌优先，英文歌也可以）

```js
// browser 工具打开页面后执行：
document.body.innerText
```

yopu 格式是和弦内联在歌词里，字符之间有空格/换行分隔，容易解析。

**英文歌备用**：Ultimate Guitar（https://tabs.ultimate-guitar.com）
- 同样用 `document.body.innerText` 读取
- 格式：和弦行在上，歌词行在下，按字符位置对应

**中文歌备用**：chord4.com

```js
document.querySelector('pre').innerText
```

---

## Step 2 · 解析和弦歌词对应关系

**核心原则：每个 `seg` = 一个和弦落点**

```
{ chord: 'G',  lyric: '你好' }   → G 落在"你"，下划线标在"你"
{ chord: 'G',  lyric: '' }       → G 落在空拍，显示一个字宽下划线 + G
{ chord: '',   lyric: '继续唱' } → 无和弦，纯歌词，不加下划线
```

**空拍和弦的写法**（yopu 中用 `​` 零宽空格或空格表示）：
- 源谱里和弦下面是空词 → `{ chord: 'F', lyric: '' }`
- 后面的歌词单独作为无和弦 seg：`{ chord: '', lyric: '该怎么去' }`

**一行示例**（yopu 原文：`F  该怎么去 G 形容你 Am 最贴切`）：
```js
[
  { chord:'F',  lyric:'' },         // F 落在空拍
  { chord:'',   lyric:'该怎么去' }, // 无和弦歌词
  { chord:'G',  lyric:'形容你' },   // G 落在"形"
  { chord:'Am', lyric:'最贴切,' },  // Am 落在"最"
]
```

---

## Step 3 · 在 `js/songs.js` 末尾添加

```js
{
  id: 'my_song',           // 唯一 ID，英文小写下划线
  title: '歌曲名',
  artist: '艺术家',
  baseKey: 'G',            // 原曲实际调
  playKey: 'G',            // 弹奏用调（有 capo 时填开放和弦调）
  capo: 0,                 // 几品 capo
  chords: ['G','D','Em','C'],  // 本歌用到的和弦（用于顶部和弦栏）
  sections: [
    { title: '主歌', lines: [
      [{ chord:'F', lyric:'' }, { chord:'', lyric:'该怎么去' }, { chord:'G', lyric:'形容你' }, { chord:'Am', lyric:'最贴切,' }],
      [{ chord:'Em', lyric:'第二句' }, { chord:'C', lyric:'结尾' }],
    ]},
    { title: '副歌', lines: [
      // ...
    ]},
  ],
},
```

### 渲染规则说明

| seg 写法 | 显示效果 |
|----------|----------|
| `{ chord:'G', lyric:'你好' }` | G 标在上方，"你"字有下划线，"好"无下划线 |
| `{ chord:'G', lyric:'' }` | G 标在上方，下方显示一个字宽下划线空格 |
| `{ chord:'', lyric:'继续' }` | 无和弦标注，无下划线，纯歌词 |

---

## Step 4 · 如有新和弦，在 `js/chords.js` 的 `CHORDS` 对象里添加

```js
'Xx': { desc:'描述文字', frets:[-1, 0, 2, 2, 1, 0] },
// 横按和弦加 barre 字段：
'Xx': { desc:'...（横按N品）', frets:[...], barre: N },
```

`frets` 六个数字对应 E A D G B e 弦，`-1` 不弹，`0` 开放。

**注意**：含 `#` 的和弦名（如 `F#m`、`C#/E#`）必须用引号包住 key。

---

## Step 5 · 本地预览 & 上线

```bash
# 本地预览（已有 server 则跳过）
cd guitar-app
python3 -m http.server 8765

# tunnel 预览（每次会生成新 URL）
cloudflared tunnel --url http://localhost:8765
```

用 browser 工具截图确认效果，确认 OK 后：

```bash
git add js/ && git commit -m "add: 歌名" && git push
```

---

## baseKey / playKey / capo 关系

| 情况 | baseKey | playKey | capo |
|------|---------|---------|------|
| 原调直接弹 | G | G | 0 |
| 原调 Bb，用 G 指法 Capo 3 | Bb | G | 3 |
| 原调 D，用 C 指法 Capo 2 | D | C | 2 |

变调按键会根据这三个值自动计算新的 Key/Play/Capo 显示。

---

## 来源优先级

| 来源 | 适合 | 访问方式 |
|------|------|----------|
| yopu.co | 中文歌首选 | browser `document.body.innerText` |
| Ultimate Guitar | 英文歌首选 | browser `document.body.innerText` |
| chord4.com | 中文备用 | browser `document.querySelector('pre').innerText` |
