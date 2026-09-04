import type { Report } from './types';

export const platformDistributionReport: Report = {
  slug: 'platform-distribution',
  number: '01',
  category: 'Platform Strategy / Content',
  title: '小红书 × 抖音：内容分发机制、用户画像与经营路径',
  shortTitle: '小红书 × 抖音',
  summary:
    '不把“流量密码”当结论，而是从官方算法公示、公开用户数据与产品界面出发，分析两个平台如何把内容连到消费决策。',
  readTime: '12 min read',
  accent: 'red',
  heroImages: [
    {
      src: '/report-assets/xiaohongshu-app.jpg',
      alt: '小红书 App 官方图标',
      sourceId: 'xhs-appstore',
    },
    {
      src: '/report-assets/douyin-app.jpg',
      alt: '抖音 App 官方图标',
      sourceId: 'douyin-appstore',
    },
  ],
  capabilityTags: ['平台分析', '用户分层', '内容策略', '商业化', '实验设计'],
  question:
    '同一个品牌或创作者，为什么不应把同一条内容原样复制到小红书和抖音？',
  conclusion:
    '小红书更像“需求形成与决策存档”，抖音更像“兴趣触发与即时放大”。真正的双平台策略不是切分流量，而是让一个选题在两种用户任务中分别完成它的工作。',
  sections: [
    {
      id: 'scope',
      number: '01',
      title: '先定义证据边界',
      intro: '平台没有公开完整排序模型和实时权重，因此报告只讨论可验证的运行逻辑。',
      evidence: '混合证据',
      blocks: [
        {
          type: 'callout',
          label: '边界声明',
          title: '“赛马机制”、“五级流量池”不是本文的事实前提',
          body:
            '本文只将它们视为运营圈对“先小范围验证、再扩大曝光”的经验比喻。官方公示能确认的是：两个平台都利用内容与用户交互信号进行个性化推荐，并使用去重、打散或兴趣探索等干预。',
          tone: 'ink',
          citations: ['xhs-algorithm', 'douyin-algorithm'],
        },
        {
          type: 'text',
          paragraphs: [
            '小红书算法公示明确提到，笔记内容数据与用户交互行为数据共同参与推荐，并实施去重、打散与兴趣发现。抖音公示则更明确地描述了对点击、时长、点赞、评论、分享等多类行为概率的预估，再经排序、打散和干预后推荐。',
            '两者都不是“只看一个指标”的系统。因此不应将完播率、收藏率或搜索关键词单独包装成必然获得流量的“公式”。',
          ],
          citations: ['xhs-algorithm', 'douyin-algorithm', 'cac-governance'],
        },
      ],
    },
    {
      id: 'scale',
      number: '02',
      title: '规模与人群不是同一层面的竞争',
      intro: '抖音覆盖更广，小红书在年轻与高线城市人群中更集中；但人口学只是起点，任务和行为才决定内容策略。',
      evidence: '公开事实',
      blocks: [
        {
          type: 'metrics',
          items: [
            { value: '3 亿', label: '小红书官方月活口径', note: '小红书电商官网公开页面' },
            { value: '70%', label: '小红书月均搜索渗透率', note: '2025 平台营销通案的公开引用口径' },
            { value: '9 亿', label: '抖音 App 流量规模', note: 'QuestMobile 2025 年上半年报告' },
            { value: '54.2%', label: '小红书 30 岁以下用户占比', note: 'QuestMobile 2025 年 10 月新媒体盘点' },
          ],
          citations: ['xhs-commerce', 'xhs-2025-profile', 'questmobile-half', 'questmobile-media'],
        },
        {
          type: 'compare',
          caption: '平台任务对比（结合公开数据与产品界面的分析）',
          columns: ['维度', '小红书', '抖音', '产品含义'],
          rows: [
            ['主动性', '搜索、收藏、横向比较', '滑动消费、及时反馈、再搜索', '小红书更适合承接明确问题；抖音更适合触发潜在兴趣'],
            ['内容寿命', '可被搜索与收藏反复召回', '强即时曝光，也可由搜索与话题重新召回', '两者都要考虑“发布后”，但资产化方式不同'],
            ['信任建立', '细节密度、经验可复制、评论补充', '表达感、演示效果、人格连续性', '同一证据需要转译为图文索引和视频叙事'],
            ['商业承接', '收藏/搜索后的决策与口碑', '直播、短视频、商城与本地生活的即时转化', '不能只看曝光，要看下一个可观测行为'],
          ],
          citations: ['xhs-appstore', 'douyin-appstore', 'questmobile-year'],
        },
      ],
    },
    {
      id: 'mechanism',
      number: '03',
      title: '从内容入库到商业结果',
      intro: '下面是对公开算法说明的产品化抽象，不是平台内部技术架构图。',
      evidence: '分析推断',
      blocks: [
        {
          type: 'flow',
          tracks: [
            {
              label: '小红书：让内容成为可被找回的决策素材',
              tone: 'red',
              steps: [
                { title: '笔记理解', note: '主题、图文/视频、质量与安全约束' },
                { title: '人群匹配', note: '浏览、点击、搜索、收藏、分享等信号' },
                { title: '探索与打散', note: '去重、多样性与新兴趣发现' },
                { title: '持续召回', note: '搜索、收藏、话题与个人主页' },
                { title: '决策行为', note: '咨询、店铺、商品、分享或线下行动' },
              ],
            },
            {
              label: '抖音：在连续反馈中放大即时兴趣',
              tone: 'dark',
              steps: [
                { title: '候选内容', note: '从候选池中召回可能相关的内容' },
                { title: '多目标预估', note: '播放时长、点赞、评论、收藏、分享等' },
                { title: '排序与干预', note: '排序、打散、多样性与治理约束' },
                { title: '实时反馈', note: '每一次滑动和互动都会改变后续预估' },
                { title: '即时转化', note: '关注、搜索、直播、商城、团购或线索' },
              ],
            },
          ],
          citations: ['xhs-algorithm', 'douyin-algorithm', 'jiangsu-algorithm'],
        },
        {
          type: 'callout',
          label: '核心判断',
          title: '不同的不是“一个看收藏、一个看完播”',
          body:
            '更重要的差异是用户当下的任务：在小红书上，用户更常在缩小决策范围；在抖音上，用户更常先被内容触发，再进入搜索或交易链路。这个判断应该通过自己账号的搜索来源、收藏后行为和转化路径继续验证。',
          tone: 'lavender',
        },
      ],
    },
    {
      id: 'personas',
      number: '04',
      title: '从人口学画像转向任务画像',
      intro: '年龄和城市线级不会直接生成产品策略，任务、阻力和下一步行为才会。',
      evidence: '分析推断',
      blocks: [
        {
          type: 'cards',
          columns: 2,
          items: [
            {
              label: '小红书 / 方案比较者',
              title: '“我想先看别人怎么做”',
              body: '用搜索进入，在多篇笔记之间比较成本、流程、避坑与结果；需要的是可复制步骤、真实细节和上下文。',
              meta: '关键行为：搜索 → 深读 → 收藏 → 比较',
            },
            {
              label: '小红书 / 经验共建者',
              title: '“我有补充，也想被同类人看到”',
              body: '通过笔记和评论补充个人经验，强调细分身份与具体场景；价值来自“这是否真的懂我”。',
              meta: '关键行为：发布 → 评论往返 → 关注/私信',
            },
            {
              label: '抖音 / 连续消费者',
              title: '“先让我看懂，再告诉我要不要停下”',
              body: '在低操作成本下连续滑动，对前几秒的问题设置、演示张力与表达节奏敏感。',
              meta: '关键行为：触达 → 停留 → 互动 → 连续观看',
            },
            {
              label: '抖音 / 兴趣转行动者',
              title: '“我本来没在找，但现在想立刻试试”',
              body: '被一段强演示或真人场景触发后，通过搜索、评论区、直播或商品/团购进入行动。',
              meta: '关键行为：触发 → 搜索/评论 → 即时转化',
            },
          ],
          citations: ['questmobile-media', 'xhs-2025-profile', 'douyin-active'],
        },
      ],
    },
    {
      id: 'strategy',
      number: '05',
      title: '同一选题的双平台翻译',
      intro: '用“AI 产品经理面试作品集”为例，设计一组可执行的内容实验。',
      evidence: '方案建议',
      blocks: [
        {
          type: 'compare',
          caption: '一个选题，两种用户任务',
          columns: ['模块', '小红书版', '抖音版'],
          rows: [
            ['切入', '“一份产品作品集应该有哪 6 类证据？”', '“面试官打开作品集 30 秒后，为什么会关掉？”'],
            ['结构', '清单 + 案例对照 + 可保存的检查表', '失败案例演示 + 前后对比 + 一个改造动作'],
            ['证据', '完整报告截图、指标树、实验方案', '真实页面录屏、时间限制、可视化前后差异'],
            ['转化动作', '收藏检查表、查看完整案例页', '进入主页观看系列、搜索作品集标题'],
          ],
        },
        {
          type: 'proposal',
          name: '14 天双平台选题实验',
          objective: '验证“决策素材”与“兴趣触发”两种表达是否带来不同的后续行为。',
          hypothesis:
            '同一核心观点下，小红书的搜索来源、收藏和长尾打开会更稳定；抖音的前 3 秒留存、完整消费与主页访问会对表达张力更敏感。',
          steps: [
            '固定 3 个核心选题，每个选题产出一篇决策型图文和一条演示型短视频。',
            '保持核心证据一致，只改变标题/开场、结构和行动入口。',
            '记录发布后 2 小时、24 小时、7 天三个时点的行为结构，不只比较播放/曝光。',
            '将评论和搜索词按“理解、质疑、行动”编码，作为下一轮选题输入。',
          ],
          primaryMetric: '有效下一步行为率 = （收藏 + 主页深度访问 + 完整案例点击）/ 有效触达',
          guardrails: ['负反馈/不感兴趣率', '评论区信息质量', '选题制作时长', '证据更正次数'],
        },
      ],
    },
  ],
  sources: [
    {
      id: 'xhs-algorithm',
      title: '小红书个性化推荐算法拟公示内容',
      publisher: '国家互联网信息办公室算法备案系统',
      url: 'https://beian.cac.gov.cn/api/static/fileUpload/principalOrithm/additional/user_c015445c-80ac-45f7-94d7-3871e961b1fe_d4425f3b-7f35-45af-b8d4-badd4424d6d5.pdf',
      accessed: '2026-08-30',
    },
    {
      id: 'douyin-algorithm',
      title: '抖音个性化推荐算法拟公示内容',
      publisher: '国家互联网信息办公室算法备案系统',
      url: 'https://beian.cac.gov.cn/api/static/fileUpload/principalOrithm/additional/user_9b84b02a-0c7f-4bd4-81f2-5cad879ad4ab_96ed08c8-0ed8-4ab5-b04d-46cccf4c00ab.pdf',
      accessed: '2026-08-30',
    },
    {
      id: 'cac-governance',
      title: '中央网信办持续加强信息推荐算法治理',
      publisher: '中国网信网',
      url: 'https://www.cac.gov.cn/2025-05/22/c_1749536203490537.htm',
      accessed: '2026-08-30',
      note: '包含抖音与小红书多样性、兴趣调节功能的监管口径。',
    },
    {
      id: 'jiangsu-algorithm',
      title: '网络平台算法如何优化？来看这个实践',
      publisher: '江苏网信网',
      url: 'https://www.jswx.gov.cn/anquan/guanli/202508/t20250811_110705.shtml',
      accessed: '2026-08-30',
    },
    {
      id: 'xhs-commerce',
      title: '小红书电商官网',
      publisher: '小红书',
      url: 'https://ec.xiaohongshu.com/',
      accessed: '2026-08-30',
      note: '页面公开展示“3亿月活”口径。',
    },
    {
      id: 'xhs-2025-profile',
      title: '2025 小红书活跃用户画像趋势报告',
      publisher: '千瓜数据',
      url: 'https://cdn.asiaecs.com/static/upload/file/common/2025/06/11/1749635914421821.pdf',
      accessed: '2026-08-30',
      note: '引用《2025小红书平台营销通案》的3亿月活、1亿内容分享者和70%月均搜索渗透率。',
    },
    {
      id: 'questmobile-half',
      title: 'QuestMobile 2025 中国移动互联网半年大报告',
      publisher: 'QuestMobile',
      url: 'https://www.questmobile.cn/research/report/1950089049332092929/',
      accessed: '2026-08-30',
    },
    {
      id: 'questmobile-media',
      title: 'QuestMobile 2025 年新媒体生态盘点',
      publisher: '36氪 / QuestMobile',
      url: 'https://www.36kr.com/p/3597577937502473',
      accessed: '2026-08-30',
      note: '公开摘要含小红书30岁以下与高线城市占比、抖音51岁以上用户占比。',
    },
    {
      id: 'questmobile-year',
      title: 'QuestMobile 2025 中国移动互联网年度大报告摘要',
      publisher: '界面新闻 / QuestMobile',
      url: 'https://www.jiemian.com/article/14093245.html',
      accessed: '2026-08-30',
    },
    {
      id: 'douyin-active',
      title: '抖音用户分群地图之高活跃群体研究报告',
      publisher: '巨量引擎',
      url: 'https://www.oceanengine.com/insight/546',
      accessed: '2026-08-30',
    },
    {
      id: 'xhs-appstore',
      title: '小红书 - 你的生活兴趣社区',
      publisher: 'Apple App Store',
      url: 'https://apps.apple.com/cn/app/%E5%B0%8F%E7%BA%A2%E4%B9%A6-%E4%BD%A0%E7%9A%84%E7%94%9F%E6%B4%BB%E5%85%B4%E8%B6%A3%E7%A4%BE%E5%8C%BA/id741292507',
      accessed: '2026-08-30',
    },
    {
      id: 'douyin-appstore',
      title: '抖音 - 记录美好生活',
      publisher: 'Apple App Store',
      url: 'https://apps.apple.com/cn/app/%E6%8A%96%E9%9F%B3/id1142110895',
      accessed: '2026-08-30',
    },
  ],
};
