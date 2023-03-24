import React from "react";
import "../css/Card.css";

export const ProjectCard = ({ project }) => {
  return (
    <section className="card">
      <img src={require(`../img/projects/${project.imgUrl}`)} alt="" />
      <p>{project.name}</p>
    </section>
  );
};
