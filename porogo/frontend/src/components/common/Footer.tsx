import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <React.Fragment>
            <footer>
                <div className='row-1'>
                    <ul>
                        <li>
                            <Link to={'Home'} className='link'> Porogo </Link>
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
                                    <img className='balls' src='/static/assets/icons/github-logo.svg'></img>
                                </a>
                                <a className='icon' href='https://www.instagram.com/porogoramers/' target='__blank'>
                                    <img src='/static/assets/icons/instagram-logo.svg'></img>
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