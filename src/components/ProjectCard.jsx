import React from "react";
import cs from "../css/Card.module.css";

export const ProjectCard = ({ project, click }) => {
  return (
    <div>
      <div className={cs.card} onClick={() => click(project)}>
        <img src={require(`../img/projects/${project.imgUrl}`)} alt="" />
        <p className="card_p">{project.name}</p>
      </div>
    </div>
  );
};
