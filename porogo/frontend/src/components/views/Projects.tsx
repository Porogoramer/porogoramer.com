import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import ProjectCard from '../common/ProjectCard';


export default function Projects() {
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
                    <SwiperSlide className='card'><ProjectCard name='Important Dog' desc='A discord bot that exists I guess' /></SwiperSlide>
                    <SwiperSlide className='card'><ProjectCard name='Portfolio Site' desc='A site to showcase some projects' /></SwiperSlide>
                </Swiper>
            </section>
        </section>
        <section className='bottom-content'>
            <div id='filter'>
                <h2>Filter</h2>
            </div>
            <div id='projects'>
                <h1>PROJECTS</h1>
            </div>           
        </section>
    </>;
}