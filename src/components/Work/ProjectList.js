// src/components/ProjectList.js
import React from 'react';
import ProjectItem from './ProjectItem';
import './ProjectList.css';

function ProjectList() {
  const projects = [
    {
      title: "Flight Local (B2B Travel Solution)",
      category: "Web Development",
      image: "path/to/image1.png",
      link: "#"
    },
    {
      title: "AI Lab Granada",
      category: "Web Development",
      image: "path/to/image2.png",
      link: "#"
    },
    {
      title: "Khora – Urban Thinkers Campus",
      category: "Web Development",
      image: "path/to/image3.png",
      link: "#"
    }
  ];

  return (
    <div className="ProjectList">
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          title={project.title}
          category={project.category}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
}

export default ProjectList;
