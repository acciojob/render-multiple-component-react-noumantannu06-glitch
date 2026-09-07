import React from "react";
import "./styles/App.css";

const projects = [
  {
    name: "E-Commerce Website",
    description:"A full-stack e-commerce application where users can browse products, add them to a cart, and place orders.",
  },
  {
    name: "Task Management App",
    description:"A task management application that allows users to create, update, complete, and delete tasks.",
  },
  {
    name: "Weather Application",
    description:"A weather application that displays current weather information for different cities.",
  },
];

function Project({ name, description }) {
  return (
    <>
      <h1 data-ns-test="project-name">{name}</h1>
      <h6 data-ns-test="project-description">{description}</h6>
    </>
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