import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <React.Fragment>
            <footer>
                <div className='row-1'>
                    <ul>
                        <li>
                            <Link to={''} className='link'> Porogo </Link>
                        </li>
                        <span/>
                        <li>
                            <Link to={'about'} className='link'> About us </Link>
                        </li>
                        <span/>
                        <li>
                            <Link to={'contact'} className='link'> Contact us </Link>
                        </li>
                        <span/>
                        <li>
                            <div className='icons'>
                                <a className='icon' href='https://github.com/Porogoramer' target='__blank'>
                                    <img className='balls' src='/static/assets/icons/github-icon.svg' alt='Github Logo'></img>
                                </a>
                                <a className='icon' href='https://www.instagram.com/porogoramers/' target='__blank'>
                                    <img src='/static/assets/icons/instagram-icon.svg' alt='Instagram Logo'></img>
                                </a>   
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='row-2'>
                    <p>&copy; Porogoramer 2024. All rights reserved.</p>
                </div>
            </footer>
        </React.Fragment>
    );
}