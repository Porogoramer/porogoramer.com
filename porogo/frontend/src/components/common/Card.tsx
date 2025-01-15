import '../../../static/styles/common/_card.scss';
import React from 'react';

// { src, alt, name, date, authors, tags, github }
/**
 * Card component that displays information about a project
 * @param props React props
 * @param props.languages Array of languages for the project
 * @param props.authors Array of authors that made the project
 * @param props.title Title of the project
 * @param props.date Date of the project
 * @returns Project card with little information of the project
 */
function Card( { languages, authors, title, date } : {languages: string[], authors: string[], title: string, date: string}) {
    const displayedLanguages = languages.slice(0, 6);
    const hasMoreLanguages = languages.length > 6;
    return <>
        <div className='card-container'>
            <div className='image-section'>
                <img src='/static/assets/icons/porogo-logo.svg' alt='porogo'/>
            </div>
            <div className='content-section'>
                <h2>{title}</h2>
                <p>{date}</p>
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