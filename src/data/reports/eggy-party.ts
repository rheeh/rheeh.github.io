import type { Report } from './types';

export const eggyPartyReport: Report = {
  slug: 'eggy-party',
  number: '03',
  category: 'Game Design / Live Operations',
  title: '《蛋仔派对》拆解：从单局欢乐到 UGC 内容飞轮',
  shortTitle: '蛋仔派对',
  summary:
    '从核心循环、玩家分层、社交动机、UGC 供给与外观商业化出发，分析一款派对游戏如何从“好玩一局”走向长期内容生态。',
  date: '2026.08.30',
  readTime: '13 min read',
  accent: 'dark',
  heroImages: [
    {
      src: '/report-assets/eggy-party-app.jpg',
      alt: '《蛋仔派对》2026 年 Apple App Store 图标',
      sourceId: 'eggy-appstore',
    },
  ],
  capabilityTags: ['核心循环', '玩家分层', 'UGC 生态', '商业化', '活动策划'],
  question:
    '派对竞技的新鲜感天然衰减，《蛋仔派对》如何让玩家不只反复玩官方关卡，而是成为内容消费者、传播者甚至创作者？',
  conclusion:
    '《蛋仔派对》的长期壁垒不只是“一组派对关卡 + 可爱角色”，而是让操作笑料、蛋搭子关系、外观表达与 UGC 创作相互供给。游戏策划的关键不是无限增加功能，而是让更多“只玩”的人以很低成本跨出创作的第一步，同时不破坏轻量、友好和安全的核心体验。',
  sections: [
    {
      id: 'facts',
      number: '01',
      title: '先看得见的产品边界',
      intro: '公开资料可以证明规模、玩法和 UGC 方向，但无法证明具体留存、付费率和排序权重。',
      evidence: '公开事实',
      blocks: [
        {
          type: 'metrics',
          items: [
            { value: '1 亿+', label: '中国月活跃用户', note: '网易 2024 全球上线新闻引用的当时口径' },
            { value: '1 亿+', label: '玩家生成内容', note: '同一官方新闻中的当时口径' },
            { value: '32 人', label: '经典闯关局规模', note: 'Apple 编辑故事的公开玩法描述' },
            { value: '9+', label: 'App Store 年龄分级', note: '页面同时标注 UGC、聊天、抽奖箱与 App 内购买' },
          ],
          citations: ['eggy-global', 'apple-editorial', 'eggy-appstore-detail'],
        },
        {
          type: 'callout',
          label: '数据一致性',
          title: '不把商店文案当成精确实时用户数',
          body:
            '2026 年 App Store 标题使用“7亿人都在玩”，正文仍保留“5亿玩家”的旧口径，两者不一致。因此本报告只将其视为“大规模国民休闲游戏”的定性证据，不用于精确计算渗透率。',
          tone: 'peach',
          citations: ['eggy-appstore'],
        },
        {
          type: 'text',
          paragraphs: [
            '网易的公开资料将《蛋仔派对》描述为移动端多人派对游戏：玩家通过障碍与生存类小游戏竞争，也可以与朋友在蛋仔岛社交，或通过编辑器创作、分享自定义关卡。',
            '2025 年网易 ESG 报告进一步披露，产品将 UGC 与 AIGC 结合，推出视频生成动作、剧情动画编辑器等能力，说明编辑器已经不只是关卡布置工具，而在向更广义的内容创作平台扩展。',
          ],
          citations: ['eggy-global', 'netease-esg-2025'],
        },
      ],
    },
    {
      id: 'loop',
      number: '02',
      title: '核心循环：把失败也变成社交内容',
      intro: '派对游戏的独特价值是，玩家不只为“赢”获得回报，也为意外、笑料与同伴互动获得回报。',
      evidence: '分析推断',
      blocks: [
        {
          type: 'flow',
          tracks: [
            {
              label: '单局欢乐循环',
              tone: 'gold',
              steps: [
                { title: '选择一局', note: '官方匹配、特殊玩法或乐园地图' },
                { title: '低门槛操作', note: '跑、跳、滚动、碰撞与道具，快速理解' },
                { title: '高变量冲突', note: '物理碰撞、玩家互坑、随机与地图陷阱' },
                { title: '情绪峰值', note: '翻盘、失败笑料、拥抱/托举与一起过关' },
                { title: '立即再来', note: '单局短、失败轻，结果可分享可复仇' },
              ],
            },
            {
              label: '长期关系循环',
              tone: 'lavender',
              steps: [
                { title: '找蛋搭子', note: '把随机对局转化为固定关系' },
                { title: '一起探索', note: '官方新玩法、活动、联动与 UGC 地图' },
                { title: '外观表达', note: '让角色成为社交展示与身份记忆' },
                { title: '产生内容', note: '截图、录屏、打卡、地图评论与二创' },
                { title: '返回关系', note: '因为朋友、创作者或新内容而回流' },
              ],
            },
          ],
          citations: ['apple-editorial', 'eggy-appstore'],
        },
        {
          type: 'cards',
          columns: 4,
          items: [
            {
              label: '操作层',
              title: '易懂，不易稳定',
              body: '基础输入少，但物理、道具和他人行为让结果保持变化。',
            },
            {
              label: '情绪层',
              title: '失败不只是惩罚',
              body: '圆润角色、碰撞与互坑使失败可被理解为笑料和共同经历。',
            },
            {
              label: '社交层',
              title: '共同记忆比排名更持久',
              body: '玩家可以竞争、合作、打卡或只是待在一起，降低社交压力。',
            },
            {
              label: '内容层',
              title: 'UGC 延长玩法寿命',
              body: '当官方关卡被掌握后，创作者供给新题材、新规则与新叙事。',
            },
          ],
        },
      ],
    },
    {
      id: 'segments',
      number: '03',
      title: '玩家不是一条从“菜鸟”到“高手”的直线',
      intro: '对派对游戏而言，竞技熟练度只是一个维度，社交、表达和创作也会产生长期价值。',
      evidence: '分析推断',
      blocks: [
        {
          type: 'cards',
          columns: 3,
          items: [
            {
              label: '轻量参与者',
              title: '我只想快速开心一会儿',
              body: '偏好低学习成本、短局、可见的乐趣与轻失败；不应被过多系统教程阻挡。',
              meta: '关键价值：首局开心、一键再来',
            },
            {
              label: '蛋搭子型',
              title: '我为了和特定的人一起来',
              body: '对房间、组队、互动动作、双人/多人地图与共同记忆更敏感。',
              meta: '关键价值：关系可见、相约有理由',
            },
            {
              label: '胜负驱动型',
              title: '我想稳定提升并赢下来',
              body: '在混乱中仍寻找熟练度、地图理解、道具策略和可见的成长反馈。',
              meta: '关键价值：公平、可学习、可复盘',
            },
            {
              label: '表达收集型',
              title: '我希望我的蛋仔一眼就能被认出',
              body: '外观、配件、动作、IP 联动和社交展示将游戏资产转化为身份语言。',
              meta: '关键价值：稀缺、搭配、展示场景',
            },
            {
              label: '地图探索型',
              title: '我想不断遇到没见过的东西',
              body: '从推荐、朋友分享、创作者主页与话题中消费 UGC，是长尾地图的主要需求侧。',
              meta: '关键价值：推荐准确、新鲜、低试错',
            },
            {
              label: '创作者',
              title: '我希望自己的想法被玩到、被认可',
              body: '关心编辑门槛、调试、发布、流量、反馈、版权与激励；是生态的供给核心。',
              meta: '关键价值：创作效率、成长、可持续回报',
            },
          ],
        },
        {
          type: 'callout',
          label: '设计含义',
          title: '不要把所有人都推向排位和付费',
          body:
            '一个健康的派对游戏需要为“只是陪朋友玩”、“只喜欢打卡”、“只想做地图”的人同时提供长期价值。这些玩家未必都是高付费，却可能是关系、内容与传播的关键供给者。',
          tone: 'sage',
        },
      ],
    },
    {
      id: 'ugc',
      number: '04',
      title: 'UGC 飞轮的瓶颈不在“能不能编辑”，而在第一个正反馈',
      intro: '编辑器能力越强，不代表越多普通玩家会开始创作。',
      evidence: '混合证据',
      blocks: [
        {
          type: 'flow',
          tracks: [
            {
              label: 'UGC 供给飞轮',
              tone: 'lavender',
              steps: [
                { title: '低门槛开始', note: '模板、组件库、蛋码、AIGC 动作/剧情工具' },
                { title: '可玩的首个作品', note: '先让创作者与朋友完成一次真实试玩' },
                { title: '反馈与改进', note: '完玩、重试、卡点、退出和评论帮助优化' },
                { title: '推荐与传播', note: '朋友、创作者主页、专题、活动与外部视频' },
                { title: '激励再创作', note: '被玩到、被收藏、获得成长身份或实际回报' },
              ],
            },
          ],
          citations: ['coding-eggy', 'netease-esg-2025', 'netease-esg-2023'],
        },
        {
          type: 'compare',
          caption: '创作者阶梯与关键阻力',
          columns: ['阶段', '用户行为', '主要阻力', '系统应给的反馈'],
          rows: [
            ['改造者', '在模板上换皮、换障碍或修改一段路线', '不知道从空白开始做什么', '五分钟内发布给蛋搭子试玩'],
            ['完成者', '独立做出可通关的第一张图', '测试、数值与节奏调优成本高', '自动检查 + 好友试玩报告'],
            ['迭代者', '根据数据和评论修改地图', '只看到游玩量，不知道用户为何离开', '可理解的关卡诊断，不只是指标看板'],
            ['风格创作者', '形成稳定题材、规则或叙事风格', '品牌识别弱、跨作品关系不可见', '创作者主页、系列化和粉丝订阅'],
            ['生态合作者', '团队创作、活动合作、商业化或人才培养', '协作、版权、分成与稳定性', '协作工具、清晰规则与长期激励'],
          ],
          citations: ['coding-eggy', 'netease-esg-2023'],
        },
      ],
    },
    {
      id: 'economy',
      number: '05',
      title: '商业化：不卖胜利，主要卖表达、收集与关系场景',
      intro: '从当前 App Store 可见信息可以确认内购、礼包与会员，但不应在无数据时推测付费结构与收入占比。',
      evidence: '混合证据',
      blocks: [
        {
          type: 'compare',
          caption: '价值与变现层次',
          columns: ['层次', '玩家获得', '可见商业化承接', '主要风险'],
          rows: [
            ['基础乐趣', '免费进入、低门槛闯关与 UGC 内容', '扩大用户与社交网络', '新手入口被活动与商业层挤压'],
            ['身份表达', '外观、配件、动作和联动身份', '蛋币、礼包、抽取/盲盒化收集', '稀缺和随机反馈对低龄用户产生过度刺激'],
            ['长期权益', '持续奖励、方便与身份标识', '官方页面可见 YO! 会员与周期性内购', '价值不透明或任务压力导致疲劳'],
            ['创作生态', '被浏览、成长身份、激励与潜在职业路径', '创作者激励可降低官方内容供给压力', '马太效应、抄袭、审核与激励不可持续'],
          ],
          citations: ['eggy-appstore-detail', 'netease-esg-2023'],
        },
        {
          type: 'callout',
          label: '低龄用户边界',
          title: '任何“提升付费”的策划都必须先通过安全护栏',
          body:
            '由于 App Store 页面标注了 9+ 分级、聊天、UGC、抽奖箱和内购，任何商业化设计都应将价格透明、家长控制、未成年人限额、抽取规则可理解和不用羞辱/排名刺激付费作为前置条件。',
          tone: 'ink',
          citations: ['eggy-appstore-detail'],
        },
      ],
    },
    {
      id: 'proposal',
      number: '06',
      title: '活动方案：用“五分钟共创”扩大第一次创作的人群',
      intro: '不再给编辑器增加一组高级功能，而是降低普通玩家从“玩”跨到“改一点”的心理成本。',
      evidence: '方案建议',
      blocks: [
        {
          type: 'proposal',
          name: '蛋搭子共创周末',
          objective: '让没有发布过地图的玩家，与一位好友在 5 分钟内完成一次“改一点 - 玩一次 - 发布给朋友”。',
          hypothesis:
            '相比从空白地图开始，基于热门模板、双人分工与即时试玩的轻创作，会明显提高首次发布完成率和创作后 7 日回访。',
          steps: [
            '系统每周提供 3 个“只改一条规则”模板，例如换掉最后一个陷阱、给关卡加一个双人机关。',
            '玩家邀请蛋搭子，一人负责选模板/改规则，另一人负责试玩/留反馈，角色可一键交换。',
            '发布范围默认仅好友可见，完成 3 次可玩测试后才引导公开发布，降低公开失败压力。',
            '试玩报告只给 3 个可执行信号：有多少人到达终点、哪里重试最多、好友最想改哪一点。',
          ],
          primaryMetric: '新创作者 7 日有效激活率 = 首次发布后 7 天内再次编辑或发布的新创作者 ÷ 首次发布新创作者',
          guardrails: ['新手平均编辑时长', '好友邀请骚扰/拒绝率', '公开地图崩溃或无法通关率', '举报与抄袭纠纷率'],
          citations: ['coding-eggy', 'netease-esg-2025'],
        },
        {
          type: 'compare',
          caption: 'A/B 实验最小设计',
          columns: ['组别', '入口', '创作方式', '需要回答的问题'],
          rows: [
            ['A 组', '常规编辑器新建', '单人、空白/普通模板', '现有首次创作基线是什么？'],
            ['B 组', '共创周末活动入口', '双人、只改一条规则、即时试玩', '社交承诺与小任务能否提高首次发布和 7 日回访？'],
            ['分层', '过去 30 天游戏频次、是否有固定蛋搭子', '排除已发布过地图的创作者', '优化是否真的来自新创作者，而不是老创作者回流？'],
          ],
        },
      ],
    },
  ],
  sources: [
    {
      id: 'eggy-global',
      title: 'Eggy Party Launches Globally on February 23',
      publisher: 'NetEase Games',
      url: 'https://www.neteasegames.com/news/20240227/37000_1140075.html',
      accessed: '2026-08-30',
      note: '公开描述核心玩法，并给出当时中国市场月活与 UGC 口径。',
    },
    {
      id: 'eggy-appstore',
      title: '蛋仔派对 App Store 产品页',
      publisher: 'Apple App Store / 网易移动游戏',
      url: 'https://apps.apple.com/cn/app/%E8%9B%8B%E4%BB%94%E6%B4%BE%E5%AF%B9/id1544884479',
      accessed: '2026-08-30',
      note: '标题与正文用户数口径不一致，本报告不将其作为精确规模证据。',
    },
    {
      id: 'eggy-appstore-detail',
      title: '蛋仔派 App Store 详情：分级、隐私与 App 内购买',
      publisher: 'Apple App Store',
      url: 'https://apps.apple.com/cn/app/%E8%9B%8B%E4%BB%94%E6%B4%BE%E5%AF%B9/id1544884479?platform=vision',
      accessed: '2026-08-30',
    },
    {
      id: 'apple-editorial',
      title: '蛋仔冲冲冲！',
      publisher: 'Apple App Store 编辑故事',
      url: 'https://apps.apple.com/cn/iphone/story/id1619861046',
      accessed: '2026-08-30',
    },
    {
      id: 'netease-esg-2025',
      title: 'NetEase 2025 ESG Report - AIGC + UGC 赋能玩法创新',
      publisher: 'NetEase Investor Relations',
      url: 'https://ir.netease.com/static-files/23cbbcbc-231d-4d2b-912d-e71f54cf4bdb',
      accessed: '2026-08-30',
    },
    {
      id: 'netease-esg-2023',
      title: 'NetEase 2023 ESG Report',
      publisher: 'NetEase Investor Relations',
      url: 'https://ir.netease.com/static-files/cc8ff364-73ee-4d20-b392-5a3db13a0d99',
      accessed: '2026-08-30',
      note: '公开描述 UGC 工具、创作者激励与成长路径。',
    },
    {
      id: 'coding-eggy',
      title: '跟蛋仔学编程',
      publisher: 'Apple App Store / 网易',
      url: 'https://apps.apple.com/cn/app/%E8%B7%9F%E8%9B%8B%E4%BB%94%E5%AD%A6%E7%BC%96%E7%A8%8B/id6475565124',
      accessed: '2026-08-30',
      note: '公开描述蛋码、模板、组件库与低门槛创作。',
    },
  ],
};
