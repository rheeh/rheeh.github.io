import type { Report } from './types';

export const knowledgeWorldReport: Report = {
  slug: 'knowledge-world',
  number: '02',
  category: 'Competitive Analysis / AI Product',
  title: 'Knowledge World 竞品分析：从“收藏更多”到“真正复用”',
  shortTitle: 'Knowledge World',
  summary:
    '比较 Notion、Readwise Reader、Cubox 与 mymind 的采集、阅读、组织与 AI 能力，为一个个人 AI 知识产品确定更聚焦的差异化切口和 MVP。',
  readTime: '14 min read',
  accent: 'lavender',
  heroImages: [
    {
      src: '/report-assets/readwise-reader.jpg',
      alt: 'Readwise Reader 官方产品界面',
      sourceId: 'readwise-product',
    },
    {
      src: '/report-assets/cubox.jpg',
      alt: 'Cubox 官方产品展示图',
      sourceId: 'cubox-product',
    },
    {
      src: '/report-assets/notion.jpg',
      alt: 'Notion 官方产品展示图',
      sourceId: 'notion-clipper',
    },
    {
      src: '/report-assets/mymind.jpg',
      alt: 'mymind 官方产品展示图',
      sourceId: 'mymind-what',
    },
  ],
  capabilityTags: ['竞品框架', 'JTBD', 'MVP 取舍', '指标树', 'AI 产品边界'],
  question:
    '当采集、总结、语义搜索和“与知识库对话”都成为标配后，一个新知识产品还能为谁解决什么更具体的问题？',
  conclusion:
    'Knowledge World 不应同时做另一个阅读器、笔记库、搜索引擎和知识图谱。最有价值的切口是“为正在进行的项目建立可追溯的决策记忆”：不只告诉用户收藏了什么，还要记住当时为什么收藏、后来用在了哪个判断上。',
  sections: [
    {
      id: 'problem',
      number: '01',
      title: '问题不是“信息太多”，而是“收藏与行动断开”',
      intro: '用户收藏一篇内容时通常带着一个当下意图，但现有产品往往只保留了内容，没有保留意图。',
      evidence: '分析推断',
      blocks: [
        {
          type: 'flow',
          tracks: [
            {
              label: '当前常见链路',
              tone: 'dark',
              steps: [
                { title: '看到好内容', note: '在小红书、公众号、B站、网页或 PDF 中遇到' },
                { title: '先收藏', note: '缺少时间，将“以后看”当作当下完成' },
                { title: '自动分类/总结', note: '系统降低了内容整理成本' },
                { title: '内容沉底', note: '用户不再知道它与当前任务有什么关系' },
              ],
            },
            {
              label: 'Knowledge World 应验证的链路',
              tone: 'lavender',
              steps: [
                { title: '采集内容', note: '尽量不打断原平台的消费节奏' },
                { title: '保留一句意图', note: '“我想把这个用在哪里？”' },
                { title: '关联活动项目', note: '让内容与一个正在进行的决策绑定' },
                { title: '在关键节点召回', note: '会议、方案、复盘或新证据出现时重新提醒' },
                { title: '记录被如何使用', note: '从“收藏数”转向“有效复用”' },
              ],
            },
          ],
        },
        {
          type: 'callout',
          label: '核心 JTBD',
          title: '当我在为一个项目连续收集多平台资料时',
          body:
            '我想让系统记住“它为什么对这个项目有用”，并在我做方案、复盘或改变判断时带着原始来源召回它，而不是让我再次整理一遍收藏夹。',
          tone: 'lavender',
        },
      ],
    },
    {
      id: 'landscape',
      number: '02',
      title: '四类强产品，已经占据四个不同心智',
      intro: '竞品不只是功能相似，而是与用户争夺同一个任务时刻。',
      evidence: '公开事实',
      blocks: [
        {
          type: 'compare',
          caption: '竞品能力地图（基于各产品官方功能说明）',
          columns: ['维度', 'Notion', 'Readwise Reader', 'Cubox', 'mymind'],
          rows: [
            ['核心心智', '可编辑的工作空间', '深度阅读与高亮复习', '中文场景的稍后阅读', '无压力的视觉记忆'],
            ['采集', '浏览器剪藏、移动分享', '文章、邮件、RSS、PDF、EPUB、视频等', '网页、微信转发、Newsletter、API', '网页、图片、文本片段、快速笔记'],
            ['内容处理', '库、属性、页面与任务化', '沉浸阅读、标注、TTS、过滤视图', '网页快照、阅读模式、多色标注', '自动标签、OCR、Smart Spaces、图像联想'],
            ['AI', '工作区与连接应用问答，并引用来源', 'Ghostreader 文档总结、解释、自定义提示与对话', 'AI 解读、要点、幻影高亮', '自动标签、AI 总结、PDF 分析'],
            ['突出优势', '结构自由 + 协作 + 产出', '支持复杂阅读素材的完整链路', '微信与中文内容采集更贴近本土习惯', '不要求用户手动分类的视觉体验'],
            ['对新产品的挤压', '通用工作空间已可承接内容产出', '专业阅读场景的深度门槛很高', '“收藏 + AI总结”不再是差异化', '自动组织与私密美感已有鲜明品牌'],
          ],
          citations: [
            'notion-clipper',
            'notion-connectors',
            'readwise-docs',
            'readwise-ghostreader',
            'cubox-product',
            'cubox-pricing',
            'mymind-what',
            'mymind-pricing',
          ],
        },
        {
          type: 'metrics',
          items: [
            { value: '7+', label: 'Reader 公开支持的主要素材类型', note: '文章、Newsletter、EPUB、PDF、视频、推文、RSS 等' },
            { value: '70 万', label: 'Cubox 官方当前读者口径', note: '来自中文官方价格页' },
            { value: '72 h', label: 'Notion AI Connector 首次索引最长可能时间', note: '说明跨应用知识接入存在明显延迟' },
            { value: '24 h', label: 'Notion 断开 Connector 后数据删除口径', note: '说明权限与数据边界是核心产品问题' },
          ],
          citations: ['readwise-docs', 'cubox-pricing', 'notion-connectors'],
        },
      ],
    },
    {
      id: 'gap',
      number: '03',
      title: '真正的机会缝隙：项目记忆，而不是全能第二大脑',
      intro: '从竞品很强的部分退开，找一个能在两周内验证的窄问题。',
      evidence: '分析推断',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              label: '不做 01',
              title: '不做另一个阅读器',
              body: '网页解析、PDF/EPUB、TTS、标注和离线体验的技术与体验深度已被 Readwise Reader 和 Cubox 拉高。',
            },
            {
              label: '不做 02',
              title: '不做无限自由的笔记库',
              body: 'Notion 在页面、数据库、协作与产出上有强心智，新产品应将结构放到系统内部，而不是让用户再建一套库。',
            },
            {
              label: '不做 03',
              title: '不以知识图谱作为首个卖点',
              body: '图谱很容易“看起来有价值”，但在没有验证用户会回来复用之前，它可能只是昂贵的可视化。',
            },
            {
              label: '做 01',
              title: '保留“收藏理由”',
              body: '采集时只多问一个轻量问题：这条内容准备用在哪个项目/判断上？',
            },
            {
              label: '做 02',
              title: '只围绕活动项目组织',
              body: '默认首页不是无限收藏流，而是最近的 3-5 个活动项目、待决策问题与新证据。',
            },
            {
              label: '做 03',
              title: '输出带来源的决策摘要',
              body: '系统不只总结文章，而是围绕用户的问题归纳“相同证据、冲突证据、未决问题”。',
            },
          ],
        },
        {
          type: 'callout',
          label: '定位句',
          title: '为正在进行的项目，建立可追溯的 AI 决策记忆',
          body:
            '面向同时从公众号、小红书、B站、网页和 PDF 收集资料的学生、产品与研究人群；帮他们保留采集意图、发现冲突证据，并在做决定时回到原始来源。',
          tone: 'sage',
        },
      ],
    },
    {
      id: 'mvp',
      number: '04',
      title: 'MVP 不验证功能是否可用，而验证复用是否发生',
      intro: '将首版范围从“五步完整链路”收缩为一个有明确成功条件的闭环。',
      evidence: '方案建议',
      blocks: [
        {
          type: 'compare',
          caption: 'MVP 功能取舍',
          columns: ['能力', '版本', '保留/后置理由', '验证信号'],
          rows: [
            ['网页/URL 采集 + 快照', 'P0', '没有稳定来源，后续问答与追溯都无法成立', '采集成功率、解析可用率'],
            ['一句收藏意图 + 项目绑定', 'P0', '核心差异化，也是后续召回的上下文', '意图填写率、默认建议接受率'],
            ['项目内问答 + 原文引用', 'P0', '必须让用户看到结论来自哪里，并能回到原文', '引用点击率、答案修正率'],
            ['每周“新证据/冲突/待决”摘要', 'P1', '验证系统能否主动召回而不制造噪音', '周摘要打开率、从摘要进入项目率'],
            ['自动知识图谱', 'Later', '先证明用户会复用，再优化关系浏览', '图谱节点到原文的有效点击'],
            ['人设化长期对话', 'Later', '人设不解决来源质量、权限和召回准确性', '在基础问答有稳定留存后再验证'],
          ],
        },
        {
          type: 'proposal',
          name: '“七天决策记忆”原型测试',
          objective: '验证用户是否会因为“意图 + 项目 + 可追溯召回”而重新使用已收藏内容。',
          hypothesis:
            '与只有自动总结的收藏流相比，采集时绑定项目与一句意图，会提高 7 天内的有效复用率。',
          steps: [
            '招募 8-12 位正在做论文、求职作品集或产品方案的用户。',
            '每人建立 1 个活动项目，七天内至少采集 10 条多源内容。',
            '对一半内容仅自动总结，另一半要求绑定意图，比较后续查看与引用。',
            '第 7 天生成带引用的“相同证据/冲突证据/待决问题”摘要，观察用户是否采纳、修正或回到原文。',
          ],
          primaryMetric: '7 日有效复用率 = 被用于笔记/方案/回答并保留引用的收藏条目 ÷ 总收藏条目',
          guardrails: ['采集额外耗时', '意图误分类率', 'AI 引用错误率', '用户手动修正成本'],
        },
      ],
    },
    {
      id: 'metrics',
      number: '05',
      title: '指标不追求“收藏了多少”，而追踪“决策改变了什么”',
      intro: '将北极星指标与可操作的前置指标、质量护栏分开。',
      evidence: '方案建议',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              label: '北极星',
              title: '每周被有效复用的知识单元数',
              body: '必须同时满足：被某个活动项目使用、有明确产出/判断，并保留可追溯来源。',
            },
            {
              label: '前置指标',
              title: '意图绑定与项目召回',
              body: '采集成功率、意图填写率、项目内搜索成功率、引用点击率、周摘要后行动率。',
            },
            {
              label: '质量护栏',
              title: '快不能代替准确与掌控',
              body: '解析失败率、引用错配率、无效提醒关闭率、数据删除延迟、单次任务 AI 成本。',
            },
          ],
        },
        {
          type: 'callout',
          label: 'AI 风险',
          title: '“对话很流畅”不等于“回答可用”',
          body:
            '首版必须把来源紧贴结论展示，允许用户一键回到原文上下文；当来源之间冲突或信息不足时，系统应该显示不确定性，而不是生成一个看似完整的统一答案。',
          tone: 'ink',
          citations: ['notion-connectors'],
        },
      ],
    },
  ],
  sources: [
    {
      id: 'notion-clipper',
      title: 'Notion Web Clipper',
      publisher: 'Notion',
      url: 'https://www.notion.com/en-US/web-clipper',
      accessed: '2026-08-30',
    },
    {
      id: 'notion-connectors',
      title: 'Notion AI Connectors overview',
      publisher: 'Notion Help Center',
      url: 'https://www.notion.com/help/notion-ai-connectors',
      accessed: '2026-08-30',
    },
    {
      id: 'readwise-product',
      title: 'Readwise Reader',
      publisher: 'Readwise',
      url: 'https://readwise.io/read/',
      accessed: '2026-08-30',
    },
    {
      id: 'readwise-docs',
      title: 'What is Readwise Reader?',
      publisher: 'Readwise Docs',
      url: 'https://docs.readwise.io/reader/docs',
      accessed: '2026-08-30',
    },
    {
      id: 'readwise-ghostreader',
      title: 'What is Ghostreader?',
      publisher: 'Readwise Docs',
      url: 'https://docs.readwise.io/reader/guides/ghostreader/overview',
      accessed: '2026-08-30',
    },
    {
      id: 'cubox-product',
      title: 'Cubox 是什么',
      publisher: 'Cubox 指南',
      url: 'https://help.cubox.pro/',
      accessed: '2026-08-30',
    },
    {
      id: 'cubox-pricing',
      title: '加入 Cubox 会员',
      publisher: 'Cubox',
      url: 'https://cubox.pro/price/',
      accessed: '2026-08-30',
      note: '价格和用户数会变动，以官方页面当前显示为准。',
    },
    {
      id: 'mymind-what',
      title: 'What is mymind?',
      publisher: 'mymind',
      url: 'https://mymind.com/what',
      accessed: '2026-08-30',
    },
    {
      id: 'mymind-pricing',
      title: 'mymind pricing and feature comparison',
      publisher: 'mymind',
      url: 'https://access.mymind.com/pricing',
      accessed: '2026-08-30',
      note: '价格会变动，本报告仅引用功能说明。',
    },
  ],
};
