import React from 'react'; 

export default function Project() {
    return (
        <React.Fragment>
            <section>
                <div className='intro'>
                    <div className='text'>
                        <h1>Porobot</h1>
                        <h2>2023-present</h2>
                    </div>
                    <div className="video-container">
                        <img className="video" src="/static/assets/images/showcase.png" alt="Showcase Video" />
                        <div className="sidebar">
                            <a href="#"><img src="/static/assets/icons/github-logo-black.svg" alt="GitHub Logo" style={{ width: '35px', height: 'auto' }}/></a>
                            <a href="#"><img src="/static/assets/icons/discord-icon.svg" alt="Discord Logo"  style={{ width: '35px', height: 'auto' }}/></a>
                        </div>   
                    </div>           
                </div>
                <span/>
                <div className='lang-section'>
                    <h1>Languages</h1>
                    <div className='languages'>
                        <div className='language'>
                            <img src='/static/assets/icons/javascript-icon.svg'></img>
                        </div>
                        <div className='language'>
                            <img src='/static/assets/icons/html-icon.svg'></img>
                        </div>
                        <div className='language'>
                            <img src='/static/assets/icons/mysql-icon.svg'></img>
                        </div>
                    </div>
                </div>
                <span/>
                <div className='about'>
                    <h1>About the project</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam  accumsan est, 
                        varius aliquet diam varius ut. Maecenas bibendum ante in  eleifend tristique. Ut magna 
                        , tincidunt in porttitor in, egestas  eu lectus. Pellentesque id velit a elit pretium 
                        tincidunt sed et quam.  Ut quis neque augue. 
                    </p>
                    <p>
                        Sed justo purus, fringilla at tincidunt sed,  vulputate ac dui. Aenean ornare vestibulum 
                        nisl vitae consequat. Nam  vestibulum lectus vitae dapibus varius. Nam vehicula lacinia 
                        eros. In  dictum scelerisque consectetur. Mauris tristique elit lacinia congue  dictum. 
                        Morbi ut nulla ex. Pellentesque nec ipsum sem.
                    </p>
                </div>
            </section>
        </React.Fragment>
    );
}