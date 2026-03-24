const translations = {
  zh: {
    'nav.about': '关于',
    'nav.projects': '项目',
    'nav.repos': '开源',
    'nav.content': '内容',
    'nav.blog': '博客',
    'hero.name': '阿雨',
    'hero.tagline': '用 AI 构建产品，用内容分享认知。专注 AI 应用开发、自动化工作流与独立开发。',
    'about.title': '关于我',
    'about.p1': '我是阿雨，一名 AI 独立开发者和内容创作者。我相信 AI 正在重塑软件开发的方式，并积极探索如何用 AI 工具提升开发效率、构建创新产品。',
    'about.p2': '我的技术栈涵盖 TypeScript、Python、Next.js、FastAPI 等，擅长将 AI 能力（Claude、Gemini、ElevenLabs 等）集成到实际产品中。我也活跃在小红书等平台，分享 AI 开发实战经验和工具使用技巧。',
    'about.p3': '我正在构建多个 AI 驱动的产品，从跨平台内容发布到智能质检，从 AI 工作流编排到客服自动化，涵盖全栈开发的各个层面。',
    'about.stat1': '在线产品',
    'about.stat2': 'GitHub 项目',
    'about.stat3': '全栈开发',
    'projects.title': '产品项目',
    'projects.desc': '部署在 Vercel 上的在线产品',
    'projects.visit': '访问',
    'projects.postudio': '跨平台内容发布桌面应用。一次编辑，多平台发布（小红书、Twitter、B站、YouTube、微信等），智能裁图、AI 改写、本地加密存储。',
    'projects.tinkerbase': 'AI 工作流可视化编排平台。拖拽式画布设计 AI Agent 工作流，面向业务用户和开发者的低代码智能自动化工具。',
    'projects.qualitysmith': 'API 优先的呼叫中心智能质检平台。一次 API 调用完成通话录音的转写、分析和评分，支持自定义评分卡。',
    'projects.tinkerhelp': 'AI 客服助手。用类人对话式 AI 自动化客户服务，支持 24/7 多语言、智能回复建议和分析看板。',
    'repos.title': '开源与工具',
    'repos.desc': '我日常使用和维护的工具与配置',
    'repos.claude_settings': 'Claude Code 个人 Skills 与配置集合。包含自定义技能、工作流和自动化脚本。',
    'repos.postudio': 'AI 跨平台内容发布工具源码。Next.js 全栈项目。',
    'repos.newton_cat': 'AI 物理教育短视频生成管线。自动生成物理知识科普视频。',
    'repos.marshall': '工作场景 AI 技能集合。自动化日常工作流。',
    'content.title': '视频与课程',
    'content.desc': '在各平台分享的 AI 开发实战内容',
    'content.xhs_title': 'AI 独立开发实战',
    'content.xhs_desc': 'Claude Code 使用技巧、AI 工具评测、独立开发经验分享。图文与视频内容持续更新中。',
    'content.follow': '关注我的小红书 →',
    'content.bilibili_title': '技术教程与分享',
    'content.bilibili_desc': 'AI 应用开发教程、工具使用演示、独立开发者 Vlog。',
    'content.youtube_title': 'English Content',
    'content.youtube_desc': 'AI 开发教程、工具评测、独立开发者日常（英文）。',
    'content.coming': '即将上线 →',
    'blog.title': '博客',
    'blog.desc': '技术思考与开发记录',
    'blog.post1_title': '用 Claude Code 构建完整的发布工作流',
    'blog.post1_desc': '如何利用 Claude Code Skills 实现从内容创作到多平台发布的全自动化流程。',
    'blog.post2_title': 'AI 独立开发者的技术栈选择',
    'blog.post2_desc': '从零到产品上线，我选择 Next.js + FastAPI + Supabase + Vercel 的思考过程。',
    'blog.post3_title': 'Remotion + AI：程序化视频生成实践',
    'blog.post3_desc': '结合 Remotion、ElevenLabs TTS 和 AI 图片生成，构建自动化视频制作管线。',
  },
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.repos': 'Open Source',
    'nav.content': 'Content',
    'nav.blog': 'Blog',
    'hero.name': 'Ayu',
    'hero.tagline': 'Building products with AI, sharing knowledge through content. Focused on AI app development, automation workflows, and indie hacking.',
    'about.title': 'About Me',
    'about.p1': "I'm Ayu, an AI indie developer and content creator. I believe AI is reshaping how software is built, and I'm actively exploring ways to leverage AI tools for better dev productivity and innovative products.",
    'about.p2': 'My tech stack spans TypeScript, Python, Next.js, FastAPI, and more. I specialize in integrating AI capabilities (Claude, Gemini, ElevenLabs, etc.) into real-world products. I also share practical AI development tips on social platforms.',
    'about.p3': "I'm building multiple AI-powered products — from cross-platform content publishing to intelligent QA, from AI workflow orchestration to customer service automation — covering the full stack.",
    'about.stat1': 'Live Products',
    'about.stat2': 'GitHub Repos',
    'about.stat3': 'Full Stack AI',
    'projects.title': 'Products',
    'projects.desc': 'Live products deployed on Vercel',
    'projects.visit': 'Visit',
    'projects.postudio': 'Cross-platform content publishing desktop app. Write once, publish everywhere (XHS, Twitter, Bilibili, YouTube, WeChat). AI-powered rewriting, smart image cropping, local encrypted storage.',
    'projects.tinkerbase': 'Visual AI workflow designer. Drag-and-drop canvas for building AI agent pipelines. Low-code intelligent automation for both business users and developers.',
    'projects.qualitysmith': 'API-first call center quality inspection platform. Transcribe, analyze, and score call recordings in a single API call. Customizable scorecards and webhook delivery.',
    'projects.tinkerhelp': 'AI customer service assistant. Automate support with human-like conversational AI. 24/7 multilingual support, smart reply suggestions, and analytics dashboard.',
    'repos.title': 'Open Source & Tools',
    'repos.desc': 'Tools and configs I use and maintain daily',
    'repos.claude_settings': 'Personal Claude Code skills & configuration. Custom skills, workflows, and automation scripts.',
    'repos.postudio': 'Cross-platform content publishing tool source code. Full-stack Next.js project.',
    'repos.newton_cat': 'AI physics education short video pipeline. Auto-generates physics explainer videos.',
    'repos.marshall': 'Workplace AI skill collection. Automating daily workflows.',
    'content.title': 'Videos & Courses',
    'content.desc': 'AI development content shared across platforms',
    'content.xhs_title': 'AI Indie Dev in Practice',
    'content.xhs_desc': 'Claude Code tips, AI tool reviews, indie dev experience sharing. Posts and videos updated regularly.',
    'content.follow': 'Follow on Xiaohongshu →',
    'content.bilibili_title': 'Tech Tutorials',
    'content.bilibili_desc': 'AI app dev tutorials, tool demos, and indie developer vlogs.',
    'content.youtube_title': 'English Content',
    'content.youtube_desc': 'AI development tutorials, tool reviews, and indie hacker journey in English.',
    'content.coming': 'Coming Soon →',
    'blog.title': 'Blog',
    'blog.desc': 'Tech thoughts and dev logs',
    'blog.post1_title': 'Building a Complete Publishing Workflow with Claude Code',
    'blog.post1_desc': 'How to use Claude Code Skills to automate the entire flow from content creation to multi-platform publishing.',
    'blog.post2_title': 'Tech Stack Choices for AI Indie Developers',
    'blog.post2_desc': 'My thought process behind choosing Next.js + FastAPI + Supabase + Vercel for going from zero to production.',
    'blog.post3_title': 'Remotion + AI: Programmatic Video Generation',
    'blog.post3_desc': 'Combining Remotion, ElevenLabs TTS, and AI image generation to build an automated video production pipeline.',
  }
};

let currentLang = localStorage.getItem('lang') || 'zh';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) {
    toggleBtn.textContent = lang === 'zh' ? 'EN' : '中文';
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
});
