import React from 'react';
import '../../../static/styles/common/_project_showcase.scss';

/**
 * A bigger showcase of the project for the carousel
 * @param props React props 
 * @param props.name Name of the project
 * @param props.desc Short Description of the project
 * @param props.date Date of the project
 * @param props.backgroundImage Image of the project
 * @returns A div with all the information of the project
 */
function ProjectShowcase( { name, desc, date, backgroundImage}: { name: string, desc: string, date: string, backgroundImage: string }) {
    return (
        <div
            style={{backgroundImage: `url(${backgroundImage})`}} 
            className='project-showcase'>
            <div className="project-info">
                <h1 className="project-title">{name}</h1>
                <p className="project-date">{date}</p>
                <p className="project-description">
                    {desc}
                </p>
                <button className="learn-more-button">Learn more</button>
            </div>
        </div>
    );
};

export default ProjectShowcase;