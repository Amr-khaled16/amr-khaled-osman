import React, { useState } from 'react';

const projectData = [
  { id: 1, category: "Tab 1", img: "https://www.egy-car.com/wp-content/uploads/2019/07/%D8%B3%D8%B9%D8%B1-%D8%AA%D9%88%D8%B3%D8%A7%D9%86.jpg" },
  { id: 2, category: "Tab 1", img: "https://aboutmsr.com/wp-content/uploads/2025/01/1774144199468920241003080119119.jpg" },
  { id: 3, category: "Tab 1", img: "https://www.almuraba.net/wp-content/uploads/2025/02/%D9%87%D9%8A%D9%88%D9%86%D8%AF%D8%A7%D9%8A-%D8%AA%D9%88%D8%B3%D8%A7%D9%86-2025-42.jpg" },
  { id: 4, category: "Tab 1", img: "https://www.autoexpress-eg.com/wp-content/uploads/2023/11/%D9%87%D9%8A%D9%88%D9%86%D8%AF%D8%A7%D9%8A-%D8%AA%D9%88%D8%B3%D8%A7%D9%86-2025-1-768x468.jpg" },
  { id: 5, category: "Tab 1", img: "https://www.akhbar-sharq.com/public/uploads/post/image1721851706.webp" },
 { id: 5, category: "Tab 1", img: "https://www.akhbar-sharq.com/public/uploads/post/image1721851706.webp" },
];


const Projects = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");

  const filteredProjects = projectData.filter(proj => proj.category === activeTab);

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="title">Projects</h2>
        <p className="description">
        vucnkdmclxs,bdxjchuiospdlkfbhvxlz;dlfkdklx.
        </p>

        <div className="tabs-container">
          <button 
            className={activeTab === "Tab 1" ? "tab active" : "tab"} 
            onClick={() => setActiveTab("Tab 1")}
          >Tab 1</button>
          <button 
            className={activeTab === "Tab 2" ? "tab active" : "tab"} 
            onClick={() => setActiveTab("Tab 2")}
          >Tab 2</button>
          <button 
            className={activeTab === "Tab 3" ? "tab active" : "tab"} 
            onClick={() => setActiveTab("Tab 3")}
          >Tab 3</button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <img src={project.img} alt="Project" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;