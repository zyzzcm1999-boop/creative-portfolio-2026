import Link from "next/link";
import { categories, type Category, type Project } from "./data";

export function Header() {
  return (
    <header className="site-header">
      <Link href="/#top" className="brand" aria-label="返回作品集顶部">
        <span className="brand-mark">P/26</span>
        <span className="brand-copy">创意作品集</span>
      </Link>
      <nav className="desktop-nav" aria-label="作品集分类">
        {categories.map((item) => (
          <Link key={item.slug} href={`/#${item.slug}`}>
            <span>{item.number}</span>{item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div><span>SELECTED WORKS</span><span>2026</span></div>
      <nav aria-label="底部分类导航">
        {categories.map((item) => <Link key={item.slug} href={`/#${item.slug}`}>{item.title}</Link>)}
      </nav>
    </footer>
  );
}

function Visual({ project, index }: { project: Project; index: number }) {
  if (project.images) {
    return (
      <div className={`project-gallery gallery-${Math.min(project.images.length, 3)}`}>
        {project.images.map((image) => (
          <figure key={image.src}>
            <img src={image.src} alt={image.alt} loading={index ? "lazy" : "eager"} />
            {image.caption && <figcaption>{image.caption}</figcaption>}
          </figure>
        ))}
      </div>
    );
  }
  if (!project.image) return null;
  return (
    <figure className="project-image">
      <img src={project.image} alt={project.imageAlt ?? project.title} loading={index ? "lazy" : "eager"} />
    </figure>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const visual = project.image || project.images;
  return (
    <article className={`project-card${visual ? " has-visual" : " text-only"}`}>
      <Visual project={project} index={index} />
      <div className="project-content">
        <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
        <div className="project-copy">
          {project.publication && <p className="publication">{project.publication}</p>}
          <h3>{project.title}</h3>
          <div className="meta-row">{project.meta.map((item) => <span key={item}>{item}</span>)}</div>
          {project.links && (
            <div className="project-links">
              {project.links.map((link) => (
                <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                  <span>{link.label}</span><span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export function PortfolioSection({ category }: { category: Category }) {
  let previousGroup: Project["group"] | undefined;
  return (
    <section id={category.slug} className="portfolio-section" style={{ "--accent": category.accent } as React.CSSProperties}>
      <header className="section-head">
        <p>{category.number} / {category.en}</p>
        <h2>{category.title}</h2>
        <div><span>{category.projects.length}</span><small>SELECTED<br />ENTRIES</small></div>
      </header>
      <div className="project-list" aria-label={`${category.title}作品`}>
        {category.projects.map((project, index) => {
          const showGroup = project.group && project.group !== previousGroup;
          previousGroup = project.group;
          return (
            <div key={project.title}>
              {showGroup && <div className="group-label"><span>{project.group}</span><span>{project.group === "纸媒" ? "PRINT PUBLICATIONS" : "ONLINE FICTION"}</span></div>}
              <ProjectCard project={project} index={index} />
            </div>
          );
        })}
      </div>
      <a href="#top" className="section-end"><span>{category.number} / END</span><span>返回目录</span><span>↑</span></a>
    </section>
  );
}
