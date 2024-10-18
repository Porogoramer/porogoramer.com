import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import ProjectCard from '../common/ProjectCard';


export default function Projects() {
    return <>
    <section className='test'>
        <section className='top-content'>
            <Swiper className='carousel'
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 10000,
                disableOnInteraction: true,
              }}
            >
                <SwiperSlide className='card'><ProjectCard name='Important Dog' desc='A discord bot that exists I guess' /></SwiperSlide>
                <SwiperSlide className='card'><ProjectCard name='Portfolio Site' desc='A site to showcase some projects' /></SwiperSlide>
            </Swiper>
        </section>
        </section>
        <section className='full-content'>
            
        </section>
        </>
    
}