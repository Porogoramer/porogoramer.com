import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hamburger from './Hamburger';
import '../../../static/styles/common/_header.scss';

function Header() {
    const [expanded, setExpanded] = useState(false);

    const location = useLocation();
    const headerLogo = <>
        <li>
            <Link to={''} className="porogo-text">
                <img src="/static/assets/icons/porogo-logo.svg" alt="porogo icon"/>
                <p className={`link${location.pathname === '/' ? ' curr-page' : ''}`}> Porogo </p>
            </Link>
        </li>
        <span/>
    </>;
    const mainHeader = <>
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
    </>;
    const rightHeader = <>
        <li>
            <img src="/static/assets/icons/sun-icon.svg" alt="light mode"/>
        </li>
        <li>
            <div className='language'>
                <a className='option' href='#'>Fr</a>
                <a className='option' href='#'>En</a>
            </div>
        </li>
    </>;

    return(
        <React.Fragment>
            <header className={expanded ? 'expanded' : ''}>
                <ul className='desktop-header'>
                    {headerLogo}
                    {mainHeader}
                </ul>
                <ul className='right-part desktop-header'>
                    {rightHeader}
                </ul>
                <div className='mobile-header'>
                    <Link to={''} className="porogo-text">
                        <img src="/static/assets/icons/porogo-logo.svg" alt="porogo icon"/>
                        <p className={`link${location.pathname === '/' ? ' curr-page' : ''}`}> Porogo </p>
                    </Link>
                    <Hamburger toggleExpandParent={() => setExpanded(b => !b)} white={true}>
                        {mainHeader}
                        {rightHeader}
                    </Hamburger>
                </div>
            </header>
        </React.Fragment>
    );
}

export default Header;