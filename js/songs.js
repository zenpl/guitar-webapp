// ─── Song Library ────────────────────────────────────────────
// 每首歌：{ id, title, artist, baseKey, playKey, capo, chords[], sections[] }
// section: { title, lines[] }
// line: 数组，每个元素 { chord?: string, lyric: string }
//   chord 为空字符串表示无和弦标注，lyric 为对应文字

const SONGS = [
  // ──────────────────────────────────────────
  {
    id: 'nanshan',
    importVer: 2, locked: true,
    title: '南山南',
    artist: '马頔',
    baseKey: 'C', playKey: 'C', capo: 0,
    chords: ['F','G','Em','Am7','Dm7','Gsus4','Cadd9','G/B','G7','C','Cmaj7','Em7'],
    sections: [
      { title: '主歌A', lines: [
        [{ chord:'', lyric:'' }, { chord:'F', lyric:'你在南方的' }, { chord:'G', lyric:'艳' }, { chord:'', lyric:'阳里' }, { chord:'Em', lyric:'大' }, { chord:'', lyric:'雪纷' }, { chord:'Am7', lyric:'飞' }, { chord:'', lyric:'，' }],
        [{ chord:'Dm7', lyric:'' }, { chord:'', lyric:'我' }, { chord:'', lyric:'在北方的' }, { chord:'G', lyric:'寒' }, { chord:'', lyric:'夜里四季' }, { chord:'Cadd9', lyric:'如' }, { chord:'', lyric:'春，' }],
        [{ chord:'', lyric:'如果' }, { chord:'F', lyric:'天' }, { chord:'', lyric:'黑之前来得' }, { chord:'G', lyric:'及，' }, { chord:'', lyric:'我要' }, { chord:'Em', lyric:'忘' }, { chord:'', lyric:'了你的' }, { chord:'', lyric:'眼' }, { chord:'Am7', lyric:'睛' }, { chord:'', lyric:'，' }],
        [{ chord:'', lyric:'穷极' }, { chord:'Dm7', lyric:'一' }, { chord:'', lyric:'生做' }, { chord:'Gsus4', lyric:'不' }, { chord:'', lyric:'完' }, { chord:'G', lyric:'一场' }, { chord:'Cadd9', lyric:'梦，' }],
      ]},
      { title: '主歌B', lines: [
        [{ chord:'', lyric:'他' }, { chord:'Cadd9', lyric:'不' }, { chord:'', lyric:'再和谁' }, { chord:'G/B', lyric:'谈' }, { chord:'', lyric:'论相逢的' }, { chord:'Am7', lyric:'孤岛' }, { chord:'G7', lyric:'，' }],
        [{ chord:'', lyric:'因为' }, { chord:'F', lyric:'心' }, { chord:'', lyric:'里早已' }, { chord:'G', lyric:'荒' }, { chord:'', lyric:'芜人' }, { chord:'C', lyric:'烟' }, { chord:'', lyric:'，' }],
        [{ chord:'', lyric:'他的' }, { chord:'Cadd9', lyric:'心' }, { chord:'', lyric:'里再装' }, { chord:'G/B', lyric:'不' }, { chord:'', lyric:'' }, { chord:'', lyric:'下一' }, { chord:'Am7', lyric:'个' }, { chord:'', lyric:'家' }, { chord:'G7', lyric:'，' }],
        [{ chord:'', lyric:'做' }, { chord:'', lyric:'一' }, { chord:'F', lyric:'个只对' }, { chord:'G', lyric:'自' }, { chord:'', lyric:'己说谎的' }, { chord:'C', lyric:'哑巴，' }],
      ]},
      { title: '副歌A', lines: [
        [{ chord:'', lyric:'他说你' }, { chord:'F', lyric:'任' }, { chord:'', lyric:'何为人称道' }, { chord:'', lyric:'的' }, { chord:'G', lyric:'美' }, { chord:'', lyric:'丽，' }, { chord:'', lyric:'不及他' }, { chord:'Em', lyric:'第' }, { chord:'', lyric:'一次遇见' }, { chord:'Am7', lyric:'你，' }],
        [{ chord:'Dm7', lyric:'' }, { chord:'', lyric:'时' }, { chord:'', lyric:'光苟延残喘' }, { chord:'G', lyric:'无' }, { chord:'', lyric:'可' }, { chord:'Cadd9', lyric:'奈何' }, { chord:'', lyric:'，' }],
        [{ chord:'', lyric:'如果' }, { chord:'F', lyric:'所' }, { chord:'', lyric:'有土地连' }, { chord:'G', lyric:'在' }, { chord:'', lyric:'一起，走上一' }, { chord:'Em', lyric:'生只' }, { chord:'', lyric:'为' }, { chord:'', lyric:'拥抱' }, { chord:'Am7', lyric:'你' }, { chord:'', lyric:'，' }, { chord:'', lyric:'' }, { chord:'', lyric:'' }],
        [{ chord:'Dm7', lyric:'喝' }, { chord:'', lyric:'醉了他的' }, { chord:'Gsus4', lyric:'梦' }, { chord:'', lyric:'晚' }, { chord:'G', lyric:'安' }, { chord:'Cadd9', lyric:'，' }],
      ]},
      { title: '主歌C', lines: [
        [{ chord:'', lyric:'他' }, { chord:'Cadd9', lyric:'听' }, { chord:'', lyric:'见有人' }, { chord:'G/B', lyric:'唱着' }, { chord:'Am7', lyric:'古' }, { chord:'', lyric:'老的' }, { chord:'G7', lyric:'歌' }, { chord:'', lyric:'，' }],
        [{ chord:'', lyric:'唱着' }, { chord:'F', lyric:'今' }, { chord:'', lyric:'天还在' }, { chord:'G', lyric:'远' }, { chord:'', lyric:'方发生的，' }],
        [{ chord:'', lyric:'像' }, { chord:'Cadd9', lyric:'在' }, { chord:'', lyric:'她眼睛' }, { chord:'G/B', lyric:'里' }, { chord:'', lyric:'看到的' }, { chord:'Am7', lyric:'孤' }, { chord:'', lyric:'岛' }, { chord:'G7', lyric:'，' }],
        [{ chord:'', lyric:'没有' }, { chord:'F', lyric:'悲' }, { chord:'', lyric:'伤但' }, { chord:'', lyric:'也' }, { chord:'G', lyric:'没有' }, { chord:'C', lyric:'花朵，' }],
      ]},
      { title: '副歌B', lines: [
        [{ chord:'', lyric:'' }, { chord:'F', lyric:'你在南方的' }, { chord:'G', lyric:'艳' }, { chord:'', lyric:'阳里' }, { chord:'Em', lyric:'大' }, { chord:'', lyric:'雪纷' }, { chord:'Am7', lyric:'飞' }, { chord:'', lyric:'，' }],
        [{ chord:'', lyric:'我在' }, { chord:'Dm7', lyric:'北' }, { chord:'', lyric:'方的寒' }, { chord:'G7', lyric:'夜' }, { chord:'', lyric:'里四季如' }, { chord:'', lyric:'春，' }, { chord:'C', lyric:'' }],
        [{ chord:'', lyric:'如果' }, { chord:'F', lyric:'天' }, { chord:'', lyric:'黑之前' }, { chord:'G', lyric:'来' }, { chord:'', lyric:'得及，我要' }, { chord:'Em7', lyric:'忘' }, { chord:'', lyric:'了你的眼' }, { chord:'Am7', lyric:'睛，' }],
        [{ chord:'', lyric:'穷极' }, { chord:'Dm7', lyric:'一' }, { chord:'', lyric:'生做' }, { chord:'G7', lyric:'不' }, { chord:'', lyric:'完一场' }, { chord:'C', lyric:'梦，' }],
        [{ chord:'', lyric:'大梦' }, { chord:'Dm7', lyric:'初' }, { chord:'', lyric:'醒荒' }, { chord:'G', lyric:'唐' }, { chord:'', lyric:'了' }, { chord:'', lyric:'一' }, { chord:'C', lyric:'生' }, { chord:'', lyric:'，' }],
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
    importVer: 2, locked: false,
    title: 'Hotel California',
    artist: 'Eagles',
    baseKey: 'Bm', playKey: 'Am', capo: 2,
    chords: ['Am','E7','G','D','F','C','Dm'],
    sections: [
      { title: 'Verse I', lines: [
        [{ chord:'Am', lyric:'' }, { chord:'', lyric:'On a dark desert highway, cool wind in my' }, { chord:'E7', lyric:'hair' }],
        [{ chord:'G', lyric:'' }, { chord:'', lyric:'Warm smell of colitas rising up through the' }, { chord:'D', lyric:'air' }],
        [{ chord:'F', lyric:'' }, { chord:'', lyric:'Up ahead in the distance, I saw a shimmering' }, { chord:'C', lyric:'light' }],
        [{ chord:'Dm', lyric:'My' }, { chord:'', lyric:'head grew heavy and my sight grew dim,' }, { chord:'E7', lyric:'I' }, { chord:'', lyric:'had to stop for the night' }],
        [{ chord:'Am', lyric:'' }, { chord:'', lyric:'There she stood in the doorway; I heard the mission' }, { chord:'E7', lyric:'bell' }],
        [{ chord:'G', lyric:'' }, { chord:'', lyric:'And I was thinking to myself, this could be' }, { chord:'D', lyric:'heaven' }, { chord:'', lyric:'or this could be hell' }],
        [{ chord:'F', lyric:'' }, { chord:'', lyric:'Then she lit up a candle, and she showed me the' }, { chord:'C', lyric:'way' }],
        [{ chord:'Dm', lyric:'There' }, { chord:'', lyric:'were voices down the corridor,' }, { chord:'E7', lyric:'I' }, { chord:'', lyric:'thought I heard them say...' }],
      ]},
      { title: 'Chorus', lines: [
        [{ chord:'F', lyric:'' }, { chord:'', lyric:'Welcome to the Hotel California.' }, { chord:'C', lyric:'' }],
        [{ chord:'', lyric:'Such a lovely place, ' }, { chord:'E7', lyric:'such' }, { chord:'', lyric:'a lovely place, such a lovely' }, { chord:'Am', lyric:'face' }],
        [{ chord:'F', lyric:'Plenty' }, { chord:'', lyric:'of room at the Hotel California.' }, { chord:'C', lyric:'' }],
        [{ chord:'', lyric:'Any time of year, ' }, { chord:'Dm', lyric:'any' }, { chord:'', lyric:'time of year, you can find it' }, { chord:'E7', lyric:'here' }],
      ]},
      { title: 'Verse II', lines: [
        [{ chord:'Am', lyric:'' }, { chord:'', lyric:'Her mind is Tiffany-twisted, she got the Mercedes' }, { chord:'E7', lyric:'bends' }],
        [{ chord:'G', lyric:'' }, { chord:'', lyric:'She got a lot of pretty pretty boys she calls' }, { chord:'D', lyric:'friends' }],
        [{ chord:'F', lyric:'' }, { chord:'', lyric:'How they danced in the courtyard, sweet summer' }, { chord:'C', lyric:'sweat' }],
        [{ chord:'Dm', lyric:'Some' }, { chord:'', lyric:'dance to remember, ' }, { chord:'E7', lyric:'some' }, { chord:'', lyric:'dance to forget' }],
        [{ chord:'Am', lyric:'' }, { chord:'', lyric:"So I called up the captain; please bring me my" }, { chord:'E7', lyric:'wine' }],
        [{ chord:'G', lyric:'' }, { chord:'', lyric:"We haven't had that spirit here since" }, { chord:'D', lyric:'1969' }],
        [{ chord:'F', lyric:'' }, { chord:'', lyric:'And still those voices are calling from far' }, { chord:'C', lyric:'away' }],
        [{ chord:'Dm', lyric:'Wake' }, { chord:'', lyric:'you up in the middle of the night,' }, { chord:'E7', lyric:'just' }, { chord:'', lyric:'to hear them say...' }],
      ]},
      { title: 'Chorus', lines: [
        [{ chord:'F', lyric:'' }, { chord:'', lyric:'Welcome to the Hotel California.' }, { chord:'C', lyric:'' }],
        [{ chord:'', lyric:"Such a lovely place, " }, { chord:'E7', lyric:'such' }, { chord:'', lyric:"a lovely place, such a lovely" }, { chord:'Am', lyric:'face' }],
        [{ chord:'F', lyric:"They're" }, { chord:'', lyric:"livin' it up at the Hotel California." }, { chord:'C', lyric:'' }],
        [{ chord:'', lyric:'What a nice surprise, ' }, { chord:'Dm', lyric:'what' }, { chord:'', lyric:'a nice surprise, bring your' }, { chord:'E7', lyric:'alibis' }],
      ]},
      { title: 'Verse III', lines: [
        [{ chord:'Am', lyric:'' }, { chord:'', lyric:'Mirrors on the ceiling, the pink champagne on' }, { chord:'E7', lyric:'ice' }],
        [{ chord:'G', lyric:'' }, { chord:'', lyric:'We are all just prisoners here, of our own' }, { chord:'D', lyric:'device' }],
        [{ chord:'F', lyric:'' }, { chord:'', lyric:"And in the master's chambers, they gathered for the" }, { chord:'C', lyric:'feast' }],
        [{ chord:'Dm', lyric:'They' }, { chord:'', lyric:"stab it with their steely knives but they" }, { chord:'E7', lyric:"just" }, { chord:'', lyric:"can't kill the beast" }],
        [{ chord:'Am', lyric:'' }, { chord:'', lyric:'Last thing I remember, I was running for the' }, { chord:'E7', lyric:'door' }],
        [{ chord:'G', lyric:'' }, { chord:'', lyric:'I had to find the passage back to the place I was' }, { chord:'D', lyric:'before' }],
        [{ chord:'F', lyric:'' }, { chord:'', lyric:'"Relax" said the night man; we are programmed to' }, { chord:'C', lyric:'receive' }],
        [{ chord:'Dm', lyric:'You' }, { chord:'', lyric:'can check out any time you like,' }, { chord:'E7', lyric:'but' }, { chord:'', lyric:'you can never leave...' }],
      ]},
    ],
  },
  // ──────────────────────────────────────────
  {
    id: 'chengdu',
    importVer: 2, locked: true,
    title: '成都',
    artist: '赵雷',
    baseKey: 'D', playKey: 'C', capo: 2,
    chords: ['C','Em','F','G','Am','Dm','C7'],
    sections: [
      { title: '主歌', lines: [
        [{ chord:'', lyric:'让' }, { chord:'C', lyric:'我' }, { chord:'', lyric:'掉下' }, { chord:'Em', lyric:'眼' }, { chord:'', lyric:'泪的 不' }, { chord:'F', lyric:'止' }, { chord:'', lyric:'昨夜的' }, { chord:'G', lyric:'酒' }],
        [{ chord:'', lyric:'让' }, { chord:'C', lyric:'我' }, { chord:'', lyric:'依依' }, { chord:'Em', lyric:'不' }, { chord:'', lyric:'舍的 不' }, { chord:'F', lyric:'止' }, { chord:'', lyric:'你的温' }, { chord:'G', lyric:'柔' }],
        [{ chord:'', lyric:'余' }, { chord:'Em', lyric:'路' }, { chord:'', lyric:'还要' }, { chord:'Am', lyric:'走' }, { chord:'', lyric:'多久 你' }, { chord:'F', lyric:'攥' }, { chord:'', lyric:'着我的' }, { chord:'G', lyric:'手' }],
        [{ chord:'', lyric:'让' }, { chord:'Em', lyric:'我' }, { chord:'', lyric:'感到' }, { chord:'F', lyric:'为' }, { chord:'', lyric:'难的 是' }, { chord:'G', lyric:'挣' }, { chord:'', lyric:'扎的自' }, { chord:'C', lyric:'由' }],
        [{ chord:'', lyric:'分' }, { chord:'C', lyric:'别' }, { chord:'', lyric:'总是' }, { chord:'Em', lyric:'在' }, { chord:'', lyric:'九月 回' }, { chord:'F', lyric:'忆' }, { chord:'', lyric:'是思念的' }, { chord:'G', lyric:'愁' }],
        [{ chord:'', lyric:'深' }, { chord:'C', lyric:'秋' }, { chord:'', lyric:'嫩绿' }, { chord:'Em', lyric:'的' }, { chord:'', lyric:'垂柳 亲' }, { chord:'F', lyric:'吻' }, { chord:'', lyric:'着我额' }, { chord:'G', lyric:'头' }],
        [{ chord:'', lyric:'在' }, { chord:'Em', lyric:'那' }, { chord:'', lyric:'座阴雨的' }, { chord:'Am', lyric:'小' }, { chord:'', lyric:'城里 我' }, { chord:'F', lyric:'从' }, { chord:'', lyric:'未' }, { chord:'G', lyric:'忘' }, { chord:'', lyric:'记' }, { chord:'C', lyric:'你' }],
        [{ chord:'', lyric:'成' }, { chord:'Em', lyric:'都' }, { chord:'', lyric:'带不' }, { chord:'F', lyric:'走' }, { chord:'', lyric:'的 ' }, { chord:'G', lyric:'只' }, { chord:'', lyric:'有' }, { chord:'C', lyric:'你 ' }, { chord:'C7', lyric:'' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'', lyric:'和' }, { chord:'C', lyric:'我' }, { chord:'', lyric:'在成都的' }, { chord:'Am', lyric:'街' }, { chord:'', lyric:'头走一' }, { chord:'F', lyric:'走' }, { chord:'', lyric:'喔~' }, { chord:'C', lyric:'喔' }],
        [{ chord:'', lyric:'直' }, { chord:'C', lyric:'到' }, { chord:'', lyric:'所有的' }, { chord:'Am', lyric:'灯' }, { chord:'', lyric:'都熄灭' }, { chord:'F', lyric:'了' }, { chord:'', lyric:'也不停' }, { chord:'C', lyric:'留' }],
        [{ chord:'', lyric:'你会' }, { chord:'F', lyric:'挽' }, { chord:'', lyric:'着我的衣' }, { chord:'C', lyric:'袖' }, { chord:'', lyric:'我会' }, { chord:'F', lyric:'把' }, { chord:'', lyric:'手揣进裤' }, { chord:'C', lyric:'兜' }],
        [{ chord:'', lyric:'走' }, { chord:'Dm', lyric:'到' }, { chord:'', lyric:'玉林路' }, { chord:'Dm', lyric:'的' }, { chord:'', lyric:'尽头 坐' }, { chord:'Dm', lyric:'在' }, { chord:'', lyric:'小酒馆的门' }, { chord:'G', lyric:'口' }],
      ]},
      { title: '主歌', lines: [
        [{ chord:'', lyric:'分' }, { chord:'C', lyric:'别' }, { chord:'', lyric:'总是' }, { chord:'Em', lyric:'在' }, { chord:'', lyric:'九月 回' }, { chord:'F', lyric:'忆' }, { chord:'', lyric:'是思念的' }, { chord:'G', lyric:'愁' }],
        [{ chord:'', lyric:'深' }, { chord:'C', lyric:'秋' }, { chord:'', lyric:'嫩绿' }, { chord:'Em', lyric:'的' }, { chord:'', lyric:'垂柳 亲' }, { chord:'F', lyric:'吻' }, { chord:'', lyric:'着我额' }, { chord:'G', lyric:'头' }],
        [{ chord:'', lyric:'在' }, { chord:'Em', lyric:'那' }, { chord:'', lyric:'座阴雨的' }, { chord:'Am', lyric:'小' }, { chord:'', lyric:'城里 我' }, { chord:'F', lyric:'从' }, { chord:'', lyric:'未' }, { chord:'G', lyric:'忘' }, { chord:'', lyric:'记' }, { chord:'C', lyric:'你' }],
        [{ chord:'', lyric:'成' }, { chord:'Em', lyric:'都' }, { chord:'', lyric:'带不' }, { chord:'F', lyric:'走' }, { chord:'', lyric:'的 ' }, { chord:'G', lyric:'只' }, { chord:'', lyric:'有' }, { chord:'C', lyric:'你 ' }, { chord:'C7', lyric:'' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'', lyric:'和' }, { chord:'C', lyric:'我' }, { chord:'', lyric:'在成都的' }, { chord:'Am', lyric:'街' }, { chord:'', lyric:'头走一' }, { chord:'F', lyric:'走' }, { chord:'', lyric:'喔~' }, { chord:'C', lyric:'喔' }],
        [{ chord:'', lyric:'直' }, { chord:'C', lyric:'到' }, { chord:'', lyric:'所有的' }, { chord:'Am', lyric:'灯' }, { chord:'', lyric:'都熄灭' }, { chord:'F', lyric:'了' }, { chord:'', lyric:'也不停' }, { chord:'C', lyric:'留' }],
        [{ chord:'', lyric:'你会' }, { chord:'F', lyric:'挽' }, { chord:'', lyric:'着我的衣' }, { chord:'C', lyric:'袖' }, { chord:'', lyric:'我会' }, { chord:'F', lyric:'把' }, { chord:'', lyric:'手揣进裤' }, { chord:'C', lyric:'兜' }],
        [{ chord:'', lyric:'走' }, { chord:'Dm', lyric:'到' }, { chord:'', lyric:'玉林路' }, { chord:'Dm', lyric:'的' }, { chord:'', lyric:'尽头 坐' }, { chord:'Dm', lyric:'在' }, { chord:'', lyric:'小酒馆的门' }, { chord:'G', lyric:'口' }],
        [{ chord:'', lyric:'和' }, { chord:'C', lyric:'我' }, { chord:'', lyric:'在成都的' }, { chord:'Am', lyric:'街' }, { chord:'', lyric:'头走一' }, { chord:'F', lyric:'走' }, { chord:'', lyric:'喔~' }, { chord:'C', lyric:'喔' }],
        [{ chord:'', lyric:'直' }, { chord:'C', lyric:'到' }, { chord:'', lyric:'所有的' }, { chord:'Am', lyric:'灯' }, { chord:'', lyric:'都熄灭' }, { chord:'F', lyric:'了' }, { chord:'', lyric:'也不停' }, { chord:'C', lyric:'留' }],
        [{ chord:'', lyric:'你会' }, { chord:'F', lyric:'挽' }, { chord:'', lyric:'着我的衣' }, { chord:'C', lyric:'袖' }, { chord:'', lyric:'我会' }, { chord:'F', lyric:'把' }, { chord:'', lyric:'手揣进裤' }, { chord:'C', lyric:'兜' }],
        [{ chord:'', lyric:'走' }, { chord:'Dm', lyric:'到' }, { chord:'', lyric:'玉林路' }, { chord:'Dm', lyric:'的' }, { chord:'', lyric:'尽头 坐' }, { chord:'Dm', lyric:'在' }, { chord:'', lyric:'小酒馆的门' }, { chord:'G', lyric:'口' }],
      ]},
    ],
  },
  // ──────────────────────────────────────────
  {
    id: 'qinaioxiaohai',
    importVer: 2, locked: false,
    title: '亲爱的小孩',
    artist: '苏芮',
    baseKey: 'Ab', playKey: 'G', capo: 1,
    chords: ['G','Em','Bm','A/C#','D','Am7','D7','Cmaj7','B7','E7'],
    sections: [
      { title: '主歌', lines: [
        [{ chord:'G', lyric:'小' }, { chord:'', lyric:'小的小孩' }, { chord:'Em', lyric:'今' }, { chord:'', lyric:'天有没有哭' }, { chord:'G', lyric:'' }, { chord:'Bm', lyric:'' }],
        [{ chord:'', lyric:'是否' }, { chord:'Em', lyric:'朋' }, { chord:'', lyric:'友都已经' }, { chord:'A/C#', lyric:'离' }, { chord:'', lyric:'去留下了' }, { chord:'D', lyric:'带' }, { chord:'', lyric:'不走的孤' }, { chord:'G', lyric:'独' }],
        [{ chord:'G', lyric:'漂' }, { chord:'', lyric:'亮的小孩' }, { chord:'Em', lyric:'今' }, { chord:'', lyric:'天有没有哭' }, { chord:'G', lyric:'' }, { chord:'Bm', lyric:'' }],
        [{ chord:'', lyric:'是否' }, { chord:'Em', lyric:'弄' }, { chord:'', lyric:'脏了美' }, { chord:'A/C#', lyric:'丽' }, { chord:'', lyric:'的衣服却' }, { chord:'D', lyric:'找' }, { chord:'', lyric:'不到别人' }, { chord:'G', lyric:'倾' }, { chord:'', lyric:'诉' }],
        [{ chord:'G', lyric:'聪' }, { chord:'', lyric:'明的小孩' }, { chord:'Em', lyric:'今' }, { chord:'', lyric:'天有没有哭' }, { chord:'G', lyric:'' }, { chord:'Bm', lyric:'' }],
        [{ chord:'', lyric:'是否' }, { chord:'Em', lyric:'遗' }, { chord:'', lyric:'失了心爱的' }, { chord:'A/C#', lyric:'礼' }, { chord:'', lyric:'物在' }, { chord:'D', lyric:'风' }, { chord:'', lyric:'中寻找从' }, { chord:'Bm', lyric:'清' }, { chord:'', lyric:'晨到日' }, { chord:'Em', lyric:'暮' }, { chord:'E7', lyric:'' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'Am7', lyric:'我' }, { chord:'', lyric:'亲爱的小孩' }, { chord:'D7', lyric:'为' }, { chord:'', lyric:'什么你不让我看清楚' }, { chord:'G', lyric:'' }, { chord:'Cmaj7', lyric:'' }],
        [{ chord:'Am7', lyric:'是' }, { chord:'', lyric:'否让风吹熄了蜡烛' }, { chord:'B7', lyric:'在' }, { chord:'', lyric:'黑暗中独自漫步' }, { chord:'Em', lyric:'' }, { chord:'E7', lyric:'' }],
        [{ chord:'Am7', lyric:'亲' }, { chord:'', lyric:'爱的小孩快快擦干你的泪珠' }, { chord:'D7', lyric:'' }, { chord:'G', lyric:'我' }, { chord:'', lyric:'愿意陪伴你' }, { chord:'Cmaj7', lyric:'' }],
        [{ chord:'Am', lyric:'走' }, { chord:'', lyric:'上回家的路' }, { chord:'B7', lyric:'' }],
      ]},
    ],
  },
  // ──────────────────────────────────────────
  {
    id: 'lianfengchen',
    importVer: 1, locked: true,
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
    importVer: 2, locked: true,
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
    importVer: 2, locked: false,
    title: '秋风',
    artist: '四熹丸子',
    baseKey: 'C#', playKey: 'C', capo: 1,
    chords: ['C','G','Am7','C/G','F','G/B'],
    sections: [
      { title: '主歌', lines: [
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'我要怎么' }, { chord:'G', lyric:'说' }, { chord:'', lyric:'你才能' }, { chord:'Am7', lyric:'在' }, { chord:'', lyric:'乎' }, { chord:'C/G', lyric:'我' }],
        [{ chord:'F', lyric:'这' }, { chord:'', lyric:'秋天的风也' }, { chord:'G', lyric:'把' }, { chord:'', lyric:'你带远' }, { chord:'C', lyric:'了' }],
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'指针一点' }, { chord:'G', lyric:'点' }, { chord:'', lyric:'的过我们' }, { chord:'Am7', lyric:'没' }, { chord:'', lyric:'改变什' }, { chord:'C/G', lyric:'么' }],
        [{ chord:'F', lyric:'这' }, { chord:'', lyric:'份寂寞也希望你真的' }, { chord:'G', lyric:'懂' }, { chord:'', lyric:'我' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'C', lyric:'要' }, { chord:'G', lyric:'怎' }, { chord:'', lyric:'么' }, { chord:'Am7', lyric:'说' }, { chord:'C/G', lyric:'你' }, { chord:'', lyric:'才能那样' }, { chord:'F', lyric:'爱' }, { chord:'', lyric:'我给' }, { chord:'C', lyric:'我' }, { chord:'', lyric:'快乐烦忧' }, { chord:'F', lyric:'全' }, { chord:'', lyric:'部离开' }, { chord:'G', lyric:'我' }],
        [{ chord:'C', lyric:'你' }, { chord:'G', lyric:'对' }, { chord:'', lyric:'我 ' }, { chord:'Am7', lyric:'说' }, { chord:'C/G', lyric:'爱' }, { chord:'', lyric:'到底是什' }, { chord:'F', lyric:'么' }],
        [{ chord:'C', lyric:'是' }, { chord:'', lyric:'不是一阵秋风' }, { chord:'F', lyric:'吹' }, { chord:'', lyric:'进你的' }, { chord:'G', lyric:'心' }, { chord:'', lyric:'窝' }, { chord:'G/B', lyric:'' }],
      ]},
      { title: '桥段', lines: [
        [{ chord:'C', lyric:'我' }, { chord:'G', lyric:'不' }, { chord:'', lyric:'难' }, { chord:'Am7', lyric:'过' }, { chord:'C/G', lyric:'我' }, { chord:'', lyric:'的世界只有' }, { chord:'F', lyric:'你' }, { chord:'', lyric:'一个如果' }, { chord:'C', lyric:'你' }, { chord:'', lyric:'离开我也要' }, { chord:'F', lyric:'好' }, { chord:'', lyric:'好' }, { chord:'G', lyric:'过' }],
        [{ chord:'C', lyric:'我' }, { chord:'G', lyric:'不' }, { chord:'', lyric:'难' }, { chord:'Am7', lyric:'过' }, { chord:'C/G', lyric:'我' }, { chord:'', lyric:'的世界只有' }, { chord:'F', lyric:'你' }, { chord:'', lyric:'一个如果' }, { chord:'C', lyric:'你' }, { chord:'', lyric:'离开我也要' }, { chord:'F', lyric:'好' }, { chord:'', lyric:'好' }, { chord:'G', lyric:'过' }],
      ]},
      { title: '结尾', lines: [
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'我要怎么' }, { chord:'G', lyric:'说' }, { chord:'', lyric:'你才能' }, { chord:'Am7', lyric:'在' }, { chord:'', lyric:'乎' }, { chord:'C/G', lyric:'我' }],
        [{ chord:'F', lyric:'这' }, { chord:'', lyric:'秋天的风也' }, { chord:'G', lyric:'把' }, { chord:'', lyric:'你带远' }, { chord:'C', lyric:'了' }],
      ]},
    ],
  },
  // ──────────────────────────────────────────
  {
    id: 'yuebanyequ',
    importVer: 1, locked: true,
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
  // ──────────────────────────────────────────
  {
    id: 'dongxiaojie',
    importVer: 2, locked: true,
    title: '董小姐',
    artist: '宋冬野',
    baseKey: 'E', playKey: 'C', capo: 4,
    chords: ['C','F','G7','Am','Em','Dm','Csus4'],
    sections: [
      { title: '主歌A', lines: [
        [{ chord:'C', lyric:'董小' }, { chord:'F', lyric:'姐' }, { chord:'', lyric:'你从没' }, { chord:'G7', lyric:'忘' }, { chord:'', lyric:'记你的' }, { chord:'Am', lyric:'微' }, { chord:'', lyric:'笑就算你' }, { chord:'F', lyric:'和' }, { chord:'', lyric:'我一样' }, { chord:'G7', lyric:'渴' }, { chord:'', lyric:'望着' }, { chord:'Csus4', lyric:'衰' }, { chord:'', lyric:'老' }, { chord:'C', lyric:'' }],
        [{ chord:'C', lyric:'董小' }, { chord:'F', lyric:'姐' }, { chord:'', lyric:'你嘴角' }, { chord:'C', lyric:'向' }, { chord:'', lyric:'下的' }, { chord:'G7', lyric:'时' }, { chord:'', lyric:'候' }, { chord:'Am', lyric:'很' }, { chord:'', lyric:'美就像' }, { chord:'F', lyric:'安' }, { chord:'', lyric:'和桥下' }, { chord:'G7', lyric:'清' }, { chord:'', lyric:'澈的水' }, { chord:'C', lyric:'' }],
        [{ chord:'C', lyric:'董小' }, { chord:'F', lyric:'姐' }, { chord:'', lyric:'我也' }, { chord:'Em', lyric:'是' }, { chord:'', lyric:'个' }, { chord:'G7', lyric:'复' }, { chord:'', lyric:'杂的' }, { chord:'Am', lyric:'动' }, { chord:'', lyric:'物嘴上' }, { chord:'F', lyric:'一' }, { chord:'', lyric:'句' }, { chord:'C', lyric:'带' }, { chord:'', lyric:'过' }, { chord:'F', lyric:'心' }, { chord:'', lyric:'里却' }, { chord:'G7', lyric:'一' }, { chord:'', lyric:'直重' }, { chord:'Csus4', lyric:'复' }, { chord:'C', lyric:'' }],
        [{ chord:'C', lyric:'董小' }, { chord:'F', lyric:'姐' }, { chord:'', lyric:'鼓楼的' }, { chord:'G7', lyric:'夜' }, { chord:'', lyric:'晚时间' }, { chord:'Am', lyric:'匆' }, { chord:'', lyric:'匆陌生的' }, { chord:'F', lyric:'人' }, { chord:'C', lyric:'' }, { chord:'', lyric:'请给我' }, { chord:'G7', lyric:'一' }, { chord:'', lyric:'支' }, { chord:'F', lyric:'兰' }, { chord:'Csus4', lyric:'州' }, { chord:'C', lyric:'' }],
      ]},
      { title: '副歌A', lines: [
        [{ chord:'F', lyric:'' }, { chord:'', lyric:'所以' }, { chord:'G7', lyric:'那' }, { chord:'', lyric:'些' }, { chord:'Dm', lyric:'可' }, { chord:'', lyric:'能都不是' }, { chord:'Em', lyric:'真' }, { chord:'', lyric:'的董小' }, { chord:'Am', lyric:'姐' }],
        [{ chord:'', lyric:'你' }, { chord:'F', lyric:'才' }, { chord:'', lyric:'不是' }, { chord:'Dm', lyric:'一' }, { chord:'', lyric:'个没有故事的' }, { chord:'Csus4', lyric:'女' }, { chord:'', lyric:'同学' }, { chord:'C', lyric:'' }],
        [{ chord:'F', lyric:'爱' }, { chord:'', lyric:'上' }, { chord:'C', lyric:'一' }, { chord:'', lyric:'匹' }, { chord:'Dm', lyric:'野' }, { chord:'', lyric:'马' }, { chord:'G7', lyric:'' }, { chord:'', lyric:'可我的家里没有草' }, { chord:'Am', lyric:'原' }],
        [{ chord:'', lyric:'这让我' }, { chord:'C', lyric:'感' }, { chord:'', lyric:'到' }, { chord:'F', lyric:'绝' }, { chord:'', lyric:'望' }, { chord:'Dm', lyric:'董' }, { chord:'', lyric:'小' }, { chord:'Csus4', lyric:'姐' }, { chord:'C', lyric:'' }],
      ]},
      { title: '主歌B', lines: [
        [{ chord:'C', lyric:'董小' }, { chord:'F', lyric:'姐' }, { chord:'', lyric:'你熄灭' }, { chord:'Em', lyric:'了' }, { chord:'', lyric:'烟' }, { chord:'G7', lyric:'说' }, { chord:'', lyric:'起' }, { chord:'Am', lyric:'从' }, { chord:'', lyric:'前你说' }, { chord:'F', lyric:'前' }, { chord:'', lyric:'半生就这样吧' }, { chord:'Em', lyric:'还' }, { chord:'', lyric:'有明' }, { chord:'Csus4', lyric:'天' }, { chord:'C', lyric:'' }],
        [{ chord:'C', lyric:'董小' }, { chord:'F', lyric:'姐' }, { chord:'', lyric:'你可' }, { chord:'Em', lyric:'知' }, { chord:'', lyric:'道我' }, { chord:'G7', lyric:'说' }, { chord:'', lyric:'够了' }, { chord:'Am', lyric:'再' }, { chord:'', lyric:'见在' }, { chord:'F', lyric:'五' }, { chord:'', lyric:'月的早晨' }, { chord:'G7', lyric:'终' }, { chord:'', lyric:'于丢失了' }, { chord:'Csus4', lyric:'睡' }, { chord:'', lyric:'眠' }, { chord:'C', lyric:'' }],
      ]},
      { title: '副歌B', lines: [
        [{ chord:'F', lyric:'' }, { chord:'', lyric:'所以' }, { chord:'C', lyric:'那' }, { chord:'', lyric:'些' }, { chord:'Dm', lyric:'可' }, { chord:'', lyric:'能都' }, { chord:'Em', lyric:'会' }, { chord:'', lyric:'是真的董小' }, { chord:'Am', lyric:'姐' }],
        [{ chord:'', lyric:'谁会' }, { chord:'F', lyric:'不' }, { chord:'', lyric:'厌' }, { chord:'C', lyric:'其' }, { chord:'', lyric:'烦地' }, { chord:'F', lyric:'安' }, { chord:'', lyric:'慰那' }, { chord:'G7', lyric:'无' }, { chord:'', lyric:'知的' }, { chord:'Csus4', lyric:'少' }, { chord:'', lyric:'年' }, { chord:'C', lyric:'' }],
        [{ chord:'F', lyric:'我' }, { chord:'', lyric:'想' }, { chord:'C', lyric:'和' }, { chord:'', lyric:'你' }, { chord:'Dm', lyric:'一' }, { chord:'', lyric:'样' }, { chord:'F', lyric:'' }, { chord:'', lyric:'不顾' }, { chord:'G7', lyric:'那' }, { chord:'', lyric:'些所' }, { chord:'Am', lyric:'以' }],
        [{ chord:'F', lyric:'跟' }, { chord:'', lyric:'我走吧' }, { chord:'C', lyric:'' }, { chord:'Dm', lyric:'' }, { chord:'G7', lyric:'' }, { chord:'', lyric:'董小' }, { chord:'C', lyric:'姐' }],
        [{ chord:'', lyric:'躁起' }, { chord:'F', lyric:'来' }, { chord:'', lyric:'吧' }, { chord:'G7', lyric:'董' }, { chord:'', lyric:'小' }, { chord:'C', lyric:'姐' }],
      ]},
    ],
  },
  // ──────────────────────────────────────────
  {
    id: 'banma',
    importVer: 2, locked: false,
    title: '斑马斑马',
    artist: '宋冬野',
    baseKey: 'G', playKey: 'C', capo: 7,
    chords: ['Fmaj7','G','Em7','Am','Cadd9'],
    sections: [
      { title: '主歌A', lines: [
        [{ chord:'Fmaj7', lyric:'斑' }, { chord:'', lyric:'马斑' }, { chord:'G', lyric:'马' }, { chord:'', lyric:'你' }, { chord:'Em7', lyric:'不' }, { chord:'', lyric:'要睡着啦' }, { chord:'Am', lyric:'' }],
        [{ chord:'', lyric:'再' }, { chord:'Fmaj7', lyric:'给' }, { chord:'', lyric:'我看看你' }, { chord:'G', lyric:'' }, { chord:'', lyric:'受伤的' }, { chord:'Cadd9', lyric:'尾' }, { chord:'', lyric:'巴' }],
        [{ chord:'', lyric:'我' }, { chord:'Fmaj7', lyric:'不' }, { chord:'', lyric:'想去触碰' }, { chord:'G', lyric:'' }, { chord:'', lyric:'你' }, { chord:'Em7', lyric:'伤' }, { chord:'', lyric:'口的' }, { chord:'Am', lyric:'疤' }],
        [{ chord:'', lyric:'我' }, { chord:'Fmaj7', lyric:'只' }, { chord:'', lyric:'想掀起你' }, { chord:'G', lyric:'' }, { chord:'', lyric:'的头' }, { chord:'Am', lyric:'发' }],
      ]},
      { title: '主歌B', lines: [
        [{ chord:'Fmaj7', lyric:'斑' }, { chord:'', lyric:'马斑' }, { chord:'G', lyric:'马' }, { chord:'', lyric:'你' }, { chord:'Em7', lyric:'回' }, { chord:'', lyric:'到了你的家' }, { chord:'Am', lyric:'' }],
        [{ chord:'', lyric:'可我' }, { chord:'Fmaj7', lyric:'浪' }, { chord:'', lyric:'费着我' }, { chord:'G', lyric:'寒' }, { chord:'', lyric:'冷的年华' }, { chord:'Cadd9', lyric:'' }],
        [{ chord:'', lyric:'你的' }, { chord:'Fmaj7', lyric:'城' }, { chord:'', lyric:'市没有一' }, { chord:'G', lyric:'' }, { chord:'', lyric:'扇门' }, { chord:'Em7', lyric:'为' }, { chord:'', lyric:'我打开' }, { chord:'Am', lyric:'啊' }],
        [{ chord:'', lyric:'我' }, { chord:'Fmaj7', lyric:'终' }, { chord:'', lyric:'究还要回' }, { chord:'G', lyric:'' }, { chord:'', lyric:'到路' }, { chord:'Am', lyric:'上' }],
      ]},
      { title: '主歌C', lines: [
        [{ chord:'Fmaj7', lyric:'斑' }, { chord:'', lyric:'马斑' }, { chord:'G', lyric:'马' }, { chord:'', lyric:'你来自' }, { chord:'Em7', lyric:'南' }, { chord:'', lyric:'方的红色' }, { chord:'Am', lyric:'啊' }],
        [{ chord:'', lyric:'是否' }, { chord:'Fmaj7', lyric:'也' }, { chord:'', lyric:'是个动' }, { chord:'G', lyric:'人' }, { chord:'', lyric:'的故事' }, { chord:'Cadd9', lyric:'啊' }],
        [{ chord:'', lyric:'你' }, { chord:'Fmaj7', lyric:'隔' }, { chord:'', lyric:'壁的' }, { chord:'G', lyric:'戏' }, { chord:'', lyric:'子如果' }, { chord:'Em7', lyric:'不' }, { chord:'', lyric:'能留' }, { chord:'Am', lyric:'下' }],
        [{ chord:'', lyric:'谁' }, { chord:'Fmaj7', lyric:'会' }, { chord:'', lyric:'和你' }, { chord:'G', lyric:'睡' }, { chord:'', lyric:'到天' }, { chord:'Am', lyric:'亮' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'Fmaj7', lyric:'斑' }, { chord:'', lyric:'马斑' }, { chord:'G', lyric:'马' }, { chord:'', lyric:'你还' }, { chord:'Em7', lyric:'记' }, { chord:'', lyric:'得我' }, { chord:'Am', lyric:'吗' }, { chord:'', lyric:'？我是' }, { chord:'Fmaj7', lyric:'只' }, { chord:'', lyric:'会歌唱' }, { chord:'G', lyric:'的' }, { chord:'', lyric:'傻' }, { chord:'Cadd9', lyric:'瓜' }],
        [{ chord:'Fmaj7', lyric:'斑' }, { chord:'', lyric:'马斑' }, { chord:'G', lyric:'马' }, { chord:'', lyric:'你' }, { chord:'Em7', lyric:'睡' }, { chord:'', lyric:'吧睡' }, { chord:'Am', lyric:'吧' }, { chord:'', lyric:'我会' }, { chord:'Fmaj7', lyric:'背' }, { chord:'', lyric:'上吉他' }, { chord:'G', lyric:'离' }, { chord:'', lyric:'开北' }, { chord:'Cadd9', lyric:'方' }],
        [{ chord:'Fmaj7', lyric:'斑' }, { chord:'', lyric:'马斑' }, { chord:'G', lyric:'马' }, { chord:'', lyric:'你还' }, { chord:'Em7', lyric:'记' }, { chord:'', lyric:'得我' }, { chord:'Am', lyric:'吗' }, { chord:'', lyric:'？我是' }, { chord:'Fmaj7', lyric:'强' }, { chord:'', lyric:'说着忧' }, { chord:'G', lyric:'愁' }, { chord:'', lyric:'的孩子' }, { chord:'Cadd9', lyric:'啊' }],
        [{ chord:'Fmaj7', lyric:'斑' }, { chord:'', lyric:'马斑' }, { chord:'G', lyric:'马' }, { chord:'', lyric:'你' }, { chord:'Em7', lyric:'睡' }, { chord:'', lyric:'吧睡' }, { chord:'Am', lyric:'吧' }, { chord:'', lyric:'我把' }, { chord:'Fmaj7', lyric:'你' }, { chord:'', lyric:'的青草' }, { chord:'G', lyric:'带' }, { chord:'', lyric:'回故' }, { chord:'Cadd9', lyric:'乡' }],
        [{ chord:'Fmaj7', lyric:'斑' }, { chord:'', lyric:'马斑' }, { chord:'G', lyric:'马' }, { chord:'', lyric:'你' }, { chord:'Em7', lyric:'不' }, { chord:'', lyric:'要睡着啦' }, { chord:'Am', lyric:'' }, { chord:'', lyric:'我只' }, { chord:'Fmaj7', lyric:'是' }, { chord:'', lyric:'个匆忙的' }, { chord:'G', lyric:'' }, { chord:'', lyric:'旅人' }, { chord:'Cadd9', lyric:'啊' }],
        [{ chord:'Fmaj7', lyric:'斑' }, { chord:'', lyric:'马斑' }, { chord:'G', lyric:'马' }, { chord:'', lyric:'你' }, { chord:'Em7', lyric:'睡' }, { chord:'', lyric:'吧睡' }, { chord:'Am', lyric:'吧' }, { chord:'', lyric:'我要' }, { chord:'Fmaj7', lyric:'卖' }, { chord:'', lyric:'掉我的' }, { chord:'G', lyric:'房' }, { chord:'', lyric:'子浪迹天' }, { chord:'Fmaj7', lyric:'涯' }],
      ]},
    ],
  },
  // ──────────────────────────────────────────
  {
    id: 'lixiangsanxun',
    importVer: 2, locked: false,
    title: '理想三旬',
    artist: '陈鸿宇',
    baseKey: 'Bb', playKey: 'C', capo: 3,
    chords: ['C','G','Am','F','Em','Dm','G7'],
    sections: [
      { title: '主歌A', lines: [
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'雨后有车驶来' }, { chord:'G', lyric:'' }, { chord:'', lyric:'驶过暮色苍白' }, { chord:'Am', lyric:'' }, { chord:'', lyric:'旧铁皮往南' }, { chord:'F', lyric:'开' }, { chord:'', lyric:'恋人已不在' }, { chord:'C', lyric:'' }],
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'收听浓烟下' }, { chord:'G', lyric:'的' }, { chord:'', lyric:'诗歌电' }, { chord:'Am', lyric:'台' }, { chord:'', lyric:'不动情的' }, { chord:'F', lyric:'咳' }, { chord:'', lyric:'嗽至少看起' }, { chord:'C', lyric:'来' }],
      ]},
      { title: '主歌B', lines: [
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'归途也还可爱' }, { chord:'G', lyric:'' }, { chord:'', lyric:'琴弦少了姿态' }, { chord:'Am', lyric:'' }, { chord:'', lyric:'再不见那夜' }, { chord:'F', lyric:'里' }, { chord:'', lyric:'听歌的小孩' }, { chord:'C', lyric:'' }],
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'时光匆匆独' }, { chord:'G', lyric:'白' }, { chord:'', lyric:'将颠沛磨成卡带' }, { chord:'Am', lyric:'' }, { chord:'', lyric:'已枯卷的情' }, { chord:'F', lyric:'怀' }, { chord:'', lyric:'踏碎成年' }, { chord:'C', lyric:'代' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'就老去吧' }, { chord:'G', lyric:'' }, { chord:'', lyric:'孤独别醒' }, { chord:'Am', lyric:'来' }, { chord:'', lyric:'你' }, { chord:'Em', lyric:'渴' }, { chord:'', lyric:'望的离开' }, { chord:'Dm', lyric:'' }, { chord:'', lyric:'只是' }, { chord:'F', lyric:'无' }, { chord:'', lyric:'处' }, { chord:'G7', lyric:'停' }, { chord:'', lyric:'摆' }],
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'就歌唱吧' }, { chord:'G', lyric:'' }, { chord:'', lyric:'眼睛眯起' }, { chord:'Am', lyric:'来' }, { chord:'', lyric:'而' }, { chord:'Em', lyric:'热' }, { chord:'', lyric:'泪的崩坏' }, { chord:'Dm', lyric:'' }, { chord:'', lyric:'只是没抵达' }, { chord:'G7', lyric:'的' }, { chord:'', lyric:'存' }, { chord:'C', lyric:'在' }],
      ]},
      { title: '主歌C', lines: [
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'青春又醉倒在' }, { chord:'G', lyric:'' }, { chord:'', lyric:'籍籍无名的怀' }, { chord:'Am', lyric:'' }, { chord:'', lyric:'靠嬉笑来虚' }, { chord:'F', lyric:'度' }, { chord:'', lyric:'聚散得慷慨' }, { chord:'C', lyric:'' }],
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'辗转却去不' }, { chord:'G', lyric:'到' }, { chord:'', lyric:'对的站' }, { chord:'Am', lyric:'台' }, { chord:'', lyric:'如果漂泊是' }, { chord:'F', lyric:'成' }, { chord:'', lyric:'长必经的路牌' }, { chord:'C', lyric:'' }],
      ]},
      { title: '主歌D', lines: [
        [{ chord:'C', lyric:'你' }, { chord:'', lyric:'迷醒岁月中' }, { chord:'G', lyric:'' }, { chord:'', lyric:'那贫瘠的未来' }, { chord:'Am', lyric:'' }, { chord:'', lyric:'像遗憾季节' }, { chord:'F', lyric:'里' }, { chord:'', lyric:'未结果的爱' }, { chord:'C', lyric:'' }],
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'弄脏了每一页' }, { chord:'G', lyric:'诗' }, { chord:'', lyric:'吻最疼痛的告白' }, { chord:'Am', lyric:'' }, { chord:'', lyric:'而风声吹到' }, { chord:'F', lyric:'这' }, { chord:'', lyric:'已不需要释怀' }, { chord:'C', lyric:'' }],
      ]},
      { title: '主歌E', lines: [
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'就甜蜜地忍耐' }, { chord:'G', lyric:'' }, { chord:'', lyric:'繁星润湿窗台' }, { chord:'Am', lyric:'' }, { chord:'', lyric:'光影跳动着像' }, { chord:'F', lyric:'在' }, { chord:'', lyric:'困倦里说爱' }, { chord:'C', lyric:'' }],
        [{ chord:'C', lyric:'' }, { chord:'', lyric:'再无谓的感慨' }, { chord:'G', lyric:'' }, { chord:'', lyric:'以为明白' }, { chord:'Am', lyric:'' }, { chord:'', lyric:'梦倒塌的地' }, { chord:'F', lyric:'方' }, { chord:'', lyric:'今已爬满青苔' }, { chord:'C', lyric:'' }],
      ]},
    ],
  },
  // ──────────────────────────────────────────
  {
    id: 'kongbaige',
    importVer: 2, locked: false,
    title: '空白格',
    artist: '蔡健雅',
    baseKey: 'E', playKey: 'C', capo: 5,
    chords: ['G','Gadd9','C','Cmaj7','D','Bm7','Em7','D/F#','Em'],
    sections: [
      { title: '主歌', lines: [
        [{ chord:'Gadd9', lyric:'其' }, { chord:'', lyric:'实很简单' }, { chord:'Cmaj7', lyric:'其' }, { chord:'', lyric:'实很自然' }, { chord:'', lyric:'两个人的爱由两' }],
        [{ chord:'G', lyric:'人' }, { chord:'', lyric:'分担' }, { chord:'Cmaj7', lyric:'其' }, { chord:'', lyric:'实并不难' }, { chord:'Bm7', lyric:'是' }, { chord:'', lyric:'你太悲观' }, { chord:'C', lyric:'隔' }, { chord:'', lyric:'着一道墙不跟谁分' }, { chord:'D', lyric:'担' }],
        [{ chord:'', lyric:'不想让你为难' }, { chord:'D/F#', lyric:'你' }, { chord:'', lyric:'不需要再给我个' }, { chord:'Em7', lyric:'答' }, { chord:'', lyric:'案' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'C', lyric:'我' }, { chord:'', lyric:'想你是爱我的' }, { chord:'D', lyric:'我' }, { chord:'', lyric:'猜你也舍不得' }, { chord:'Gadd9', lyric:'但' }, { chord:'', lyric:'是怎么说' }, { chord:'D/F#', lyric:'' }],
        [{ chord:'Em7', lyric:'总' }, { chord:'', lyric:'觉得我们之间留了太多' }, { chord:'C', lyric:'空' }, { chord:'', lyric:'白格' }],
        [{ chord:'D', lyric:'也' }, { chord:'', lyric:'许你不是我的' }, { chord:'Gadd9', lyric:'爱' }, { chord:'', lyric:'你却又该' }, { chord:'D/F#', lyric:'割' }, { chord:'', lyric:'舍' }],
        [{ chord:'Em7', lyric:'分' }, { chord:'', lyric:'开或许是选择但它' }, { chord:'C', lyric:'也' }, { chord:'', lyric:'可能是我们的缘' }, { chord:'D', lyric:'分' }],
      ]},
    ],
  },
  // ──────────────────────────────────────────
  {
    id: 'pingfanzhilu',
    importVer: 2, locked: false,
    title: '平凡之路',
    artist: '朴树',
    baseKey: 'C', playKey: 'G', capo: 5,
    chords: ['Em','C','G','D'],
    sections: [
      { title: '主歌', lines: [
        [{ chord:'Em', lyric:'徘' }, { chord:'', lyric:'徊着的' }, { chord:'C', lyric:'在' }, { chord:'', lyric:'路上' }, { chord:'G', lyric:'的' }, { chord:'Em', lyric:'你' }, { chord:'', lyric:'要走吗Via Via' }, { chord:'G', lyric:'' }],
        [{ chord:'Em', lyric:'易' }, { chord:'', lyric:'碎的' }, { chord:'C', lyric:'骄' }, { chord:'', lyric:'傲' }, { chord:'G', lyric:'着' }, { chord:'Em', lyric:'那' }, { chord:'', lyric:'也曾是' }, { chord:'C', lyric:'我' }, { chord:'', lyric:'的模' }, { chord:'G', lyric:'样' }],
        [{ chord:'Em', lyric:'沸' }, { chord:'', lyric:'腾着的' }, { chord:'C', lyric:'不' }, { chord:'', lyric:'安着' }, { chord:'G', lyric:'的' }, { chord:'Em', lyric:'你' }, { chord:'', lyric:'要去哪Via Via' }, { chord:'G', lyric:'' }],
        [{ chord:'Em', lyric:'谜' }, { chord:'', lyric:'一样的' }, { chord:'C', lyric:'沉' }, { chord:'', lyric:'默着' }, { chord:'G', lyric:'的' }, { chord:'Em', lyric:'故' }, { chord:'', lyric:'事你' }, { chord:'C', lyric:'真' }, { chord:'', lyric:'的在听' }, { chord:'G', lyric:'吗' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'', lyric:'我曾经' }, { chord:'Em', lyric:'跨' }, { chord:'', lyric:'过山和大' }, { chord:'C', lyric:'海' }, { chord:'', lyric:'也穿过' }, { chord:'G', lyric:'' }, { chord:'', lyric:'人山人' }, { chord:'D', lyric:'海' }],
        [{ chord:'', lyric:'我曾经' }, { chord:'Em', lyric:'拥' }, { chord:'', lyric:'有着一' }, { chord:'C', lyric:'切' }, { chord:'', lyric:'转眼都' }, { chord:'G', lyric:'飘' }, { chord:'', lyric:'散如' }, { chord:'D', lyric:'烟' }],
        [{ chord:'', lyric:'我曾经' }, { chord:'Em', lyric:'失' }, { chord:'', lyric:'落失望' }, { chord:'C', lyric:'失' }, { chord:'', lyric:'掉所' }, { chord:'G', lyric:'有' }, { chord:'', lyric:'方向' }, { chord:'D', lyric:'' }],
        [{ chord:'', lyric:'直到' }, { chord:'Em', lyric:'看' }, { chord:'', lyric:'见平凡' }, { chord:'C', lyric:'才' }, { chord:'', lyric:'是唯一' }, { chord:'D', lyric:'' }, { chord:'', lyric:'的答' }, { chord:'G', lyric:'案' }],
      ]},
      { title: '桥段', lines: [
        [{ chord:'Em', lyric:'向' }, { chord:'', lyric:'前走' }, { chord:'C', lyric:'就' }, { chord:'', lyric:'这么走' }, { chord:'G', lyric:'就' }, { chord:'', lyric:'算你被给' }, { chord:'D', lyric:'过' }, { chord:'', lyric:'什么' }],
        [{ chord:'Em', lyric:'向' }, { chord:'', lyric:'前走' }, { chord:'C', lyric:'就' }, { chord:'', lyric:'这么走' }, { chord:'G', lyric:'就' }, { chord:'', lyric:'算你被夺' }, { chord:'D', lyric:'走' }, { chord:'', lyric:'什么' }],
        [{ chord:'Em', lyric:'向' }, { chord:'', lyric:'前走' }, { chord:'C', lyric:'就' }, { chord:'', lyric:'这么走' }, { chord:'G', lyric:'就' }, { chord:'', lyric:'算你会错' }, { chord:'D', lyric:'过' }, { chord:'', lyric:'什么' }],
        [{ chord:'Em', lyric:'向' }, { chord:'', lyric:'前走' }, { chord:'C', lyric:'就' }, { chord:'', lyric:'这么走' }, { chord:'G', lyric:'就' }, { chord:'', lyric:'算你会' }, { chord:'D', lyric:'' }],
      ]},
      { title: '副歌（尾）', lines: [
        [{ chord:'', lyric:'我曾经' }, { chord:'Em', lyric:'毁' }, { chord:'', lyric:'了我的一' }, { chord:'C', lyric:'切' }, { chord:'', lyric:'只想永' }, { chord:'G', lyric:'' }, { chord:'', lyric:'远地离' }, { chord:'D', lyric:'开' }],
        [{ chord:'', lyric:'我曾经' }, { chord:'Em', lyric:'堕' }, { chord:'', lyric:'入无边黑' }, { chord:'C', lyric:'暗' }, { chord:'', lyric:'想挣扎' }, { chord:'G', lyric:'无' }, { chord:'', lyric:'法自' }, { chord:'D', lyric:'拔' }],
        [{ chord:'', lyric:'我曾经' }, { chord:'Em', lyric:'像' }, { chord:'', lyric:'你像他' }, { chord:'C', lyric:'像' }, { chord:'', lyric:'那野' }, { chord:'G', lyric:'草' }, { chord:'', lyric:'野花' }, { chord:'D', lyric:'' }],
        [{ chord:'', lyric:'绝望' }, { chord:'Em', lyric:'着' }, { chord:'', lyric:'渴望着' }, { chord:'C', lyric:'也' }, { chord:'', lyric:'哭也笑' }, { chord:'D', lyric:'也' }, { chord:'', lyric:'平凡' }, { chord:'G', lyric:'着' }],
      ]},
    ],
  },
  // ──────────────────────────────────────────
  {
    id: 'xiangwozheyang',
    importVer: 2, locked: false,
    title: '像我这样的人',
    artist: '毛不易',
    baseKey: 'C#', playKey: 'C', capo: 1,
    chords: ['C','Em','F','G','G/B','Am','Dm7','E','Em7'],
    sections: [
      { title: '主歌', lines: [
        [{ chord:'G/B', lyric:'像' }, { chord:'', lyric:'我这样优秀的人，本该灿烂过一' }, { chord:'C', lyric:'生。' }],
        [{ chord:'', lyric:'怎么二十多年到头来，还在人海里浮' }, { chord:'Em', lyric:'沉？' }],
        [{ chord:'', lyric:'像' }, { chord:'F', lyric:'我' }, { chord:'', lyric:'这样聪明的人，早就告别了单' }, { chord:'G', lyric:'纯。' }],
        [{ chord:'', lyric:'怎么还是用了一段情，去换一身伤' }, { chord:'Em', lyric:'痕。' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'Em', lyric:'像' }, { chord:'', lyric:'我这样迷茫的人，' }, { chord:'F', lyric:'像' }, { chord:'', lyric:'我这样寻找的人，' }],
        [{ chord:'G', lyric:'像' }, { chord:'', lyric:'我这样碌碌无为的人，' }, { chord:'C', lyric:'你' }, { chord:'', lyric:'还见过多少人。' }],
        [{ chord:'G/B', lyric:'怎' }, { chord:'', lyric:'么曾经也会为了谁，想过奋不顾' }, { chord:'Am', lyric:'身。' }],
      ]},
      { title: '主歌', lines: [
        [{ chord:'G/B', lyric:'像' }, { chord:'', lyric:'我这样庸俗的人，从不喜欢装深' }, { chord:'C', lyric:'沉。' }],
        [{ chord:'', lyric:'怎么偶尔听到老歌时，忽然也晃了' }, { chord:'Em', lyric:'神？' }],
        [{ chord:'', lyric:'像' }, { chord:'F', lyric:'我' }, { chord:'', lyric:'这样懦弱的人，凡事都要留几' }, { chord:'G', lyric:'分。' }],
        [{ chord:'Dm7', lyric:'怎' }, { chord:'', lyric:'么曾经也会为了谁，想过奋不顾' }, { chord:'E', lyric:'身。' }],
      ]},
      { title: '副歌（扩展）', lines: [
        [{ chord:'Em', lyric:'像' }, { chord:'', lyric:'我这样迷茫的人，' }, { chord:'F', lyric:'像' }, { chord:'', lyric:'我这样寻找的人，' }],
        [{ chord:'G', lyric:'像' }, { chord:'', lyric:'我这样碌碌无为的人，' }, { chord:'C', lyric:'你' }, { chord:'', lyric:'还见过多少人？' }],
        [{ chord:'G/B', lyric:'像' }, { chord:'', lyric:'我这样孤单的人，' }, { chord:'Am', lyric:'像' }, { chord:'', lyric:'我这样傻的人，' }],
        [{ chord:'Em7', lyric:'像' }, { chord:'', lyric:'我这样不甘平凡的人，' }, { chord:'F', lyric:'世' }, { chord:'', lyric:'界上有多少人？' }, { chord:'G', lyric:'' }],
        [{ chord:'C', lyric:'像' }, { chord:'', lyric:'我这样莫名其妙的人，会不会有人心' }, { chord:'C', lyric:'疼？' }],
      ]},
    ],
  },
  // ──────────────────────────────────────────
  {
    id: 'xiaochou',
    importVer: 2, locked: false,
    title: '消愁',
    artist: '毛不易',
    baseKey: 'C', playKey: 'G', capo: 5,
    chords: ['Em','A7','C','B7','Am','G','D','E'],
    sections: [
      { title: '主歌', lines: [
        [{ chord:'Em', lyric:'当' }, { chord:'', lyric:'你走进这' }, { chord:'A7', lyric:'欢' }, { chord:'', lyric:'乐场，' }, { chord:'C', lyric:'背' }, { chord:'', lyric:'上' }, { chord:'Em', lyric:'所' }, { chord:'', lyric:'有的' }, { chord:'B7', lyric:'梦' }, { chord:'', lyric:'与想。' }],
        [{ chord:'Am', lyric:'各' }, { chord:'', lyric:'色的脸上' }, { chord:'G', lyric:'各' }, { chord:'', lyric:'色的' }, { chord:'B7', lyric:'妆，' }, { chord:'Em', lyric:'没' }, { chord:'', lyric:'人记得' }, { chord:'B7', lyric:'你' }, { chord:'', lyric:'的模样。' }],
        [{ chord:'Em', lyric:'三' }, { chord:'', lyric:'巡酒过你' }, { chord:'C', lyric:'在' }, { chord:'', lyric:'角落，' }, { chord:'D', lyric:'固' }, { chord:'', lyric:'执的唱着' }, { chord:'G', lyric:'苦' }, { chord:'', lyric:'涩的歌。' }],
        [{ chord:'Am', lyric:'听' }, { chord:'', lyric:'他在' }, { chord:'C', lyric:'喧' }, { chord:'', lyric:'嚣里' }, { chord:'Em', lyric:'被' }, { chord:'', lyric:'淹' }, { chord:'E', lyric:'没，' }, { chord:'Am', lyric:'你' }, { chord:'', lyric:'拿起酒杯对' }, { chord:'B7', lyric:'自' }, { chord:'', lyric:'己说。' }],
      ]},
      { title: '副歌A', lines: [
        [{ chord:'Em', lyric:'一' }, { chord:'', lyric:'杯敬朝阳' }, { chord:'G', lyric:'一' }, { chord:'', lyric:'杯敬月光，' }, { chord:'C', lyric:'唤' }, { chord:'', lyric:'醒我的' }, { chord:'Em', lyric:'向' }, { chord:'', lyric:'往' }, { chord:'B7', lyric:'温' }, { chord:'', lyric:'柔了寒窗，于是' }],
        [{ chord:'Am', lyric:'可' }, { chord:'', lyric:'以不回头地逆' }, { chord:'Em', lyric:'风' }, { chord:'', lyric:'飞翔' }, { chord:'E', lyric:'，' }, { chord:'Am', lyric:'不' }, { chord:'', lyric:'怕心头有雨' }, { chord:'B7', lyric:'眼' }, { chord:'', lyric:'底有霜。' }],
        [{ chord:'Em', lyric:'一' }, { chord:'', lyric:'杯敬故乡' }, { chord:'D', lyric:'一' }, { chord:'', lyric:'杯敬远方，' }, { chord:'C', lyric:'守' }, { chord:'', lyric:'着我的善良' }, { chord:'B7', lyric:'催' }, { chord:'', lyric:'着我成长，所以' }],
        [{ chord:'Am', lyric:'南' }, { chord:'', lyric:'北的路从此' }, { chord:'Em', lyric:'不' }, { chord:'', lyric:'再漫长' }, { chord:'E', lyric:'，' }, { chord:'Am', lyric:'灵' }, { chord:'', lyric:'魂不再' }, { chord:'B7', lyric:'无' }, { chord:'', lyric:'处安' }, { chord:'Em', lyric:'放' }],
      ]},
      { title: '副歌B', lines: [
        [{ chord:'Em', lyric:'一' }, { chord:'', lyric:'杯敬明天' }, { chord:'G', lyric:'一' }, { chord:'', lyric:'杯敬过往，' }, { chord:'C', lyric:'支' }, { chord:'', lyric:'撑我的' }, { chord:'Em', lyric:'身' }, { chord:'', lyric:'体' }, { chord:'B7', lyric:'厚' }, { chord:'', lyric:'重了肩膀，虽然' }],
        [{ chord:'Am', lyric:'从' }, { chord:'', lyric:'不相信所谓山' }, { chord:'Em', lyric:'高' }, { chord:'', lyric:'水长' }, { chord:'E', lyric:'，' }, { chord:'Am', lyric:'人' }, { chord:'', lyric:'生苦短何必' }, { chord:'B7', lyric:'念' }, { chord:'', lyric:'念不忘？' }],
        [{ chord:'Em', lyric:'一' }, { chord:'', lyric:'杯敬自由' }, { chord:'D', lyric:'一' }, { chord:'', lyric:'杯敬死亡，' }, { chord:'C', lyric:'宽' }, { chord:'', lyric:'恕我的平凡' }, { chord:'B7', lyric:'驱' }, { chord:'', lyric:'散了迷惘，好吧' }],
        [{ chord:'Am', lyric:'天' }, { chord:'', lyric:'亮之后总是潦' }, { chord:'Em', lyric:'草' }, { chord:'', lyric:'离场' }, { chord:'E', lyric:'，' }, { chord:'Am', lyric:'清' }, { chord:'', lyric:'醒的人' }, { chord:'B7', lyric:'最' }, { chord:'', lyric:'荒' }, { chord:'Em', lyric:'唐。' }],
      ]},
    ],
  },
  // ──────────────────────────────────────────
  {
    id: 'fuqinsanwenshi',
    importVer: 2, locked: false,
    title: '父亲写的散文诗',
    artist: '许飞',
    baseKey: 'C', playKey: 'C', capo: 0,
    chords: ['Am7','F','C','G','Em'],
    sections: [
      { title: '主歌一', lines: [
        [{ chord:'Am7', lyric:'一' }, { chord:'', lyric:'九八四年庄稼还没收割完，女儿' }],
        [{ chord:'F', lyric:'躺' }, { chord:'', lyric:'在我怀里睡得那么' }, { chord:'C', lyric:'甜。' }],
        [{ chord:'', lyric:'今晚的露天电影没时间去' }, { chord:'G', lyric:'看，' }, { chord:'C', lyric:'妻' }, { chord:'', lyric:'子提醒我修修缝纫' }],
        [{ chord:'Am7', lyric:'机' }, { chord:'', lyric:'的踏' }, { chord:'Em', lyric:'板。' }],
        [{ chord:'F', lyric:'明' }, { chord:'', lyric:'天我要去邻居家再借点' }, { chord:'C', lyric:'钱，' }, { chord:'G', lyric:'' }],
        [{ chord:'C', lyric:'孩' }, { chord:'', lyric:'子哭了一整天哪闹着要吃饼干。' }],
        [{ chord:'Am7', lyric:'蓝' }, { chord:'', lyric:'色的涤卡上衣' }, { chord:'Em', lyric:'痛' }, { chord:'', lyric:'往心里钻，' }],
        [{ chord:'F', lyric:'蹲' }, { chord:'', lyric:'在池塘边上给了自己两' }, { chord:'C', lyric:'拳。' }, { chord:'G', lyric:'' }, { chord:'C', lyric:'' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'Am7', lyric:'这' }, { chord:'', lyric:'是我父亲日记里的' }, { chord:'F', lyric:'文' }, { chord:'', lyric:'字，' }],
        [{ chord:'C', lyric:'这' }, { chord:'', lyric:'是他的青春留下，留下来的' }, { chord:'G', lyric:'散' }, { chord:'C', lyric:'文' }, { chord:'', lyric:'诗。' }],
        [{ chord:'Am7', lyric:'几' }, { chord:'', lyric:'十年后我看着泪流不' }, { chord:'F', lyric:'止，' }],
        [{ chord:'', lyric:'可我的' }, { chord:'G', lyric:'父' }, { chord:'', lyric:'亲已经老得像一个影' }, { chord:'C', lyric:'子。' }],
      ]},
      { title: '主歌二', lines: [
        [{ chord:'Am7', lyric:'一' }, { chord:'', lyric:'九九四年庄稼早已收割完，我的老母亲去年' }],
        [{ chord:'F', lyric:'离' }, { chord:'', lyric:'开了人间。女儿扎着马尾辫跑进了' }, { chord:'C', lyric:'校' }, { chord:'G', lyric:'园，' }, { chord:'C', lyric:'' }],
        [{ chord:'Am7', lyric:'可' }, { chord:'', lyric:'是她最近有点孤单瘦了一大圈。' }],
        [{ chord:'F', lyric:'想' }, { chord:'', lyric:'一想未来我老成了一堆旧纸' }, { chord:'C', lyric:'钱，' }],
        [{ chord:'Am7', lyric:'那' }, { chord:'', lyric:'时的女儿一定会美得很' }, { chord:'Em', lyric:'惊' }, { chord:'', lyric:'艳。' }],
        [{ chord:'F', lyric:'有' }, { chord:'', lyric:'个爱她的男人要娶她回' }, { chord:'G', lyric:'家，' }, { chord:'C', lyric:'' }],
        [{ chord:'', lyric:'可想到这些我却不忍看她一' }, { chord:'G', lyric:'眼。' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'Am7', lyric:'这' }, { chord:'', lyric:'是我父亲日记里的' }, { chord:'F', lyric:'文' }, { chord:'', lyric:'字，' }],
        [{ chord:'C', lyric:'这' }, { chord:'', lyric:'是他的生命留下，留下来的' }, { chord:'G', lyric:'散' }, { chord:'C', lyric:'文' }, { chord:'', lyric:'诗。' }],
        [{ chord:'Am7', lyric:'几' }, { chord:'', lyric:'十年后我看着泪流不' }, { chord:'F', lyric:'止，' }],
        [{ chord:'', lyric:'可我的' }, { chord:'G', lyric:'父' }, { chord:'', lyric:'亲已经老得像一张旧报' }, { chord:'C', lyric:'纸，' }],
        [{ chord:'Am7', lyric:'旧' }, { chord:'', lyric:'报纸那上面的故事' }, { chord:'Em', lyric:'就' }, { chord:'', lyric:'是一辈' }, { chord:'F', lyric:'子。' }, { chord:'G', lyric:'' }, { chord:'C', lyric:'' }],
      ]},
    ],
  },
  // ──────────────────────────────────────────
  {
    id: 'beijiaerhupan',
    importVer: 2, locked: false,
    title: '贝加尔湖畔',
    artist: '李健',
    baseKey: 'F', playKey: 'C', capo: 5,
    chords: ['Dm','G','Cmaj7','A7','Am','F','E'],
    sections: [
      { title: '主歌', lines: [
        [{ chord:'', lyric:'在我的怀' }, { chord:'Dm', lyric:'里，' }, { chord:'G', lyric:'' }, { chord:'', lyric:'在你的眼' }, { chord:'Cmaj7', lyric:'里' }, { chord:'A7', lyric:'' }],
        [{ chord:'', lyric:'那里春风' }, { chord:'Dm', lyric:'沉' }, { chord:'', lyric:'醉，那' }, { chord:'G', lyric:'里' }, { chord:'', lyric:'绿草如' }, { chord:'Cmaj7', lyric:'茵' }, { chord:'Am', lyric:'' }],
        [{ chord:'', lyric:'月光把爱' }, { chord:'Dm', lyric:'恋，' }, { chord:'G', lyric:'' }, { chord:'', lyric:'洒满了湖' }, { chord:'Cmaj7', lyric:'面' }, { chord:'A7', lyric:'' }],
        [{ chord:'', lyric:'两个人的' }, { chord:'Dm', lyric:'篝' }, { chord:'', lyric:'火，照' }, { chord:'E', lyric:'亮' }, { chord:'', lyric:'整个夜' }, { chord:'Am', lyric:'晚' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'', lyric:'多少年以' }, { chord:'F', lyric:'后，' }, { chord:'F', lyric:'' }, { chord:'', lyric:'如云般游' }, { chord:'Cmaj7', lyric:'走' }, { chord:'Cmaj7', lyric:'' }],
        [{ chord:'', lyric:'那变换的' }, { chord:'Dm', lyric:'脚' }, { chord:'', lyric:'步，让' }, { chord:'G', lyric:'我' }, { chord:'', lyric:'们难牵' }, { chord:'Cmaj7', lyric:'手' }, { chord:'A7', lyric:'' }],
        [{ chord:'', lyric:'这一生一' }, { chord:'F', lyric:'世，' }, { chord:'F', lyric:'' }, { chord:'', lyric:'有多少你' }, { chord:'Cmaj7', lyric:'我' }, { chord:'Cmaj7', lyric:'' }],
        [{ chord:'', lyric:'被吞没在' }, { chord:'Dm', lyric:'月' }, { chord:'', lyric:'光如' }, { chord:'G', lyric:'水' }, { chord:'', lyric:'的夜' }, { chord:'Cmaj7', lyric:'里' }, { chord:'E', lyric:'' }],
      ]},
      { title: '副歌二', lines: [
        [{ chord:'Am', lyric:'' }, { chord:'', lyric:'多想某一' }, { chord:'Dm', lyric:'天，' }, { chord:'G', lyric:'' }, { chord:'', lyric:'往日又重' }, { chord:'Cmaj7', lyric:'现' }, { chord:'A7', lyric:'' }],
        [{ chord:'', lyric:'我们流连忘' }, { chord:'Dm', lyric:'' }, { chord:'', lyric:'返，在' }, { chord:'E', lyric:'贝' }, { chord:'', lyric:'加尔湖' }, { chord:'Am', lyric:'畔' }],
        [{ chord:'', lyric:'多少年以' }, { chord:'F', lyric:'后，' }, { chord:'F', lyric:'' }, { chord:'', lyric:'往事随云' }, { chord:'Cmaj7', lyric:'走' }, { chord:'Cmaj7', lyric:'' }],
        [{ chord:'', lyric:'那纷飞的' }, { chord:'Dm', lyric:'冰' }, { chord:'', lyric:'雪，容' }, { chord:'G', lyric:'不' }, { chord:'', lyric:'下那温' }, { chord:'Cmaj7', lyric:'柔' }, { chord:'A7', lyric:'' }],
        [{ chord:'', lyric:'这一生一' }, { chord:'F', lyric:'世，' }, { chord:'F', lyric:'' }, { chord:'', lyric:'这时间太' }, { chord:'Cmaj7', lyric:'少' }, { chord:'Cmaj7', lyric:'' }],
        [{ chord:'', lyric:'不够证明' }, { chord:'Dm', lyric:'融' }, { chord:'', lyric:'化冰' }, { chord:'G', lyric:'雪' }, { chord:'', lyric:'的深' }, { chord:'Cmaj7', lyric:'情' }, { chord:'E', lyric:'' }],
      ]},
      { title: '结尾', lines: [
        [{ chord:'Am', lyric:'' }, { chord:'', lyric:'就在某一' }, { chord:'Dm', lyric:'天，' }, { chord:'G', lyric:'' }, { chord:'', lyric:'你忽然出' }, { chord:'Cmaj7', lyric:'现' }, { chord:'A7', lyric:'' }],
        [{ chord:'', lyric:'你清澈又' }, { chord:'Dm', lyric:'神' }, { chord:'', lyric:'秘，在' }, { chord:'E', lyric:'贝' }, { chord:'', lyric:'加尔湖' }, { chord:'Am', lyric:'畔' }],
        [{ chord:'A7', lyric:'' }, { chord:'', lyric:'你清澈又' }, { chord:'Dm', lyric:'神' }, { chord:'', lyric:'秘，像' }, { chord:'E', lyric:'贝' }, { chord:'', lyric:'加尔湖' }, { chord:'Am', lyric:'畔' }],
      ]},
    ],
  },
  // ──────────────────────────────────────────
  {
    id: 'fengchuimailang',
    importVer: 2, locked: true,
    title: '风吹麦浪',
    artist: '李健',
    baseKey: 'A', playKey: 'C', capo: 3,
    chords: ['C','Am','Dm','G'],
    sections: [
      { title: '主歌', lines: [
        [{ chord:'', lyric:'远处' }, { chord:'C', lyric:'蔚' }, { chord:'', lyric:'蓝天空下涌动着' }, { chord:'Am', lyric:'金' }, { chord:'', lyric:'色的麦浪' }],
        [{ chord:'', lyric:'就' }, { chord:'Dm', lyric:'在' }, { chord:'', lyric:'那里曾是你和我' }, { chord:'G', lyric:'爱' }, { chord:'', lyric:'过的地方' }],
        [{ chord:'', lyric:'当微' }, { chord:'C', lyric:'风' }, { chord:'', lyric:'带着收获的味道' }, { chord:'Am', lyric:'吹' }, { chord:'', lyric:'向我脸庞' }],
        [{ chord:'', lyric:'想' }, { chord:'Dm', lyric:'起' }, { chord:'', lyric:'你轻柔的话语曾' }, { chord:'G', lyric:'打' }, { chord:'', lyric:'湿我眼眶' }],
      ]},
      { title: '哼鸣', lines: [
        [{ chord:'C', lyric:'嗯…' }, { chord:'Am', lyric:'嗯…' }, { chord:'Dm', lyric:'啦…' }, { chord:'G', lyric:'啦…' }],
        [{ chord:'C', lyric:'嗯…' }, { chord:'Am', lyric:'嗯…' }, { chord:'Dm', lyric:'啦…' }, { chord:'G', lyric:'啦…' }],
      ]},
      { title: '主歌B', lines: [
        [{ chord:'', lyric:'我们' }, { chord:'C', lyric:'曾' }, { chord:'', lyric:'在田野里歌唱' }, { chord:'Am', lyric:'在' }, { chord:'', lyric:'冬季盼望' }],
        [{ chord:'', lyric:'却' }, { chord:'Dm', lyric:'没' }, { chord:'', lyric:'能等到阳光下这' }, { chord:'G', lyric:'秋' }, { chord:'', lyric:'天的景象' }],
        [{ chord:'', lyric:'就让' }, { chord:'C', lyric:'失' }, { chord:'', lyric:'散的誓言飞舞吧' }, { chord:'Am', lyric:'随' }, { chord:'', lyric:'西风飘荡' }],
        [{ chord:'', lyric:'就' }, { chord:'Dm', lyric:'像' }, { chord:'', lyric:'你柔软的长发曾' }, { chord:'G', lyric:'芬' }, { chord:'', lyric:'芳我梦乡' }],
      ]},
    ],
  },
  // ──────────────────────────────────────────
  {
    id: 'fujishan',
    importVer: 2, locked: false,
    title: '富士山下',
    artist: '陈奕迅',
    baseKey: 'F', playKey: 'C', capo: 5,
    chords: ['Am','Em','Fmaj7','G','C','Dm7','D','Gadd9','Cmaj7'],
    sections: [
      { title: '主歌A', lines: [
        [{ chord:'', lyric:'拦路雨偏似' }, { chord:'C', lyric:'雪' }, { chord:'', lyric:'花饮泣的你冻吗' }],
        [{ chord:'', lyric:'这风褛我给' }, { chord:'Am', lyric:'你' }, { chord:'', lyric:'磨到有襟花' }, { chord:'Em', lyric:'' }],
        [{ chord:'', lyric:'连掉了职也不' }, { chord:'Fmaj7', lyric:'怕' }, { chord:'', lyric:'怎么始终' }, { chord:'Em', lyric:'牵' }, { chord:'', lyric:'挂' }],
        [{ chord:'', lyric:'苦心选中' }, { chord:'Dm7', lyric:'今' }, { chord:'', lyric:'天想车你回家' }, { chord:'G', lyric:'' }],
        [{ chord:'', lyric:'原谅我不再' }, { chord:'C', lyric:'送' }, { chord:'', lyric:'花伤口应要结疤' }],
        [{ chord:'', lyric:'花瓣铺满' }, { chord:'Am', lyric:'心' }, { chord:'', lyric:'里坟场才害怕' }, { chord:'Em', lyric:'' }],
        [{ chord:'', lyric:'如若你非我' }, { chord:'Fmaj7', lyric:'不' }, { chord:'', lyric:'嫁彼此终必' }, { chord:'C', lyric:'火' }, { chord:'', lyric:'化' }],
        [{ chord:'', lyric:'一生一世' }, { chord:'Dm7', lyric:'等' }, { chord:'', lyric:'一天' }, { chord:'G', lyric:'需' }, { chord:'', lyric:'要代价' }, { chord:'C', lyric:'' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'', lyric:'谁都只得那' }, { chord:'Am', lyric:'双' }, { chord:'', lyric:'手靠拥抱亦难' }, { chord:'Em', lyric:'任' }, { chord:'', lyric:'你拥有' }],
        [{ chord:'', lyric:'要拥有' }, { chord:'Fmaj7', lyric:'必' }, { chord:'', lyric:'先懂' }, { chord:'G', lyric:'失' }, { chord:'', lyric:'去怎接受' }, { chord:'C', lyric:'' }],
        [{ chord:'', lyric:'曾沿着' }, { chord:'Am', lyric:'雪' }, { chord:'', lyric:'路浪游为何为' }, { chord:'D', lyric:'好' }, { chord:'', lyric:'事泪流' }],
        [{ chord:'', lyric:'谁能凭' }, { chord:'Fmaj7', lyric:'爱' }, { chord:'', lyric:'意要富士山私有' }, { chord:'G', lyric:'' }],
        [{ chord:'', lyric:'何不把' }, { chord:'Am', lyric:'悲' }, { chord:'', lyric:'哀感觉假设是来' }, { chord:'Em', lyric:'自' }, { chord:'', lyric:'你虚构' }],
        [{ chord:'', lyric:'试管里' }, { chord:'Fmaj7', lyric:'找' }, { chord:'', lyric:'不到' }, { chord:'G', lyric:'它' }, { chord:'', lyric:'染污眼眸' }, { chord:'C', lyric:'' }],
        [{ chord:'', lyric:'前尘硬' }, { chord:'Am', lyric:'化' }, { chord:'', lyric:'像石头随缘地抛下便逃走' }],
        [{ chord:'', lyric:'我绝不' }, { chord:'Fmaj7', lyric:'罕' }, { chord:'', lyric:'有往街里绕过' }, { chord:'G', lyric:'一' }, { chord:'', lyric:'周我便化乌有' }, { chord:'C', lyric:'' }],
      ]},
      { title: '主歌B', lines: [
        [{ chord:'', lyric:'情人节不要' }, { chord:'C', lyric:'说' }, { chord:'', lyric:'穿只敢抚你发端' }],
        [{ chord:'', lyric:'这种姿态' }, { chord:'Am', lyric:'可' }, { chord:'', lyric:'会令你更心酸' }, { chord:'Em', lyric:'' }],
        [{ chord:'', lyric:'留在汽车里' }, { chord:'Fmaj7', lyric:'取' }, { chord:'', lyric:'暖应该怎么' }, { chord:'Em', lyric:'规' }, { chord:'', lyric:'劝' }],
        [{ chord:'', lyric:'怎么可以' }, { chord:'Dm7', lyric:'将' }, { chord:'', lyric:'手腕忍痛划损' }, { chord:'G', lyric:'' }],
        [{ chord:'', lyric:'人活到几岁' }, { chord:'C', lyric:'算' }, { chord:'', lyric:'短失恋只有更短' }],
        [{ chord:'', lyric:'归家需要几' }, { chord:'Am', lyric:'里' }, { chord:'', lyric:'路谁能预算' }, { chord:'Em', lyric:'' }],
        [{ chord:'', lyric:'忘掉我跟你' }, { chord:'Fmaj7', lyric:'恩' }, { chord:'', lyric:'怨樱花开了几转' }, { chord:'C', lyric:'' }],
        [{ chord:'', lyric:'东京之旅' }, { chord:'Dm7', lyric:'一' }, { chord:'', lyric:'早比' }, { chord:'G', lyric:'一' }, { chord:'', lyric:'世遥远' }, { chord:'C', lyric:'' }],
      ]},
      { title: '尾声', lines: [
        [{ chord:'', lyric:'你还嫌' }, { chord:'Dm7', lyric:'不' }, { chord:'', lyric:'够我把这陈年' }, { chord:'G', lyric:'风' }, { chord:'', lyric:'褛送赠你解咒' }, { chord:'Cmaj7', lyric:'' }],
      ]},
    ],
  },
  // ──────────────────────────────────────────
  {
    id: 'xinbuliaoqing',
    importVer: 2, locked: true,
    title: '新不了情',
    artist: '万芳',
    baseKey: 'G', playKey: 'G', capo: 0,
    chords: ['Cmaj7','Bm7','Am7','G','Em','D7','Am'],
    sections: [
      { title: '主歌', lines: [
        [{ chord:'Cmaj7', lyric:'心' }, { chord:'', lyric:'若' }, { chord:'Bm7', lyric:'倦' }, { chord:'', lyric:'了' }, { chord:'G', lyric:'泪' }, { chord:'', lyric:'也干了' }],
        [{ chord:'Bm7', lyric:'这' }, { chord:'', lyric:'份深情' }, { chord:'Cmaj7', lyric:'难' }, { chord:'', lyric:'舍难了' }, { chord:'Bm7', lyric:'' }],
        [{ chord:'Am7', lyric:'曾' }, { chord:'', lyric:'经拥有' }, { chord:'D7', lyric:'天' }, { chord:'', lyric:'荒地老' }],
        [{ chord:'Bm7', lyric:'已' }, { chord:'', lyric:'不见你' }, { chord:'Em', lyric:'暮' }, { chord:'', lyric:'暮与朝朝' }],
        [{ chord:'Cmaj7', lyric:'这' }, { chord:'', lyric:'一份情' }, { chord:'D7', lyric:'' }, { chord:'G', lyric:'永' }, { chord:'', lyric:'远难了' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'Bm7', lyric:'愿' }, { chord:'', lyric:'来生还能' }, { chord:'Cmaj7', lyric:'再' }, { chord:'', lyric:'度拥抱' }, { chord:'Bm7', lyric:'' }],
        [{ chord:'Am7', lyric:'爱' }, { chord:'', lyric:'一个人' }, { chord:'D7', lyric:'如' }, { chord:'', lyric:'何厮守到老' }],
        [{ chord:'Bm7', lyric:'怎' }, { chord:'', lyric:'样面对' }, { chord:'Em', lyric:'一' }, { chord:'', lyric:'切我不知道' }],
        [{ chord:'Cmaj7', lyric:'回' }, { chord:'', lyric:'忆过去' }, { chord:'Am7', lyric:'痛' }, { chord:'', lyric:'苦的相思忘不了' }],
        [{ chord:'Bm7', lyric:'为' }, { chord:'', lyric:'何你还来' }, { chord:'Em', lyric:'拨' }, { chord:'', lyric:'动我心跳' }],
        [{ chord:'Am7', lyric:'爱' }, { chord:'', lyric:'你怎么能了' }, { chord:'D7', lyric:'' }],
        [{ chord:'Cmaj7', lyric:'今' }, { chord:'', lyric:'夜的你' }, { chord:'Bm7', lyric:'应' }, { chord:'', lyric:'该明了' }, { chord:'Em', lyric:'' }],
        [{ chord:'Am', lyric:'缘' }, { chord:'', lyric:'难了' }, { chord:'D7', lyric:'情' }, { chord:'', lyric:'难了' }, { chord:'G', lyric:'' }],
      ]},
    ],
  },
  // ──────────────────────────────────────────
  {
    id: 'wanghouyusheng',
    importVer: 2, locked: false,
    title: '往后余生',
    artist: '马良',
    baseKey: 'C#', playKey: 'C', capo: 1,
    chords: ['F','G','Am','Cmaj7','Em','C','Dm'],
    sections: [
      { title: '主歌A', lines: [
        [{ chord:'F', lyric:'' }, { chord:'', lyric:'在没风的' }, { chord:'G', lyric:'地' }, { chord:'', lyric:'方找太阳' }, { chord:'Cmaj7', lyric:'' }],
        [{ chord:'F', lyric:'' }, { chord:'', lyric:'在你冷的' }, { chord:'G', lyric:'地' }, { chord:'', lyric:'方做暖阳' }, { chord:'Am', lyric:'' }],
        [{ chord:'F', lyric:'' }, { chord:'', lyric:'人事纷纷' }, { chord:'G', lyric:'' }, { chord:'Em', lyric:'你' }, { chord:'', lyric:'总太天真' }, { chord:'Am', lyric:'' }],
        [{ chord:'F', lyric:'' }, { chord:'', lyric:'往后的余生' }, { chord:'G', lyric:'' }, { chord:'', lyric:'我只要' }, { chord:'C', lyric:'你' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'', lyric:'往后余' }, { chord:'F', lyric:'生' }, { chord:'G', lyric:'' }, { chord:'', lyric:'风雪是' }, { chord:'Em', lyric:'' }, { chord:'', lyric:'你' }, { chord:'Em', lyric:'' }],
        [{ chord:'', lyric:'平淡是' }, { chord:'F', lyric:'你' }, { chord:'G', lyric:'' }, { chord:'', lyric:'清贫也是' }, { chord:'Am', lyric:'你' }, { chord:'Am', lyric:'' }],
        [{ chord:'', lyric:'荣华是' }, { chord:'F', lyric:'你' }, { chord:'G', lyric:'' }, { chord:'', lyric:'心底温柔是' }, { chord:'Em', lyric:'' }, { chord:'', lyric:'你' }, { chord:'Am', lyric:'' }],
        [{ chord:'', lyric:'目光所' }, { chord:'Dm', lyric:'至' }, { chord:'G', lyric:'也' }, { chord:'', lyric:'是' }, { chord:'C', lyric:'你' }],
      ]},
      { title: '主歌B', lines: [
        [{ chord:'F', lyric:'' }, { chord:'', lyric:'想带你去' }, { chord:'G', lyric:'看' }, { chord:'', lyric:'晴空万' }, { chord:'C', lyric:'里' }],
        [{ chord:'F', lyric:'' }, { chord:'', lyric:'想大声告' }, { chord:'G', lyric:'诉' }, { chord:'', lyric:'你我为你着迷' }, { chord:'C', lyric:'' }],
        [{ chord:'F', lyric:'' }, { chord:'', lyric:'往事匆匆' }, { chord:'G', lyric:'' }, { chord:'Em', lyric:'你' }, { chord:'', lyric:'总是会感' }, { chord:'Am', lyric:'' }, { chord:'', lyric:'动' }],
        [{ chord:'F', lyric:'' }, { chord:'', lyric:'往后的余生' }, { chord:'G', lyric:'' }, { chord:'', lyric:'我只要' }, { chord:'C', lyric:'你' }],
      ]},
    ],
  },
  // ──────────────────────────────────────────
  {
    id: 'nideyangzi',
    importVer: 2, locked: true,
    title: '你的样子',
    artist: '罗大佑',
    baseKey: 'C', playKey: 'C', capo: 0,
    chords: ['Am','Em','Dm','Bbm','C#','F'],
    sections: [
      { title: '主歌', lines: [
        [{ chord:'', lyric:'我' }, { chord:'Am', lyric:'听' }, { chord:'', lyric:'到传来的谁的声音像那' }, { chord:'Em', lyric:'梦' }, { chord:'', lyric:'里呜咽中的小河' }],
        [{ chord:'', lyric:'我' }, { chord:'Am', lyric:'看' }, { chord:'', lyric:'到远去的谁的步伐遮住' }, { chord:'Em', lyric:'告' }, { chord:'', lyric:'别时哀伤的眼神' }],
        [{ chord:'', lyric:'不明' }, { chord:'Dm', lyric:'白' }, { chord:'', lyric:'的是为何你' }, { chord:'Em', lyric:'情' }, { chord:'', lyric:'愿让' }, { chord:'Am', lyric:'风' }, { chord:'', lyric:'尘刻划你的样子' }, { chord:'Em', lyric:'' }],
        [{ chord:'', lyric:'就像' }, { chord:'Dm', lyric:'早' }, { chord:'', lyric:'已忘情的' }, { chord:'Em', lyric:'世' }, { chord:'', lyric:'界曾经拥有' }, { chord:'Am', lyric:'你' }, { chord:'', lyric:'的名字我的声音' }],
        [{ chord:'Am', lyric:'那' }, { chord:'', lyric:'悲歌总会在梦中清醒诉说' }, { chord:'Em', lyric:'一' }, { chord:'', lyric:'点哀伤过的往事' }],
        [{ chord:'Am', lyric:'那' }, { chord:'', lyric:'看似漫不在乎转过身的是风干' }, { chord:'Em', lyric:'泪' }, { chord:'', lyric:'眼后萧瑟的影子' }],
        [{ chord:'', lyric:'不明' }, { chord:'Dm', lyric:'白' }, { chord:'', lyric:'的是为何人' }, { chord:'Em', lyric:'世' }, { chord:'', lyric:'间总' }, { chord:'Am', lyric:'不' }, { chord:'', lyric:'能溶解你的样' }, { chord:'Em', lyric:'子' }],
        [{ chord:'', lyric:'是否' }, { chord:'Dm', lyric:'来' }, { chord:'', lyric:'迟了明日的' }, { chord:'Em', lyric:'渊' }, { chord:'', lyric:'源早谢了' }, { chord:'Am', lyric:'你' }, { chord:'', lyric:'的笑容我的心情' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'Bbm', lyric:'不' }, { chord:'', lyric:'变的你伫立在' }, { chord:'C#', lyric:'茫' }, { chord:'', lyric:'茫的尘世中' }],
        [{ chord:'Bbm', lyric:'聪' }, { chord:'', lyric:'明的孩子提着' }, { chord:'C#', lyric:'易' }, { chord:'', lyric:'碎的灯' }, { chord:'F', lyric:'笼' }],
        [{ chord:'Bbm', lyric:'潇' }, { chord:'', lyric:'洒的你将心事' }, { chord:'C#', lyric:'化' }, { chord:'', lyric:'尽尘缘中' }],
        [{ chord:'Bbm', lyric:'孤' }, { chord:'', lyric:'独的孩子你是' }, { chord:'C#', lyric:'造' }, { chord:'', lyric:'物的恩' }, { chord:'F', lyric:'宠' }],
      ]},
    ],
  },
  // ──────────────────────────────────────────
  {
    id: 'tongnian',
    importVer: 2, locked: true,
    title: '童年',
    artist: '罗大佑',
    baseKey: 'G', playKey: 'G', capo: 0,
    chords: ['G','Em','C','D','Bm','Am'],
    sections: [
      { title: '主歌A', lines: [
        [{ chord:'G', lyric:'' }, { chord:'', lyric:'池塘边的' }, { chord:'Em', lyric:'榕' }, { chord:'', lyric:'树上知了在' }, { chord:'C', lyric:'声' }, { chord:'', lyric:'声叫着夏' }, { chord:'D', lyric:'天' }],
        [{ chord:'G', lyric:'' }, { chord:'', lyric:'操场边的' }, { chord:'Em', lyric:'秋' }, { chord:'', lyric:'千上只有' }, { chord:'C', lyric:'蝴' }, { chord:'', lyric:'蝶停在上' }, { chord:'D', lyric:'面' }],
        [{ chord:'Bm', lyric:'黑' }, { chord:'', lyric:'板上老师的' }, { chord:'Em', lyric:'粉' }, { chord:'', lyric:'笔还在拼命' }, { chord:'Am', lyric:'叽' }, { chord:'', lyric:'叽喳喳写个不' }, { chord:'D', lyric:'停' }],
        [{ chord:'G', lyric:'等' }, { chord:'', lyric:'待着下课' }, { chord:'Em', lyric:'等' }, { chord:'', lyric:'待着放学' }, { chord:'C', lyric:'等' }, { chord:'', lyric:'待游戏的童' }, { chord:'G', lyric:'年' }],
      ]},
      { title: '主歌B', lines: [
        [{ chord:'G', lyric:'' }, { chord:'', lyric:'福利社里面' }, { chord:'Em', lyric:'什' }, { chord:'', lyric:'么都有就是' }, { chord:'C', lyric:'口' }, { chord:'', lyric:'袋里没有半毛' }, { chord:'D', lyric:'钱' }],
        [{ chord:'G', lyric:'' }, { chord:'', lyric:'诸葛四郎和' }, { chord:'Em', lyric:'魔' }, { chord:'', lyric:'鬼党到底' }, { chord:'C', lyric:'谁' }, { chord:'', lyric:'抢到那支宝' }, { chord:'D', lyric:'剑' }],
        [{ chord:'Bm', lyric:'隔' }, { chord:'', lyric:'壁班的那个' }, { chord:'Em', lyric:'女' }, { chord:'', lyric:'孩怎么还没' }, { chord:'Am', lyric:'经' }, { chord:'', lyric:'过我的窗' }, { chord:'D', lyric:'前' }],
        [{ chord:'G', lyric:'嘴' }, { chord:'', lyric:'里的零食' }, { chord:'Em', lyric:'手' }, { chord:'', lyric:'里的漫画' }, { chord:'C', lyric:'心' }, { chord:'', lyric:'里初恋的童' }, { chord:'G', lyric:'年' }],
      ]},
      { title: '主歌C', lines: [
        [{ chord:'G', lyric:'' }, { chord:'', lyric:'总是要等到' }, { chord:'Em', lyric:'睡' }, { chord:'', lyric:'觉前才知道' }, { chord:'C', lyric:'功' }, { chord:'', lyric:'课只做了一点' }, { chord:'D', lyric:'点' }],
        [{ chord:'G', lyric:'' }, { chord:'', lyric:'总是要等到' }, { chord:'Em', lyric:'考' }, { chord:'', lyric:'试以后才知道' }, { chord:'C', lyric:'该' }, { chord:'', lyric:'念的书都没有' }, { chord:'D', lyric:'念' }],
        [{ chord:'Bm', lyric:'一' }, { chord:'', lyric:'寸光阴一寸' }, { chord:'Em', lyric:'金' }, { chord:'', lyric:'老师说过寸金' }, { chord:'Am', lyric:'难' }, { chord:'', lyric:'买寸光' }, { chord:'D', lyric:'阴' }],
        [{ chord:'G', lyric:'一' }, { chord:'', lyric:'天又一天' }, { chord:'Em', lyric:'一' }, { chord:'', lyric:'年又一年' }, { chord:'C', lyric:'迷' }, { chord:'', lyric:'迷糊糊的童' }, { chord:'G', lyric:'年' }],
      ]},
      { title: '主歌D', lines: [
        [{ chord:'G', lyric:'' }, { chord:'', lyric:'没有人知道' }, { chord:'Em', lyric:'为' }, { chord:'', lyric:'什么太阳总' }, { chord:'C', lyric:'下' }, { chord:'', lyric:'到山的那一' }, { chord:'D', lyric:'边' }],
        [{ chord:'G', lyric:'' }, { chord:'', lyric:'没有人能够' }, { chord:'Em', lyric:'告' }, { chord:'', lyric:'诉我山里面' }, { chord:'C', lyric:'有' }, { chord:'', lyric:'没有住着神' }, { chord:'D', lyric:'仙' }],
        [{ chord:'Bm', lyric:'多' }, { chord:'', lyric:'少的日子里总是' }, { chord:'Em', lyric:'一' }, { chord:'', lyric:'个人' }, { chord:'C', lyric:'面' }, { chord:'', lyric:'对着天空发' }, { chord:'D', lyric:'呆' }],
        [{ chord:'G', lyric:'就' }, { chord:'', lyric:'这么好奇' }, { chord:'Em', lyric:'就' }, { chord:'', lyric:'这么幻想' }, { chord:'C', lyric:'这' }, { chord:'', lyric:'么孤单的童' }, { chord:'G', lyric:'年' }],
      ]},
      { title: '主歌E', lines: [
        [{ chord:'G', lyric:'' }, { chord:'', lyric:'阳光下蜻蜓' }, { chord:'Em', lyric:'飞' }, { chord:'', lyric:'过来一片片' }, { chord:'C', lyric:'绿' }, { chord:'', lyric:'油油的稻' }, { chord:'D', lyric:'田' }],
        [{ chord:'G', lyric:'' }, { chord:'', lyric:'水彩蜡笔和' }, { chord:'Em', lyric:'万' }, { chord:'', lyric:'花筒画不出' }, { chord:'C', lyric:'天' }, { chord:'', lyric:'边那一条彩' }, { chord:'D', lyric:'虹' }],
        [{ chord:'Bm', lyric:'什' }, { chord:'', lyric:'么时候才能像' }, { chord:'Em', lyric:'高' }, { chord:'', lyric:'年级的同学有张' }, { chord:'C', lyric:'成' }, { chord:'', lyric:'熟与长大的' }, { chord:'D', lyric:'脸' }],
        [{ chord:'G', lyric:'盼' }, { chord:'', lyric:'望着假期' }, { chord:'Em', lyric:'盼' }, { chord:'', lyric:'望着明天' }, { chord:'C', lyric:'盼' }, { chord:'', lyric:'望长大的童' }, { chord:'G', lyric:'年' }],
      ]},
    ],
  },
];
