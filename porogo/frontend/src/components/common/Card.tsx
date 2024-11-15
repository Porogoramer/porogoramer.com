import '../../../static/styles/common/_card.scss';
import React from 'react';

// { src, alt, name, date, authors, tags, github }
function Card( { languages } : {languages: string[]}) {
    return <>
        <div className='card'>
            <div className='image-section'>
                <img src='/static/assets/icons/porogo-logo.svg' alt='porogo'/>
            </div>
            <div className='content-section'>
                <h2>Porogo</h2>
                <p>2020-2024</p>
                <p>By: Listnames</p>
                <div className='tags'>
                    {languages.map((language) => (
                        <span className='tag'>
                            {language}
                        </span>
                    ))}
                </div>
                <div className='icons'>
                    <a className='github' target='__blank' href="https://github.com"><img src="/static/assets/icons/github-logo-black.svg" alt="Github Logo"/></a>
                </div>
            </div>
        </div>
    </>;
}

export default Card;