import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import ProjectShowcase from '../common/ProjectShowcase';
import Card from '../common/Card';
import Filter from '../common/Filter';
import '../../../static/styles/views/_allprojects.scss';

/**
 * The page containing all projects
 * @returns A page with a cool carousel, cool filters and all projects displayed
 */
export default function Projects() {
    const allCards = [
        { id: 1, languages: ['JS'], authors: ['Axel', 'Soup'] },
        { id: 2, languages: ['JAVA'], authors: ['Noah'] },
        { id: 3, languages: ['PYTHON'], authors: ['Spryte'] },
        { id: 4, languages: ['C++'], authors: ['Soup'] },
        { id: 5, languages: ['F#', 'JS', 'JAVA', 'PYTHON', 'C++', 'C#', 'HTML', 'CSS', 'Kotlin'], authors: ['Rida'] },
    ];

    const languages = ['JS', 'JAVA', 'PYTHON', 'C++', 'C#', 'HTML', 'CSS', 'Kotlin', 'F#'];
    const names = ['Axel', 'Noah', 'Spryte', 'Soup', 'Rida'];

    const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

    const filteredCards = allCards.filter(
        (card) =>
            (selectedAuthors.length === 0 || card.authors.some((author) => selectedAuthors.includes(author.toLowerCase()))) &&
            (selectedLanguages.length === 0 || card.languages.some((lang) => selectedLanguages.includes(lang.toLowerCase())))
    );


    return (
        <>
            <section className="test">
                <section className="top-content">
                    <Swiper
                        className="carousel"
                        modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                        }}
                        pagination={true}
                        effect="fade"
                    >
                        <SwiperSlide className="card">
                            <ProjectShowcase
                                name="Important Dog"
                                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                date="2004-2255"
                                backgroundImage="/static/assets/images/placeholder1.jpg"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="card">
                            <ProjectShowcase
                                name="Portfolio Site"
                                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                date="2999-0999"
                                backgroundImage="/static/assets/images/placeholder2.jpg"
                            />
                        </SwiperSlide>
                    </Swiper>
                </section>
            </section>
            <section className="bottom-content">
                <div id="filter">
                    <Filter
                        elements={names}
                        label="Authors"
                        selectedItems={selectedAuthors}
                        onChangeHandler={setSelectedAuthors}
                    />
                    <Filter
                        elements={languages}
                        label="Languages"
                        selectedItems={selectedLanguages}
                        onChangeHandler={setSelectedLanguages}
                    />

                </div>
                <div id="projects">
                    <h1>PROJECTS</h1>
                    <div className="allCards">
                        {filteredCards.map((card) => (
                            <Card key={card.id} languages={card.languages} authors={card.authors} title="Porogo" date="2024-Today"/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
