import React from 'react';
import '../../../static/styles/views/_about-dev.scss';

export default function AboutDev() {
    return <>
        <div id='top-content'>
            <div className='about'>
                <h1 id="dev-name">Noah Gelinas</h1>
                <div id="icons-div">
                    <a href="">
                        <img className="icons" id="github" src="/static/assets/icons/github-logo-black.svg" alt="Github Logo" />
                    </a>
                    <a href="">
                        <img className="icons" id="linkedin" src="/static/assets/icons/linkedin.svg" alt="LinkedIn Logo" />
                        
                    </a>
                    <a href="">
                        <img className="icons" id="email" src="/static/assets/icons/email.svg" alt="Email Logo" />
                    </a>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusamus quos quidem veniam sapiente corporis? Quidem porro fuga dolor amet soluta delectus atque aliquam obcaecati, vel consequuntur reprehenderit earum neque.</p>
            </div> 
            <div className='about'>
                <img src="/static/assets/images/placeholder-dev.webp"  alt="Profile Picture" />
            </div>
        </div> 
        <div id='full-content'>
            <h1>About Dev</h1>  
        </div> 
    </>;
}