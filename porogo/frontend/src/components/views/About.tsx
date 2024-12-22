import React from 'react';
import '../../../static/styles/views/_about.scss';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function About() {
    const people = ['Yaneric', 'Axel', 'Rida', 'Emilie', 'Noah'];
    return <>
        <section className='intro'>
            <div className='text'>
                <h4 className='subtitle'>ABOUT US</h4>
                <h1 className='title'>Porogo crafts innovative and meaningful and fun projects.</h1>
                <p className='description'>
                        We came up with Porogo as a way to bring a team of passionate creators together to build
                        projects we truly enjoy. We believe the best work comes from loving what we do, and we 
                        channel that enthusiasm into crafting innovative and meaningful projects. At Porogo, we 
                        turn our passions into projects, creating with joy and purpose.
                </p>
                <button>Checkout our projects !</button>
            </div>
            <div className='images'>
                <img src='/static/assets/images/fake-meeting.png' alt='Image of us'></img>
            </div>
        </section>
        <section className='team'>
            <div className='text'>
                <h4 className='subtitle'>OUR TEAM</h4>
                <h1 className='title'>Our team is a passionate group dedicated to bringing ideas to life.</h1>
                <p className='description'>
                        At Porogo, we&apos;re a team of &apos;Porogoramers&apos; who turn our passions into impactful projects. Whether 
                        we&apos;re playing Minecraft and building a server hosting platform to share with others, or diving into 
                        D&D and creating apps that enhance the player experience, we&apos;re all about crafting tools that make 
                        the things we love even better. We believe that by working on what excites us, we can create 
                        innovative solutions that inspire and bring joy to others.
                </p>
            </div>
            <div className='carousel-part'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    loop
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>        
                    {people.map(person => (
                        <div className='person' key={person}>
                            <SwiperSlide><img src='/static/assets/images/axel.png'></img></SwiperSlide>
                        </div>
                    ))}     
                </Swiper>
            </div>
        </section>
        <section className='people'>
            <h4 className='subtitle'>THE PEOPLE</h4>
            <h1>Here is everyone part of the team</h1>
            {/*API get porogoramers and fetch github pfp*/}
            <div className='people-list'>
                {people.map(person => (
                    <div className='person' key={person}>
                        <p>{person}</p>
                        <img src='/static/assets/images/github-pfp.png'></img>
                        <p>developer</p>
                    </div>
                ))}
            </div>
        </section>
        <section className='projects'>
            <h4 className='subtitle'>PROJECTS</h4>
            <h1>Things we&apos;ve made</h1>
            {/*API get Github projects with most stars from organization (only need 2)*/}
            <div className='star-projects'>
                <p>card project</p>
                <p>card project</p>
                <div className='more'>
                    <p>Checkout the rest !</p>
                    <img src='/static/assets/icons/three-circles.svg'></img>
                </div>
            </div>

        </section>
    </>;
}