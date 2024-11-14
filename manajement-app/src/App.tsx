import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import { Project } from "./types/Project";
import SelectedProject from "./components/SelectedProject";
import uniqid from "uniqid";

type stateProject = {
  selectedProjectId?: string;
  selectedPage: boolean;
  project: Project[];
};

function App() {
  const [projectState, setProjectState] = useState<stateProject>({
    selectedPage: false,
    project: [],
  });

  function handlerCancelAddProject() {
    setProjectState((prev) => ({ ...prev, selectedPage: false }));
  }

  function handlerStartAddProject() {
    setProjectState((prev) => ({
      ...prev,
      selectedProjectId: undefined,
      selectedPage: true,
    }));
  }

  function handlerSelectProject(id?: string) {
    setProjectState((prev) => ({ ...prev, selectedProjectId: id }));
  }

  function handlerAddProject(projectData: Project) {
    setProjectState((prev) => {
      const newProject = {
        ...projectData,
        id: uniqid(),
      };

      return {
        ...prev,
        selectedPage: false,
        project: [...prev.project, newProject],
      };
    });
  }

  function handlerDeletedProject() {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedPage: false,
        selectedProjectId: undefined,
        project: prev.project.filter(
          (project) => project.id !== prev.selectedProjectId
        ),
      };
    });
  }

  function handlerAddTodo(data: string) {
    setProjectState((prev) => {
      const index = prev.project.findIndex(
        (task) => task.id === prev.selectedProjectId
      );

      const newTodo = {
        id: uniqid(),
        todo: data,
      };

      let updateProject = [...prev.project, newTodo];

      if (index !== -1 && updateProject[index]) {
        updateProject[index] = {
          ...updateProject[index],
          task: [...(prev.project[index].task || []), newTodo],
        };
      }
      return {
        ...prev,
        project: updateProject,
      };
    });
  }

  function handlerDeleteTodo(id: string) {
    setProjectState((prev) => {
      const index = prev.project.findIndex(
        (task) => task.id === prev.selectedProjectId
      );

      let updateProject = [...prev.project];
      let taskUpdate = prev.project[index].task || [];

      if (index != -1 && updateProject[index]) {
        updateProject[index] = {
          ...updateProject[index],
          task: taskUpdate.filter((todo) => todo.id !== id),
        };
      }

      return {
        ...prev,
        project: updateProject,
      };
    });
  }

  let selectedProject = projectState.project.find(
    (project) => project.id == projectState.selectedProjectId
  );

  let content;

  if (projectState.selectedProjectId) {
    content = (
      <SelectedProject
        project={selectedProject}
        onDelete={handlerDeletedProject}
        onAddTodo={handlerAddTodo}
        onDeleteTodo={handlerDeleteTodo}
      />
    );
  } else if (projectState.selectedPage) {
    content = (
      <NewProject
        onAdd={handlerAddProject}
        onCancel={handlerCancelAddProject}
      />
    );
  } else if (!projectState.selectedPage) {
    content = <NoProjectSelected onStartAddProject={handlerStartAddProject} />;
  }

  return (
    <main className="h-screen flex gap-8">
      <Sidebar
        onStartAddProject={handlerStartAddProject}
        project={projectState.project}
        onSelectProject={handlerSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
