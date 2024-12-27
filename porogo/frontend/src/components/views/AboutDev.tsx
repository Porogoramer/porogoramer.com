import React from 'react';
import '../../../static/styles/views/_about-dev.scss';
import ProjectCard from '../common/ProjectCard';

/**
 * page about a specific developer
 * @returns Info about a specific developer
 */
export default function AboutDev() {
    return <>
        <div className='top-content' id='about-dev-top'>
            <section className='about-content'>
                <h1 className="dev-header">Noah Gelinas</h1>
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
            </section> 
            <aside className='about-side'>
                <img src="/static/assets/images/placeholder-dev.webp"  alt="Profile Picture" />
            </aside>
        </div> 
        <section className='full-content' id='about-dev-full'>
            <div className='about-content'>
                <div>
                    <h1 className="dev-header">About Me</h1> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusamus quos quidem veniam sapiente corporis? Quidem porro fuga dolor amet soluta delectus atque aliquam obcaecati, vel consequuntur reprehenderit earum neque.</p>
                </div>
                <div id="bottom-about-me">
                    <h1 className="dev-header">More About Me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusamus quos quidem veniam sapiente corporis? Quidem porro fuga dolor amet soluta delectus atque aliquam obcaecati, vel consequuntur reprehenderit earum neque.</p>
                </div> 
            </div>
            <aside className='about-side'>
                <ProjectCard name="Important Dog" desc="Dog"/>
                <button>Click to see more projects!</button>
            </aside>
        </section> 
    </>;
}