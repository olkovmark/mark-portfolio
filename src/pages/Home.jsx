import React from "react";
import "../css/Home.css";

const rotate = [0, 10, 20, 30, 40];

export const Home = () => {
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

        <a href="/documents/MarkEng.docs" download>
          Download CV
        </a>
        {rotate.map((r) => (
          <div
            key={r}
            style={{ transform: `rotate(${r - 70}deg)` }}
            className="box"
          ></div>
        ))}
      </header>
      <main className="ProjectsList">
        <h1>Projects</h1>
        <ul>
          <section className="Project">sdasd</section>
          <section className="Project">sdasd</section>
          <section className="Project">sdasd</section>
          <section className="Project">sdasd</section>
          <section className="Project">sdasd</section>
          <section className="Project">sdasd</section>
        </ul>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
