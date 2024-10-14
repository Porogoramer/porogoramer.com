import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header(){
    const location = useLocation();

    return(
        <React.Fragment>
            <header>
                <ul>
                    <li>
                        <Link to={''} className="porogo-text">
                            <img src="/static/assets/icons/porogo-logo.svg" alt="porogo icon"/>
                            <p className={`link${location.pathname === '/' ? ' curr-page' : ''}`}> Porogo </p>
                        </Link>
                    </li>
                    <span/>
                    <li>
                        <Link to={'about'} className={`link${location.pathname === '/about' ? ' curr-page' : ''}`}> About us </Link>
                    </li>
                    <span/>
                    <li>
                        <Link to={'projects'} className={`link${location.pathname === '/projects' ? ' curr-page' : ''}`}> Our projects </Link>
                    </li>
                    <span/>
                    <li>
                        {/* Change link to individual project. project/:name ? */}
                        <Link to={'project'} className={`link${location.pathname === '/project/porobot' ? ' curr-page' : ''}`}> Porobot </Link>
                    </li>
                    <span/>
                    <li>
                        <Link to={'contact'} className={`link${location.pathname === '/contact' ? ' curr-page' : ''}`}> Contact us </Link>
                    </li>
                </ul>
                <ul className='right-part'>
                    <li>
                        <img src="/static/assets/icons/sun-icon.svg" alt="light mode"/>
                    </li>
                    <li>
                        <div className='language'>
                            <a className='option' href='#'>Fr</a>
                            <a className='option' href='#'>En</a>
                        </div>
                    </li>
                </ul>
            </header>
        </React.Fragment>
    );
}

export default Header;