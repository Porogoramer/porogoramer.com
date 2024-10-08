import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

export default function Home() {
    return <>
        <Header />
        <section className='content landing'>
            <div className='welcome'>
                <h1>Welcome to Porogo</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusamus quos quidem veniam sapiente corporis? Quidem porro fuga dolor amet soluta delectus atque aliquam obcaecati, vel consequuntur reprehenderit earum neque.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusamus quos quidem veniam sapiente corporis? Quidem porro fuga dolor amet soluta delectus atque aliquam obcaecati, vel consequuntur reprehenderit earum neque.</p>
            </div>
            <img src="/static/assets/logos/porogoIcon.svg" alt="Porogo Logo" />
        </section>
        <section className='content'>
            <div>
                <h1>Projects</h1>
                <div>Proj1</div>
                <div>Proj2</div>
            </div>
        </section>
        <Footer />
    </>;
}