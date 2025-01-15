/* eslint-disable camelcase */
const BASE_URL = '/api';

/**
 * Fetches a given resource based on the url determined by
 * environment and returns its parsed JSON.
 * @param resource Resource to be appended to the base URL
 * @returns parsed json content
 */
async function fetchData(resource: string) {
    let resUrl = BASE_URL;
    if (resource.charAt(0) !== '/')
        resUrl += '/';
    resUrl += resource;
    if (resource.slice(-1) !== '/')
        resUrl += '/';

    const resp = await fetch(resUrl, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    if (resp.headers.get('Content-Type') === 'application/json' && resp.ok){
        const json = await resp.json();
        return json;    
    } else if (!resp.ok) {
        throw new Error(`Request did not return OK error code: ${resp.status}, ${resp.url}`);
    } else {
        throw new Error(`Request did not return JSON: ${resp.headers.get('Content-Type')}, ${resp.url}`);
    }
}

interface Project {
    id: number
    name: string
    short_description: string
    description_intro: string
    description_body: string
    project_status: string
    start_year: number
    end_year: number | undefined
    icon: {
        img: string, 
        desc: string,
        hover: string
    }
    github_link: string[]
    youtube_url: string | undefined
    tags: string[]
    contributors: string[]
    languages: string[]
}

const emptyProject: Project = {
    id: 0,
    name: '',
    short_description: '',
    description_intro: '',
    description_body: '',
    project_status: '',
    start_year: 0,
    end_year: undefined,
    icon: {
        img: '',
        desc: '',
        hover: '',
    },
    github_link: [],
    youtube_url: '',
    tags: [],
    contributors: [],
    languages: [],
};

export { fetchData, Project, emptyProject };