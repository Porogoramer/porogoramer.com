import React, { useState } from 'react';
import '../../../static/styles/views/_about.scss';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from '../common/Card';

/**
 * About page with description of the team and projects
 *@returns page with three sections: intro, team, and projects
 */
export default function About() {

    const allCards = [
        { id: 1, languages: ['JS'], authors: ['Axel', 'Soup'] },
        { id: 2, languages: ['JAVA'], authors: ['Noah'] },
    ];

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
                <button className='btn-projects'>Checkout our projects !</button>
            </div>
            <div className='images'>
                <div className='container'>
                    <img className='picture-us' src='/static/assets/images/fake-meeting.png' alt='Image of us'></img>
                    <svg className='under-shape' viewBox="0 0 795 511" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.2315 198.113C14.1356 110.085 81.1916 37.824 168.683 27.3619L387.313 1.21815C394.082 0.408671 400.922 0.370986 407.7 1.10582L621.872 24.3256C697.508 32.5258 759.821 87.3932 777.528 161.383L789.47 211.283C812.854 308.997 751.718 406.938 653.662 428.846L418 481.5L98.4343 509.897C44.2025 514.717 -1.85587 470.655 0.556444 416.263L10.2315 198.113Z"/>
                    </svg>
                </div>
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
                    modules={[Navigation, Pagination, Scrollbar]}
                    slidesPerView={2}
                    spaceBetween={-100}
                    centeredSlides={true}
                    loop={true}
                    grabCursor={true}
                    navigation={true}
                    className='carousel-container'
                >      
                    {people.map(person => (
                        <SwiperSlide key={person}>
                            <img src='/static/assets/images/yaneric.png'></img>
                            <p className='name-dev'>Hey, I&apos;m {person} <br/> Click on me !</p>
                        </SwiperSlide>
                    ))}     
                </Swiper>
            </div>
        </section>
        <section className='people'>
            <h4 className='subtitle'>THE PEOPLE</h4>
            <h1 className='title'>Here is everyone part of the team</h1>
            {/*API get porogoramers and fetch github pfp*/}
            <div className='people-list'>
                {people.map(person => (
                    <div className='person' key={person}>
                        <p className='description name'>{person}</p>
                        <img src='/static/assets/images/github-pfp.png'></img>
                        <p className='description'>Developer / social media mod</p>
                    </div>
                ))}
            </div>
        </section>
        <section className='projects'>
            <h4 className='subtitle'>PROJECTS</h4>
            <h1 className='title'>Things we&apos;ve made</h1>
            {/*API get Github projects with most stars from organization (only need 2)*/}
            <div className='star-projects'>
                <Card key={allCards[0].id} languages={allCards[0].languages} authors={allCards[0].authors} title="Porogo" date="2024-Today"/>
                <Card key={allCards[1].id} languages={allCards[1].languages} authors={allCards[1].authors} title="Porogo" date="2024-Today"/>
                <div className='more'>
                    <p className='medium-text'>Checkout the rest !</p>
                    <img src='/static/assets/icons/three-circles.svg'></img>
                </div>
            </div>

        </section>
    </>;
}