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
  framework?: {
    src: string;
    alt: string;
    caption: string;
    steps: { title: string; description: string }[];
    applications: string;
  };
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
    type: '个人 A 股研究工具',
    summary: '把自选池、规则评分、技术指标、研究快照和后续表现核验放进一套本地工作流。',
    tags: ['React', 'FastAPI', 'SQLite'],
    links: [{ label: '查看 GitHub', href: 'https://github.com/rheeh/ttt', kind: 'source' }],
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
    summary: '把分散在不同数据库里的基因功能、通路和组织表达信息整理成文本，再学习为可比较的基因向量，用于研究基因之间的关联。',
    framework: {
      src: '/projects/geneembedllm/framework.png',
      alt: 'GeneEmbedLLM 论文框架：整合多源基因属性，构建结构化文本与增强视图，通过 Longformer、属性感知注意力池化和对比学习生成基因向量。',
      caption: '论文框架 · 从基因属性到语义向量',
      steps: [
        { title: '整合数据', description: '汇集 Harmonizome、OmniPath、Ensembl、NCBI Gene 和 Human Protein Atlas，清洗并统一基因属性。' },
        { title: '组织文本', description: '把功能、通路、组织等属性写入统一模板，构造增强文本，并逐步引入更难区分的负样本。' },
        { title: '学习表示', description: '结合 Longformer、属性感知注意力池化与对比学习，将基因文本编码为向量。' },
      ],
      applications: '下游任务：基因／蛋白质相互作用预测、功能属性预测与通路一致性分析。',
    },
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

export const homeIntro = {
  eyebrow: 'Zoe Zhang / Portfolio & Playground',
  title: 'ZOE.',
  description: '做点有用的，也做点好玩的。',
  image: '/hero/ink-cat.png',
  imageAlt: '套印版画风格的黑猫：夸张的长身体、芥末黄眼睛和一点朱红色，懒洋洋地探出爪子。',
  greeting: ['先看看，别急着走。', '喵，灵感还在路上。', '好啦，往下看项目吧。'],
};

export const lifeMoments = {
  title: ['项目之间，', '留一点好玩。'],
  description: '一个工具界面、一张想法草图、一个实验室里的小人。不同方向的创作，先收在这里。',
  cards: [
    { title: '让文字有声音', caption: 'Auralis / AI 广播剧', alt: 'Auralis 广播剧工具的界面截图。', src: '/project-assets/auralis-home.jpg', href: 'https://rheeh.github.io/auralis/#/home' },
    { title: '收藏之后呢？', caption: '关于知识复用的一点观察', alt: '从内容收藏到知识复用的概述图。', src: '/report-assets/knowledge-reuse-overview.png', href: '/reports/knowledge-world/' },
    { title: '今天一定要出结果', caption: '研究生的一天 / AI 插画', alt: '实验仪器之间的小人，来自研究生的一天插画。', src: '/illustrations/graduate-day/02.png', href: '/illustrations/graduate-day/' },
  ],
};
