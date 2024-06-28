import { useState } from "react";
import NoProjectSelected from "./components/noprojectselected/NoProjectSelected";
import ProjectsSidebar from "./components/sidebar/ProjectsSidebar";
import NewProject from "./components/newproject/NewProject";
import SelectedProject from "./components/selectedproject/SelectedProject";

export interface ProjectData {
  title: string,
  description: string,
  dueDate: Date
  id?: number
}

export interface TaskData {
  task: string,
  projectId: number,
  id?: number
}

function App() {

  type ProjectStateType = {
    selectedProjectId: number | undefined | null,
    projects?: ProjectData[],
    tasks?: TaskData[],
  }

  const [projectsState, setProjectsState] = useState<ProjectStateType>({
    selectedProjectId: undefined,
    projects: [],
    tasks:[]
  });

  const handleSelectProject = (id: number) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  const handleAddProject = (projectData: ProjectData) => {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects!, newProject]
      };
    })
  }

  const handleCancelAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  const handleDeleteProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects?.filter((project) => project.id !== prevState.selectedProjectId),
      };
    });
  }

  const handleAddTask = (task: string) => {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask: TaskData = {
        task: task,
        projectId: prevState.selectedProjectId!,
        id: taskId
      }

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks!]
      };
    })
  }

  const handleDeleteTask = (id: number) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks?.filter((task) => task.id !== id),
      };
    });
  }

  const selectedProject = projectsState.projects?.find(project => project.id === projectsState.selectedProjectId!); 

  let content = null;

  if (selectedProject) {
    content = <SelectedProject 
      project={selectedProject} 
      onDelete={handleDeleteProject} 
      onAddTask={handleAddTask} 
      onDeleteTask={handleDeleteTask} 
      tasks={projectsState.tasks!}
      />;
  }

  if(projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
            onStartAddProject={handleStartAddProject} 
            projects={projectsState.projects!}
            onSelectProject={handleSelectProject}
            selectedProjectId={projectsState.selectedProjectId!}
            />
      {content}
    </main>
  );
}

export default App;