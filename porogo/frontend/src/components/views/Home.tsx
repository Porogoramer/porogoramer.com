import React from 'react';
import ProjectCard from '../common/ProjectCard';

export default function Home() {
    return <>
        <section className='top-content'>
            <div id='landing'>
                <div className='welcome'>
                    <h1>Welcome to Porogo</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusamus quos quidem veniam sapiente corporis? Quidem porro fuga dolor amet soluta delectus atque aliquam obcaecati, vel consequuntur reprehenderit earum neque.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusamus quos quidem veniam sapiente corporis? Quidem porro fuga dolor amet soluta delectus atque aliquam obcaecati, vel consequuntur reprehenderit earum neque.
                    </p>
                </div>
                <img src="/static/assets/icons/porogo-logo.svg" alt="Porogo Logo" />
            </div>
        </section>
        <section className='full-content'>
            <div id='home-projects'>
                <h1>PROJECTS</h1>
                <div>
                    <ProjectCard name='Important Dog' desc='A discord bot that exists I guess' />
                    <ProjectCard name='Portfolio Site' desc='A site to showcase some projects' />
                </div>
            </div>
        </section>
    </>;
}