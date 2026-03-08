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
    importVer: 2, locked: false,
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
    chords: ['G','Em','Bm','Am','D','B'],
    sections: [
      { title: '主歌', lines: [
        [{ chord:'G', lyric:'' }, { chord:'', lyric:'小小的小孩今天有没有哭是否' }, { chord:'Em', lyric:'朋' }, { chord:'', lyric:'友都已经离去留下了' }, { chord:'D', lyric:'带' }, { chord:'', lyric:'不走的孤独' }],
        [{ chord:'G', lyric:'' }, { chord:'', lyric:'漂亮的小孩今天有没有哭是否' }, { chord:'Em', lyric:'弄' }, { chord:'', lyric:'脏了美丽的衣服却找不到别人' }, { chord:'D', lyric:'倾' }, { chord:'', lyric:'诉' }],
        [{ chord:'G', lyric:'' }, { chord:'', lyric:'聪明的小孩今天有没有哭是否' }, { chord:'Em', lyric:'遗' }, { chord:'', lyric:'失了心爱的礼物在风中寻找从清晨到' }, { chord:'D', lyric:'日' }, { chord:'', lyric:'暮' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'', lyric:'我' }, { chord:'Am', lyric:'亲' }, { chord:'', lyric:'爱的小孩为什么你不让我看' }, { chord:'D', lyric:'清' }, { chord:'G', lyric:'楚' }, { chord:'Em', lyric:'' }],
        [{ chord:'Am', lyric:'是' }, { chord:'', lyric:'否让风吹熄了蜡烛在黑暗中独自' }, { chord:'B', lyric:'漫' }, { chord:'Em', lyric:'步' }],
        [{ chord:'Am', lyric:'亲' }, { chord:'', lyric:'爱的小孩快快擦干你的泪珠我愿意陪伴你走上' }, { chord:'G', lyric:'回' }, { chord:'Em', lyric:'' }],
        [{ chord:'Am', lyric:'回' }, { chord:'', lyric:'家的路' }, { chord:'B', lyric:'' }, { chord:'Em', lyric:'走上回家的路' }],
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
    importVer: 2, locked: false,
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
];
