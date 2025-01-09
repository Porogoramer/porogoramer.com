import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { emptyProject, fetchData, Project } from '../../utils';
import '../../../static/styles/common/_project_card.scss';

/**
 * A card to display short information about a project.
 * @param props React props
 * @param props.name Name of the project
 * @returns An article with information about a project with a link to the project page
 */
export default function ProjectCard({ name }: { name: string }) {
    const [ cardData, setCardData ] = useState<Project>(emptyProject);

    useEffect(() => {
        const getData = async () => {
            try { 
                setCardData(await fetchData(`project/${name}`));
            } catch (e) {
                console.error(`Error loading card: ${e}`);
            }
        };
        getData();
    }, []);

    return <article className='project-card'>
        <img src={cardData.icon.img || '/media/other/404.png'} alt={cardData.icon.desc || '404 Not Found Image'} />
        <div className='project-card-info'>
            <h2>{cardData.name || name}</h2>
            <p>{cardData.short_description || 'Failed to load card'}</p>
            <div className='options'>
                {cardData.github_link.length > 0 &&
                <Link to={`/project/${name}`}>
                    <button>Learn more!</button>
                </Link>}
                {cardData.github_link && cardData.github_link.map((link, i) => <a key={`github-${cardData.name}-${i}`} className='github' target='__blank' href={link}><img src="/static/assets/icons/github-logo-black.svg" alt="Github Logo"/></a>)}
            </div>
        </div>
    </article>;
}