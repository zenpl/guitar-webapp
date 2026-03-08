// ─── Song Library ────────────────────────────────────────────
// 每首歌：{ id, title, artist, baseKey, playKey, capo, chords[], sections[] }
// section: { title, lines[] }
// line: 数组，每个元素 { chord?: string, lyric: string }
//   chord 为空字符串表示无和弦标注，lyric 为对应文字

const SONGS = [
  // ──────────────────────────────────────────
  {
    id: 'nanshan',
    importVer: 2, locked: false,
    title: '南山南',
    artist: '马頔',
    baseKey: 'C', playKey: 'C', capo: 0,
    chords: ['F','G','Em','Am7','Dm7','Gsus4','Cadd9','G/B','G7','C','Cmaj7','Em7'],
    sections: [
      { title: '主歌A', lines: [
        [{ chord:'F', lyric:'' }, { chord:'', lyric:'你在南方的' }, { chord:'G', lyric:'艳' }, { chord:'', lyric:'阳里' }, { chord:'Em', lyric:'大' }, { chord:'', lyric:'雪纷飞' }, { chord:'Am7', lyric:'，' }],
        [{ chord:'Dm7', lyric:'我' }, { chord:'', lyric:'在北方的' }, { chord:'G', lyric:'寒' }, { chord:'', lyric:'夜里四季如' }, { chord:'Cadd9', lyric:'春，' }],
        [{ chord:'', lyric:'如果' }, { chord:'F', lyric:'天' }, { chord:'', lyric:'黑之前来得' }, { chord:'G', lyric:'及，' }, { chord:'', lyric:'我要' }, { chord:'Em', lyric:'忘' }, { chord:'', lyric:'了你的眼睛' }, { chord:'Am7', lyric:'，' }],
        [{ chord:'', lyric:'穷极' }, { chord:'Dm7', lyric:'一' }, { chord:'', lyric:'生做不' }, { chord:'Gsus4', lyric:'完' }, { chord:'G', lyric:'一场' }, { chord:'Cadd9', lyric:'梦，' }],
      ]},
      { title: '主歌B', lines: [
        [{ chord:'', lyric:'他' }, { chord:'Cadd9', lyric:'不' }, { chord:'', lyric:'再和谁' }, { chord:'G/B', lyric:'谈' }, { chord:'', lyric:'论相逢的' }, { chord:'Am7', lyric:'孤岛' }, { chord:'G7', lyric:'，' }],
        [{ chord:'', lyric:'因为' }, { chord:'F', lyric:'心' }, { chord:'', lyric:'里早已' }, { chord:'G', lyric:'荒' }, { chord:'', lyric:'芜人烟' }, { chord:'C', lyric:'，' }],
        [{ chord:'', lyric:'他的' }, { chord:'Cadd9', lyric:'心' }, { chord:'', lyric:'里再装不' }, { chord:'G/B', lyric:'' }, { chord:'', lyric:'下一个' }, { chord:'Am7', lyric:'家' }, { chord:'G7', lyric:'，' }],
        [{ chord:'', lyric:'做' }, { chord:'F', lyric:'一' }, { chord:'', lyric:'个只对' }, { chord:'G', lyric:'自' }, { chord:'', lyric:'己说谎的' }, { chord:'C', lyric:'哑巴，' }],
      ]},
      { title: '副歌A', lines: [
        [{ chord:'', lyric:'他说你' }, { chord:'F', lyric:'任' }, { chord:'', lyric:'何为人称道的美' }, { chord:'G', lyric:'丽，' }, { chord:'', lyric:'不及他' }, { chord:'Em', lyric:'第' }, { chord:'', lyric:'一次遇见' }, { chord:'Am7', lyric:'你，' }],
        [{ chord:'Dm7', lyric:'时' }, { chord:'', lyric:'光苟延残喘' }, { chord:'G', lyric:'无' }, { chord:'', lyric:'可奈何' }, { chord:'Cadd9', lyric:'，' }],
        [{ chord:'', lyric:'如果' }, { chord:'F', lyric:'所' }, { chord:'', lyric:'有土地连' }, { chord:'G', lyric:'在' }, { chord:'', lyric:'一起，走上一生只' }, { chord:'Em', lyric:'为' }, { chord:'', lyric:'拥抱你' }, { chord:'Am7', lyric:'，' }],
        [{ chord:'Dm7', lyric:'喝' }, { chord:'', lyric:'醉了他的' }, { chord:'Gsus4', lyric:'梦' }, { chord:'G', lyric:'晚安' }, { chord:'Cadd9', lyric:'，' }],
      ]},
      { title: '主歌C', lines: [
        [{ chord:'', lyric:'他' }, { chord:'Cadd9', lyric:'听' }, { chord:'', lyric:'见有人' }, { chord:'G/B', lyric:'唱着' }, { chord:'Am7', lyric:'古' }, { chord:'', lyric:'老的歌' }, { chord:'G7', lyric:'，' }],
        [{ chord:'', lyric:'唱着' }, { chord:'F', lyric:'今' }, { chord:'', lyric:'天还在' }, { chord:'G', lyric:'远' }, { chord:'', lyric:'方发生的，' }],
        [{ chord:'', lyric:'像' }, { chord:'Cadd9', lyric:'在' }, { chord:'', lyric:'她眼睛' }, { chord:'G/B', lyric:'里' }, { chord:'', lyric:'看到的孤' }, { chord:'Am7', lyric:'岛' }, { chord:'G7', lyric:'，' }],
        [{ chord:'', lyric:'没有' }, { chord:'F', lyric:'悲' }, { chord:'', lyric:'伤但' }, { chord:'G', lyric:'也' }, { chord:'', lyric:'没有' }, { chord:'C', lyric:'花朵，' }],
      ]},
      { title: '副歌B', lines: [
        [{ chord:'F', lyric:'' }, { chord:'', lyric:'你在南方的' }, { chord:'G', lyric:'艳' }, { chord:'', lyric:'阳里' }, { chord:'Em', lyric:'大' }, { chord:'', lyric:'雪纷飞' }, { chord:'Am7', lyric:'，' }],
        [{ chord:'', lyric:'我在' }, { chord:'Dm7', lyric:'北' }, { chord:'', lyric:'方的寒' }, { chord:'G7', lyric:'夜' }, { chord:'', lyric:'里四季如' }, { chord:'C', lyric:'春，' }],
        [{ chord:'', lyric:'如果' }, { chord:'F', lyric:'天' }, { chord:'', lyric:'黑之前' }, { chord:'G', lyric:'来' }, { chord:'', lyric:'得及，我要' }, { chord:'Em7', lyric:'忘' }, { chord:'', lyric:'了你的眼' }, { chord:'Am7', lyric:'睛，' }],
        [{ chord:'', lyric:'穷极' }, { chord:'Dm7', lyric:'一' }, { chord:'', lyric:'生做' }, { chord:'G7', lyric:'不' }, { chord:'', lyric:'完一场' }, { chord:'C', lyric:'梦，' }],
        [{ chord:'', lyric:'大梦' }, { chord:'Dm7', lyric:'初' }, { chord:'', lyric:'醒荒' }, { chord:'G', lyric:'唐' }, { chord:'', lyric:'了一生' }, { chord:'C', lyric:'，' }],
      ]},
      { title: '尾声', lines: [
        [{ chord:'C', lyric:'南山' }, { chord:'G/B', lyric:'南' }, { chord:'Am7', lyric:'北秋' }, { chord:'G7', lyric:'悲，' }, { chord:'F', lyric:'南山' }, { chord:'G', lyric:'有谷' }, { chord:'C', lyric:'堆' }, { chord:'Cmaj7', lyric:'' }],
        [{ chord:'C', lyric:'南风' }, { chord:'G/B', lyric:'喃' }, { chord:'Am7', lyric:'北海' }, { chord:'G7', lyric:'北，' }, { chord:'F', lyric:'北海' }, { chord:'G', lyric:'有墓碑' }, { chord:'C', lyric:'，' }],
        [{ chord:'F', lyric:'北海' }, { chord:'G', lyric:'有墓' }, { chord:'C', lyric:'碑。' }],
      ]},
    ],
  },

  // ──────────────────────────────────────────
  {
    id: 'anhq',
    importVer: 2, locked: true,
    title: '安和桥',
    artist: '宋冬野',
    baseKey: 'G', playKey: 'G', capo: 0,
    chords: ['C','G','Am','F','Em7'],
    sections: [
      { title: '主歌', lines: [
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'让我再看你一' }, { chord:'G', lyric:'遍' }, { chord:'', lyric:'从南' }, { chord:'Am', lyric:'到' }, { chord:'', lyric:'北像是' }, { chord:'F', lyric:'被' }, { chord:'', lyric:'五环路' }, { chord:'G', lyric:'' }, { chord:'', lyric:'蒙住的' }, { chord:'C', lyric:'' }, { chord:'', lyric:'双眼' }],
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'请你再讲一' }, { chord:'G', lyric:'遍' }, { chord:'', lyric:'关于' }, { chord:'Am', lyric:'那' }, { chord:'', lyric:'天抱着' }, { chord:'F', lyric:'盒' }, { chord:'', lyric:'子的姑娘' }, { chord:'G', lyric:'' }, { chord:'', lyric:'和擦汗的' }, { chord:'C', lyric:'男' }, { chord:'', lyric:'人' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'', lyric:'我知' }, { chord:'F', lyric:'道' }, { chord:'', lyric:'那些' }, { chord:'G', lyric:'夏' }, { chord:'', lyric:'天就像' }, { chord:'Em7', lyric:'青' }, { chord:'', lyric:'春一样' }, { chord:'Am', lyric:'回' }, { chord:'', lyric:'不来代替' }, { chord:'F', lyric:'梦' }, { chord:'', lyric:'想的也' }, { chord:'G', lyric:'只' }, { chord:'', lyric:'能是勉为' }, { chord:'C', lyric:'其' }, { chord:'', lyric:'难' }],
        [{ chord:'', lyric:'我知' }, { chord:'F', lyric:'道' }, { chord:'', lyric:'吹过的' }, { chord:'G', lyric:'牛' }, { chord:'', lyric:'逼也会随' }, { chord:'Em7', lyric:'青' }, { chord:'', lyric:'春一笑' }, { chord:'Am', lyric:'了' }, { chord:'', lyric:'之让我' }, { chord:'F', lyric:'困' }, { chord:'', lyric:'在城市' }, { chord:'G', lyric:'里' }, { chord:'', lyric:'纪念' }, { chord:'C', lyric:'你' }],
      ]},
      { title: '主歌', lines: [
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'让我再尝' }, { chord:'G', lyric:'一' }, { chord:'', lyric:'口秋天' }, { chord:'Am', lyric:'的' }, { chord:'', lyric:'酒一' }, { chord:'F', lyric:'直' }, { chord:'', lyric:'往南方' }, { chord:'G', lyric:'开' }, { chord:'', lyric:'不会' }, { chord:'C', lyric:'太' }, { chord:'', lyric:'久' }],
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'让我再听' }, { chord:'G', lyric:'一' }, { chord:'', lyric:'遍最美的' }, { chord:'Am', lyric:'那' }, { chord:'', lyric:'一句你' }, { chord:'F', lyric:'回' }, { chord:'', lyric:'家了' }, { chord:'G', lyric:'' }, { chord:'', lyric:'我在等你' }, { chord:'C', lyric:'呢' }],
      ]},
      { title: '间奏', lines: [
        [{ chord:'F', lyric:'' }, { chord:'G', lyric:'' }, { chord:'Am', lyric:'' }, { chord:'G', lyric:'' }],
        [{ chord:'F', lyric:'' }, { chord:'G', lyric:'' }, { chord:'Am', lyric:'' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'', lyric:'我知' }, { chord:'F', lyric:'道' }, { chord:'', lyric:'那些' }, { chord:'G', lyric:'夏' }, { chord:'', lyric:'天就像' }, { chord:'Em7', lyric:'青' }, { chord:'', lyric:'春一样' }, { chord:'Am', lyric:'回' }, { chord:'', lyric:'不来代替' }, { chord:'F', lyric:'梦' }, { chord:'', lyric:'想的也' }, { chord:'G', lyric:'只' }, { chord:'', lyric:'能是勉为' }, { chord:'C', lyric:'其' }, { chord:'', lyric:'难' }],
        [{ chord:'', lyric:'我知' }, { chord:'F', lyric:'道' }, { chord:'', lyric:'吹过的' }, { chord:'G', lyric:'牛' }, { chord:'', lyric:'逼也会随' }, { chord:'C', lyric:'青' }, { chord:'', lyric:'春一笑' }, { chord:'Am', lyric:'了' }, { chord:'', lyric:'之让我' }, { chord:'F', lyric:'困' }, { chord:'', lyric:'在城市' }, { chord:'G', lyric:'里' }, { chord:'', lyric:'纪念' }, { chord:'C', lyric:'你' }],
      ]},
      { title: '尾声', lines: [
        [{ chord:'', lyric:'我知' }, { chord:'F', lyric:'道' }, { chord:'', lyric:'那些' }, { chord:'G', lyric:'夏' }, { chord:'', lyric:'天就像' }, { chord:'Em7', lyric:'你' }, { chord:'', lyric:'一样' }, { chord:'Am', lyric:'回' }, { chord:'', lyric:'不来我已' }, { chord:'F', lyric:'不' }, { chord:'', lyric:'会再对' }, { chord:'G', lyric:'谁' }, { chord:'', lyric:'满怀' }, { chord:'C', lyric:'期' }, { chord:'', lyric:'待' }],
        [{ chord:'', lyric:'我知' }, { chord:'F', lyric:'道' }, { chord:'', lyric:'这个' }, { chord:'G', lyric:'世' }, { chord:'', lyric:'界每天' }, { chord:'Em7', lyric:'都' }, { chord:'', lyric:'有太多' }, { chord:'Am', lyric:'遗' }, { chord:'', lyric:'憾所以' }, { chord:'F', lyric:'' }, { chord:'', lyric:'你好' }, { chord:'G', lyric:'' }, { chord:'', lyric:'再见' }, { chord:'C', lyric:'' }],
      ]},
    ],
  },

  // ──────────────────────────────────────────
  {
    id: 'qqqg',
    importVer: 2, locked: false,
    title: '千千阙歌',
    artist: '张国荣 / 陈慧娴',
    baseKey: 'E', playKey: 'C', capo: 4,
    chords: ['C','Am','Em','Dm','G','F','E7'],
    sections: [
      { title: '主歌一', lines: [
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'徐徐回望，曾属于' }, { chord:'Em', lyric:'彼' }, { chord:'', lyric:'此的晚上。' }, { chord:'Dm', lyric:'' }, { chord:'', lyric:'红红仍是你，赠我的' }, { chord:'G', lyric:'心' }, { chord:'C', lyric:'' }],
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'如流傻泪，祈望可' }, { chord:'Em', lyric:'体' }, { chord:'', lyric:'恤兼见谅。' }, { chord:'Dm', lyric:'' }, { chord:'', lyric:'明晨离别，你路也许' }, { chord:'G', lyric:'孤' }, { chord:'C', lyric:'' }],
      ]},
      { title: '导歌', lines: [
        [{ chord:'E7', lyric:'一' }, { chord:'', lyric:'瞬间太多东西要讲，' }, { chord:'Am', lyric:'可' }, { chord:'', lyric:'惜即将在各一方，' }],
        [{ chord:'Dm', lyric:'只' }, { chord:'', lyric:'好深深把这刻尽' }, { chord:'Em', lyric:'凝' }, { chord:'Am', lyric:'望。' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'来日纵使千千阙歌，飘于远方' }, { chord:'Am', lyric:'我' }, { chord:'', lyric:'路上。' }],
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'来日纵使千千晚星，亮过今晚' }, { chord:'Em', lyric:'月' }, { chord:'', lyric:'亮。' }],
        [{ chord:'Dm', lyric:'都' }, { chord:'', lyric:'比不起这宵' }, { chord:'Am', lyric:'美' }, { chord:'', lyric:'丽，亦绝不可使我更' }, { chord:'Dm', lyric:'欣' }, { chord:'', lyric:'赏，' }],
        [{ chord:'Dm', lyric:'AH ' }, { chord:'F', lyric:'因' }, { chord:'', lyric:'你今晚共' }, { chord:'C', lyric:'我' }, { chord:'', lyric:'唱。' }],
      ]},
      { title: '主歌二', lines: [
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'临行临别，才顿感' }, { chord:'Em', lyric:'哀' }, { chord:'', lyric:'伤的漂亮。' }, { chord:'Dm', lyric:'' }, { chord:'', lyric:'原来全是你，令我的' }, { chord:'G', lyric:'思' }, { chord:'C', lyric:'' }],
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'何年何月，才又可' }, { chord:'Em', lyric:'今' }, { chord:'', lyric:'宵一样。' }, { chord:'Dm', lyric:'' }, { chord:'', lyric:'停留凝望里，让眼睛' }, { chord:'G', lyric:'讲' }, { chord:'C', lyric:'' }],
      ]},
      { title: '导歌', lines: [
        [{ chord:'E7', lyric:'当' }, { chord:'', lyric:'某天雨点轻敲你窗，' }, { chord:'Am', lyric:'当' }, { chord:'', lyric:'风声吹乱你构想，' }],
        [{ chord:'Dm', lyric:'可' }, { chord:'', lyric:'否抽空想这张旧' }, { chord:'Em', lyric:'模' }, { chord:'Am', lyric:'样。' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'来日纵使千千阙歌，飘于远方' }, { chord:'Am', lyric:'我' }, { chord:'', lyric:'路上。' }],
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'来日纵使千千晚星，亮过今晚' }, { chord:'Em', lyric:'月' }, { chord:'', lyric:'亮。' }],
        [{ chord:'Dm', lyric:'都' }, { chord:'', lyric:'比不起这宵' }, { chord:'Am', lyric:'美' }, { chord:'', lyric:'丽，亦绝不可使我更' }, { chord:'Dm', lyric:'欣' }, { chord:'', lyric:'赏，' }],
        [{ chord:'Dm', lyric:'AH ' }, { chord:'F', lyric:'因' }, { chord:'', lyric:'你今晚共' }, { chord:'C', lyric:'我' }, { chord:'', lyric:'唱。' }],
      ]},
      { title: '尾声', lines: [
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'来日纵使千千阙歌，飘于远方' }, { chord:'Am', lyric:'我' }, { chord:'', lyric:'路上。' }],
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'来日纵使千千晚星，亮过今晚' }, { chord:'Em', lyric:'月' }, { chord:'', lyric:'亮。' }],
        [{ chord:'Dm', lyric:'都' }, { chord:'', lyric:'比不起这宵' }, { chord:'Am', lyric:'美' }, { chord:'', lyric:'丽，亦都洗不清今晚' }, { chord:'Dm', lyric:'我' }, { chord:'', lyric:'所想，' }],
        [{ chord:'Dm', lyric:'AH ' }, { chord:'F', lyric:'因' }, { chord:'', lyric:'不知哪天再共' }, { chord:'C', lyric:'你' }, { chord:'', lyric:'唱。' }],
      ]},
    ],
  },

  // ──────────────────────────────────────────
  {
    id: 'hotelca',
    importVer: 1, locked: false,
    title: 'Hotel California',
    artist: 'Eagles',
    baseKey: 'Am', playKey: 'Am', capo: 0,
    chords: ['Am','E7','G','D','F','C','Dm','E'],
    sections: [
      { title: 'Verse I', lines: [
        [{ chord:'Am', lyric:'On a dark desert high' }, { chord:'E7', lyric:'way, cool wind in my hair' }],
        [{ chord:'G', lyric:'Warm smell of colitas ' }, { chord:'D', lyric:'rising up through the air' }],
        [{ chord:'F', lyric:'Up ahead in the distance, ' }, { chord:'C', lyric:'I saw a shimmering light' }],
        [{ chord:'Dm', lyric:'My head grew heavy and my sight grew dim' }],
        [{ chord:'E', lyric:'I had to stop for the night' }],
        [{ chord:'Am', lyric:'There she stood in the doorway; ' }, { chord:'E7', lyric:'I heard the mission bell' }],
        [{ chord:'G', lyric:'And I was thinking to myself, this could be ' }, { chord:'D', lyric:'heaven or this could be hell' }],
        [{ chord:'F', lyric:'Then she lit up a candle, ' }, { chord:'C', lyric:'and she showed me the way' }],
        [{ chord:'Dm', lyric:'There were voices down the corridor,' }],
        [{ chord:'E', lyric:'I thought I heard them say' }],
      ]},
      { title: 'Chorus', lines: [
        [{ chord:'F', lyric:'Welcome to the Hotel Cali' }, { chord:'C', lyric:'fornia' }],
        [{ chord:'E7', lyric:'Such a lovely place, ' }, { chord:'Am', lyric:'such a lovely face' }],
        [{ chord:'F', lyric:"There's plenty of room at the Hotel Cali" }, { chord:'C', lyric:'fornia' }],
        [{ chord:'Dm', lyric:'Anytime of year, ' }, { chord:'E', lyric:'you can find us here' }],
      ]},
      { title: 'Verse II', lines: [
        [{ chord:'Am', lyric:'Her mind is Tiffany twisted, ' }, { chord:'E7', lyric:'she got a Mercedes Benz' }],
        [{ chord:'G', lyric:'She got a lot of pretty pretty boys ' }, { chord:'D', lyric:'that she calls friends' }],
        [{ chord:'F', lyric:'How they danced in the courtyard, ' }, { chord:'C', lyric:'sweet summer sweat' }],
        [{ chord:'Dm', lyric:'Some dance to remember, ' }, { chord:'E', lyric:'some dance to forget' }],
        [{ chord:'Am', lyric:'So I called up the captain; ' }, { chord:'E7', lyric:'please bring me my wine' }],
        [{ chord:'G', lyric:"We haven't had that spirit here since " }, { chord:'D', lyric:'1969' }],
        [{ chord:'F', lyric:'And still those voices are calling from ' }, { chord:'C', lyric:'far away' }],
        [{ chord:'Dm', lyric:'Wake you up in the middle of the night' }],
        [{ chord:'E', lyric:'Just to hear them say' }],
      ]},
      { title: 'Chorus', lines: [
        [{ chord:'F', lyric:'Welcome to the Hotel Cali' }, { chord:'C', lyric:'fornia' }],
        [{ chord:'E7', lyric:'Such a lovely place, ' }, { chord:'Am', lyric:'such a lovely face' }],
        [{ chord:'F', lyric:"There's plenty of room at the Hotel Cali" }, { chord:'C', lyric:'fornia' }],
        [{ chord:'Dm', lyric:'Anytime of year, ' }, { chord:'E', lyric:'you can find us here' }],
      ]},
      { title: 'Verse III', lines: [
        [{ chord:'Am', lyric:'Mirrors on the ceiling, ' }, { chord:'E7', lyric:'the pink champagne on ice' }],
        [{ chord:'G', lyric:'We are all just prisoners here, ' }, { chord:'D', lyric:'of our own device' }],
        [{ chord:'F', lyric:"And in the master's chambers, " }, { chord:'C', lyric:'they gathered for the feast' }],
        [{ chord:'Dm', lyric:"They stab it with their steely knives but" }],
        [{ chord:'E', lyric:"they just can't kill the beast" }],
        [{ chord:'Am', lyric:'Last thing I remember, ' }, { chord:'E7', lyric:'I was running for the door' }],
        [{ chord:'G', lyric:'I had to find the passage back to the ' }, { chord:'D', lyric:'place I was before' }],
        [{ chord:'F', lyric:'"Relax," said the night man, ' }, { chord:'C', lyric:'we are programmed to receive' }],
        [{ chord:'Dm', lyric:'You can check out anytime you like' }],
        [{ chord:'E', lyric:'but you can never leave' }],
      ]},
    ],
  },
  // ──────────────────────────────────────────
  {
    id: 'chengdu',
    importVer: 1, locked: false,
    title: '成都',
    artist: '赵雷',
    baseKey: 'D', playKey: 'C', capo: 2,
    chords: ['C','Em','F','G','Am','Dm'],
    sections: [
      { title: '主歌', lines: [
        [{ chord:'C', lyric:'让我掉下眼泪的' }, { chord:'Em', lyric:'不止昨夜的酒' }],
        [{ chord:'F', lyric:'让我依依不舍的' }, { chord:'G', lyric:'不止你的温柔' }],
        [{ chord:'Em', lyric:'余路还要走多久' }, { chord:'Am', lyric:'你攥着我的手' }],
        [{ chord:'F', lyric:'让我感到为难的' }, { chord:'G', lyric:'是挣扎的' }, { chord:'C', lyric:'自由' }],
        [{ chord:'C', lyric:'分别总是在九月' }, { chord:'Em', lyric:'回忆是思念的愁' }],
        [{ chord:'F', lyric:'深秋嫩绿的垂柳' }, { chord:'G', lyric:'亲吻着我额头' }],
        [{ chord:'Em', lyric:'在那座阴雨的小城里' }, { chord:'Am', lyric:'我从未忘记你' }],
        [{ chord:'Em', lyric:'成都  ' }, { chord:'F', lyric:'带不走的' }, { chord:'C', lyric:'只有你' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'Em', lyric:'和我在成都的街头走一走' }, { chord:'Am', lyric:'哦哦' }],
        [{ chord:'F', lyric:'直到所有的灯都熄灭了' }, { chord:'G', lyric:'也不停' }, { chord:'C', lyric:'留' }],
        [{ chord:'F', lyric:'你会挽着我的衣袖' }, { chord:'G', lyric:'我会把手揣进' }, { chord:'C', lyric:'裤兜' }],
        [{ chord:'Dm', lyric:'走到玉林路的尽头' }, { chord:'G', lyric:'坐在小酒馆的门' }, { chord:'C', lyric:'口' }],
      ]},
      { title: '主歌', lines: [
        [{ chord:'C', lyric:'分别总是在九月' }, { chord:'Em', lyric:'回忆是思念的愁' }],
        [{ chord:'F', lyric:'深秋嫩绿的垂柳' }, { chord:'G', lyric:'亲吻着我额头' }],
        [{ chord:'Em', lyric:'在那座阴雨的小城里' }, { chord:'Am', lyric:'我从未忘记你' }],
        [{ chord:'Em', lyric:'成都  ' }, { chord:'F', lyric:'带不走的' }, { chord:'C', lyric:'只有你' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'Em', lyric:'和我在成都的街头走一走' }, { chord:'Am', lyric:'哦哦' }],
        [{ chord:'F', lyric:'直到所有的灯都熄灭了' }, { chord:'G', lyric:'也不停' }, { chord:'C', lyric:'留' }],
        [{ chord:'F', lyric:'你会挽着我的衣袖' }, { chord:'G', lyric:'我会把手揣进' }, { chord:'C', lyric:'裤兜' }],
        [{ chord:'Dm', lyric:'走到玉林路的尽头' }, { chord:'G', lyric:'坐在小酒馆的门' }, { chord:'C', lyric:'口' }],
        [{ chord:'Em', lyric:'和我在成都的街头走一走' }, { chord:'Am', lyric:'哦哦' }],
        [{ chord:'F', lyric:'直到所有的灯都熄灭了' }, { chord:'G', lyric:'也不停' }, { chord:'C', lyric:'留' }],
        [{ chord:'F', lyric:'你会挽着我的衣袖' }, { chord:'G', lyric:'我会把手揣进' }, { chord:'C', lyric:'裤兜' }],
        [{ chord:'Dm', lyric:'走到玉林路的尽头' }, { chord:'G', lyric:'坐在小酒馆的门' }, { chord:'C', lyric:'口' }],
      ]},
    ],
  },
  // ──────────────────────────────────────────
  {
    id: 'qinaioxiaohai',
    importVer: 1, locked: false,
    title: '亲爱的小孩',
    artist: '苏芮',
    baseKey: 'Ab', playKey: 'G', capo: 1,
    chords: ['G','Em','Am','Dm','C','F'],
    sections: [
      { title: '主歌', lines: [
        [{ chord:'G', lyric:'小小的小孩' }, { chord:'Em', lyric:'今天有没有哭' }],
        [{ chord:'Am', lyric:'是否朋友都已经离去' }, { chord:'Dm', lyric:'' }, { chord:'C', lyric:'留下了带不走' }, { chord:'G', lyric:'的孤独' }],
        [{ chord:'G', lyric:'漂亮的小孩' }, { chord:'Em', lyric:'今天有没有哭' }],
        [{ chord:'Am', lyric:'是否弄脏了美丽的衣服' }, { chord:'Dm', lyric:'' }, { chord:'C', lyric:'却找不到别人' }, { chord:'G', lyric:'倾诉' }],
        [{ chord:'G', lyric:'聪明的小孩' }, { chord:'Em', lyric:'今天有没有哭' }],
        [{ chord:'Am', lyric:'是否遗失了心爱的礼物' }, { chord:'Dm', lyric:'' }, { chord:'C', lyric:'在风中寻找从清晨' }, { chord:'G', lyric:'到日暮' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'C', lyric:'我亲爱的小孩' }, { chord:'G', lyric:'为什么你不让我看清楚' }],
        [{ chord:'Am', lyric:'是否让风吹熄了蜡烛' }, { chord:'Em', lyric:'在黑暗中独自漫步' }],
        [{ chord:'F', lyric:'亲爱的小孩' }, { chord:'C', lyric:'快快擦干你的泪珠' }],
        [{ chord:'Dm', lyric:'我愿意陪伴你走上' }, { chord:'C', lyric:'回家的路' }, { chord:'G', lyric:'' }],
      ]},
      { title: '主歌（复）', lines: [
        [{ chord:'G', lyric:'亲爱的小孩' }, { chord:'Em', lyric:'今天有没有哭' }],
        [{ chord:'Am', lyric:'是否朋友都已经离去' }, { chord:'Dm', lyric:'' }, { chord:'C', lyric:'留下了带不走' }, { chord:'G', lyric:'的孤独' }],
        [{ chord:'G', lyric:'亲爱的小孩' }, { chord:'Em', lyric:'今天有没有哭' }],
        [{ chord:'Am', lyric:'是否遗失了心爱的礼物' }, { chord:'Dm', lyric:'' }, { chord:'C', lyric:'在风中寻找从清晨' }, { chord:'G', lyric:'到日暮' }],
      ]},
    ],
  },
  // ──────────────────────────────────────────
  {
    id: 'lianfengchen',
    importVer: 1, locked: false,
    title: '恋恋风尘',
    artist: '老狼',
    baseKey: 'E', playKey: 'C', capo: 4,
    chords: ['C','F','E','Am','E7','Dm','G7'],
    sections: [
      { title: '主歌', lines: [
        [{ chord:'', lyric:'那' }, { chord:'C', lyric:'天黄' }, { chord:'F', lyric:'昏　开始' }, { chord:'E', lyric:'飘起了' }, { chord:'Am', lyric:'白雪　忧' }, { chord:'C', lyric:'伤开满' }, { chord:'G7', lyric:'山岗　等' }, { chord:'Am', lyric:'青春散' }, { chord:'E', lyric:'场' }],
        [{ chord:'E7', lyric:'午夜的电' }, { chord:'Am', lyric:'影　写满' }, { chord:'F', lyric:'古老的恋情　在' }, { chord:'Dm', lyric:'黑暗中为' }, { chord:'G7', lyric:'年轻歌' }, { chord:'C', lyric:'唱' }],
        [{ chord:'G7', lyric:'' }, { chord:'C', lyric:'走吧　女' }, { chord:'C', lyric:'孩　去看' }, { chord:'E', lyric:'红色的' }, { chord:'Am', lyric:'朝霞　带' }, { chord:'C', lyric:'上我的' }, { chord:'G7', lyric:'恋歌　你' }, { chord:'Am', lyric:'迎风吟' }, { chord:'E', lyric:'唱' }],
        [{ chord:'E7', lyric:'露水挂在发' }, { chord:'Am', lyric:'梢　结满' }, { chord:'F', lyric:'透明的' }, { chord:'C', lyric:'惆怅　是' }, { chord:'Dm', lyric:'我一生最' }, { chord:'G7', lyric:'初的迷' }, { chord:'C', lyric:'惘' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'', lyric:'当' }, { chord:'C', lyric:'岁月和美' }, { chord:'F', lyric:'丽　已成' }, { chord:'E', lyric:'风尘中的' }, { chord:'Am', lyric:'叹息　你' }, { chord:'C', lyric:'感伤的' }, { chord:'G7', lyric:'眼里有' }, { chord:'Am', lyric:'旧时泪' }, { chord:'E', lyric:'滴' }],
        [{ chord:'E7', lyric:'相信爱的年' }, { chord:'Am', lyric:'纪　没能' }, { chord:'F', lyric:'唱给你的' }, { chord:'C', lyric:'歌曲　让' }, { chord:'Dm', lyric:'我一生' }, { chord:'G7', lyric:'常常追' }, { chord:'C', lyric:'忆' }],
        [{ chord:'E7', lyric:'相信爱的年' }, { chord:'Am', lyric:'纪　没能' }, { chord:'F', lyric:'唱给你的' }, { chord:'C', lyric:'歌曲　让' }, { chord:'Dm', lyric:'我一生' }, { chord:'G7', lyric:'常常追' }, { chord:'C', lyric:'忆' }],
      ]},
    ],
  },
  // ──────────────────────────────────────────
  {
    id: 'hongdou',
    importVer: 1, locked: false,
    title: '红豆',
    artist: '王菲',
    baseKey: 'C', playKey: 'C', capo: 0,
    chords: ['C','Am','G','F7','C/E','Dm','Em7','Dm7','Gsus4','Am7','C/G','D7','E/B','D/F#','G7'],
    sections: [
      { title: '主歌', lines: [
        [{ chord:'', lyric:'还没' }, { chord:'C', lyric:'好好的感受　雪花' }, { chord:'Am', lyric:'绽放的气候' }],
        [{ chord:'G', lyric:'我们' }, { chord:'F7', lyric:'一起颤抖　' }, { chord:'C/E', lyric:'会更明白　' }, { chord:'Dm', lyric:'甚么是温柔' }, { chord:'G', lyric:'' }],
        [{ chord:'', lyric:'还没跟牵着手　走过' }, { chord:'Am', lyric:'荒芜的沙丘' }],
        [{ chord:'G', lyric:'可能　' }, { chord:'F7', lyric:'从此以后　' }, { chord:'Em7', lyric:'学会珍惜　' }, { chord:'Dm7', lyric:'天长和地' }, { chord:'Gsus4', lyric:'久　' }, { chord:'G', lyric:'' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'', lyric:'有时' }, { chord:'C', lyric:'候　有时候' }],
        [{ chord:'', lyric:'我会相信　' }, { chord:'Am7', lyric:'一切有尽' }, { chord:'C/G', lyric:'头' }],
        [{ chord:'', lyric:'相聚离' }, { chord:'F', lyric:'开　都有时' }, { chord:'C/E', lyric:'候' }, { chord:'', lyric:'没有甚' }, { chord:'D7', lyric:'么　会永垂不' }, { chord:'G', lyric:'朽' }],
        [{ chord:'', lyric:'可是' }, { chord:'C', lyric:'我　有时' }, { chord:'E/B', lyric:'候' }],
        [{ chord:'', lyric:'宁愿选择　' }, { chord:'Am', lyric:'留恋　' }, { chord:'G', lyric:'不放　' }, { chord:'D/F#', lyric:'手' }],
        [{ chord:'', lyric:'等到　' }, { chord:'Em7', lyric:'风景都看' }, { chord:'Am', lyric:'透　' }, { chord:'', lyric:'也许你　' }, { chord:'Dm7', lyric:'会陪我看' }, { chord:'G7', lyric:'细水长' }, { chord:'C', lyric:'流' }],
      ]},
      { title: '主歌', lines: [
        [{ chord:'', lyric:'还没为你把' }, { chord:'C', lyric:'红豆　熬成' }, { chord:'Am', lyric:'缠绵的伤口' }],
        [{ chord:'G', lyric:'然后' }, { chord:'F7', lyric:'一起分享　' }, { chord:'C/E', lyric:'会更明白　' }, { chord:'Dm', lyric:'相思的哀愁' }, { chord:'G', lyric:'' }],
        [{ chord:'', lyric:'还没' }, { chord:'C', lyric:'好好的感受　醒着' }, { chord:'Am', lyric:'亲吻的温柔' }],
        [{ chord:'G', lyric:'可能　' }, { chord:'F7', lyric:'在我左右　' }, { chord:'Em7', lyric:'你才追求　' }, { chord:'Dm7', lyric:'孤独的自' }, { chord:'Gsus4', lyric:'由　' }, { chord:'G', lyric:'' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'', lyric:'有时' }, { chord:'C', lyric:'候　有时候' }],
        [{ chord:'', lyric:'我会相信　' }, { chord:'Am7', lyric:'一切有尽' }, { chord:'C/G', lyric:'头' }],
        [{ chord:'', lyric:'相聚离' }, { chord:'F', lyric:'开　都有时' }, { chord:'C/E', lyric:'候' }, { chord:'', lyric:'没有甚' }, { chord:'D7', lyric:'么　会永垂不' }, { chord:'G', lyric:'朽' }],
        [{ chord:'', lyric:'可是' }, { chord:'C', lyric:'我　有时' }, { chord:'E/B', lyric:'候' }],
        [{ chord:'', lyric:'宁愿选择　' }, { chord:'Am', lyric:'留恋　' }, { chord:'G', lyric:'不放　' }, { chord:'D/F#', lyric:'手' }],
        [{ chord:'', lyric:'等到　' }, { chord:'Em7', lyric:'风景都看' }, { chord:'Am', lyric:'透　' }, { chord:'', lyric:'也许你　' }, { chord:'Dm7', lyric:'会陪我看' }, { chord:'G7', lyric:'细水长' }, { chord:'C', lyric:'流' }],
      ]},
    ],
  },
  // ──────────────────────────────────────────
  {
    id: 'qiufeng',
    importVer: 1, locked: false,
    title: '秋风',
    artist: '四熹丸子',
    baseKey: 'C#', playKey: 'C', capo: 1,
    chords: ['C','G','Am7','C/G','F','G/B'],
    sections: [
      { title: '主歌', lines: [
        [{ chord:'C', lyric:'我要怎么' }, { chord:'G', lyric:'说　你才能' }, { chord:'Am7', lyric:'在乎' }, { chord:'C/G', lyric:'我' }],
        [{ chord:'F', lyric:'这秋天的风　也' }, { chord:'G', lyric:'把你带远' }, { chord:'C', lyric:'了' }],
        [{ chord:'C', lyric:'指针一点' }, { chord:'G', lyric:'点的过　我们' }, { chord:'Am7', lyric:'没改变什' }, { chord:'C/G', lyric:'么' }],
        [{ chord:'F', lyric:'这份寂寞也希望你　真的' }, { chord:'G', lyric:'懂我' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'C', lyric:'要' }, { chord:'G', lyric:'怎么' }, { chord:'Am7', lyric:'说' }, { chord:'C/G', lyric:'你才能那样' }, { chord:'F', lyric:'爱我　给' }, { chord:'C', lyric:'我快乐　烦忧' }, { chord:'F', lyric:'全部离开' }, { chord:'G', lyric:'我' }],
        [{ chord:'C', lyric:'你' }, { chord:'G', lyric:'对我 ' }, { chord:'Am7', lyric:'说' }, { chord:'C/G', lyric:'爱到底是什' }, { chord:'F', lyric:'么' }],
        [{ chord:'C', lyric:'是不是一阵秋风' }, { chord:'F', lyric:'吹进你的' }, { chord:'G', lyric:'心窝' }, { chord:'G/B', lyric:'' }],
      ]},
      { title: '桥段', lines: [
        [{ chord:'C', lyric:'我' }, { chord:'G', lyric:'不难' }, { chord:'Am7', lyric:'过' }, { chord:'C/G', lyric:'我的世界只有' }, { chord:'F', lyric:'你一个　如果' }, { chord:'C', lyric:'你离开我　也要' }, { chord:'F', lyric:'好好' }, { chord:'G', lyric:'过' }],
        [{ chord:'C', lyric:'我' }, { chord:'G', lyric:'不难' }, { chord:'Am7', lyric:'过' }, { chord:'C/G', lyric:'我的世界只有' }, { chord:'F', lyric:'你一个　如果' }, { chord:'C', lyric:'你离开我　也要' }, { chord:'F', lyric:'好好' }, { chord:'G', lyric:'过' }],
      ]},
      { title: '结尾', lines: [
        [{ chord:'C', lyric:'我要怎么' }, { chord:'G', lyric:'说　你才能' }, { chord:'Am7', lyric:'在乎' }, { chord:'C/G', lyric:'我' }],
        [{ chord:'F', lyric:'这秋天的风　也' }, { chord:'G', lyric:'把你带远' }, { chord:'C', lyric:'了' }],
      ]},
    ],
  },
  // ──────────────────────────────────────────
  {
    id: 'yuebanyequ',
    importVer: 1, locked: false,
    title: '月半小夜曲',
    artist: '李克勤',
    baseKey: 'Am', playKey: 'Am', capo: 0,
    chords: ['Am','Dm','G','C','E','F','Em'],
    sections: [
      { title: '主歌', lines: [
        [{ chord:'Am', lyric:'仍然倚在失眠夜' }, { chord:'Dm', lyric:'望天边星宿' }],
        [{ chord:'G', lyric:'仍然听见小提琴如泣似诉' }, { chord:'C', lyric:'再挑' }, { chord:'E', lyric:'逗' }],
        [{ chord:'Am', lyric:'为何只剩一弯月' }, { chord:'Dm', lyric:'留在我的天空' }],
        [{ chord:'F', lyric:'这晚以后音讯' }, { chord:'E', lyric:'隔绝' }],
        [{ chord:'Am', lyric:'人如天上的明月' }, { chord:'Dm', lyric:'是不可拥有' }],
        [{ chord:'G', lyric:'情如曲过只遗留无可挽' }, { chord:'C', lyric:'救再分' }, { chord:'E', lyric:'别' }],
        [{ chord:'Am', lyric:'为何只是失望填密' }, { chord:'Dm', lyric:'我的空虚' }],
        [{ chord:'F', lyric:'这晚夜' }, { chord:'E', lyric:'没有吻' }, { chord:'Am', lyric:'别' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'F', lyric:'仍在说永' }, { chord:'G', lyric:'久想不' }, { chord:'Em', lyric:'到是藉' }, { chord:'Am', lyric:'口' }, { chord:'F', lyric:'从未意' }, { chord:'Dm', lyric:'会要分' }, { chord:'E', lyric:'手' }],
        [{ chord:'Am', lyric:'但我的心每分每刻' }, { chord:'Dm', lyric:'仍然被她占有' }],
        [{ chord:'G', lyric:'她似这月儿仍然是' }, { chord:'C', lyric:'不开' }, { chord:'E', lyric:'口' }],
        [{ chord:'Am', lyric:'提琴独奏独奏着明月' }, { chord:'Dm', lyric:'半倚深秋' }],
        [{ chord:'F', lyric:'我的牵挂' }, { chord:'G', lyric:'我的渴望' }, { chord:'Am', lyric:'直至以后' }],
      ]},
    ],
  },
  // ──────────────────────────────────────────
  {
    id: 'hongsegjx',
    importVer: 2, locked: true,
    title: '红色高跟鞋',
    artist: '蔡健雅',
    baseKey: 'D', playKey: 'C', capo: 2,
    chords: ['F','G','Am','C'],
    sections: [
      { title: '主歌', lines: [
        [{ chord:'F', lyric:'' }, { chord:'', lyric:'该怎么去' }, { chord:'G', lyric:'形容你' }, { chord:'Am', lyric:'最贴切,' }],
        [{ chord:'F', lyric:'' }, { chord:'', lyric:'拿什么跟' }, { chord:'G', lyric:'你作比' }, { chord:'Am', lyric:'较才算特别' }],
        [{ chord:'F', lyric:'' }, { chord:'', lyric:'对你的感' }, { chord:'G', lyric:'觉强烈,' }, { chord:'C', lyric:'却又不' }, { chord:'Am', lyric:'太了' }, { chord:'F', lyric:'解只凭' }, { chord:'G', lyric:'直觉' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'', lyric:'你像我在' }, { chord:'F', lyric:'' }, { chord:'', lyric:'被子' }, { chord:'G', lyric:'' }, { chord:'', lyric:'里的' }, { chord:'Am', lyric:'舒服,却又像' }, { chord:'F', lyric:'风琢' }, { chord:'G', lyric:'磨不' }, { chord:'Am', lyric:'住,' }],
        [{ chord:'', lyric:'像手纹像' }, { chord:'F', lyric:'散发' }, { chord:'G', lyric:'的香水' }, { chord:'Am', lyric:'味,像爱不释手' }, { chord:'F', lyric:'的' }, { chord:'G', lyric:'' }, { chord:'', lyric:'红色高跟鞋' }],
      ]},
      { title: '主歌', lines: [
        [{ chord:'F', lyric:'' }, { chord:'', lyric:'该怎么去' }, { chord:'G', lyric:'形容你' }, { chord:'Am', lyric:'最贴切,' }],
        [{ chord:'F', lyric:'' }, { chord:'', lyric:'拿什么跟' }, { chord:'G', lyric:'你作比' }, { chord:'Am', lyric:'较才算特别' }],
        [{ chord:'F', lyric:'' }, { chord:'', lyric:'对你的感' }, { chord:'G', lyric:'觉强烈,' }, { chord:'C', lyric:'却又不' }, { chord:'Am', lyric:'太了' }, { chord:'F', lyric:'解只凭' }, { chord:'G', lyric:'直觉' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'', lyric:'你像我在' }, { chord:'F', lyric:'' }, { chord:'', lyric:'被子' }, { chord:'G', lyric:'' }, { chord:'', lyric:'里的' }, { chord:'Am', lyric:'舒服,却又像' }, { chord:'F', lyric:'风琢' }, { chord:'G', lyric:'磨不' }, { chord:'Am', lyric:'住,' }],
        [{ chord:'', lyric:'像手纹像' }, { chord:'F', lyric:'散发' }, { chord:'G', lyric:'的香水' }, { chord:'Am', lyric:'味,像爱不释手' }, { chord:'F', lyric:'的' }, { chord:'G', lyric:'' }, { chord:'', lyric:'红色高跟' }, { chord:'Am', lyric:'鞋' }],
      ]},
      { title: '副歌（结尾）', lines: [
        [{ chord:'', lyric:'你像我在' }, { chord:'F', lyric:'' }, { chord:'', lyric:'被子' }, { chord:'G', lyric:'' }, { chord:'', lyric:'里的' }, { chord:'Am', lyric:'舒服,却又像' }, { chord:'F', lyric:'风琢' }, { chord:'G', lyric:'磨不' }, { chord:'Am', lyric:'住,' }],
        [{ chord:'', lyric:'像手纹像' }, { chord:'F', lyric:'散发' }, { chord:'G', lyric:'的香水' }, { chord:'Am', lyric:'味,像爱不释手的' }],
        [{ chord:'', lyric:'我爱你有种' }, { chord:'F', lyric:'左灯' }, { chord:'G', lyric:'右行的' }, { chord:'Am', lyric:'冲突,疯狂却' }, { chord:'F', lyric:'怕没' }, { chord:'G', lyric:'有退' }, { chord:'Am', lyric:'路' }],
        [{ chord:'', lyric:'你能否让' }, { chord:'F', lyric:'我停' }, { chord:'G', lyric:'止这种追' }, { chord:'Am', lyric:'逐 就这么双 ' }, { chord:'F', lyric:'最后唯一' }, { chord:'G', lyric:'的 红色高跟鞋' }],
      ]},
    ],
  },
  // ──────────────────────────────────────────
  {
    id: 'tearsinheaven',
    importVer: 2, locked: true,
    title: 'Tears in Heaven',
    artist: 'Eric Clapton',
    baseKey: 'A', playKey: 'A', capo: 0,
    chords: ['A','E/G#','F#m','A/E','D/F#','E','C#/E#','Em6','F#7','Bm7','C','G/B','Am','G'],
    sections: [
      { title: 'Chorus', lines: [
        [{ chord:'A', lyric:'Would you ' }, { chord:'E', lyric:'know my ' }, { chord:'F#m', lyric:'name ' }, { chord:'A/E', lyric:'' }],
        [{ chord:'D/F#', lyric:'if I ' }, { chord:'A/E', lyric:'saw you in ' }, { chord:'E', lyric:'heaven' }],
        [{ chord:'A', lyric:'Would it ' }, { chord:'E', lyric:'be the ' }, { chord:'F#m', lyric:'same ' }, { chord:'A/E', lyric:'' }],
        [{ chord:'D/F#', lyric:'if I ' }, { chord:'A/E', lyric:'saw you in ' }, { chord:'E', lyric:'heaven' }],
      ]},
      { title: 'Verse 1', lines: [
        [{ chord:'F#m', lyric:'I must be ' }, { chord:'C#/E#', lyric:'strong ' }],
        [{ chord:'Em6', lyric:'and carry ' }, { chord:'F#7', lyric:'on' }],
        [{ chord:'Bm7', lyric:"'Cause I know I don't " }, { chord:'Bm7/E', lyric:'belong' }],
        [{ chord:'A', lyric:'here in heaven' }],
      ]},
      { title: 'Chorus', lines: [
        [{ chord:'A', lyric:'Would you ' }, { chord:'E', lyric:'hold my ' }, { chord:'F#m', lyric:'hand ' }, { chord:'A/E', lyric:'' }],
        [{ chord:'D/F#', lyric:'if I ' }, { chord:'A/E', lyric:'saw you in ' }, { chord:'E', lyric:'heaven' }],
        [{ chord:'A', lyric:'Would you ' }, { chord:'E', lyric:'help me ' }, { chord:'F#m', lyric:'stand ' }, { chord:'A/E', lyric:'' }],
        [{ chord:'D/F#', lyric:'if I ' }, { chord:'A/E', lyric:'saw you in ' }, { chord:'E', lyric:'heaven' }],
      ]},
      { title: 'Verse 2', lines: [
        [{ chord:'F#m', lyric:"I'll find my " }, { chord:'C#/E#', lyric:'way ' }],
        [{ chord:'Em6', lyric:'through night and ' }, { chord:'F#7', lyric:'day' }],
        [{ chord:'Bm7', lyric:"'Cause I know I just can't " }, { chord:'Bm7/E', lyric:'stay' }],
        [{ chord:'A', lyric:'here in heaven' }],
      ]},
      { title: 'Bridge', lines: [
        [{ chord:'C', lyric:'Time can ' }, { chord:'G/B', lyric:'bring you ' }, { chord:'Am', lyric:'down' }],
        [{ chord:'D/F#', lyric:'time can ' }, { chord:'G', lyric:'bend your ' }, { chord:'D/F#', lyric:'' }, { chord:'Em', lyric:'' }, { chord:'D/F#', lyric:'' }, { chord:'G', lyric:'knees' }],
        [{ chord:'C', lyric:'Time can ' }, { chord:'G/B', lyric:'break your ' }, { chord:'Am', lyric:'heart' }],
        [{ chord:'D/F#', lyric:'have you ' }, { chord:'G', lyric:'begging please, ' }, { chord:'D/F#', lyric:'begging ' }, { chord:'E', lyric:'please' }],
      ]},
      { title: 'Verse 3', lines: [
        [{ chord:'F#m', lyric:'Beyond the ' }, { chord:'C#/E#', lyric:'door ' }],
        [{ chord:'Em6', lyric:"there's peace " }, { chord:'F#7', lyric:"I'm sure" }],
        [{ chord:'Bm7', lyric:"And I know there'll be " }, { chord:'Bm7/E', lyric:'no more' }],
        [{ chord:'A', lyric:'tears in heaven' }],
      ]},
      { title: 'Outro Chorus', lines: [
        [{ chord:'A', lyric:'Would you ' }, { chord:'E', lyric:'know my ' }, { chord:'F#m', lyric:'name ' }, { chord:'A/E', lyric:'' }],
        [{ chord:'D/F#', lyric:'if I ' }, { chord:'A/E', lyric:'saw you in ' }, { chord:'E', lyric:'heaven' }],
        [{ chord:'A', lyric:'Would you ' }, { chord:'E', lyric:'be the ' }, { chord:'F#m', lyric:'same ' }, { chord:'A/E', lyric:'' }],
        [{ chord:'D/F#', lyric:'if I ' }, { chord:'A', lyric:'saw you in ' }, { chord:'E', lyric:'heaven' }],
      ]},
    ],
  },
];
