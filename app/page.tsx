import Link from "next/link";
import { Footer, Header, PortfolioSection } from "./components";
import { categories } from "./data";

export default function Home() {
  return (
    <main id="top">
      <Header />
      <section className="cover">
        <div className="cover-kicker"><span>PORTFOLIO</span><span>2017—2026</span></div>
        <div className="cover-title">
          <p>SELECTED WORKS</p>
          <h1>文字、智能<br /><i>与影像叙事</i></h1>
        </div>
        <div className="cover-bottom">
          <p>文学 / AI 产品 / AIGC 影视<br />广告营销 / 配音 / 影视作品</p>
          <span>六个篇章<br />一个网址</span>
        </div>
      </section>
      <section className="contents" aria-label="作品目录">
        <header><span>CONTENTS</span><span>作品目录</span><span>VOL. 01</span></header>
        {categories.map((category) => (
          <Link href={`#${category.slug}`} key={category.slug} style={{ "--accent": category.accent } as React.CSSProperties}>
            <span>{category.number}</span>
            <strong>{category.title}</strong>
            <em>{category.en}</em>
            <span>{String(category.projects.length).padStart(2, "0")}</span>
          </Link>
        ))}
      </section>
      {categories.map((category) => <PortfolioSection category={category} key={category.slug} />)}
      <Footer />
    </main>
  );
}
