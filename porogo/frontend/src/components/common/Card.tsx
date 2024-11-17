import '../../../static/styles/common/_card.scss';
import React from 'react';

// { src, alt, name, date, authors, tags, github }
function Card( { languages, authors } : {languages: string[], authors: string[]}) {
    const displayedLanguages = languages.slice(0, 6);
    const hasMoreLanguages = languages.length > 6;
    return <>
        <div className='container'>
            <div className='image-section'>
                <img src='/static/assets/icons/porogo-logo.svg' alt='porogo'/>
            </div>
            <div className='content-section'>
                <h2>Porogo</h2>
                <p>2020-2024</p>
                <div className='authors'>
                    {authors.map((author, index) => (
                        <span className='author' key={`author-${index}`}>
                            {author}
                        </span>
                    ))}
                </div>
                <div className='tags'>
                    {displayedLanguages.map((language, index) => (
                        <span className='tag' key={`language-${index}`}>
                            {language}
                        </span>
                    ))}
                    {hasMoreLanguages && <span className='tag'>...</span>}
                </div>
                <div className='icons'>
                    <a className='github' target='__blank' href="https://github.com"><img src="/static/assets/icons/github-logo-black.svg" alt="Github Logo"/></a>
                </div>
            </div>
        </div>
    </>;
}

export default Card;