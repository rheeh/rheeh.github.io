export type Project = {
  id: string;
  number: string;
  title: string;
  type: string;
  summary: string;
  tags: string[];
  accent: string;
  overview: string;
  details: string[];
  tools: string[];
  demoUrl?: string;
};

export const profile = {
  name: 'Z.',
  shortName: 'Z.',
  role: 'Product / AI / Systems',
  location: 'Guangzhou, China',
  status: 'Open to product opportunities',
  intro: '把模糊的业务规则、用户问题和 AI 能力，整理成可以被验证的产品方案。',
  englishIntro:
    'I turn ambiguous user problems, business rules and AI capabilities into product decisions that can be tested.',
  about:
    '我有 AI 产品实习、0→1 原型搭建与科研训练的背景。比起功能「能不能做」，我更关心三件事：用户为什么需要它、系统在什么边界下工作、用什么指标判断它真的有效。',
  currently: [
    ['Seeking', '产品经理 / AI 产品 / 内容产品岗位'],
    ['Building', '可以被招聘方快速验证的产品案例集'],
    ['Researching', '内容分发、用户经营、AI 知识工作流'],
    ['Playing', '派对、MOBA、叙事与女性向游戏'],
  ],
  interests: [
    { label: 'Games', note: '好玩法让规则变得直观，好运营让世界持续生长。' },
    { label: 'Products', note: '一个好产品不只解决问题，也会让用户明白自己正在做什么。' },
    { label: 'Research', note: '证据边界不是保守，而是做出更可靠判断的前提。' },
    { label: 'Stories', note: '叙事是理解用户动机和情绪回报的另一种界面。' },
  ],
  games: ['蛋仔派对', '王者荣耀', '和平精英', '光与夜之恋', 'QQ 飞车', '橙光游戏'],
  contact: {
    email: 'grunt1948@163.com',
    github: '',
    xhs: '',
    resume: '',
  },
};

export const projects: Project[] = [
  {
    id: 'auralis',
    number: '01',
    title: 'Auralis',
    type: 'AI Product / Audio Workflow',
    summary: '把小说片段变成可编辑、可审阅、可试听的 AI 音频剧制作流程。',
    tags: ['AI Workflow', 'Product', 'Audio', 'Vibe Coding'],
    accent: 'coral',
    overview:
      'Auralis 是一个面向音频剧创作者的工作台：从文本解析、人物设计、台本审阅，到逐句配音和时间线导出，让生成式 AI 进入一条可被人类确认的生产线。',
    details: [
      '把“生成一个音频”拆解为文本理解、角色确认、脚本审阅和逐句制作四个可检查阶段。',
      '保留人物卡、台本草稿和音频 take 等中间结果，让用户可以编辑、比较、重试，而不是接受一次性黑盒输出。',
      '当前公开 Demo 使用本地模拟数据，不需要 API key；真实应用由 Vue、FastAPI、SQLAlchemy 和可配置的 LLM/TTS provider 支撑。',
    ],
    tools: ['Vue 3', 'FastAPI', 'SQLAlchemy', 'LLM / TTS', 'FFmpeg'],
    demoUrl: '/projects/auralis/',
  },
  {
    id: 'dragonpass',
    number: '02',
    title: 'DragonPass AI Customer Service',
    type: 'AI Product Internship',
    summary: '把客服 SOP 翻译成 Multi-Agent 对话流程，并用 CSAT、转人工率验证体验。',
    tags: ['AI', 'Multi-Agent', 'Service', 'Delivery'],
    accent: 'lavender',
    overview:
      '在 DragonPass 会员服务场景里，参与 App 与邮件渠道的 AI 客服迭代：把业务 SOP 翻译成可实现、可测试、有兜底的对话流程。',
    details: [
      '负责休息室查询与 ID&V 身份验证场景，梳理用户意图、字段、业务规则、对话分支与异常路径。',
      '参与需求澄清、Review、UI 对接与研发/测试对齐，推动相关场景进入 UK 产品与业务验收。',
      '结合 CSAT、IRR、转人工率、放弃率与问题聚类等看板信号识别体验断点。',
    ],
    tools: ['Figma', 'Feishu', 'Jira', 'Zendesk', 'Product Analytics'],
  },
  {
    id: 'knowledge-world',
    number: '03',
    title: 'Knowledge World',
    type: 'AI Product / 0–1',
    summary: '一个 AI 个人知识操作系统：采集、总结、对话、图谱，端到端跑通。',
    tags: ['Knowledge', 'AI', 'RAG', 'Product'],
    accent: 'sage',
    overview:
      '多平台刷到的内容存不下来、想不起来、用不上——针对这个问题，设计并搭建了 AI 驱动的个人知识操作系统。',
    details: [
      '拆解“内容采集 - 结构化处理 - 总结复盘 - 对话交互 - 图谱展示”完整链路。',
      '设计 URL 解析、元数据抽取与去重，并规划“时间维 + 主题维”增量总结。',
      '完成 Vue3 + Flask 原型的端到端闭环，并用竞品与 MVP 报告重新校准定位。',
    ],
    tools: ['Vue 3', 'Flask', 'LLM', 'Information Architecture'],
  },
  {
    id: 'drink-diy',
    number: '04',
    title: '饮 DIY',
    type: 'Consumer Product / Prototype',
    summary: '把口味偏好和营养约束变成可调参数，让 DIY 饮品有透明的决策过程。',
    tags: ['Consumer', 'AI', 'Health', 'UGC'],
    accent: 'peach',
    overview:
      '一个 AI 驱动的个性化饮品设计工具：在 DIY 的参与感、口味偏好和健康约束之间，建立透明的决策过程。',
    details: [
      '构建“生成 → 反馈 → 参数化优化”核心闭环。',
      '将组合/分层调饮、实时营养计算与减脂/控糖预警放在同一决策界面。',
      '通过 UGC 配方沉淀配料库，为搜索、平替生成和趋势分析留出数据链路。',
    ],
    tools: ['Figma', 'Low-code', 'AI Workflow', 'Nutrition Logic'],
  },
  {
    id: 'geneembedllm',
    number: '05',
    title: 'GeneEmbedLLM',
    type: 'Research / AI / Bioinformatics',
    summary: '用近 2 万基因的多源生物医学语料，训练可复用的基因语义表示。',
    tags: ['LLM', 'Embedding', 'Research', 'Evidence'],
    accent: 'blue',
    overview:
      '把分散在五个权威数据库里的生物医学知识，转成统一的基因语义表示——也是我处理数据、实验与证据边界的方法训练。',
    details: [
      '整合 5 个权威数据库，构建近 2 万基因的结构化语料。',
      '基于 Longformer 进行长文本建模，引入属性感知机制与对比学习。',
      '将候选召回、直接证据和下游表征分开，保留不确定性而不夸大结论。',
    ],
    tools: ['Python', 'PyTorch', 'Longformer', 'Biostatistics'],
  },
];

export const research = {
  title: 'GeneEmbedLLM',
  description:
    '探索如何把生物医学文本中的知识，转换为可用于下游发现的基因语义表示。',
  concepts: ['Gene Representation', 'Contrastive Learning', 'Longformer', 'Evidence Boundary'],
};
