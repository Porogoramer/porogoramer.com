import React from 'react';
import {useEffect, useState } from 'react';
import '../../../static/styles/views/_about-dev.scss';
import ProjectCard from '../common/ProjectCard';
import Card from '../common/Card';
import { Link, useParams } from 'react-router-dom';
import { fetchData, Dev, Project } from '../../utils';

/**
 * page about a specific developer
 * @returns Info about a specific developer
 */
export default function AboutDev() {
    const { name } = useParams();
    const [devInfo, setDevInfo] = useState<Dev | null>(null);
    const [projects, setProjects] = useState<Project[] | null>(null);
    const [loading, setLoading] = useState(true);
    const keywords = ['javascript', 'python', 'sql', 'html', 'css', 'c#', 'java', 'apis', 'api', 'c', 'c++', 'arduino', 'raspberry', 'pi', 'node', 'express', 'mongodb'];
    let aboutMe;

    useEffect(()=>{
        /**
         * fetches developer info
         */
        async function getData(){
            const devInfo = await fetchData(`developer/${name}`);
            console.log(devInfo);
            const allCards = await fetchData(`projects/?contrib=${name}`);
            setProjects(allCards);
            setDevInfo(devInfo);
            setLoading(false);
        }
        getData(); 
    }, []) ;
    if (devInfo===null) {
        return <>
            <div className="error">
                <p>
                    No developer found with that name.
                </p>
                <p>
                    Please Make sure to properly type the name of the developer you are looking for!
                </p>
            </div>;
        </>;
    }else if (loading){
        return <>
            <div>Loading...</div>
        </>;
    }
    if (devInfo!==null){
        aboutMe = devInfo.description_experience.split(' ')
            .map(word => {  
                const cleanWord = word.replace(/[^\w]/g, '').toLowerCase();
                if (keywords.includes(cleanWord)){
                    return '*'+word;
                }else{
                    return word;
                }
            })
            .join(' ');
    }

    return <>
        <div className='top-content' id='about-dev-top'>
            <section className='about-content'>
                <h1 className="dev-header">{devInfo.first_name} {devInfo.last_name}</h1>
                <div id="icons-div">
                    <a href={`https://github.com/${devInfo.github_name}`}>
                        <img className="icons" id="github" src="/static/assets/icons/github-logo-black.svg" alt="Github Logo" />
                    </a>
                    <a href={devInfo.linkedin_url}>
                        <img className="icons" id="linkedin" src="/static/assets/icons/linkedin.svg" alt="LinkedIn Logo" />
                    </a>
                    <a href={devInfo.email}>
                        <img className="icons" id="email" src="/static/assets/icons/email.svg" alt="Email Logo" />
                    </a>
                </div>
                <p>
                    {aboutMe?.split(' ').map((word, index) => {
                        if (word.startsWith('*')) {
                            const match = word.slice(1).match(/^(\w+)([^\w]*)$/);
                            const styledWord = match ? match[1] : word.slice(1);
                            const punctuation = match ? match[2] : '';

                            return (
                                <React.Fragment key={index}>
                                    <span className="keyword">
                                        {styledWord}
                                    </span>
                                    {punctuation}{' '}
                                </React.Fragment>
                            );
                        }
                        return (
                            <React.Fragment key={index}>
                                {word}{' '}
                            </React.Fragment>
                        );
                    })}
                </p>
                <h1 className="dev-header">I&apos;m familiar with</h1>
                <ul>
                    {devInfo.languages.map((language, index)=>{
                        return (
                            <React.Fragment key={index}>
                                <li>
                                    {language.name}
                                </li>
                            </React.Fragment>
                        );
                    })}
                </ul>
            </section> 
            <aside className='about-side'>
                <img src={devInfo.picture.img}  alt={devInfo.picture.hover} />
            </aside>
        </div> 
        <section className='full-content' id='about-dev-full'>
            <div className='about-content'>
                <div>
                    <h1 className="dev-header">More about Me</h1> 
                    <p>{devInfo.description_experience}</p>
                </div>
            </div>
            <aside className='about-side'>
                {/* {
                    devInfo.picture_personal!==null &&
                    <img src={devInfo.picture_personal.img}  alt={devInfo.picture_personal.hover} />
                } */}
            </aside>
        </section> 
        {projects!== null &&
            <section className="projectCards">
                {projects.map((card) => (
                    <div key={card.id} className="card">
                        <Card key={card.id} languages={card.languages} title={card.name} date={card.end_year ? `${card.start_year}-${card.end_year}` : `${card.start_year}`} icon={card.icon} authors={undefined}/>
                    </div>
                ))}
            </section>
        }
    </>;
}

/**
 * finds the info about a specified developer in the database
 * @param devName developers name
 * @returns json object containing info about a developer
 */
async function fetchDevInfo(devName: string | undefined) {
    try {
        const result = await fetch(`/api/developer/${devName}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!result.ok){
            console.error(result.status);
        }
        const obj = await result.json(); 
        return obj;
    }catch (error){
        return error; 
    }
}
export {AboutDev, fetchDevInfo};