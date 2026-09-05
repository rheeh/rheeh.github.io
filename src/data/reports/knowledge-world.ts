import type { Report } from './types';

export const knowledgeWorldReport: Report = {
  "slug": "knowledge-world",
  "number": "02",
  "category": "工具与习惯",
  "title": "收藏了很多，写东西时为什么还是找不到？",
  "shortTitle": "收藏了很多，写东西时为什么还是找不到？",
  "summary": "从“先存着”到真正用上，中间缺的可能是一句：这条资料能帮我解决什么问题。",
  "readTime": "约 5 分钟",
  "accent": "lavender",
  "heroImages": [
    {
      "src": "/report-assets/knowledge-reuse-overview.png",
      "alt": "收藏之后如何再用起来：存下内容、留一句用途、关联项目、写作时找回。只收藏，很容易忘记。",
      "caption": "内容概述 · AI 辅助绘制；示意资料从收藏到复用的过程。"
    }
  ],
  "capabilityTags": [
    "收藏",
    "阅读",
    "资料复用"
  ],
  "question": "",
  "conclusion": "比起继续增加收藏入口，更想试的是：保存时留一句用途，写作时能顺着这句话找回原文。它有没有用，要看资料是否真的进入了下一次写作，而不是收藏夹变得多整齐。",
  "sections": [
    {
      "id": "problem",
      "number": "01",
      "title": "存下的是文章，丢掉的是当时的想法",
      "evidence": "分析推断",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "“这篇以后会用到。”这句话足以让人点下收藏，却很难在几周后帮人想起：到底准备把它用在哪里？",
            "自动摘要能缩短一篇文章，但通常不会替我们记住收藏它的理由。准备写方案时，重新搜索有时反而比翻收藏夹更快。这里值得尝试的，是把当时的用途也存下来。"
          ]
        }
      ]
    },
    {
      "id": "landscape",
      "number": "02",
      "title": "几种工具，分别照顾了哪一步？",
      "evidence": "分析推断",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "原先整理过 Notion、Readwise Reader、Cubox 和 mymind。把功能放在一起看，比“谁更强”更有用的问题是：自己经常卡在采集、阅读，还是写作时找回资料？"
          ]
        },
        {
          "type": "compare",
          "caption": "竞品能力地图（基于各产品官方功能说明）",
          "columns": [
            "维度",
            "Notion",
            "Readwise Reader",
            "Cubox",
            "mymind"
          ],
          "rows": [
            [
              "核心心智",
              "可编辑的工作空间",
              "深度阅读与高亮复习",
              "中文场景的稍后阅读",
              "无压力的视觉记忆"
            ],
            [
              "采集",
              "浏览器剪藏、移动分享",
              "文章、邮件、RSS、PDF、EPUB、视频等",
              "网页、微信转发、Newsletter、API",
              "网页、图片、文本片段、快速笔记"
            ],
            [
              "内容处理",
              "库、属性、页面与任务化",
              "沉浸阅读、标注、TTS、过滤视图",
              "网页快照、阅读模式、多色标注",
              "自动标签、OCR、Smart Spaces、图像联想"
            ],
            [
              "AI",
              "工作区与连接应用问答，并引用来源",
              "Ghostreader 文档总结、解释、自定义提示与对话",
              "AI 解读、要点、幻影高亮",
              "自动标签、AI 总结、PDF 分析"
            ],
            [
              "突出优势",
              "结构自由 + 协作 + 产出",
              "支持复杂阅读素材的完整链路",
              "微信与中文内容采集更贴近本土习惯",
              "不要求用户手动分类的视觉体验"
            ],
            [
              "对新产品的挤压",
              "通用工作空间已可承接内容产出",
              "专业阅读场景的深度门槛很高",
              "“收藏 + AI总结”不再是差异化",
              "自动组织与私密美感已有鲜明品牌"
            ]
          ],
          "citations": [
            "notion-clipper",
            "notion-connectors",
            "readwise-docs",
            "readwise-ghostreader",
            "cubox-product",
            "cubox-pricing",
            "mymind-what",
            "mymind-pricing"
          ]
        }
      ]
    },
    {
      "id": "gap",
      "number": "03",
      "title": "多留一句话，会不会有帮助？",
      "evidence": "分析推断",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "比如保存一篇访谈时，补一句“解释为什么用户不愿意填长表单”。下次做问答流程，这句备注可能比一个“产品设计”标签更容易唤起记忆。",
            "可以先把资料关联到一个正在做的项目，保留原文位置、摘录和用途。项目结束后再归档，避免维护一套越来越复杂、却很少打开的分类树。"
          ]
        }
      ]
    },
    {
      "id": "mvp",
      "number": "04",
      "title": "先拿一个真实项目试试",
      "evidence": "分析推断",
      "blocks": [
        {
          "type": "text",
          "paragraphs": [
            "不急着做完整的知识管理产品。先在一个项目里，只给确实想引用的资料补用途备注；到写初稿时，记录哪些被找回、哪些真正用上。",
            "如果备注本身已经成为负担，就要缩短输入，或者改成使用资料时再补。如果找回的资料没有帮助判断，继续增加摘要和聊天入口也未必有用。",
            "AI 可以帮忙检索和整理，但引用仍要能回到原文。下面保留的是资料来源，功能说明也只代表整理时的公开口径。"
          ]
        }
      ]
    }
  ],
  "sources": [
    {
      "id": "notion-clipper",
      "title": "Notion Web Clipper",
      "publisher": "Notion",
      "url": "https://www.notion.com/en-US/web-clipper",
      "accessed": "2026-08-30"
    },
    {
      "id": "notion-connectors",
      "title": "Notion AI Connectors overview",
      "publisher": "Notion Help Center",
      "url": "https://www.notion.com/help/notion-ai-connectors",
      "accessed": "2026-08-30"
    },
    {
      "id": "readwise-product",
      "title": "Readwise Reader",
      "publisher": "Readwise",
      "url": "https://readwise.io/read/",
      "accessed": "2026-08-30"
    },
    {
      "id": "readwise-docs",
      "title": "What is Readwise Reader?",
      "publisher": "Readwise Docs",
      "url": "https://docs.readwise.io/reader/docs",
      "accessed": "2026-08-30"
    },
    {
      "id": "readwise-ghostreader",
      "title": "What is Ghostreader?",
      "publisher": "Readwise Docs",
      "url": "https://docs.readwise.io/reader/guides/ghostreader/overview",
      "accessed": "2026-08-30"
    },
    {
      "id": "cubox-product",
      "title": "Cubox 是什么",
      "publisher": "Cubox 指南",
      "url": "https://help.cubox.pro/",
      "accessed": "2026-08-30"
    },
    {
      "id": "cubox-pricing",
      "title": "加入 Cubox 会员",
      "publisher": "Cubox",
      "url": "https://cubox.pro/price/",
      "accessed": "2026-08-30",
      "note": "价格和用户数会变动，以官方页面当前显示为准。"
    },
    {
      "id": "mymind-what",
      "title": "What is mymind?",
      "publisher": "mymind",
      "url": "https://mymind.com/what",
      "accessed": "2026-08-30"
    },
    {
      "id": "mymind-pricing",
      "title": "mymind pricing and feature comparison",
      "publisher": "mymind",
      "url": "https://access.mymind.com/pricing",
      "accessed": "2026-08-30",
      "note": "价格会变动，本报告仅引用功能说明。"
    }
  ]
};
