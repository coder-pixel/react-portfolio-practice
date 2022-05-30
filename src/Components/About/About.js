import React from 'react';
import "./About.css";

const About = () => {
  return (
    <div className='portfolio_about'>

      <div className="about_left">
        <div className="about_left_card bg"></div>
        <div className="about_left_card">
          <img src="/images/aboutMe.jpg" alt="" className='about_left_card_img' />
        </div>
      </div>

      <div className="about_right">
        <h1 className="about_right_heading">About Me</h1>

        <h4 className='about_right_subheading'>It is a long established fact that a reader will be distracted by the readable content.</h4>

        <p>Highly motivated front-end developer and wanna-be fullstack developer. I started to learn programming on my own</p> 
        <p>I enjoy taking complex problems and turning them into simple and beautiful interface designs, to the best of my knowledge. I also love the logic and structure of coding and always strive to write elegant and efficient code, whether it be HTML, CSS or JS(React).</p>
        {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, provident, dolorum consequatur non autem doloremque consequuntur quasi quos quibusdam quis reprehenderit mollitia delectus hic adipisci, ex expedita labore ipsum. Minus.</p> */}
     
        <div className="about_right_details">
          <p>
            Name:
            <span>Sauvik kumar Goel</span>
          </p>
          <p>
            Age:
            <span>21</span>
          </p>
          <p>
              <a href="#contact" className='about_right_details_contact_btn'>Contact</a>
          </p>
        </div>    
      </div>
    </div>
  );
};

export default About;
