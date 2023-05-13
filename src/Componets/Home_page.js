import React from "react";
import "./Home_page.css";
import Home_items from "./Home_item";
import Mainhome from "./Mainhome";
const Home_page = () => {
  return (
    <>
      <Mainhome />

      <section id="projects">
        <div className="projects container">
          <div className="projects-header">
            <h1 className="section-title">
              About <span>Pollution</span>
            </h1>
          </div>

          <div className="all-projects">

            {Home_items.map((value) => {
              return (
                <>
                  <div className="project-item">
                    <div className="project-info">
                      <h1>{value.heading}</h1>
                      <h2>{value.title}</h2>
                      <p>
                      {value.info}
                      </p>
                    </div>
                    <div className="project-img">
                      <img src={value.img} alt="img" />
                    </div>
                  </div>

                </>
              );
            })}

          </div>
        </div>
      </section>
    </>
  );
};

export default Home_page;
