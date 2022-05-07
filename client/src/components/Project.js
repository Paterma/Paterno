import React from 'react';
import '../Styles/Project.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Mountain from '../Pictures/mountain-ex.png'
import Weather from '../Pictures/weather-ex.png'
import Cache from '../Pictures/cache-bandit.PNG'
import Planner from '../Pictures/planner2-ex.PNG'
import AllPain from '../Pictures/project2-ex.png'
import PasswordGen from '../Pictures/Password-G-Screenshot-cropped.png'
import Quiz from '../Pictures/quiz-ex.png'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


// width="90%"
function Project() {


    return (
        <Carousel autoPlay="true" infiniteLoop="true">
        <div>
        <a id='projPhoto' href="https://cache-bandit.herokuapp.com/" target="_blank">
        <img src={Cache} className="img-fluid" alt="Project Photo"/>
        </a>
        <p className="legend"><a id='projPhoto' href="https://cache-bandit.herokuapp.com/" target="_blank">Cache Bandit</a> <br></br>
        A full-stack MERN app that allows users to track subscriptions. <br></br>
        
        <a className="nav-item" href="https://github.com/Paterma/Subscription-Tracker" target="_blank"> (Code)</a> </p>
        </div>
        <div>
        <a href="https://gentle-everglades-97970.herokuapp.com/" target="_blank">
        <img src={AllPain} className="img-fluid" alt="Project Photo"/></a>
            <p className="legend"> <a href="https://gentle-everglades-97970.herokuapp.com/" target="_blank">All Pain, No Grain </a><br></br>
            A full-stack app that allows users to login/logout to a health tracking calendar.<br></br>
            
            <a className="nav-item" href="https://github.com/Paterma/All-Pain-No-Grain?organization=Paterma&organization=Paterma" target="_blank">(Code)</a>
            </p>
        </div>
        <div>
        <a href="https://paterma.github.io/Bug-Spray/" target="_blank">
        <img src={Mountain} className="img-fluid" alt="Project Photo"/></a>
        <p className="legend"> <a href="https://paterma.github.io/Bug-Spray/" target="_blank">Mountain Madness</a> <br></br>
        A front-end app that checks the weather, snowfall, and road conditions at 5 top ski resorts in Colorado. <br></br>
        <a className="nav-item code" href="https://github.com/Paterma/Bug-Spray" target="_blank"> (Code)</a></p>
        </div>
        <div>
        <a href="https://paterma.github.io/Homework-Weather-Dashboard/" target="_blank">
        <img src={Weather} className="img-fluid" alt="Weather"/></a>
            <p className="legend"> <a href="https://paterma.github.io/Homework-Weather-Dashboard/" target="_blank">Weather Dashboard </a><br></br>
            See the 5 day forecast in any city. <br></br>
            <a className="nav-item" href="https://github.com/Paterma/Homework-Weather-Dashboard" target="_blank">(Code)</a></p>
        </div>
        <div>
        <a href="https://paterma.github.io/Password-Generator/" target="_blank">
<img src={PasswordGen} className="img-fluid" alt="Planner"/></a>
            <p className="legend"><a href="https://paterma.github.io/Password-Generator/" target="_blank">Password Generator </a><br></br>
            A random password generator based on your choice of characters. <br></br>
            <a className="nav-item" href="https://github.com/Paterma/Password-Generator" target="_blank">(Code)</a></p>
        </div>
        <div>
        <a href="https://paterma.github.io/Homework-Work-Day-Scheduler/" target="_blank">
    <img src={Planner} className="img-fluid" alt="Planner"/></a>
            <p className="legend"><a href="https://paterma.github.io/Homework-Work-Day-Scheduler/" target="_blank">Work Day Planner </a><br></br>
            A simple planner to help organize your day. <br></br>
            <a className="nav-item" href="https://github.com/Paterma/Homework-Work-Day-Scheduler" target="_blank">(Code)</a></p>
        </div>
        <div>
        <a href="https://paterma.github.io/Homework-Quiz/" target="_blank">
<img src={Quiz} className="img-fluid" alt="Weather"/></a>
            <p className="legend"><a href="https://paterma.github.io/Homework-Quiz/" target="_blank">JavaScript Quiz </a><br></br>
            A short quiz about JavaScript that will deduct time if you answer incorrectly. <br></br>
            <a className="nav-item" href="https://github.com/Paterma/Homework-Quiz" target="_blank">(Code)</a></p>
        </div>
    </Carousel>
        
);
}

export default Project;


