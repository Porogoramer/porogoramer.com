import React from 'react';
import { Link } from 'react-router-dom';
import '../../../static/styles/common/_project_card.scss';

/**
 * A card to display short information about a project.
 * @param props React props
 * @param props.name Name of the project
 * @param props.desc Short description of project
 * @returns An article with information about a project with a link to the project page
 */
export default function ProjectCard({ name, desc }: { name: string, desc: string, }) {
    return <article className='project-card'>
        <img src="/static/assets/icons/porogo-logo.svg" alt="placeholder" />
        <div className='project-card-info'>
            <h2>{name}</h2>
            <p>{desc} Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatibus harum velit facilis eligendi. Iusto delectus incidunt quae rem, voluptatum corrupti at autem molestiae, assumenda unde doloribus id totam mollitia.</p>
            <div className='options'>
                <Link to={`/project/${name}`}>
                    <button>Learn more!</button>
                </Link>
                <a className='github' target='__blank' href="https://github.com"><img src="/static/assets/icons/github-logo-black.svg" alt="Github Logo"/></a>
            </div>
        </div>
    </article>;
}