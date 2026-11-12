import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/lib/data";

export default function ProjectGrid() {
  return (
    <section className="pb-20 pt-4">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            wide={projects.length % 2 === 1 && index === projects.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
