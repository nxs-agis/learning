import { Project } from "../types/Project";
import NewTask from "./NewTask";

type Props = {
  project?: Project;
  onDelete: () => void;
  onAddTodo: (data: string) => void;
  onDeleteTodo: (id: string) => void;
};

export default function SelectedProject({
  project,
  onDelete,
  onAddTodo,
  onDeleteTodo,
}: Props) {
  let formattedDate: string | undefined;

  if (project && project.date) {
    const dateValue =
      typeof project.date === "string" ? new Date(project.date) : project.date;

    if (dateValue instanceof Date && !isNaN(dateValue.getTime())) {
      formattedDate = dateValue.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }
  }

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project && project.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project && project.desc}
        </p>
      </header>
      <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Task</h2>
        <NewTask onAdd={onAddTodo} />
        {project?.task === undefined && (
          <p className="text-stone-800 my-4">
            This project does not have any tasks yet.
          </p>
        )}
        {project?.task && project.task.length > 0 && (
          <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {project.task.map((task) => (
              <li key={task.id} className="flex justify-between my-4">
                <span>{task.todo}</span>
                <button
                  className="text-stone-700 hover:text-red-500"
                  onClick={() => onDeleteTodo(task.id)}
                >
                  Clear
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
