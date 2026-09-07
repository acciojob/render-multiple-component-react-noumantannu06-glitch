import React from "react";
import "./styles/App.css";

const projects = [
  {
    name: "E-Commerce Website",
    description:
      "A full-stack e-commerce application where users can browse products and purchase items.",
  },
  {
    name: "Task Management App",
    description:
      "An application that allows users to create, manage, and complete their daily tasks.",
  },
  {
    name: "Weather Application",
    description:
      "An application that displays weather information for different cities.",
  },
];

function Project({ name, description }) {
  return (
    <div className="project">
      <h1 data-ns-test="project-name">{name}</h1>
      <h6 data-ns-test="project-description">{description}</h6>
    </div>
  );
}

function App() {
  return (
    <div className="ns-wrapper">
      {projects.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          description={project.description}
        />
      ))}
    </div>
  );
}

export default App;