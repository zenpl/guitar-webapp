# 如何添加新曲谱

## 工作流

1. **找谱**
   - 搜索：`web_search("歌名 艺术家 chord4 site:chord4.com")`
   - 直接抓取：`browser → chord4.com/tabs/XXXX`
   - 用 JS 读原始文本：`document.querySelector('pre').innerText`
   - ⚠️ 必须读原始 `<pre>` 内容，readability 提取会丢失空格对位信息

2. **解析和弦对位**
   - 原谱格式：和弦行在上，歌词行在下，用空格对齐
   - 数字符位置：数和弦名下面对应的是哪个字/词
   - 示例：
     ```
     C         D      Bm   Em
     你在南方的艳阳里  大雪纷飞
     ```
     → C=你，D=艳，Bm=大，Em=纷

3. **写 HTML**
   - 每个「和弦+歌词段」用 `.seg` 包裹：
     ```html
     <span class="seg">
       <span class="c" data-chord="C">C</span>
       <span class="w">你在南方的</span>
     </span>
     ```
   - `.seg` = `inline-flex` 竖排，和弦在上歌词在下
   - 段落间自然换行，不用横向滚动

4. **本地预览**
   ```bash
   # 启动本地服务器
   cd /Users/jill/.openclaw/workspace-zeta/guitar-app
   python3 -m http.server 8765 &

   # 启动 Cloudflare tunnel（临时公网地址）
   cloudflared tunnel --url http://localhost:8765
   ```
   - 等 tunnel 输出 `trycloudflare.com` 地址，发给用户在 iOS 上测试
   - **先 tunnel 预览，确认 OK 后再 push**

5. **发版**
   ```bash
   cd /Users/jill/.openclaw/workspace-zeta/guitar-app
   git add . && git commit -m "添加：歌名 - 艺术家" && git push
   ```
   - GitHub Pages 地址：https://zenpl.github.io/guitar-webapp/
   - Pages 更新需 1-2 分钟

## 和弦指法数据（已内置）

```js
G:  frets:[3,2,0,0,3,3]
D:  frets:[-1,-1,0,2,3,2]
Em: frets:[0,2,2,0,0,0]
Am: frets:[-1,0,2,2,1,0]
C:  frets:[-1,3,2,0,1,0]
Bm: frets:[-1,2,4,4,3,2], barre:2
```

新和弦需要添加到 `index.html` 的 `CHORDS` 对象中。

## 多首歌的扩展方向

目前 `index.html` 是单曲。后续要支持多首歌，方案：
- 方案 A：每首歌一个独立 HTML 文件（简单，每首自包含）
- 方案 B：用 JSON 数据 + 单页路由（扩展性好，需要改架构）

用户目前偏好：**逐一添加，告知歌名即可**

## 注意事项

- iOS 不接受横向滚动（弹琴时手不碰手机）
- `.seg` 的 `white-space: nowrap` 确保和弦不与歌词分离换行
- 和弦对位必须对照原谱空格位置，不能靠感觉猜
