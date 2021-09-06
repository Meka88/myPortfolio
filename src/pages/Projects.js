import React from 'react';
import './styles/projects.css';
import chat from './images/chat-it-out.png';
import bookworms from './images/bookworms.png';
import chicagotour from './images/chicagotour.png';

export default function Projects() {
    return(
        <div className="gallery-grid">
            <figure className="galery-frame">
                <a href="https://github.com/Meka88/chat-it-out">
                <img className="gallery-img" src={chat} alt="chat" />
                <figcaption>Chat-it-out</figcaption>
                </a>
                <p>Chatroom created with socket.io library. It is a real-time, bidirectional 
                    and event-based communication 
                    between client side and the server. </p>
            </figure>
            <figure className="galery-frame">
                <a href="https://github.com/Meka88/chicago_tours">
                <img className="gallery-img" src={chicagotour} alt="tour"/>
                <figcaption>Chicago Tour</figcaption>
                </a>
                <p>A website about famous places in Chicago to explore. Created using React.js.</p>
            </figure>
            <figure className="galery-frame">
                <a href="https://github.com/Meka88/Bookworms">
                <img className="gallery-img" src={bookworms} alt="bookworms"/>
                <figcaption>Bookworms</figcaption>
                </a>
                <p>Book review website for chance to write about your favorite books and share your view.
                    Created using Node.js server with storing data on MongoDB. 
                </p>
            </figure>
        </div>
    )
}