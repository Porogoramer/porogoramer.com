import React from 'react';
import {useEffect, useState } from 'react';
import '../../../static/styles/views/_about-dev.scss';
import ProjectCard from '../common/ProjectCard';
import { Link, useParams } from 'react-router-dom';

interface Picture {
    img: string;
    hover: string;
    desc: string;
}

interface Dev {
    id: number;
    featured_project: string;
    first_name: string;
    last_name: string;
    picture: Picture;
    short_description: string;
    description_experience: string;
    description_personal: string;
    linkedin_url: string;
    github_name: string;
    email: string;
}

/**
 * page about a specific developer
 * @returns Info about a specific developer
 */
export default function AboutDev() {
    const { name } = useParams();
    const [devInfo, setDevInfo] = useState<Dev | null>(null);
    const [loading, setLoading] = useState(true);
    

    useEffect(()=>{
        /**
         * fetches developer info
         */
        async function fetchData(){
            console.log(name);
            const devInfo = await fetchDevInfo(name);
            setDevInfo(devInfo);
            console.log(devInfo);
            setLoading(false);
        }
        fetchData(); 
    }, []) ;
    if (loading){
        return <>
            <div>Loading...</div>
        </>;
    }
    if (!devInfo) {
        return <div>No user data found.</div>;
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
                <p>{devInfo.short_description}</p>
            </section> 
            <aside className='about-side'>
                <img src={devInfo.picture.img}  alt={devInfo.picture.hover} />
            </aside>
        </div> 
        <section className='full-content' id='about-dev-full'>
            <div className='about-content'>
                <div>
                    <h1 className="dev-header">About Me</h1> 
                    <p>{devInfo.description_experience}</p>
                </div>
                <div id="bottom-about-me">
                    <h1 className="dev-header">More About Me</h1>
                    <p>{devInfo.description_personal}</p>
                </div> 
            </div>
            <aside className='about-side'>
                <ProjectCard name={devInfo.featured_project}/>
                <Link to={'/project'}>
                    <button>Click to see more projects!</button>
                </Link>
                
            </aside>
        </section> 
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