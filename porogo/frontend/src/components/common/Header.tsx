import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <React.Fragment>
            <header>
                <ul>
                    <li>
                        <Link to={'Home'} className="porogo-text">
                            <img src="/static/assets/icons/porogoIcon.svg" alt="porogo icon"/>
                            <p className='link'>Porogo</p>
                        </Link>
                    </li>
                    <span/>
                    <li>
                        <Link to={'about'} className='link'> About us </Link>
                    </li>
                    <span/>
                    <li>
                        <Link to={'projects'} className='link'> Our projects </Link>
                    </li>
                    <span/>
                    <li>
                        {/* Change link to individual project. project/:name ? */}
                        <Link to={'projects'} className='link'> Porobot </Link>
                    </li>
                    <span/>
                    <li>
                        <Link to={'contact'} className='link'> Contact us </Link>
                    </li>
                </ul>
                <ul className='right-part'>
                    <li>
                        <img src="/static/assets/icons/sun-logo.svg" alt="light mode"/>
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