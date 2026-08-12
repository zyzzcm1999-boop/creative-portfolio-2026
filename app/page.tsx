import Link from "next/link";
import { Header, Footer } from "./components";
import { categories } from "./data";

export default function Home() {
  return (
    <main className="home-page">
      <Header />
      <section className="home-hero">
        <p className="eyebrow">PORTFOLIO / SELECTED WORKS / 2026</p>
        <h1><span>写作，产品，</span><span>影像与声音。</span></h1>
        <div className="home-intro">
          <p>横跨文学写作、AI 产品、AIGC 影视、广告营销与声音创作的精选项目。</p>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>
      <section className="category-grid" aria-label="作品分类">
        {categories.map((category) => (
          <Link href={`/${category.slug}`} key={category.slug} className="category-tile" style={{ "--tile-accent": category.accent } as React.CSSProperties}>
            <div className="tile-top"><span>{category.number}</span><span>{category.en}</span></div>
            <div className="tile-shape" aria-hidden="true"><i /><i /><i /></div>
            <div className="tile-bottom">
              <h2>{category.title}</h2>
              <span aria-hidden="true">↗</span>
            </div>
            <p>{category.intro}</p>
          </Link>
        ))}
      </section>
      <section className="home-statement">
        <p>ABOUT THE WORK</p>
        <blockquote>“把复杂的信息整理成清晰的叙事，再把叙事变成可以被体验的作品。”</blockquote>
      </section>
      <Footer />
    </main>
  );
}
