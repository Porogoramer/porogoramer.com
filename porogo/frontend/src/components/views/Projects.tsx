import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import ProjectShowcase from '../common/ProjectShowcase';
import Card from '../common/Card';
import '../../../static/styles/views/_allprojects.scss';



export default function Projects() {
    const languages = ["JS", "JAVA", "PYTHON", "C++", "C#", "HTML", "CSS", "Kotlin"];
    const languages2 = ["JS", "JAVA", "PYTHON"];
    return <>
        <section className='test'>
            <section className='top-content'>
                <Swiper className='carousel'
                    modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                    }}
                    pagination = {true}
                    effect='fade'>
                    <SwiperSlide className='card'><ProjectShowcase name='Important Dog' desc='A discord bot that exists I guess' date='2004-2255' backgroundImage='/static/assets/images/placeholder1.jpg'/></SwiperSlide>
                    <SwiperSlide className='card'><ProjectShowcase name='Portfolio Site' desc='A site to showcase some projects' date='2999-0999' backgroundImage='/static/assets/images/placeholder2.jpg'/></SwiperSlide>
                </Swiper>
            </section>
        </section>
        <section className='bottom-content'>
            <div id='filter'>
                <label htmlFor="name">Name: </label>
                <select name="name">
                    <option value={'example'}>Example</option>
                </select>
                <label htmlFor="language">Language: </label>
                <select name="language">
                    <option value={'example'}>Example</option>
                </select>
                <label htmlFor="other">Other: </label>
                <select name="other">
                    <option value={'example'}>Example</option>
                </select>
            </div>
            <div id='projects'>
                <h1>PROJECTS</h1>
                <div className='allCards'>
                    <Card languages={languages}/>
                    <Card languages={languages2}/>
                    <Card languages={languages2}/>
                    <Card languages={languages2}/>
                    <Card languages={languages2}/>
                    <Card languages={languages2}/>
                    <Card languages={languages2}/>
                    <Card languages={languages2}/>
                    <Card languages={languages2}/>
                    <Card languages={languages2}/>
                </div>
            </div>           
        </section>
    </>;
}