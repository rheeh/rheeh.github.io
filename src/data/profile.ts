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
  visual: 'auralis' | 'stocks' | 'resume' | 'genes';
  links: ProjectLink[];
};

export const profile = {
  name: 'Z.',
  tagline: '产品、AI，与一些真正能打开的项目。',
  note: '这里放我做过的产品、代码和调研笔记。项目都提供在线体验或公开源码。',
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
    visual: 'auralis',
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
    visual: 'stocks',
    links: [{ label: '查看 GitHub', href: 'https://github.com/rheeh/ttt', kind: 'source' }],
  },
  {
    id: 'resume-assistant',
    title: '门店求职助手',
    type: '面向服务岗位的简历产品',
    summary: '通过三步问答生成一页简历、招聘平台自我介绍、岗位匹配建议和面试准备材料。',
    tags: ['Vue', 'Django', 'AI Workflow'],
    visual: 'resume',
    links: [{ label: '查看 GitHub', href: 'https://github.com/rheeh/resume-assistant', kind: 'source' }],
  },
  {
    id: 'geneembedllm',
    title: 'GeneEmbedLLM',
    type: '基因语义表示研究',
    summary: '整合多源生物医学语料，训练面向下游发现的基因向量，并明确区分候选召回与疾病证据。',
    tags: ['Python', 'Longformer', 'Bioinformatics'],
    visual: 'genes',
    links: [{ label: '查看 GitHub', href: 'https://github.com/rheeh/GeneEmbedLLM', kind: 'source' }],
  },
];
