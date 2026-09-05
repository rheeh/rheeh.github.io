export type ProjectLink = {
  label: string;
  href: string;
  kind: 'demo' | 'source';
};

export type Project = {
  id: string;
  title: string;
  type: string;
  summary: string;
  tags: string[];
  links: ProjectLink[];
};

export const profile = {
  name: 'Zoe Zhang',
  contact: {
    email: 'grunt1948@163.com',
    github: 'https://github.com/rheeh',
  },
};

export const projects: Project[] = [
  {
    id: 'auralis',
    title: 'Auralis',
    type: 'AI 广播剧制作工作台',
    summary: '从小说解析、人物确认、台本审阅到逐句配音，把生成过程做成可以反复编辑的生产流程。',
    tags: ['Vue', 'FastAPI', 'LLM / TTS'],
    links: [
      { label: '体验 Demo', href: 'https://rheeh.github.io/auralis/#/home', kind: 'demo' },
      { label: '查看 GitHub', href: 'https://github.com/rheeh/auralis', kind: 'source' },
    ],
  },
  {
    id: 'ttt',
    title: '知行股研',
    type: 'A 股研究工作台',
    summary: '把自选池、规则评分、技术指标、研究快照和后续表现核验放进一套本地工作流。',
    tags: ['React', 'FastAPI', 'SQLite'],
    links: [
      { label: '体验 Demo', href: '/projects/zhixing/', kind: 'demo' },
      { label: '查看 GitHub', href: 'https://github.com/rheeh/ttt', kind: 'source' },
    ],
  },
  {
    id: 'resume-assistant',
    title: '门店求职助手',
    type: '面向服务岗位的简历产品',
    summary: '通过三步问答生成一页简历、招聘平台自我介绍、岗位匹配建议和面试准备材料。',
    tags: ['Vue', 'Django', 'AI Workflow'],
    links: [{ label: '查看 GitHub', href: 'https://github.com/rheeh/resume-assistant', kind: 'source' }],
  },
  {
    id: 'geneembedllm',
    title: 'GeneEmbedLLM',
    type: '基因语义表示研究',
    summary: '整合多源生物医学语料，训练面向下游发现的基因向量，并明确区分候选召回与疾病证据。',
    tags: ['Python', 'Longformer', 'Bioinformatics'],
    links: [{ label: '查看 GitHub', href: 'https://github.com/rheeh/GeneEmbedLLM', kind: 'source' }],
  },
];

export const graduateDay = {
  ending: { line: '今天的故事，就先停在这里。', prompt: '那明天呢？', reply: '先把闹钟定好。剩下的，明天再说。' },
  title: '研究生的一天',
  category: 'AI 创作 / 插画系列 · 5 幅',
  description: '早起、实验、深夜回家。把实验室里的小小崩溃，画成五张黑白线稿。',
  styleNote: 'AI 生成 · 喜茶风格线稿练习',
  href: '/illustrations/graduate-day/',
  images: [
    { id: '01', title: '再睡五分钟', caption: '早上七点，和闹钟再商量一下。', alt: '巨大的七点闹钟旁，一个戴学位帽的小人说再睡五分钟。' },
    { id: '02', title: '今天一定要出结果', caption: '离心机、移液器和培养皿之间，忙忙忙。', alt: '小人抱着实验工具，周围是巨大的离心机、烧杯、移液器和培养皿，文字为今天一定要出结果。' },
    { id: '03', title: '深夜回家', caption: '门上的时钟，已经走到二十三点。', alt: '小人背着包走向一扇巨大的门，门上标着23:00，小人说累瘫了。' },
    { id: '04', title: '怎么会这样', caption: '回到家，脑子里还在重播那个打了叉的培养皿。', alt: '培养皿上写着实验结果和失败，中间画着大叉，小人抱头说怎么会这样。' },
    { id: '05', title: '生物的世纪', caption: '世纪很长，这个小人决定先躺一会儿。', alt: '牌子上写着二十一世纪是生物的世纪，下方的小人仰面躺倒。' },
  ],
};

export type CreativeFormat = 'illustration' | 'poster' | 'video';
export type CreativeWork = {
  id: string;
  title: string;
  format: CreativeFormat;
  summary: string;
  process: string;
  href: string;
  previews: { src: string; width: number; height: number }[];
};

export const creativeCollection = {
  title: '和 AI 一起，做点好玩的',
  label: 'AI 创作',
  description: '把一个念头变成图像、海报，或一小段故事。',
  formats: [
    { id: 'illustration', label: '插画系列' },
    { id: 'poster', label: '海报设计' },
    { id: 'video', label: '短片 / 动态影像' },
  ] as const,
};

export const creativeWorks: CreativeWork[] = [
  {
    id: 'graduate-day',
    title: graduateDay.title,
    format: 'illustration',
    summary: graduateDay.description,
    process: 'AI 生成',
    href: graduateDay.href,
    previews: ['01', '02', '03', '04', '05'].map((id) => ({
      src: `/illustrations/graduate-day/${id}.png`, width: 624, height: 1088,
    })),
  },
];
