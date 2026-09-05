import type { Report } from './types';

export const platformDistributionReport: Report = {
  "slug": "platform-distribution",
  "number": "01",
  "category": "内容与平台",
  "title": "同一个选题，为什么不能原样发到小红书和抖音？",
  "shortTitle": "同一个选题，为什么不能原样发到小红书和抖音？",
  "summary": "一份攻略可以被慢慢查找，一段演示需要先让人停下。同一个问题，表达的顺序会不同。",
  "readTime": "约 5 分钟",
  "accent": "red",
  "heroImages": [
    {
      "src": "/report-assets/xiaohongshu-app.jpg",
      "alt": "小红书 App 官方图标",
      "sourceId": "xhs-appstore"
    },
    {
      "src": "/report-assets/douyin-app.jpg",
      "alt": "抖音 App 官方图标",
      "sourceId": "douyin-appstore"
    }
  ],
  "capabilityTags": [
    "小红书",
    "抖音",
    "内容表达"
  ],
  "question": "",
  "conclusion": "改编一条内容时，可以先想读者接下来要做什么：查细节、比较选择，还是先看懂一个效果。标题、开头和证据的摆放顺序，都可以跟着这个动作调整。",
  "sections": [
    {
      "id": "reading",
      "number": "01",
      "title": "先想想内容是怎么被遇见的",
      "evidence": "分析推断",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "查攻略时，人会带着具体问题，愿意对照细节；连续刷视频时，往往先被一个画面或演示留住，再决定要不要往下看。相同的信息，放在这两种阅读状态里，开头就很难完全一样。",
            "小红书和抖音都同时有搜索、推荐、图文或视频等入口。下面的对照是理解内容场景的一种方式，不能把每个平台的用户都归成一种人。"
          ]
        },
        {
          "type": "compare",
          "caption": "平台任务对比（结合公开数据与产品界面的分析）",
          "columns": [
            "维度",
            "小红书",
            "抖音",
            "产品含义"
          ],
          "rows": [
            [
              "主动性",
              "搜索、收藏、横向比较",
              "滑动消费、及时反馈、再搜索",
              "小红书更适合承接明确问题；抖音更适合触发潜在兴趣"
            ],
            [
              "内容寿命",
              "可被搜索与收藏反复召回",
              "强即时曝光，也可由搜索与话题重新召回",
              "两者都要考虑“发布后”，但资产化方式不同"
            ],
            [
              "信任建立",
              "细节密度、经验可复制、评论补充",
              "表达感、演示效果、人格连续性",
              "同一证据需要转译为图文索引和视频叙事"
            ],
            [
              "商业承接",
              "收藏/搜索后的决策与口碑",
              "直播、短视频、商城与本地生活的即时转化",
              "不能只看曝光，要看下一个可观测行为"
            ]
          ],
          "citations": [
            "xhs-appstore",
            "douyin-appstore",
            "questmobile-year"
          ]
        }
      ]
    },
    {
      "id": "scope",
      "number": "02",
      "title": "“收藏率”和“完播率”都解释不了全部",
      "evidence": "分析推断",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "小红书算法公示明确提到，笔记内容数据与用户交互行为数据共同参与推荐，并实施去重、打散与兴趣发现。抖音公示则更明确地描述了对点击、时长、点赞、评论、分享等多类行为概率的预估，再经排序、打散和干预后推荐。",
            "两者都不是“只看一个指标”的系统。因此不应将完播率、收藏率或搜索关键词单独包装成必然获得流量的“公式”。"
          ],
          "citations": [
            "xhs-algorithm",
            "douyin-algorithm",
            "cac-governance"
          ]
        },
        {
          "type": "text",
          "paragraphs": [
            "公开说明能帮助理解推荐会参考哪些行为，但没有给出一套可以照抄的实时权重。把一次内容表现归因于某个单一指标，容易忽略选题、受众和表达本身。"
          ]
        }
      ]
    },
    {
      "id": "strategy",
      "number": "03",
      "title": "把同一个选题重新排一遍",
      "evidence": "分析推断",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "例如介绍一个工具：图文可以先给出适用场景、步骤和限制，方便读者回头查；视频可以先演示结果，再解释关键操作。重点不是把文字转成配音，而是重新安排信息出场的次序。"
          ]
        },
        {
          "type": "compare",
          "caption": "一个选题，两种用户任务",
          "columns": [
            "模块",
            "小红书版",
            "抖音版"
          ],
          "rows": [
            [
              "切入",
              "“一份产品作品集应该有哪 6 类证据？”",
              "“面试官打开作品集 30 秒后，为什么会关掉？”"
            ],
            [
              "结构",
              "清单 + 案例对照 + 可保存的检查表",
              "失败案例演示 + 前后对比 + 一个改造动作"
            ],
            [
              "证据",
              "完整报告截图、指标树、实验方案",
              "真实页面录屏、时间限制、可视化前后差异"
            ],
            [
              "转化动作",
              "收藏检查表、查看完整案例页",
              "进入主页观看系列、搜索作品集标题"
            ]
          ]
        }
      ]
    },
    {
      "id": "observe",
      "number": "04",
      "title": "发布之后，观察下一步动作",
      "evidence": "分析推断",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "比起只比较两边的播放量，更值得追的是：有人问了具体问题吗？有人回来查步骤吗？演示有没有让人理解怎么做？",
            "如果要比较两种表达，可以围绕同一个选题各做一版，再结合评论和后续动作修改。这只是一个观察办法，不能靠几条内容就判断平台算法的因果关系。"
          ]
        }
      ]
    }
  ],
  "sources": [
    {
      "id": "xhs-algorithm",
      "title": "小红书个性化推荐算法拟公示内容",
      "publisher": "国家互联网信息办公室算法备案系统",
      "url": "https://beian.cac.gov.cn/api/static/fileUpload/principalOrithm/additional/user_c015445c-80ac-45f7-94d7-3871e961b1fe_d4425f3b-7f35-45af-b8d4-badd4424d6d5.pdf",
      "accessed": "2026-08-30"
    },
    {
      "id": "douyin-algorithm",
      "title": "抖音个性化推荐算法拟公示内容",
      "publisher": "国家互联网信息办公室算法备案系统",
      "url": "https://beian.cac.gov.cn/api/static/fileUpload/principalOrithm/additional/user_9b84b02a-0c7f-4bd4-81f2-5cad879ad4ab_96ed08c8-0ed8-4ab5-b04d-46cccf4c00ab.pdf",
      "accessed": "2026-08-30"
    },
    {
      "id": "cac-governance",
      "title": "中央网信办持续加强信息推荐算法治理",
      "publisher": "中国网信网",
      "url": "https://www.cac.gov.cn/2025-05/22/c_1749536203490537.htm",
      "accessed": "2026-08-30",
      "note": "包含抖音与小红书多样性、兴趣调节功能的监管口径。"
    },
    {
      "id": "jiangsu-algorithm",
      "title": "网络平台算法如何优化？来看这个实践",
      "publisher": "江苏网信网",
      "url": "https://www.jswx.gov.cn/anquan/guanli/202508/t20250811_110705.shtml",
      "accessed": "2026-08-30"
    },
    {
      "id": "xhs-commerce",
      "title": "小红书电商官网",
      "publisher": "小红书",
      "url": "https://ec.xiaohongshu.com/",
      "accessed": "2026-08-30",
      "note": "页面公开展示“3亿月活”口径。"
    },
    {
      "id": "xhs-2025-profile",
      "title": "2025 小红书活跃用户画像趋势报告",
      "publisher": "千瓜数据",
      "url": "https://cdn.asiaecs.com/static/upload/file/common/2025/06/11/1749635914421821.pdf",
      "accessed": "2026-08-30",
      "note": "引用《2025小红书平台营销通案》的3亿月活、1亿内容分享者和70%月均搜索渗透率。"
    },
    {
      "id": "questmobile-half",
      "title": "QuestMobile 2025 中国移动互联网半年大报告",
      "publisher": "QuestMobile",
      "url": "https://www.questmobile.cn/research/report/1950089049332092929/",
      "accessed": "2026-08-30"
    },
    {
      "id": "questmobile-media",
      "title": "QuestMobile 2025 年新媒体生态盘点",
      "publisher": "36氪 / QuestMobile",
      "url": "https://www.36kr.com/p/3597577937502473",
      "accessed": "2026-08-30",
      "note": "公开摘要含小红书30岁以下与高线城市占比、抖音51岁以上用户占比。"
    },
    {
      "id": "questmobile-year",
      "title": "QuestMobile 2025 中国移动互联网年度大报告摘要",
      "publisher": "界面新闻 / QuestMobile",
      "url": "https://www.jiemian.com/article/14093245.html",
      "accessed": "2026-08-30"
    },
    {
      "id": "douyin-active",
      "title": "抖音用户分群地图之高活跃群体研究报告",
      "publisher": "巨量引擎",
      "url": "https://www.oceanengine.com/insight/546",
      "accessed": "2026-08-30"
    },
    {
      "id": "xhs-appstore",
      "title": "小红书 - 你的生活兴趣社区",
      "publisher": "Apple App Store",
      "url": "https://apps.apple.com/cn/app/%E5%B0%8F%E7%BA%A2%E4%B9%A6-%E4%BD%A0%E7%9A%84%E7%94%9F%E6%B4%BB%E5%85%B4%E8%B6%A3%E7%A4%BE%E5%8C%BA/id741292507",
      "accessed": "2026-08-30"
    },
    {
      "id": "douyin-appstore",
      "title": "抖音 - 记录美好生活",
      "publisher": "Apple App Store",
      "url": "https://apps.apple.com/cn/app/%E6%8A%96%E9%9F%B3/id1142110895",
      "accessed": "2026-08-30"
    }
  ]
};
