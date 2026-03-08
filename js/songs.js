// ─── Song Library ────────────────────────────────────────────
// 每首歌：{ id, title, artist, baseKey, playKey, capo, chords[], sections[] }
// section: { title, lines[] }
// line: 数组，每个元素 { chord?: string, lyric: string }
//   chord 为空字符串表示无和弦标注，lyric 为对应文字

const SONGS = [
  // ──────────────────────────────────────────
  {
    id: 'nanshan',
    title: '南山南',
    artist: '马頔',
    baseKey: 'Bb', playKey: 'G', capo: 3,
    chords: ['C','D','Bm','Em','Am','G'],
    sections: [
      { title: '主歌', lines: [
        [{ chord:'C', lyric:'你在南方的' },   { chord:'D', lyric:'艳阳里  ' },    { chord:'Bm', lyric:'大雪' }, { chord:'Em', lyric:'纷飞' }],
        [{ chord:'Am', lyric:'我在北方的寒夜里' }, { chord:'D', lyric:'四季' }, { chord:'G', lyric:'如春' }],
        [{ chord:'Am', lyric:'如果' }, { chord:'G', lyric:'天黑之前' }, { chord:'C', lyric:'来的及 ' }, { chord:'D', lyric:'我要' }, { chord:'Bm', lyric:'忘了' }, { chord:'Em', lyric:'你的眼睛' }],
        [{ chord:'Am', lyric:'穷极一生 ' }, { chord:'D', lyric:'做不完 ' }, { chord:'G', lyric:'一场梦' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'G', lyric:'她不再和' }, { chord:'D', lyric:'谁谈论' }, { chord:'Em', lyric:'相逢的孤岛  ' }, { chord:'Am', lyric:'因为' }, { chord:'D', lyric:'心里' }, { chord:'G', lyric:'早已荒无人烟' }],
        [{ chord:'G', lyric:'他的心再也' }, { chord:'D', lyric:'装不下' }, { chord:'Em', lyric:'一个家  ' }, { chord:'Am', lyric:'做一个 ' }, { chord:'D', lyric:'只对' }, { chord:'G', lyric:'自己说谎的哑巴' }],
        [{ chord:'G', lyric:'他说你 ' }, { chord:'C', lyric:'任何为人称道的' }, { chord:'D', lyric:'美丽  ' }, { chord:'Bm', lyric:'不及他' }, { chord:'Em', lyric:'第一次遇见你' }],
        [{ chord:'Am', lyric:'时光苟延残喘  ' }, { chord:'D', lyric:'无可奈何' }],
        [{ chord:'Am', lyric:'如果所有' }, { chord:'G', lyric:'土地' }, { chord:'C', lyric:'连在一起 ' }, { chord:'D', lyric:'走上一生' }, { chord:'Bm', lyric:'只为' }, { chord:'Em', lyric:'拥抱你' }],
        [{ chord:'Am', lyric:'喝醉了' }, { chord:'D', lyric:'他的梦 ' }, { chord:'G', lyric:'晚安' }],
      ]},
      { title: '间奏', lines: [
        [{ chord:'G', lyric:'他听见有人' }, { chord:'D', lyric:'唱着古老的歌  ' }, { chord:'Em', lyric:'唱着今天' }, { chord:'Am', lyric:'还在' }, { chord:'D', lyric:'远方' }, { chord:'G', lyric:'发生的' }],
        [{ chord:'G', lyric:'像在她' }, { chord:'D', lyric:'眼睛里看到的孤岛  ' }, { chord:'Em', lyric:'没有悲伤' }, { chord:'Am', lyric:'但也' }, { chord:'D', lyric:'没有' }, { chord:'G', lyric:'花朵' }],
      ]},
      { title: '尾声', lines: [
        [{ chord:'Am', lyric:'大梦初醒' }, { chord:'D', lyric:'荒唐了  ' }, { chord:'G', lyric:'一生' }],
        [{ chord:'G', lyric:'南山南  ' }, { chord:'D', lyric:'北秋悲 ' }, { chord:'Em', lyric:'南山' }, { chord:'C', lyric:'有谷堆' }],
        [{ chord:'G', lyric:'南风喃  ' }, { chord:'D', lyric:'北海北 ' }, { chord:'Em', lyric:'北海' }, { chord:'C', lyric:'有墓碑' }],
      ]},
    ],
  },

  // ──────────────────────────────────────────
  {
    id: 'anhq',
    title: '安和桥',
    artist: '宋冬野',
    baseKey: 'G', playKey: 'G', capo: 0,
    chords: ['G','D','Em','C'],
    sections: [
      { title: '主歌', lines: [
        [{ chord:'G', lyric:'让我再看你一' }, { chord:'D', lyric:'遍' }],
        [{ chord:'', lyric:'从南' }, { chord:'Em', lyric:'到北' }],
        [{ chord:'', lyric:'像是' }, { chord:'C', lyric:'被五环路' }],
        [{ chord:'D', lyric:'蒙住的' }, { chord:'G', lyric:'双眼' }],
        [{ chord:'G', lyric:'请你再讲' }, { chord:'D', lyric:'一遍' }],
        [{ chord:'', lyric:'关于' }, { chord:'Em', lyric:'那天' }],
        [{ chord:'', lyric:'抱着' }, { chord:'C', lyric:'盒子的姑娘' }],
        [{ chord:'D', lyric:'和擦汗的' }, { chord:'Em', lyric:'男人' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'', lyric:'我知' }, { chord:'C', lyric:'道 那些' }, { chord:'D', lyric:'夏天' }],
        [{ chord:'', lyric:'就像' }, { chord:'Em', lyric:'青春一样' }, { chord:'D', lyric:'回不来' }],
        [{ chord:'', lyric:'代替' }, { chord:'C', lyric:'梦想的也' }, { chord:'D', lyric:'只能是勉为' }, { chord:'G', lyric:'其难' }],
        [{ chord:'', lyric:'我知' }, { chord:'C', lyric:'道 吹过的' }, { chord:'D', lyric:'牛逼' }],
        [{ chord:'', lyric:'也会随' }, { chord:'Em', lyric:'青春一笑' }, { chord:'D', lyric:'了之' }],
        [{ chord:'', lyric:'让我' }, { chord:'C', lyric:'困在城市里' }],
        [{ chord:'', lyric:'纪念' }, { chord:'Em', lyric:'你' }],
      ]},
      { title: '主歌', lines: [
        [{ chord:'G', lyric:'让我再尝' }, { chord:'D', lyric:'一口' }],
        [{ chord:'', lyric:'秋天' }, { chord:'Em', lyric:'的酒' }],
        [{ chord:'', lyric:'一' }, { chord:'C', lyric:'直往南方' }, { chord:'D', lyric:'开' }],
        [{ chord:'', lyric:'不会' }, { chord:'G', lyric:'太久' }],
        [{ chord:'G', lyric:'让我再听' }, { chord:'D', lyric:'一遍' }],
        [{ chord:'', lyric:'最美的' }, { chord:'Em', lyric:'那一句' }],
        [{ chord:'', lyric:'你回' }, { chord:'C', lyric:'家了' }],
        [{ chord:'D', lyric:'我在等你' }, { chord:'Em', lyric:'呢' }],
      ]},
      { title: '间奏', lines: [
        [{ chord:'C', lyric:' ' }, { chord:'D', lyric:' ' }, { chord:'Em', lyric:' ' }, { chord:'D', lyric:' ' }],
        [{ chord:'C', lyric:' ' }, { chord:'D', lyric:' ' }, { chord:'Em', lyric:' ' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'', lyric:'我知' }, { chord:'C', lyric:'道 那些' }, { chord:'D', lyric:'夏天' }],
        [{ chord:'', lyric:'就像' }, { chord:'Em', lyric:'青春一样' }, { chord:'D', lyric:'回不来' }],
        [{ chord:'', lyric:'代替' }, { chord:'C', lyric:'梦想的也' }, { chord:'D', lyric:'只能是勉为' }, { chord:'G', lyric:'其难' }],
        [{ chord:'', lyric:'我知' }, { chord:'C', lyric:'道 吹过的' }, { chord:'D', lyric:'牛逼' }],
        [{ chord:'', lyric:'也会随' }, { chord:'Em', lyric:'青春一笑' }, { chord:'D', lyric:'了之' }],
        [{ chord:'', lyric:'让我' }, { chord:'C', lyric:'困在城市里' }],
        [{ chord:'', lyric:'纪念' }, { chord:'Em', lyric:'你' }],
        [{ chord:'', lyric:'我知' }, { chord:'C', lyric:'道 那些' }, { chord:'D', lyric:'夏天' }],
        [{ chord:'', lyric:'就像' }, { chord:'Em', lyric:'你一样' }, { chord:'D', lyric:'回不来' }],
        [{ chord:'', lyric:'我已' }, { chord:'C', lyric:'不会再对' }, { chord:'D', lyric:'谁' }],
        [{ chord:'', lyric:'满怀' }, { chord:'G', lyric:'期待' }],
        [{ chord:'', lyric:'我知' }, { chord:'C', lyric:'道 这个' }, { chord:'D', lyric:'世界' }],
        [{ chord:'', lyric:'每天' }, { chord:'Em', lyric:'都有太多' }, { chord:'D', lyric:'遗憾' }],
        [{ chord:'', lyric:'所以 ' }, { chord:'C', lyric:'你好 ' }],
        [{ chord:'', lyric:'再' }, { chord:'Em', lyric:'见' }],
      ]},
    ],
  },

  // ──────────────────────────────────────────
  {
    id: 'qqqg',
    title: '千千阙歌',
    artist: '张国荣 / 陈慧娴',
    baseKey: 'A', playKey: 'A', capo: 0,
    chords: ['A','C#m','Bm','E','D','F#m'],
    sections: [
      { title: '主歌一', lines: [
        [{ chord:'A', lyric:'徐徐回望曾属于' }, { chord:'C#m', lyric:'彼此的晚上' }],
        [{ chord:'Bm', lyric:'红红仍是你赠我的' }, { chord:'E', lyric:'心中艳阳' }],
        [{ chord:'A', lyric:'如流傻泪 祈望可' }, { chord:'C#m', lyric:'体恤兼见谅' }],
        [{ chord:'Bm', lyric:'明晨离别你 路也许' }, { chord:'E', lyric:'孤单得漫长' }],
      ]},
      { title: '过渡', lines: [
        [{ chord:'D', lyric:'一瞬间太多' }, { chord:'E', lyric:'东西要讲' }],
        [{ chord:'C#m', lyric:'可惜即将在' }, { chord:'F#m', lyric:'各一方' }],
        [{ chord:'Bm', lyric:'只好深深将这' }, { chord:'C#m', lyric:'刻尽凝' }, { chord:'F#m', lyric:'望' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'A', lyric:'来日纵使千千阙歌　飘于远方' }, { chord:'F#m', lyric:'我路上' }],
        [{ chord:'A', lyric:'来日纵使千千晚星　亮过今晚' }, { chord:'C#m', lyric:'月亮' }],
        [{ chord:'Bm', lyric:'都比不起这' }, { chord:'F#m', lyric:'宵美丽' }],
        [{ chord:'Bm', lyric:'都洗不清今晚' }, { chord:'F#m', lyric:'我所想' }],
        [{ chord:'Bm', lyric:'因你今晚共' }, { chord:'D', lyric:'我' }, { chord:'A', lyric:'唱' }],
      ]},
      { title: '主歌二', lines: [
        [{ chord:'A', lyric:'临行临别 才顿感' }, { chord:'C#m', lyric:'哀伤的漂亮' }],
        [{ chord:'Bm', lyric:'原来全是你 令我的' }, { chord:'E', lyric:'思忆漫长' }],
        [{ chord:'A', lyric:'何年何月 才又可' }, { chord:'C#m', lyric:'今宵一样' }],
        [{ chord:'Bm', lyric:'停留凝望里 让眼睛' }, { chord:'E', lyric:'讲彼此立场' }],
      ]},
      { title: '过渡', lines: [
        [{ chord:'D', lyric:'当某天 雨点' }, { chord:'E', lyric:'轻敲你窗' }],
        [{ chord:'C#m', lyric:'当风声吹乱' }, { chord:'F#m', lyric:'你构想' }],
        [{ chord:'Bm', lyric:'可否抽空' }, { chord:'C#m', lyric:'想这张旧模' }, { chord:'F#m', lyric:'样' }],
      ]},
      { title: '副歌', lines: [
        [{ chord:'A', lyric:'来日纵使千千阙歌　飘于远方' }, { chord:'F#m', lyric:'我路上' }],
        [{ chord:'A', lyric:'来日纵使千千晚星　亮过今晚' }, { chord:'C#m', lyric:'月亮' }],
        [{ chord:'Bm', lyric:'都比不起这' }, { chord:'F#m', lyric:'宵美丽' }],
        [{ chord:'Bm', lyric:'都洗不清今晚' }, { chord:'F#m', lyric:'我所想' }],
        [{ chord:'Bm', lyric:'因你今晚共' }, { chord:'D', lyric:'我' }, { chord:'A', lyric:'唱' }],
      ]},
      { title: '尾声', lines: [
        [{ chord:'Bm', lyric:'怎都比不起这' }, { chord:'F#m', lyric:'宵美丽' }],
        [{ chord:'Bm', lyric:'亦绝不可使我' }, { chord:'F#m', lyric:'更欣赏' }],
        [{ chord:'Bm', lyric:'因我今晚共' }, { chord:'D', lyric:'你' }, { chord:'A', lyric:'唱' }],
        [{ chord:'Bm', lyric:'因不知哪天再共' }, { chord:'D', lyric:'你' }, { chord:'A', lyric:'唱' }],
      ]},
    ],
  },

  // ──────────────────────────────────────────
  {
    id: 'hotelca',
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
];
