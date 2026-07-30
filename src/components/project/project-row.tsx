import Image from "next/image";
import { ArrowUpRight } from "@/components/ui/icons";
import type { Project } from "@/types/project";

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const isReversed = index % 2 === 1;
  return (
    <article id={project.id} className={`project-row ${isReversed ? "is-reversed" : ""}`}>
      <a href={project.liveUrl} className="project-visual" aria-label={`View ${project.title} live demo`}>
        <Image src={project.image} alt={`${project.title} interface preview placeholder`} width={1280} height={800} sizes="(max-width: 768px) 100vw, 55vw" />
        <span className="project-visual-number">0{index + 1}</span>
        <span className="project-visual-action"><ArrowUpRight /></span>
      </a>
      <div className="project-copy">
        <div className="project-meta"><span>0{index + 1}</span><span>{project.category}</span></div>
        <h3>{project.title}</h3>
        <p>{project.fullDescription}</p>
        <ul aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="project-links">
          <a href={`#${project.id}`}>View case study <ArrowUpRight /></a>
          <a href={project.liveUrl}>Live demo <ArrowUpRight /></a>
          <a href={project.githubUrl}>GitHub <ArrowUpRight /></a>
        </div>
      </div>
    </article>
  );
}
