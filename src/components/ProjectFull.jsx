import React from "react";
import { CSSTransition } from "react-transition-group";
import cs from "../css/FullCard.module.css";
import gitHub from "../img/icons/gitHub-black.svg";
import cross from "../img/icons/cross.svg";

export const ProjectFull = ({ project, visible, setIsOpenProject }) => {
  return (
    <CSSTransition
      in={visible}
      timeout={700}
      classNames="fullproject"
      unmountOnExit
    >
      <section className={cs.fullcart} onClick={() => setIsOpenProject(false)}>
        <div className={cs.conteiner} onClick={(e) => e.stopPropagation()}>
          <button className={cs.cross} onClick={() => setIsOpenProject(false)}>
            <img src={cross} alt="" />
          </button>
          <h1 className={cs.title}>{project.name}</h1>

          <img src={require(`../img/projects/${project.imgUrl}`)} alt="" />

          <p className={cs.skils}>{project.skils}</p>
          <a
            href={project.link}
            className={cs.git}
            target="_blank"
            rel="noreferrer"
          >
            <img src={gitHub} alt=""></img>
            <p>GitHub</p>
          </a>
        </div>
      </section>
    </CSSTransition>
  );
};
