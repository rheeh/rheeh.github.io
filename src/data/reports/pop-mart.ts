import type { Report } from './types';

export const popMartReport: Report = {
  slug: 'pop-mart',
  number: '04',
  category: '消费与日常',
  title: '当潮玩从陈列柜，走到包上',
  shortTitle: '当潮玩从陈列柜，走到包上',
  summary: '重新看泡泡玛特：比起“盲盒让人上瘾”，更想弄清一个角色怎样进入日常。',
  readTime: '约 6 分钟',
  accent: 'dark',
  heroImages: [],
  coverLabel: '陈列 → 随身',
  capabilityTags: ['泡泡玛特', '产品形态', '购买理由'],
  question: '',
  conclusion: '下一次看一款潮玩，可以先问三个小问题：它准备放在哪里？除了拆开那一下，之后还会怎么用？如果没有隐藏款和转售预期，还会不会喜欢它？这比用一句“情绪价值”解释所有购买，更接近产品本身。',
  sections: [
    {
      id: 'carry', number: '01', title: '放在柜子里，和每天带出门', evidence: '混合证据',
      blocks: [
        { type: 'text', paragraphs: [
          '同一个角色，做成手办和做成包挂，遇到人的方式不太一样。手办需要一个摆放的位置；包挂会跟着包出门，和衣服、通勤、旅行一起出现。先不谈“IP 势能”，这个小变化就值得多看一眼。',
          '泡泡玛特的官方商品里，THE MONSTERS 既有搪胶毛绒挂件，也有 Wacky Mart 系列耳机包。这里能确定的是产品形态在扩展；至于消费者是否因此更愿意购买，还需要访谈或行为数据，不能由商品目录直接推出。',
        ], citations: ['official-products'] },
        { type: 'text', paragraphs: [
          '一个可能的解释是：挂件给“喜欢这个角色”多提供了一个落点。它不一定要进入收藏柜，也可以成为每天搭配的一部分。尺寸、重量、挂扣是否牢靠、弄脏后好不好清理，就都变成了设计问题。',
          '这也让“买来做什么”比“用户属于哪个年龄层”更具体。同样喜欢一个角色，有人想摆着看，有人想送朋友，有人只想让自己的包多一点辨识度。',
        ] },
      ],
    },
    {
      id: 'plush', number: '02', title: '毛绒变大了，但数字不能替人回答动机', evidence: '混合证据',
      blocks: [
        { type: 'text', paragraphs: ['翻看泡泡玛特 2025 年业绩公告，毛绒产品的收入占比从上一年的 21.7% 上升到 50.4%。这个变化至少说明，理解它的产品已经不能只盯着硬质手办。'], citations: ['popmart-results'] },
        { type: 'bars', caption: '毛绒产品占总收入的比例', note: '同一公司、同一分类口径；2024 与 2025 完整年度。毛绒不等于包挂。', items: [
          { label: '2024 年', value: 21.7, display: '21.7%' },
          { label: '2025 年', value: 50.4, display: '50.4%' },
        ], citations: ['popmart-results'] },
        { type: 'text', paragraphs: [
          '但不能从这里直接跳到“大家都在买情绪价值”。收入同时受到新品、价格、渠道和供应的影响，毛绒大类也不只包括挂件。这张图描述了卖出的东西如何变化，没有解释每个人为什么下单。',
          '更有意思的后续问题是：买回去以后，角色出现在哪些场景？还在包装盒里、放在桌上，还是经常被带出门？这些场景会影响下一次产品该怎么设计。',
        ] },
      ],
    },
    {
      id: 'reasons', number: '03', title: '“想抽到”和“想拥有”，不完全是一回事', evidence: '分析推断',
      blocks: [
        { type: 'text', paragraphs: [
          '盲盒把挑选的一部分交给随机，会制造期待，也可能带来重复和失望。但喜欢造型、想凑一套、朋友间交换、选一件礼物，是不同的事情。把它们都压成“成瘾”，反而看不清产品在满足什么。',
          '可以试着做一个假设：同样的角色，如果能直接选款，还想不想买？如果想，吸引力可能更多来自角色和物件本身；如果不想，也许拆盒的不确定性才是这次购买里更重要的部分。这个问题不是测试消费者对错，而是帮助分开几种需求。',
        ] },
        { type: 'compare', caption: '三种购买理由，对应不同的产品问题（分析框架）', columns: ['想要的事情', '更值得观察什么'], rows: [
          ['喜欢一个角色，想天天看见', '造型、材质、摆放或携带是否方便'],
          ['想完成一套，或和朋友交换', '款式之间的联系、重复款怎么处理'],
          ['想送一件能表达心意的礼物', '对方的偏好、能否选款、包装与预算'],
        ] },
      ],
    },
    {
      id: 'top-toy', number: '04', title: '拿 TOP TOY 对照时，先别急着判输赢', evidence: '混合证据',
      blocks: [
        { type: 'text', paragraphs: [
          '比较两家潮玩店，很容易写成“一个做 IP，一个做渠道”。这个说法过于整齐。泡泡玛特也要做渠道；名创优品的 2025 年业绩公告则把 TOP TOY 的业务列为潮流玩具的设计、购买及销售，不能把它缩成只负责摆货的货架。',
        ], citations: ['miniso-results'] },
        { type: 'text', paragraphs: [
          '更适合带去观察门店的问题是：顾客是为某个角色来的，还是路过后被商品吸引？同一角色换一种材质或用途，会不会再次被拿起来？看到喜欢的东西时，人先问角色名、价格，还是有没有现货？',
          '这些问题暂时没有统一答案。但它们能把比较拉回具体的商品、陈列和选择过程，也避免拿两张总收入表直接判断哪家的产品更好。',
        ] },
      ],
    },
  ],
  sources: [
    { id: 'official-products', title: 'THE MONSTERS 官方商品目录', publisher: 'POP MART 官方商城', url: 'https://www.popmart.com/ca/collection/143', accessed: '2026-09-05', note: '用于核对毛绒挂件、耳机包等商品形态；未使用页面价格作跨市场比较。' },
    { id: 'popmart-results', title: '泡泡玛特 2025 年年度业绩公告', publisher: '泡泡玛特 / 香港交易所', url: 'https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0325/2026032500286_c.pdf', accessed: '2026-09-05', note: '2026 年 3 月 25 日发布；PDF 第 34 页的产品分类收入表。本文采用 2024、2025 完整年度口径，不代表 2026 年实时销售结构。' },
    { id: 'miniso-results', title: '名创优品 2025 年年度业绩公告', publisher: '名创优品 / 香港交易所', url: 'https://www.hkexnews.hk/listedco/listconews/sehk/2026/0331/2026033101220_c.pdf', accessed: '2026-09-05', note: '2026 年 3 月 31 日发布；PDF 第 37 页的分部报告列出 TOP TOY 业务范围。本文未将名创优品集团数据等同于 TOP TOY。' },
  ],
};
