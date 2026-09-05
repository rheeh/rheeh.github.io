import type { Report } from './types';

export const eggyPartyReport: Report = {
  "slug": "eggy-party",
  "number": "03",
  "category": "游戏里的细节",
  "title": "《蛋仔派对》里，输了为什么还想再来一局？",
  "shortTitle": "《蛋仔派对》里，输了为什么还想再来一局？",
  "summary": "从碰撞、失误和朋友间的笑料说起，再看一张自制地图如何让人留下来。",
  "readTime": "约 5 分钟",
  "accent": "dark",
  "heroImages": [
    {
      "src": "/report-assets/eggy-party-app.jpg",
      "alt": "《蛋仔派对》2026 年 Apple App Store 图标",
      "sourceId": "eggy-appstore"
    }
  ],
  "capabilityTags": [
    "派对游戏",
    "社交",
    "地图创作"
  ],
  "question": "",
  "conclusion": "一局游戏结束后，留下的未必只有胜负。一次好笑的失误、一个一起闯关的人，或一张想再试的地图，都可能成为下一次打开游戏的理由。至于哪一种更重要，还需要真实玩家的反馈。",
  "sections": [
    {
      "id": "loop",
      "number": "01",
      "title": "失误也能成为这一局的记忆",
      "evidence": "分析推断",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "在强调排名的游戏里，失误通常意味着挫败。派对玩法多了一种可能：被撞下平台、差一点过关，甚至朋友间互相挡路，都可能变成一起回忆的笑料。",
            "《蛋仔派对》的跑、跳、滚动和碰撞，让这些意外比较容易发生。但“好笑”并不等于永远不会烦：连续受挫、等待太久，仍然可能让人离开。"
          ]
        },
        {
          "type": "flow",
          "tracks": [
            {
              "label": "单局欢乐循环",
              "tone": "gold",
              "steps": [
                {
                  "title": "选择一局",
                  "note": "官方匹配、特殊玩法或乐园地图"
                },
                {
                  "title": "低门槛操作",
                  "note": "跑、跳、滚动、碰撞与道具，快速理解"
                },
                {
                  "title": "高变量冲突",
                  "note": "物理碰撞、玩家互坑、随机与地图陷阱"
                },
                {
                  "title": "情绪峰值",
                  "note": "翻盘、失败笑料、拥抱/托举与一起过关"
                },
                {
                  "title": "立即再来",
                  "note": "单局短、失败轻，结果可分享可复仇"
                }
              ]
            },
            {
              "label": "长期关系循环",
              "tone": "lavender",
              "steps": [
                {
                  "title": "找蛋搭子",
                  "note": "把随机对局转化为固定关系"
                },
                {
                  "title": "一起探索",
                  "note": "官方新玩法、活动、联动与 UGC 地图"
                },
                {
                  "title": "外观表达",
                  "note": "让角色成为社交展示与身份记忆"
                },
                {
                  "title": "产生内容",
                  "note": "截图、录屏、打卡、地图评论与二创"
                },
                {
                  "title": "返回关系",
                  "note": "因为朋友、创作者或新内容而回流"
                }
              ]
            }
          ],
          "citations": [
            "apple-editorial",
            "eggy-appstore"
          ]
        }
      ]
    },
    {
      "id": "segments",
      "number": "02",
      "title": "一起玩的人，不一定在追同一个目标",
      "evidence": "分析推断",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "有人想赢，有人只是来陪朋友，也有人喜欢找新地图。只用段位高低理解玩家，很容易漏掉这些不同的期待。",
            "同一张地图里，熟练玩家可能享受捷径，新玩家可能需要更清楚的提示。让两种人都能参与，比不断抬高难度更值得留意。"
          ]
        }
      ]
    },
    {
      "id": "ugc",
      "number": "03",
      "title": "做出地图之后，得有人来玩",
      "evidence": "分析推断",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "编辑器解决了“怎么做”，却不自动解决“做完给谁玩”。对第一次创作的人来说，有朋友愿意完整试玩，并指出哪里卡住，可能比多几个复杂组件更有帮助。"
          ]
        },
        {
          "type": "flow",
          "tracks": [
            {
              "label": "UGC 供给飞轮",
              "tone": "lavender",
              "steps": [
                {
                  "title": "低门槛开始",
                  "note": "模板、组件库、蛋码、AIGC 动作/剧情工具"
                },
                {
                  "title": "可玩的首个作品",
                  "note": "先让创作者与朋友完成一次真实试玩"
                },
                {
                  "title": "反馈与改进",
                  "note": "完玩、重试、卡点、退出和评论帮助优化"
                },
                {
                  "title": "推荐与传播",
                  "note": "朋友、创作者主页、专题、活动与外部视频"
                },
                {
                  "title": "激励再创作",
                  "note": "被玩到、被收藏、获得成长身份或实际回报"
                }
              ]
            }
          ],
          "citations": [
            "coding-eggy",
            "netease-esg-2025",
            "netease-esg-2023"
          ]
        },
        {
          "type": "text",
          "paragraphs": [
            "这条流程是对创作体验的分析，不是已验证的留存规律。地图的可发现性、反馈是否清楚、修改是否方便，都值得分别观察。"
          ]
        }
      ]
    },
    {
      "id": "proposal",
      "number": "04",
      "title": "一个可以试的小改动",
      "evidence": "分析推断",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "可以试着让两位朋友从一个短模板开始：一人改障碍，一人试玩，只完成一处改动就发布。这样第一次创作不必从空白地图开始。",
            "这还是设想，没有上线或测试结果。要观察的也很具体：两人能不能做完、试玩反馈有没有带来修改，以及之后是否愿意再做一张。"
          ]
        }
      ]
    }
  ],
  "sources": [
    {
      "id": "eggy-global",
      "title": "Eggy Party Launches Globally on February 23",
      "publisher": "NetEase Games",
      "url": "https://www.neteasegames.com/news/20240227/37000_1140075.html",
      "accessed": "2026-08-30",
      "note": "公开描述核心玩法，并给出当时中国市场月活与 UGC 口径。"
    },
    {
      "id": "eggy-appstore",
      "title": "蛋仔派对 App Store 产品页",
      "publisher": "Apple App Store / 网易移动游戏",
      "url": "https://apps.apple.com/cn/app/%E8%9B%8B%E4%BB%94%E6%B4%BE%E5%AF%B9/id1544884479",
      "accessed": "2026-08-30",
      "note": "标题与正文用户数口径不一致，本报告不将其作为精确规模证据。"
    },
    {
      "id": "eggy-appstore-detail",
      "title": "蛋仔派 App Store 详情：分级、隐私与 App 内购买",
      "publisher": "Apple App Store",
      "url": "https://apps.apple.com/cn/app/%E8%9B%8B%E4%BB%94%E6%B4%BE%E5%AF%B9/id1544884479?platform=vision",
      "accessed": "2026-08-30"
    },
    {
      "id": "apple-editorial",
      "title": "蛋仔冲冲冲！",
      "publisher": "Apple App Store 编辑故事",
      "url": "https://apps.apple.com/cn/iphone/story/id1619861046",
      "accessed": "2026-08-30"
    },
    {
      "id": "netease-esg-2025",
      "title": "NetEase 2025 ESG Report - AIGC + UGC 赋能玩法创新",
      "publisher": "NetEase Investor Relations",
      "url": "https://ir.netease.com/static-files/23cbbcbc-231d-4d2b-912d-e71f54cf4bdb",
      "accessed": "2026-08-30"
    },
    {
      "id": "netease-esg-2023",
      "title": "NetEase 2023 ESG Report",
      "publisher": "NetEase Investor Relations",
      "url": "https://ir.netease.com/static-files/cc8ff364-73ee-4d20-b392-5a3db13a0d99",
      "accessed": "2026-08-30",
      "note": "公开描述 UGC 工具、创作者激励与成长路径。"
    },
    {
      "id": "coding-eggy",
      "title": "跟蛋仔学编程",
      "publisher": "Apple App Store / 网易",
      "url": "https://apps.apple.com/cn/app/%E8%B7%9F%E8%9B%8B%E4%BB%94%E5%AD%A6%E7%BC%96%E7%A8%8B/id6475565124",
      "accessed": "2026-08-30",
      "note": "公开描述蛋码、模板、组件库与低门槛创作。"
    }
  ]
};
