import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProjectCard from '../common/ProjectCard';


export default function Projects() {
    return <>
    <section className='test'>
        <section className='top-content'>
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            
            >
                <SwiperSlide><ProjectCard name='Important Dog' desc='A discord bot that exists I guess' /></SwiperSlide>
                <SwiperSlide><ProjectCard name='Portfolio Site' desc='A site to showcase some projects' /></SwiperSlide>
            </Swiper>
        </section>
        </section>
        <section className='full-content'>
            
        </section>
        </>
    
}