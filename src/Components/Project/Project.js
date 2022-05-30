import React from 'react';
import "./Project.css";

const Project = ({ img, link, title, longDisplay }) => {
    return (

        // <div className={`project ${longDisplay ? "project_long_display" : "project_wide_display"}`}>
        <div className="project">
            <div className="project_browser">
                <div className="project_browser_circle"></div>
                <div className="project_browser_circle"></div>
                <div className="project_browser_circle"></div>
            </div>

            <a href={link} className="project_img" target="_blank">
                <img src={img} alt={title} />
            </a>
        </div>

        // carousel practice ⏬
        // <div className="projectItem">
        //     <a href={project.link} target="_blank">
        //         <img src={project.imgPath} alt={project.title} onClick={() => console.log("ss")} />
        //     </a>

        //     <div className="overlay_btns overlay_btns_left">
        //         <i className="fas fa-chevron-left"></i>
        //     </div>
        //     <div className="overlay_btns overlay_btns_right">
        //         <i className="fas fa-chevron-right"></i>
        //     </div>

        // </div>
    )
};

export default Project;
