import React, { useContext, useRef, useState } from 'react';
import "./Contact.css";

import emailjs from "emailjs-com";
import { ThemeContext } from '../../Context';

const Contact = () => {
    const { darkMode, dispatch } = useContext(ThemeContext);

    const [emailSent, setEmailSent] = useState(true);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userSubject, setUserSubject] = useState("");
    const [userMessage, setUserMessage] = useState("");

    const [infoMsg, setInfoMsg] = useState("");

    const formRef = useRef();

    // console.log(formRef)
    const handleSubmit = (e) => {
        e.preventDefault();

        if (userName && userEmail && userSubject && userMessage) {
            emailjs.sendForm(
                "service_fmvyf5e",
                "template_xtm1uzr",
                formRef.current,
                "user_3EN1EFloJZtdeeWhEr3FF"
            )
                .then(res => {
                    console.log(res.text);
                    setEmailSent(true);
                    setInfoMsg("Thanks for contacting!!");

                    setUserName("");
                    setUserEmail("");
                    setUserSubject("");
                    setUserMessage("");

                    setTimeout(() => {
                        setEmailSent(false);
                    }, 2000)
                })
                .catch(err => console.log(err))
        }
        else {
            setInfoMsg("Pls fill all the details!");
        }

    }
    return (
        <div className='portfolio_contact' id='contact'>
            <div className="contact_bg"></div>
            <div className="contact_wrapper">
                <div className="contact_left">
                    <h1 className="contact_left_title">Let's discuss your project!</h1>
                    <div className="contact_left_info">
                        <a href="tel:+8968453663" className="contact_left_info_item">
                            <img src="./images/phone.png" alt="" />
                            +91 8968453663
                        </a>
                        <a href="mailto:sauviksood@gmail.com" className="contact_left_info_item">
                            <img src="./images/email.png" alt="" />
                            sauviksood@gmail.com
                        </a>
                        {/* <div className="contact_left_info_item">
                            <img src="./images/address.png" alt="" />
                            Gh-02, Housing Board Colony, Sector-31, Panchkula, Haryana, India 
                        </div> */}
                    </div>
                </div>


                <div className="contact_right">
                    <p className="contact_right_desc"><b>What's your story?</b> Get in touch. Always available for freelancing if the right project comes along! :)</p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333", borderColor: darkMode && "#fff" }} type="text" name="user_name" placeholder='Name' value={userName} onChange={(e) => setUserName(e.target.value)} />
                        <input style={{ backgroundColor: darkMode && "#333", borderColor: darkMode && "#fff" }} type="text" name="user_subject" placeholder='Subject' value={userSubject} onChange={(e) => setUserSubject(e.target.value)} />
                        <input style={{ backgroundColor: darkMode && "#333", borderColor: darkMode && "#fff" }} type="text" name="user_email" placeholder='Email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                        <textarea style={{ backgroundColor: darkMode && "#333", borderColor: darkMode && "#fff" }} name="message" rows="5" placeholder='Message' value={userMessage} onChange={(e) => setUserMessage(e.target.value)} ></textarea>
                        <button>Submit</button>
                        {emailSent && <p className="contact_right_msg">{infoMsg}</p>}
                    </form>

                </div>
            </div>
        </div>
    )
};

export default Contact;
