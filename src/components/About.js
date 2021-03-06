import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/About.css'
import peep from '../images/peep-73.png';
import {NavLink} from "react-router-dom";


const About = () => {
    return (
        <div className="wrapper">
            <div className="introduction text-design">
                <img src={peep} alt="Credit to the open-peeps illustration library"/>
                <h1>About Me</h1>
                <br/>
                <p>To code is to create. Software Engineer and Photographer pushing to bring positive changes in the world via code.
                    Currently, working together with a thriving group of global volunteers to ease the pain of the COVID-19 pandemic and others to come at FightPandemics.</p>
                <br/>
                <div className="socials">
                    <a href="https://linkedin.com/in/ashminbhandari" rel="noopener noreferrer" target="_blank" style={{color: "inherit"}}><i className="fa fa-linkedin fa-2x"/></a>
                    <a href="https://github.com/ashminbhandari" rel="noopener noreferrer" target="_blank" style={{color: "inherit"}}><i className="fa fa-github fa-2x"/></a>
                    <NavLink to="/sound" style={{color: 'black', textDecoration: 'none'}}><i className="fa fa-soundcloud fa-2x"/></NavLink>
                    <a href="https://www.flickr.com/photos/158183172@N02/albums/72157702284417252" target="_blank" rel="noopener noreferrer" style={{color: "inherit"}}><i className="fa fa-flickr fa-2x"/></a>
                    <a href="https://www.instagram.com/ashminbh/" rel="noopener noreferrer" target="_blank" style={{color: "inherit"}}><i className="fa fa-instagram fa-2x"/></a>
                    <NavLink to="/coder" style={{color: '#fff', textDecoration: 'none'}}><i className="fa fa-github hide-for-big fa-2x"/></NavLink>
                    <NavLink to="/photo" style={{color: '#fff', textDecoration: 'none'}}><i className="fa fa-camera-retro hide-for-big fa-2x"/></NavLink>
                </div>
            </div>
            <div className="coder-or-photo">
                <NavLink to="/coder" style={{color: '#fff', textDecoration: 'none'}}>
                <i className="fa fa-github about-btn"/>
                </NavLink>
                <NavLink to="/photo" style={{color: '#fff', textDecoration: 'none'}}>
                <i className="fa fa-camera-retro about-btn"/>
                </NavLink>
            </div>
        </div>
    );
};

export default About;
