import { Project } from "../types/Project";
import Button from "./Button";

type Props = {
  onStartAddProject: () => void;
  project: Project[];
  onSelectProject: (id?: string) => void;
  selectedProjectId?: string;
};

export default function Sidebar({
  onStartAddProject,
  project,
  onSelectProject,
  selectedProjectId,
}: Props) {
  return (
    <aside className="w-1/3 lg:w-1/5 px-8 py-16 h-full bg-stone-900 text-white rounded-r-xl">
      <h2 className="font-bold text-xl mb-8 uppercase">Your Project</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {project.map((project: Project) => {
          let cssClases =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if (project.id == selectedProjectId) {
            cssClases += " bg-stone-800 text-stone-200";
          }
          cssClases += " text-stone-400";

          return (
            <li key={project.id}>
              <button
                className={cssClases}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
