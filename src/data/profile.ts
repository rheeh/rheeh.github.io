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
};

export const profile = {
  name: 'Z.',
  shortName: 'Z.',
  role: 'Product / AI / Systems',
  location: 'Guangzhou, China',
  status: 'Open to product opportunities',
  intro: '把复杂业务规则、用户问题和 AI 能力，整理成可验证的产品方案。',
  englishIntro:
    'I turn ambiguous user problems, business rules and AI capabilities into product decisions that can be tested.',
  about:
    '我有 AI 产品实习、0到1原型搭建与科研训练背景。我关心的不只是功能“能不能做”，而是用户为什么需要它、系统在什么边界下工作，以及如何用指标判断它是否真的有效。',
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
    id: 'dragonpass',
    number: '01',
    title: 'DragonPass AI Customer Service',
    type: 'AI Product Internship',
    summary: '从 FAQ 问答到 Multi-Agent 任务型服务的产品流程与质量评估。',
    tags: ['AI', 'Multi-Agent', 'Service', 'Delivery'],
    accent: 'lavender',
    overview:
      '围绕会员服务咨询场景，参与 DragonPass Global App 与 Email 渠道 AI 客服迭代，将业务 SOP 转译为可实现、可测试、有兜底的对话流程。',
    details: [
      '负责休息室查询与 ID&V 身份验证场景，梳理用户意图、字段、业务规则、对话分支与异常路径。',
      '参与需求澄清、Review、UI 对接与研发/测试对齐，推动相关场景进入 UK 产品与业务验收。',
      '结合 CSAT、IRR、转人工率、放弃率与问题聚类等看板信号识别体验断点。',
    ],
    tools: ['Figma', 'Feishu', 'Jira', 'Zendesk', 'Product Analytics'],
  },
  {
    id: 'knowledge-world',
    number: '02',
    title: 'Knowledge World',
    type: 'AI Product / 0–1',
    summary: '从多源内容采集到总结、对话与知识图谱的个人知识工作流。',
    tags: ['Knowledge', 'AI', 'RAG', 'Product'],
    accent: 'sage',
    overview:
      '针对用户在公众号、小红书、B 站等平台摄入信息后难以沉淀、复盘和复用的问题，设计 AI 驱动的个人知识操作系统。',
    details: [
      '拆解“内容采集 - 结构化处理 - 总结复盘 - 对话交互 - 图谱展示”完整链路。',
      '设计 URL 解析、元数据抽取与去重，并规划“时间维 + 主题维”增量总结。',
      '完成 Vue3 + Flask 原型的端到端闭环，并用竞品与 MVP 报告重新校准定位。',
    ],
    tools: ['Vue 3', 'Flask', 'LLM', 'Information Architecture'],
  },
  {
    id: 'drink-diy',
    number: '03',
    title: '饮 DIY',
    type: 'Consumer Product / Prototype',
    summary: '把口味偏好、营养约束和用户反馈变成可调整的配方参数。',
    tags: ['Consumer', 'AI', 'Health', 'UGC'],
    accent: 'peach',
    overview:
      '一个 AI 驱动的个性化饮品设计工具，探索如何在 DIY 的参与感、口味与健康约束之间建立透明的决策过程。',
    details: [
      '构建“生成 → 反馈 → 参数化优化”核心闭环。',
      '将组合/分层调饮、实时营养计算与减脂/控糖预警放在同一决策界面。',
      '通过 UGC 配方沉淀配料库，为搜索、平替生成和趋势分析留出数据链路。',
    ],
    tools: ['Figma', 'Low-code', 'AI Workflow', 'Nutrition Logic'],
  },
  {
    id: 'geneembedllm',
    number: '04',
    title: 'GeneEmbedLLM',
    type: 'Research / AI / Bioinformatics',
    summary: '用多源生物医学文本学习近 2 万基因的语义表示。',
    tags: ['LLM', 'Embedding', 'Research', 'Evidence'],
    accent: 'blue',
    overview:
      '一个将分散生物医学知识转化为统一基因表示的科研项目，也是我处理数据、实验与证据边界的方法训练。',
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
    '探索如何把生物医学文本中的知识转换为可用于下游发现的基因语义表示。',
  concepts: ['Gene Representation', 'Contrastive Learning', 'Longformer', 'Evidence Boundary'],
};
