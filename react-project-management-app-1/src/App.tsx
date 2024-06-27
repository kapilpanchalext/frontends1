import { useState } from "react";
import NoProjectSelected from "./components/noprojectselected/NoProjectSelected";
import ProjectsSidebar from "./components/sidebar/ProjectsSidebar";
import NewProject from "./components/newproject/NewProject";

function App() {

  type ProjectStateType = {
    selectedProjectId: string | undefined | null,
    projects:[]
  }

  const [projectsState, setProjectsState] = useState<ProjectStateType>({
    selectedProjectId: undefined,
    projects:[]
  });

  const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let content;

  if(projectsState.selectedProjectId === null) {
    content = <NewProject />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;