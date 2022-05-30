import React, { useRef } from 'react';
import "./Intro.css";

const Intro = () => {
    const moveToTop = () => {
        window.scrollTo(0, 0)
    }
    const text = useRef()
    // text.current.classList.add("ss")
    // console.log(text.current.classList)


    // to render the error component    
    // if(false){
    //     throw new Error("something went wrong``")
    // }
    return (
        <div className='portfolio_Intro' id='intro'>
            <div className="intro_left">
                <div className="intro_left_content">
                    <h2>Hello, My name is</h2>
                    <h1>Sauvik Kumar Goel</h1>

                    <div className="intro_left_title">
                        {/* <h1  ref={text}>I'm a </h1> */}
                        <h1  ref={text}>I'm a </h1>
                        <span className="intro_left_title_wrapper">
                            <div className="intro_left_title_item">Web Developer</div>
                            <div className="intro_left_title_item">UI/UX Designer</div>
                            <div className="intro_left_title_item">Content Creator</div>
                            <div className="intro_left_title_item">PhotoGrapher</div>
                        </span>
                        <h1>!</h1>

                    </div>
                    <p className="intro_left_desc">
                        I develop services for  customers of all sizes, specializing in creating stylish, modern websites and web apps and online stores.
                    </p>

                    <div className="intro_left_socialMedia">
                        {/* <h2>Connect With me:</h2> */}
                        <a href="https://www.linkedin.com/in/sauvik-goel-ba8847178/"><i className="fab fa-linkedin-in"></i></a>
                        {/* <a href="#"><i className="fab fa-linkedin-in"></i></a> */}
                    </div>
                </div>
            </div>


            <div className="intro_right">
                <div className="intro_right_bg"></div>
                <img src="./images/me.png" alt="Profile Pic" className='intro_right_img' />
            </div>

            <a href="#intro" title='Move to top'>
                <svg
                    width="75"
                    height="75"
                    viewBox="0 0 75 75"
                    fill="none"
                    stroke="black"
                    className="moveToTop_scroll"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={moveToTop}
                >
                    <g id="scroll">
                        <path
                            id="Vector"
                            d="M40.5 15L34.5 9L28.5 15"
                            strokeWidth="3"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            id="Vector_2"
                            d="M28.5 24L34.5 30L40.5 24"
                            strokeWidth="3"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <g id="Group">
                            <path
                                id="Vector_3"
                                d="M9 37.5H60"
                                strokeWidth="3"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                        <path
                            id="Vector_4"
                            d="M34.5 27V9"
                            strokeWidth="2.9895"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <g id="Group_2">
                            <path
                                id="Vector_5"
                                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                                strokeWidth="3"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                    </g>
                </svg>
            </a>
        </div>
    );
};

export default Intro;
