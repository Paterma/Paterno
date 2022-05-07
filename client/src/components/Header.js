import React from 'react';
import '../Styles/Header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiHeroku } from "react-icons/si";
import { SiMysql } from "react-icons/si"
import { SiBootstrap } from "react-icons/si"
import { SiJquery } from "react-icons/si"
import { SiVisualstudio } from "react-icons/si"
import { FaNpm } from "react-icons/fa"
import { GrGraphQl } from "react-icons/gr"
import { SiHandlebarsdotjs } from "react-icons/si"
import { Typewriter } from 'react-simple-typewriter'


function Header() {

return (

<div id="header"><p>
<p style={{ color: 'white', fontWeight: 'normal' }}>
        Hi there.{' '}
        <br></br>
        <span style={{ color: 'white', fontWeight: 'normal' }}>
        <Typewriter
            words={["I'm Maria Paterno. I am a full-stack web developer with a drive for personal and professional growth. Aside from coding, I have an appreciation for traveling, my furry companions, first-class comedy, and elevating music."]}
            cursor
            cursorStyle='|'
            typeSpeed={70}

        />
        </span>
    </p>
<br></br><br></br>

"If you're invested in security and certainty, you are on the wrong planet." -Pema Chodron 

</p>
<br></br>
<div id='technologies'>
    Professional <span id='colorChange'> Skillset </span> and <span id='colorChange'> Tools </span> I Use:
    </div>

    <div className= "d-flex flex-wrap justify-content-center">
<div className="badgeCard ">
        <FaReact size={45} />
        </div>

        <div className="badgeCard">
        <SiMongodb size={45} />
        </div>

        <div className="badgeCard">
        <SiMysql size={45} />
        </div>

        <div className="badgeCard">
        <SiBootstrap size={45} />
        </div>

        <div className="badgeCard">
        <SiJquery size={45} />
        </div>

        <div className="badgeCard">
        <SiVisualstudio  size={45}/> 
        </div>

        <div className="badgeCard">
        <FaNpm  size={45}/> 
        </div>

        <div className="badgeCard">
        <TiHtml5  size={45}/> 
        </div>

        <div className="badgeCard">
        <IoLogoCss3 size={45} />
        </div>

        <div className="badgeCard">
        <SiJavascript size={45} />
        </div>

        <div className="badgeCard">
        <FaNode size={45} />
        </div>

        <div className="badgeCard">
        <SiHeroku size={45} />
        </div>

        <div className="badgeCard">
        <GrGraphQl size={45} />
        </div>

        <div className="badgeCard">
        <SiHandlebarsdotjs size={45} />
        </div> 
        
        
        </div> 


        </div>
);
}


export default Header;
