import React, { useEffect, useState } from 'react';
import "./ProjectsList.css";

import Project from '../Project/Project';

import { MyProjects } from '../../projectsData'; 
console.log(MyProjects)
// const CollectionSize = MyProjects.length;

const ProjectsList = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const goToNextPicture = () => {
        console.log("currentProjectIndex: " + currentProjectIndex);
        console.log("MyProjects.length: " + MyProjects.length);
        setCurrentProjectIndex((prevProjectIndex) => prevProjectIndex + 1);
    };
    const goToPrevPicture = () => {
        console.log("currentProjectIndex: " + currentProjectIndex);
        console.log("MyProjects.length: " + MyProjects.length);
        if (currentProjectIndex > 0) {
            setCurrentProjectIndex((prevProjectIndex) => prevProjectIndex - 1);
        } else {
            setCurrentProjectIndex(MyProjects.length - 1);
        }
    };



    // useEffect(() => {
    //     setInterval(() => {
    //         if (currentProjectIndex < MyProjects.length - 1) {
    //             goToNextPicture();
    //         }
    //         else {
    //             setCurrentProjectIndex(0);
    //             goToNextPicture();
    //         }

    //     }, 1000)
    // }, [])

    return (
        <div className='portfolio_projectsList'>
            <div className="projectsList_text">
                <h1 className="projectsList_title">Create & Inspire!</h1>
                <p className="projectsList_desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate iure delectus mollitia tempora? Error consectetur atque suscipit, cum dolor quasi cupiditate fugit at quam tempora, soluta magni, reprehenderit quo animi?
                </p>
            </div>

            <div className="projects_list">
                {MyProjects.map((item) => (
                    <Project key={item.id} img={item.imgPath} link={item.link} title={item.title} longDisplay={item.longDisplay} />
                ))}
            </div>

            {/* carousel practice ⏬ */}
            {/* <div className="projectsList_list">

                <div className="projectItem">
                    <a href={MyProjects[currentProjectIndex].link} target="_blank">
                        <img src={MyProjects[currentProjectIndex].imgPath} alt={MyProjects[currentProjectIndex].title} onClick={() => console.log("ss")} />
                    </a>

                    <div className="slides">
                        <input type="radio" name="radio-btn" className='project_radioBtn' id="radio1" value={"radio1"} onChange={(e) => e.target.value()}/>
                        <input type="radio" name="radio-btn" className='project_radioBtn' id="radio2" />
                        <input type="radio" name="radio-btn" className='project_radioBtn' id="radio3" />
                        <input type="radio" name="radio-btn" className='project_radioBtn' id="radio4" />
                    </div>

                    <div className="projectDetails_Overlay">
                        <h1 className="project_heading">{MyProjects[currentProjectIndex].title}</h1>
                        <p className="project_info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti autem doloremque eveniet! Possimus harum necessitatibus voluptas consectetur aspernatur qui quibusdam quam, perspiciatis temporibus cumque! Temporibus natus tempora modi nemo dicta?</p>
                    </div>

                    <div className="overlay_btns overlay_btns_left">
                        <i className="fas fa-chevron-left" onClick={goToPrevPicture}></i>
                    </div>
                    <div className="overlay_btns overlay_btns_right">
                        <i className="fas fa-chevron-right" onClick={goToNextPicture}></i>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default ProjectsList;
