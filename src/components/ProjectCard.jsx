import React from "react";
import "../css/Card.css";
import { Project } from "../models/Project";

export const ProjectCard = ({ project }) => {
  return (
    <section className="card">
      <img src={require(`../img/${project.imgUrl}`)} alt="" />
      <p>{project.name}</p>
    </section>
  );
};
