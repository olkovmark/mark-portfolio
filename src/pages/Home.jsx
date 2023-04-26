import React, { useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectFull } from "../components/ProjectFull";
import "../css/Home.css";
import { projects } from "../settings/variables.js";
//
const rotate = [0, 10, 20, 30, 40];
let selectedProjet = projects[0];
export const Home = () => {
  const [isOpenProject, setIsOpenProject] = useState(false);
  return (
    <div>
      <header className="main-header">
        <div className="main-header-text">
          <h1>
            Hi, my name is <strong>Mark</strong>
          </h1>
          <h2>a FullStack developer</h2>
          <p>with passion for learning and creating.</p>
        </div>

        <a
          href={require("../documents/MarkEng.pdf")}
          target="_blank"
          rel="noreferrer"
        >
          Open CV
        </a>

        {rotate.map((r) => (
          <div
            key={r}
            style={{ transform: `rotate(${r - 70}deg)` }}
            className="box"
          ></div>
        ))}
      </header>

      <main className="projects">
        <div className="projects-conteiner">
          <h1 className="title">Projects</h1>
          <div className="projects-list">
            {projects.map((project, i) => (
              <ProjectCard project={project} key={i} click={clickProject} />
            ))}
          </div>
        </div>
      </main>

      <ProjectFull
        project={selectedProjet}
        setIsOpenProject={setIsOpenProject}
        visible={isOpenProject}
      />
      <footer></footer>
    </div>
  );

  function clickProject(e) {
    selectedProjet = e;
    setIsOpenProject(true);
  }
};

export default Home;
