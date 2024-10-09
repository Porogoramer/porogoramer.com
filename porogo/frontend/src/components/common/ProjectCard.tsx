import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ name, desc }: { name: string, desc: string, }) {
    return <article>
        <h2>{name}</h2>
        <p>{desc}</p>
        <Link to={`projects/${name}`}>
            <button>Learn more!</button>
        </Link>
        <a href="github.com"><img src="/static/logos/github.svg" alt="Github Logo" /></a>
    </article>;
}