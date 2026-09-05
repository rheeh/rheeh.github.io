import type { AnalysisShowcase } from './types';

export const analysisShowcases: AnalysisShowcase[] = [
  {
    slug: 'aigc-video-platforms',
    number: '04',
    category: '工具与制作',
    title: 'AI 视频工具，生成之后还有多少事要做？',
    summary: '从角色一致性、修改和协作说起，看看生成一个镜头与交付一支片子之间的距离。',
    format: '资料笔记',
    href: '/analysis/aigc-video-platforms.html',
    capabilityTags: ['市场地图', '竞品分析', '商业模式'],
    accent: 'cobalt',
  },
  {
    slug: 'moba-system-design',
    number: '07',
    category: '游戏里的数值',
    title: 'MOBA 里的优势，是怎样越滚越大的？',
    summary: '用几个简化模型，看金币、装备与战斗如何互相影响。图表是示意，并非游戏后台数据。',
    format: '图表笔记',
    href: '/analysis/moba-system-design.html',
    capabilityTags: ['数值设计', '系统拆解', '游戏策划'],
    accent: 'sage',
  },
  {
    slug: 'moba-failure-retrospective',
    number: '08',
    category: '游戏里的关系',
    title: '有了漫威角色，为什么仍留不住玩家？',
    summary: '熟悉的角色能让人试一局，操作、匹配和朋友是否还在，则影响下一次是否打开游戏。',
    format: '图文笔记',
    href: '/analysis/moba-failure-retrospective.html',
    capabilityTags: ['失败复盘', '机制分析', '产品策略'],
    accent: 'ink',
  },
];
