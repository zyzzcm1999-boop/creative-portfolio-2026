export type Project = {
  title: string;
  eyebrow: string;
  role?: string;
  description: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  images?: { src: string; alt: string; caption?: string }[];
  media?: { type: "audio" | "video"; src: string; label: string }[];
  links?: { href: string; label: string; meta?: string }[];
};

export type Category = {
  slug: string;
  number: string;
  title: string;
  en: string;
  intro: string;
  note?: string;
  accent: string;
  projects: Project[];
};

export const categories: Category[] = [
  {
    slug: "literature",
    number: "01",
    title: "文学作品",
    en: "WRITING & LITERATURE",
    intro: "纸媒文学、剧本、研究与传播文案。让文字不只被描述，也以真实刊载页面被看见。",
    accent: "#db5d3b",
    projects: [
      {
        eyebrow: "纸媒文学 / 公开发表",
        title: "文学作品刊载选页",
        role: "散文 · 叙事文学 · 报刊发表",
        description: "收录《翩凉》《滇藏》《冰墩墩旅行记》《没伞的日子》等纸媒文学作品，以实际刊载页呈现写作风格、版面与发表证明。",
        tags: ["纸媒发表", "散文", "叙事文学", "实物刊载"],
        images: [
          { src: "/media/literature-piaoliang.jpg", alt: "文学作品《翩凉》纸媒刊载页", caption: "《翩凉》" },
          { src: "/media/literature-diancang.jpg", alt: "文学作品《滇藏》稿件页", caption: "《滇藏》" },
          { src: "/media/literature-bingdundun.jpg", alt: "《冰墩墩旅行记》纸媒刊载页", caption: "《冰墩墩旅行记》" },
          { src: "/media/literature-umbrella.jpg", alt: "《没伞的日子》等作品刊载页", caption: "《没伞的日子》与同期作品" },
        ],
      },
      {
        eyebrow: "法律评论 / 研究",
        title: "动画抄袭判例研究",
        role: "案例梳理 · 法律评论",
        description: "系统梳理动画领域典型抄袭判例，从著作权法与实质性相似的认定出发，讨论 AI 时代创意保护的边界。",
        tags: ["学术研究", "法律评论", "结构化写作"],
      },
      {
        eyebrow: "AIGC 短片剧本",
        title: "《心镜》",
        role: "原创剧本 · 角色与对白",
        description: "为北京国际电影节 AIGC 单元创作的原创短片剧本，以镜像关系切入真实与虚幻，完成角色、对白与情感节奏设计。",
        tags: ["影视剧本", "AIGC 叙事", "北影节"],
      },
      {
        eyebrow: "角色文学",
        title: "《镜相》人物小传",
        role: "角色背景 · 性格弧线 · 心理动机",
        description: "通过完整人物小传建立角色前史与行动逻辑，为后续视觉生成、配音台本及人物一致性提供依据。",
        tags: ["人物塑造", "角色设定", "世界观"],
      },
      {
        eyebrow: "电影文学",
        title: "《萤火碑》视频脚本",
        role: "分场大纲 · 视觉意象 · 品牌叙事",
        description: "以诗意叙事构建未来能源图景，在完整故事线中自然承载品牌主题，并为 AI 影像制作拆分可执行镜头。",
        tags: ["视频脚本", "分镜前置", "品牌内容"],
      },
      {
        eyebrow: "赛事传播",
        title: "48 小时 AI 挑战赛文案",
        role: "Slogan · 招募 · 入围传播",
        description: "覆盖赛事前期招募、入围发布与现场传播的系列文案，在极短信息窗口内传达规则、气质与参与动机。",
        tags: ["宣传文案", "赛事传播", "Slogan"],
      },
      {
        eyebrow: "活动文书",
        title: "北影节 AIGC 单元系列文案",
        role: "致辞 · 串词 · 新闻推文 · 流程文案",
        description: "面向多届北京国际电影节 AIGC 单元，完成从舞台语言到对外传播的整套活动文字，协调官方表达与现场节奏。",
        tags: ["活动文案", "新闻传播", "公文写作"],
      },
      {
        eyebrow: "访谈脚本",
        title: "预见未来视听大赛",
        role: "访谈提纲 · 直播流程 · 即兴框架",
        description: "围绕“技术与艺术交汇”搭建视频播客访谈结构，兼顾嘉宾观点深度、长时段节奏与直播可执行性。",
        tags: ["视频播客", "访谈策划", "直播脚本"],
      },
    ],
  },
  {
    slug: "ai-products",
    number: "02",
    title: "AI 产品",
    en: "AI PRODUCT",
    intro: "从问题定义、交互原型到可部署应用。让 AI 参与分析，而不替代人的最终判断。",
    accent: "#2457ff",
    projects: [
      {
        eyebrow: "个人研究智能助手",
        title: "江睡不醒 · 观点雷达",
        role: "产品定义 · 交互设计 · 全栈实现",
        description: "面向财经内容创作者的可追溯观点记忆系统。它让当周事件关联历史观点，并并列展示支持证据、反方证据与缺失数据；AI 负责结构化分析，接受、修改或拒绝始终由作者决定。",
        tags: ["AI 产品", "人机协作", "证据链", "可部署 MVP"],
        image: "/media/radar-home.png",
        imageAlt: "观点雷达事件列表首页",
        links: [{ href: "https://jiangshuibuxing-radar.onrender.com", label: "在线体验" }],
      },
      {
        eyebrow: "CUC 专场 / 创意项目",
        title: "CUC 玄学创意项目",
        role: "创意策划 · AI 辅助表达 · 项目实践",
        description: "参与“智启灵感，绘梦未来——CUC 专场”创意实践，将校园语境中的玄学文化、青年表达与 AI 创意工具结合，完成概念策划与视觉呈现。",
        tags: ["CUC", "创意策划", "AI 辅助创作", "项目证书"],
        image: "/media/ai-product-certificates.jpg",
        imageAlt: "CUC 专场证书与福特智能车灯项目证明",
      },
      {
        eyebrow: "福特优行创新营 / AI 设计思维",
        title: "福特 · 远征之光智能车灯系统",
        role: "需求洞察 · 产品概念 · 视觉表达 · 课程第 4 名",
        description: "围绕户外驾驶与露营场景提出智能车灯产品概念，覆盖雨雾感知、动物驱赶、低功耗巡航与矩阵光束等功能，并完成海报、方案说明与结课展示。",
        tags: ["Ford", "产品设计", "AI 设计思维", "第 4 名"],
        images: [
          { src: "/media/expedition-light.jpg", alt: "远征之光智能车灯系统设计海报", caption: "产品概念海报" },
          { src: "/media/ai-product-certificates.jpg", alt: "福特优行创新营结课证明", caption: "课程与项目证明" },
        ],
      },
      {
        eyebrow: "关键交互 01",
        title: "双向证据审核",
        role: "支持 / 反方 / 缺失数据",
        description: "将证据关系拆成可审核、可修改的界面单元，避免模型输出成为不可追溯的单向结论。",
        tags: ["信息架构", "审核流", "作者控制"],
        image: "/media/radar-evidence.png",
        imageAlt: "观点雷达证据审核页面",
      },
      {
        eyebrow: "关键交互 02",
        title: "AI 增强分析",
        role: "结构化证据链 · 关系推理",
        description: "接入大模型生成分析草案，同时保留历史观点、来源与作者最终结论，形成完整研究包。",
        tags: ["DeepSeek", "结构化输出", "研究简报"],
        image: "/media/radar-analysis.png",
        imageAlt: "观点雷达 AI 分析输出结果",
      },
    ],
  },
  {
    slug: "aigc-films",
    number: "03",
    title: "AIGC 影视作品",
    en: "AIGC FILM",
    intro: "从概念、剧本到声音与成片的生成式影像实践。技术服务叙事，风格来自项目本身。",
    accent: "#6d4aff",
    projects: [
      {
        eyebrow: "2026 / 北京国际电影节 AIGC 单元",
        title: "《通感失格》",
        role: "概念开发 · 角色与场景 · 声音协作",
        description: "以冷峻近未来城市为舞台推进原创叙事，完成角色立绘、三幕场景、海报、配音样片与成片素材的系统化生产。",
        tags: ["原创短片", "视觉开发", "角色一致性", "声音设计"],
        image: "/media/synaesthesia-cover.png",
        imageAlt: "AIGC 短片通感失格海报",
        media: [{ type: "audio", src: "/media/jizhen-voice.mp3", label: "纪真角色声音样片" }],
        links: [{ href: "https://m.lingya.qq.com/bjiff", label: "观看北影节 AIGC 作品" }],
      },
      {
        eyebrow: "2025 / 北影节 × 中石化",
        title: "《未来的加油梦》",
        role: "脚本与概念图 · AI 镜头 · 声音统筹",
        description: "围绕“未来的能源梦想”构建明亮、亲和的未来能源站视觉体系，将清洁能源设施、儿童视角与品牌叙事融入完整影像流程。",
        tags: ["品牌短片", "AI 图像", "图生视频", "声音制作"],
        image: "/media/future-energy.png",
        imageAlt: "未来能源站 AI 概念图",
        media: [{ type: "video", src: "/media/future-energy-trailer.mp4", label: "项目预告片" }],
        links: [{ href: "https://m.lingya.qq.com/bjiff", label: "观看北影节 AIGC 作品" }],
      },
      {
        eyebrow: "2025 / 北京国际电影节",
        title: "《镜相》",
        role: "原创剧本 · 角色设定 · 配音台本",
        description: "以镜子为核心意象，讨论生成影像时代的真实边界；从文学脚本延伸到角色、画面与声音的跨媒介协作。",
        tags: ["镜像叙事", "AIGC 短片", "声画协作"],
        links: [{ href: "https://m.lingya.qq.com/bjiff", label: "观看北影节 AIGC 作品" }],
      },
      {
        eyebrow: "北京国际电影节 AIGC 单元",
        title: "《萤火碑》",
        role: "配音导演 · 声音统筹 · 诗意科幻叙事",
        description: "以诗意的未来意象讨论技术、能源与人的记忆，参与声音方向、配音统筹与声画节奏的建立。",
        tags: ["AIGC 短片", "配音导演", "声音叙事", "北影节"],
        links: [{ href: "https://m.lingya.qq.com/bjiff", label: "观看北影节 AIGC 作品" }],
      },
      {
        eyebrow: "概念设计",
        title: "《犯月》/ 无忧岛",
        role: "场景氛围 · 角色形象 · 电影海报",
        description: "围绕东南亚校园、渔船劳工与深海等场景建立冷灰、克制的影像语汇，探索犯罪题材的 AI 概念视觉。",
        tags: ["概念设计", "电影海报", "氛围开发"],
      },
      {
        eyebrow: "赛事与行业项目",
        title: "48 小时 AI 挑战赛",
        role: "赛事内容 · 采访 · 选手视频",
        description: "参与极限创作赛事的招商传播、采访脚本与选手视频制作，在 48 小时工作流中协调创意、技术与交付。",
        tags: ["极限创作", "赛事内容", "访谈"],
      },
    ],
  },
  {
    slug: "advertising",
    number: "04",
    title: "广告营销",
    en: "MARKETING & CAMPAIGN",
    intro: "从品牌命题、赛事招商到现场传播。把复杂项目整理成清楚、有行动力的表达。",
    accent: "#e34b3f",
    projects: [
      {
        eyebrow: "王者荣耀 × 成都金沙博物馆",
        title: "博物馆联名广告",
        role: "导演 · 品牌内容 · 文化 IP 转译",
        description: "将游戏 IP 与金沙文化资源放进同一叙事场景，通过节奏、视觉符号与年轻化表达完成联名传播。",
        tags: ["品牌联名", "文化营销", "短视频广告", "导演"],
        links: [{ href: "https://v.douyin.com/lTHdH1zyWJM/", label: "抖音观看成片" }],
      },
      {
        eyebrow: "青花郎",
        title: "青花郎品牌广告",
        role: "导演 · 品牌影像",
        description: "围绕品牌气质与消费场景组织影像表达，以克制的节奏和质感画面强化产品记忆与品牌辨识度。",
        tags: ["品牌广告", "导演", "短视频", "商业影像"],
        links: [{ href: "https://v.douyin.com/PAhCuUpgt7A/", label: "抖音观看成片" }],
      },
      {
        eyebrow: "德佑湿厕纸",
        title: "桃花季限定款广告",
        role: "导演 · 产品内容 · 季节营销",
        description: "围绕桃花季限定包装建立轻盈、鲜明的春日视觉，以产品利益点连接季节话题与社交传播。",
        tags: ["产品广告", "季节营销", "导演", "短视频"],
        links: [{ href: "https://v.douyin.com/oVFIqJ6Lesk/", label: "抖音观看成片" }],
      },
      {
        eyebrow: "北京国际电影节",
        title: "AIGC 单元传播与现场内容",
        role: "策划 · 文案 · 合作沟通",
        description: "围绕电影节 AIGC 单元，完成活动信息梳理、舞台文案、新闻传播与合作方对接，让技术议题进入公共文化语境。",
        tags: ["电影节", "整合传播", "现场内容"],
        image: "/media/bjiff-stage.jpg",
        imageAlt: "北京国际电影节 AIGC 单元活动现场",
      },
      {
        eyebrow: "大众百花 AIGC 单元",
        title: "活动总案与传播规划",
        role: "活动架构 · 大师工作坊 · 平台传播",
        description: "梳理单元定位、活动结构与执行细节，覆盖分会场运营、大师工作坊及短视频平台传播诉求。",
        tags: ["活动策划", "传播策略", "电影节"],
      },
      {
        eyebrow: "48 小时 AI 挑战赛",
        title: "赛事招商与全周期传播",
        role: "招商简介 · Slogan · 入围推文",
        description: "将技术型赛事转化为清晰的合作价值与参与叙事，支持招商、招募、入围与颁奖等关键节点。",
        tags: ["赛事营销", "招商", "全渠道文案"],
      },
      {
        eyebrow: "中石化 × 北影节",
        title: "未来能源品牌影像",
        role: "品牌命题转译 · 影视植入",
        description: "以儿童视角和未来能源站为核心，将品牌主题转化为可感知的角色、场景和情节，而非停留在口号露出。",
        tags: ["品牌植入", "内容营销", "AIGC"],
        image: "/media/future-energy.png",
        imageAlt: "未来能源品牌影像概念图",
      },
      {
        eyebrow: "北京动画周",
        title: "AI 挑战赛投标方案",
        role: "商务技术文件 · 服务方案 · 预算",
        description: "完成从服务逻辑、技术内容到预算与项目进度的投标文书，支持赛事执行项目竞标。",
        tags: ["投标", "商务方案", "项目规划"],
      },
    ],
  },
  {
    slug: "dubbing",
    number: "05",
    title: "配音作品",
    en: "VOICE & SOUND",
    intro: "台本、角色声音与声音统筹。声音不是画面的注释，而是推动叙事的另一条线。",
    note: "以下音频为项目工作样片，用于展示配音方向、角色语气与声音统筹。",
    accent: "#a13b72",
    projects: [
      {
        eyebrow: "有声书 / 喜马拉雅",
        title: "《迁坟秘闻》",
        role: "有声演播 · 长篇叙事",
        description: "参与悬疑题材有声书演播，通过角色区分、氛围控制与连续叙事维持长篇内容的听觉吸引力。",
        tags: ["有声书", "悬疑", "角色演播", "喜马拉雅"],
        links: [{ href: "https://xima.tv/1_3azoN5?_sonic=0", label: "喜马拉雅收听" }],
      },
      {
        eyebrow: "有声书 / 喜马拉雅",
        title: "《天赋拉满的我》",
        role: "有声演播 · 多角色表达",
        description: "面向网络文学的连续有声演播，通过人物音色、对白节奏与情绪推进建立角色辨识度。",
        tags: ["有声书", "网文", "多角色", "喜马拉雅"],
        links: [{ href: "https://xima.tv/1_LpceUw?_sonic=0", label: "喜马拉雅收听" }],
      },
      {
        eyebrow: "《功夫熊猫 4》衍生内容",
        title: "“魅影妖后”衍生短视频",
        role: "角色配音 · 短视频表演",
        description: "围绕“魅影妖后”角色完成衍生短视频配音，以鲜明音色和节奏适配动画角色的戏剧张力。",
        tags: ["角色配音", "动画", "衍生短视频", "抖音"],
        links: [{ href: "https://v.douyin.com/1RhZTR5iCUc/", label: "抖音观看" }],
      },
      {
        eyebrow: "角色声音 / 2026",
        title: "《通感失格》纪真角色样片",
        role: "角色语气 · 表演方向 · 声画匹配",
        description: "根据人物设定与剧情氛围建立纪真的声音方向，验证角色年龄感、情绪距离与对白节奏。",
        tags: ["角色配音", "声音导演", "AIGC 短片"],
        media: [{ type: "audio", src: "/media/jizhen-voice.mp3", label: "纪真角色声音样片" }],
      },
      {
        eyebrow: "品牌短片 / 2025",
        title: "未来能源项目声音设计",
        role: "配音方案 · 角色协调 · 成片听感",
        description: "协调儿童角色与父亲角色的表演方向，在科技感与亲和力之间建立统一的声音基调。",
        tags: ["配音统筹", "品牌短片", "角色声音"],
        media: [
          { type: "audio", src: "/media/future-energy-audio.mp3", label: "完整声音样片" },
          { type: "audio", src: "/media/boy-voice.mp3", label: "小男孩角色样片" },
        ],
      },
      {
        eyebrow: "台本创作",
        title: "《镜相》配音台本",
        role: "对白 · 旁白 · 情绪与节奏标注",
        description: "在生成影像基础上细化角色对话与旁白层次，通过停连、重音和情绪提示强化短片的叙事张力。",
        tags: ["配音台本", "对白设计", "声音叙事"],
      },
      {
        eyebrow: "赛事内容",
        title: "48 小时 AI 挑战赛声音工作",
        role: "旁白 · 角色对话 · 氛围统筹",
        description: "在紧凑制作周期内完成选手视频的声音方案，让不同来源的画面与素材保持统一的节奏和情绪。",
        tags: ["快速交付", "声音统筹", "赛事视频"],
      },
    ],
  },
  {
    slug: "other-films",
    number: "06",
    title: "其他影视作品",
    en: "FILM & VIDEO",
    intro: "活动记录、宣传影像与视觉概念展示。根据传播场景选择最直接有效的影像语言。",
    accent: "#168579",
    projects: [
      {
        eyebrow: "活动影像 / 2025",
        title: "北影节 AIGC 单元荣誉盛典",
        role: "活动记录 · 现场混剪",
        description: "记录中国传媒大学场荣誉盛典的舞台、嘉宾与作品展示，在活动信息与现场情绪之间组织剪辑节奏。",
        tags: ["活动记录", "现场影像", "混剪"],
        image: "/media/bjiff-stage.jpg",
        imageAlt: "北影节 AIGC 单元荣誉盛典现场",
      },
      {
        eyebrow: "宣传片",
        title: "未来能源主题项目预告",
        role: "素材组织 · 剪辑 · 声画节奏",
        description: "以短时长预告片呈现未来能源站的核心视觉、人物关系与项目气质，适配传播预热场景。",
        tags: ["预告片", "剪辑", "品牌影像"],
        media: [{ type: "video", src: "/media/future-energy-trailer.mp4", label: "项目预告片" }],
      },
      {
        eyebrow: "产品概念展示",
        title: "远征之光智能车灯系统",
        role: "概念设计 · 海报 · 功能叙事",
        description: "围绕露营照明、动物驱赶、低功耗巡航与雨雾感知等使用场景，完成智能车灯系统的概念视觉展示。",
        tags: ["产品概念", "视觉设计", "AI 设计思维"],
        image: "/media/expedition-light.jpg",
        imageAlt: "远征之光智能车灯系统海报",
      },
      {
        eyebrow: "校园创作",
        title: "AI 影像练习与短片实验",
        role: "生成素材 · 剪辑 · 风格测试",
        description: "通过小兔子系列与校园作业测试线稿、水彩、油画和写实影像之间的风格迁移与镜头衔接。",
        tags: ["短片练习", "风格迁移", "剪辑"],
      },
    ],
  },
];

export const categoryBySlug = Object.fromEntries(
  categories.map((category) => [category.slug, category]),
) as Record<string, Category>;
