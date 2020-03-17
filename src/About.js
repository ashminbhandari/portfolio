import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './About.css'

function About() {
    return (
        <div className="wrapper">
            <div className="introduction text-design">
                <h1>About Me</h1>
                <br/>
                <p>I am a Computer Science student graduating this June from
                Ramapo College of New Jersey. I am a person who loves to create, be it through code
                or any other medium. My attempt has been these days to combine my love for visual arts, especially photography and computer science. I also endeavor to combine music into my program creations.</p>
                <br/>
                <div className="socials">
                    <a href="https://linkedin.com/in/ashminbhandari" rel="noopener noreferrer" target="_blank" style={{color: "inherit"}}><i className="fa fa-linkedin fa-2x"/></a>
                    <a href="https://github.com/ashminbhandari" rel="noopener noreferrer" target="_blank" style={{color: "inherit"}}><i className="fa fa-github fa-2x"/></a>
                    <a href="https://soundcloud.com/ashmin-bhandari" rel="noopener noreferrer" target="_blank" style={{color: "inherit"}}><i className="fa fa-soundcloud fa-2x"/></a>
                    <a href="https://www.flickr.com/photos/158183172@N02/albums/72157702284417252" target="_blank" rel="noopener noreferrer" style={{color: "inherit"}}><i className="fa fa-flickr fa-2x"/></a>
                    <a href="https://www.instagram.com/ashminbh/" rel="noopener noreferrer" target="_blank" style={{color: "inherit"}}><i className="fa fa-instagram fa-2x"/></a>
                    <a href="https://linkedin.com/in/ashminbhandari" rel="noopener noreferrer" target="_blank" style={{color: "inherit" , textDecoration : 'none'}}><i className="fa fa-code hide-for-big fa-2x"/></a>
                    <a href="https://linkedin.com/in/ashminbhandari" rel="noopener noreferrer" target="_blank" style={{color: "inherit", textDecoration: 'none'}}><i className="fa fa-camera hide-for-big fa-2x"/></a>
                </div>
            </div>
            <div className="coder-or-photo">
                <i className="fa fa-code about-btn"/>
                <i className="fa fa-camera about-btn"/>
            </div>
        </div>
    );
}

export default About;
