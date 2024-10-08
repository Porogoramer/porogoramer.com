import React from 'react';

function Header(){
    return(
        <React.Fragment>
            <header>
                <ul>
                    <li>
                        <a href="#" className="porogo-text">
                            <img src="../../../static/assets/logos/porogoIcon.svg" alt="porogo icon"/>
                            <p>Porogo</p>
                        </a>
                    </li>
                    <span></span>
                    <li>
                        <a href="#">Our projects</a>
                    </li>
                    <span></span>
                    <li>
                        <a href="#">Important Dog</a>
                    </li>
                    <span></span>
                    <li>
                        <a href="#">Contact us</a>
                    </li>
                </ul>
                <ul className='right-part'>
                    <li>
                        <img src="../../../static/assets/logos/sun-logo.svg" alt="light mode"/>
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
