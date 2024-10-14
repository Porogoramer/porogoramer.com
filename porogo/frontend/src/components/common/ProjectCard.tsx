import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ name, desc }: { name: string, desc: string, }) {
    return <article className='project-card'>
        <img src="/static/assets/icons/porogoIcon.svg" alt="placeholder" />
        <div className='project-card-info'>
            <h2>{name}</h2>
            <p>{desc} Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatibus harum velit facilis eligendi. Iusto delectus incidunt quae rem, voluptatum corrupti at autem molestiae, assumenda unde doloribus id totam mollitia.</p>
            <div className='options'>
                <Link to={`projects/${name}`}>
                    <button>Learn more!</button>
                </Link>
                <a className='github' href="github.com"><img src="/static/assets/icons/github-logo-black.svg" alt="Github Logo" /></a>
            </div>
        </div>
    </article>;
}