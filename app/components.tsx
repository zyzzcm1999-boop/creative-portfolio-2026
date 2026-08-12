import Link from "next/link";
import { categories, type Category, type Project } from "./data";

export function Header({ active }: { active?: string }) {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="返回作品集首页">
        <span className="brand-mark">P/26</span>
        <span className="brand-copy">创意作品集</span>
      </Link>
      <nav className="desktop-nav" aria-label="作品集分类">
        {categories.map((item) => (
          <Link key={item.slug} href={`/#${item.slug}`} className={active === item.slug ? "active" : ""}>
            {item.number} {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer({ current }: { current?: string }) {
  return (
    <footer className="site-footer">
      <div>
        <span>PORTFOLIO</span>
        <span>2026</span>
      </div>
      <nav aria-label="底部分类导航">
        {categories.map((item) => (
          <Link key={item.slug} href={`/#${item.slug}`} aria-current={current === item.slug ? "page" : undefined}>
            {item.title}
          </Link>
        ))}
      </nav>
    </footer>
  );
}

function Media({ item }: { item: NonNullable<Project["media"]>[number] }) {
  if (item.type === "video") {
    return (
      <div className="media-block video-block">
        <video controls preload="metadata" playsInline>
          <source src={item.src} type="video/mp4" />
        </video>
        <span>{item.label}</span>
      </div>
    );
  }
  return (
    <div className="media-block audio-block">
      <span>{item.label}</span>
      <audio controls preload="none">
        <source src={item.src} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const hasLargeMedia = project.image || project.images || project.media?.some((item) => item.type === "video");
  return (
    <article className={`project-card ${hasLargeMedia ? "project-featured" : ""}`}>
      {project.image && (
        <figure className="project-image">
          <img src={project.image} alt={project.imageAlt ?? "项目图片"} loading={index > 0 ? "lazy" : "eager"} />
        </figure>
      )}
      {project.images && (
        <div className={`project-gallery ${project.images.length === 2 ? "gallery-pair" : ""}`}>
          {project.images.map((image, imageIndex) => (
            <figure key={image.src}>
              <img src={image.src} alt={image.alt} loading={index + imageIndex > 0 ? "lazy" : "eager"} />
              {image.caption && <figcaption>{image.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}
      <div className="project-content">
        <div className="project-topline">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{project.eyebrow}</span>
        </div>
        <h2>{project.title}</h2>
        {project.role && <p className="project-role">{project.role}</p>}
        <p className="project-description">{project.description}</p>
        <div className="tag-list">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        {project.links && (
          <div className="project-links">
            {project.links.map((link) => (
              <a className="text-link" href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                <span>{link.label}</span><span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
        {project.media?.map((item) => <Media key={item.src} item={item} />)}
      </div>
    </article>
  );
}

export function PortfolioSection({ category }: { category: Category }) {
  return (
    <section id={category.slug} className="portfolio-section" style={{ "--accent": category.accent } as React.CSSProperties}>
      <div className="section-anchor" aria-hidden="true" />
      <div className="category-hero">
        <div className="hero-index">{category.number}</div>
        <div className="hero-copy">
          <p className="eyebrow">{category.en}</p>
          <h1>{category.title}</h1>
          <p className="category-intro">{category.intro}</p>
          <div className="hero-facts">
            <span>{category.projects.length} 个项目</span>
            <span>精选案例</span>
            <span>2024—2026</span>
          </div>
        </div>
      </div>
      {category.note && <p className="category-note">{category.note}</p>}
      <div className="project-list" aria-label={`${category.title}项目`}>
        {category.projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
      </div>
      <a href="#top" className="back-to-top" aria-label="返回页面顶部">
        <span>END / {category.number}</span><strong>返回顶部</strong><span aria-hidden="true">↑</span>
      </a>
    </section>
  );
}

export function CategoryPage({ category }: { category: Category }) {
  const currentIndex = categories.findIndex((item) => item.slug === category.slug);
  const next = categories[(currentIndex + 1) % categories.length];
  return (
    <main style={{ "--accent": category.accent } as React.CSSProperties}>
      <Header active={category.slug} />
      <section className="category-hero">
        <div className="hero-index">{category.number}</div>
        <div className="hero-copy">
          <p className="eyebrow">{category.en}</p>
          <h1>{category.title}</h1>
          <p className="category-intro">{category.intro}</p>
          <div className="hero-facts">
            <span>{category.projects.length} 个项目</span>
            <span>精选案例</span>
            <span>2024—2026</span>
          </div>
        </div>
      </section>
      {category.note && <p className="category-note">{category.note}</p>}
      <section className="project-list" aria-label={`${category.title}项目`}>
        {category.projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
      </section>
      <Link href={`/${next.slug}`} className="next-category">
        <span>NEXT / {next.number}</span>
        <strong>{next.title}</strong>
        <span aria-hidden="true">→</span>
      </Link>
      <Footer current={category.slug} />
    </main>
  );
}
