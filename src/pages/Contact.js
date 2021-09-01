import React from "react";
import './styles/contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
  } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
    return(
        <div className="contact-container">
            <h2>Get in touch</h2>
            <h3>Email me at mekabolzhirova@gmail.com</h3>
            <a href="https://www.linkedin.com/in/meerim-bolzhirova-4211b7219/"
                className="linkedIn social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/Meka88"
                className="github social">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
        </div>
    )
}