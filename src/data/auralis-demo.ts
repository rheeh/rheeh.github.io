export const auralisDemo = {
  project: {
    label: 'PROJECT / 001',
    title: '雨夜来信',
    caption: '一段关于等待与重逢的悬疑片段',
  },
  sourceText:
    '雨已经下了三个小时。林默站在没有亮灯的楼道里，手里攥着一封没有寄出的信。楼下传来脚步声，停在门外。\n\n“你还在等那封信吗？”周岚问。\n“她说今晚会回来。”林默没有回头。',
  instruction: '旁白克制，用对白和环境声推进情节。',
  roles: [
    { avatar: '林', name: '林默', role: '主角 · 克制、寡言', voice: '克制但带一点迟疑' },
    { avatar: '周', name: '周岚', role: '来访者 · 直接、敏锐', voice: '语速偏快，语气直接' },
  ],
  script: [
    { type: '旁白', kind: 'narration', text: '雨已经下了三个小时。林默站在没有亮灯的楼道里。' },
    { type: '音效', kind: 'sfx', text: '远处雷声，雨水持续敲打窗台。' },
    { type: '林默', kind: 'dialogue', text: '她说今晚会回来。' },
    { type: '周岚', kind: 'dialogue', text: '你还在等那封信吗？' },
  ],
  audioLines: [
    { number: '01', speaker: '旁白', text: '雨已经下了三个小时。', frequency: 252 },
    { number: '02', speaker: '音效', text: '远处雷声，雨水敲打窗台。', frequency: 294 },
    { number: '03', speaker: '林默', text: '她说今晚会回来。', frequency: 336 },
    { number: '04', speaker: '周岚', text: '你还在等那封信吗？', frequency: 378 },
  ],
} as const;

export type DemoStage = 'source' | 'roles' | 'script' | 'production';

