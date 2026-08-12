export type Project = {
  title: string;
  publication?: string;
  meta: string[];
  group?: "纸媒" | "网络";
  image?: string;
  imageAlt?: string;
  images?: { src: string; alt: string; caption?: string }[];
  links?: { href: string; label: string }[];
};

export type Category = {
  slug: string;
  number: string;
  title: string;
  en: string;
  accent: string;
  projects: Project[];
};

export const categories: Category[] = [
  {
    slug: "literature",
    number: "01",
    title: "文学作品",
    en: "LITERATURE",
    accent: "#b4452f",
    projects: [
      {
        title: "《瑞龙吟》",
        publication: "《山西科技报》",
        meta: ["诗词", "2023 年 7 月 17 日发表"],
        group: "纸媒",
      },
      {
        title: "《捣练子·深夜候机有感》",
        publication: "《山西科技报》",
        meta: ["诗词", "2023 年 7 月 17 日发表"],
        group: "纸媒",
      },
      {
        title: "《演藏》",
        publication: "《海燕》",
        meta: ["小说", "2022 年 12 月发表"],
        group: "纸媒",
        image: "/media/literature-diancang.jpg",
        imageAlt: "小说《演藏》作品页面",
      },
      {
        title: "《驷凉》",
        publication: "《文学天地》",
        meta: ["散文", "2023 年 7 月发表"],
        group: "纸媒",
        image: "/media/literature-piaoliang.jpg",
        imageAlt: "散文《驷凉》纸媒作品页面",
      },
      {
        title: "《没伞的日子》",
        publication: "《锦州晚报》",
        meta: ["散文", "2021 年 12 月 17 日发表"],
        group: "纸媒",
        image: "/media/literature-umbrella.jpg",
        imageAlt: "散文《没伞的日子》刊载页面",
      },
      {
        title: "《冰墩墩旅行记》",
        publication: "《锦州晚报》",
        meta: ["小说", "2022 年 2 月 25 日发表"],
        group: "纸媒",
        image: "/media/literature-bingdundun.jpg",
        imageAlt: "小说《冰墩墩旅行记》刊载页面",
      },
      {
        title: "《从叙事结构与视听符码浅析国产动画电影的优化路径》",
        publication: "《北大荒文化》",
        meta: ["论文", "2023 年第 31 期发表"],
        group: "纸媒",
      },
      {
        title: "《半死桐》",
        publication: "网络文学",
        meta: ["长篇小说"],
        group: "网络",
      },
      {
        title: "《群芳谱》",
        publication: "网络文学",
        meta: ["长篇小说"],
        group: "网络",
      },
      {
        title: "《六合异闻录》",
        publication: "网络文学",
        meta: ["长篇小说"],
        group: "网络",
      },
    ],
  },
  {
    slug: "ai-products",
    number: "02",
    title: "AI 产品",
    en: "AI PRODUCTS",
    accent: "#244c9e",
    projects: [
      {
        title: "玄学创意项目",
        publication: "“智启创新 谱绘未来——CUC 专场”活动",
        meta: ["CUC 专场", "活动项目"],
        image: "/media/ai-product-certificates.jpg",
        imageAlt: "CUC 专场玄学创意项目证明",
      },
      {
        title: "智能车灯系统项目",
        publication: "“福特汽车优行创新营 AI 设计思维课”",
        meta: ["福特汽车优行创新营", "AI 设计思维课"],
        images: [
          { src: "/media/expedition-light.jpg", alt: "智能车灯系统项目视觉", caption: "智能车灯系统" },
          { src: "/media/ai-product-certificates.jpg", alt: "福特汽车优行创新营项目证明", caption: "项目证明" },
        ],
      },
      {
        title: "“江睡不醒财经雷达”项目",
        publication: "AI 奈势产品经理共创营活动",
        meta: ["AI 产品", "线上项目"],
        images: [
          { src: "/media/radar-home.png", alt: "江睡不醒财经雷达首页", caption: "事件列表" },
          { src: "/media/radar-evidence.png", alt: "江睡不醒财经雷达证据审核页面", caption: "证据审核" },
          { src: "/media/radar-analysis.png", alt: "江睡不醒财经雷达分析页面", caption: "AI 分析" },
        ],
        links: [{ href: "https://jiangshuibuxing-radar.onrender.com", label: "访问线上项目" }],
      },
    ],
  },
  {
    slug: "aigc-films",
    number: "03",
    title: "AIGC 影视作品",
    en: "AIGC FILMS",
    accent: "#6a408e",
    projects: [
      {
        title: "《未来的加油梦》",
        meta: ["AIGC 影视作品"],
        image: "/media/future-energy.png",
        imageAlt: "《未来的加油梦》项目画面",
        links: [{ href: "https://www.hivideo.com", label: "观看作品" }],
      },
      {
        title: "《萤火碑》",
        meta: ["AIGC 影视作品"],
        links: [{ href: "https://www.hivideo.com", label: "观看作品" }],
      },
      {
        title: "《镜相》",
        meta: ["AIGC 影视作品"],
        links: [{ href: "https://www.hivideo.com", label: "观看作品" }],
      },
      {
        title: "《通感失格》",
        meta: ["AIGC 影视作品"],
        image: "/media/synaesthesia-cover.png",
        imageAlt: "《通感失格》作品海报",
        links: [{ href: "https://m.lingya.qq.com/bjiff", label: "观看作品" }],
      },
    ],
  },
  {
    slug: "advertising",
    number: "04",
    title: "广告营销",
    en: "ADVERTISING",
    accent: "#cf523b",
    projects: [
      {
        title: "王者荣耀 × 成都金沙博物馆联名广告",
        meta: ["联名广告"],
        links: [{ href: "https://v.douyin.com/lTHdH1zyWJM/", label: "抖音观看" }],
      },
      {
        title: "青花郎品牌广告",
        meta: ["品牌广告"],
        links: [{ href: "https://v.douyin.com/PAhCuUpgt7A/", label: "抖音观看" }],
      },
      {
        title: "德佑湿厕纸桃花季限定款广告",
        meta: ["产品广告", "桃花季限定款"],
        links: [{ href: "https://v.douyin.com/oVFIqJ6Lesk/", label: "抖音观看" }],
      },
    ],
  },
  {
    slug: "dubbing",
    number: "05",
    title: "配音作品",
    en: "VOICE WORKS",
    accent: "#8f315f",
    projects: [
      {
        title: "有声书《迁坟秘闻》",
        meta: ["有声书", "喜马拉雅"],
        links: [{ href: "https://xima.tv/1_3azoN5?_sonic=0", label: "喜马拉雅收听" }],
      },
      {
        title: "《天赋拉满的我》",
        meta: ["有声书", "喜马拉雅"],
        links: [{ href: "https://xima.tv/1_LpceUw?_sonic=0", label: "喜马拉雅收听" }],
      },
    ],
  },
  {
    slug: "other-films",
    number: "06",
    title: "其他影视作品",
    en: "OTHER FILMS",
    accent: "#26776d",
    projects: [
      {
        title: "《功夫熊猫 4》“魅影妖后”衍生短视频",
        meta: ["衍生短视频"],
        links: [{ href: "https://v.douyin.com/1RhZTR5iCUc/", label: "抖音观看" }],
      },
      {
        title: "《丽痕》",
        publication: "剧情短片",
        meta: ["剧情短片"],
      },
      {
        title: "《您，一直在这里》",
        publication: "雷锋精神宣传片",
        meta: ["宣传片"],
      },
    ],
  },
];
