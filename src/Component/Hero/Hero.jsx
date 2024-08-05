import React, { useState } from 'react';
import './Hero.css';
import logo1 from '../../assets/logo (2).png';
import topic from '../../assets/topic1.png';
import Modales from '../Modales/Modales';

function Hero() {
    const scrollToSection = () => {
        const section = document.getElementById('foother-list');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToSidebar = (event) => {
        event.preventDefault();
        const sidebar = document.getElementById('sidebar-navbar');
        if (sidebar) {
            sidebar.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToHeaderNavbar = (event) => {
        event.preventDefault();
        const headerNavbar = document.getElementById('header-navbar');
        if (headerNavbar) {
            headerNavbar.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToMainList = (event) => {
        event.preventDefault();
        const mainList = document.getElementById('main-list');
        if (mainList) {
            mainList.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToSidebarNavbar = (event) => {
        event.preventDefault();
        const sidebarNavbar = document.getElementById('sidebar-navbar');
        if (sidebarNavbar) {
            sidebarNavbar.scrollIntoView({ behavior: 'smooth' });
        }
    };
    


    return (
        <div className="hero">
            <div className="container">
                <div className="hero-list">
                    <nav className='hero-list-item'>
                        <img src={logo1} alt="rasm" className='hero-icons' />
                        <p className='hero-list-item-text'>Toshkentda joylashgan Koreys tili hamda Topik o’quv markazi</p>
                    </nav>
                    <ul className="hero-navbar">
                        <li className="hero-navbar-item">
                            <a href="#" className="hero-navbar-link" onClick={scrollToSidebar}>
                                Nega biz
                            </a>
                        </li>
                        <li className="hero-navbar-item">
                            <a href="#" className="hero-navbar-link" onClick={scrollToHeaderNavbar}>
                                Natijalar
                            </a>
                        </li>
                        <li className="hero-navbar-item">
                            <a href="#" className="hero-navbar-link" onClick={scrollToMainList}>
                                Kurslar
                            </a>
                        </li>
                        <li className="hero-navbar-item">
                            <a href="#" className="hero-navbar-link" onClick={scrollToSidebarNavbar}>
                                Ko’p beriladigan savollar
                            </a>
                        </li>
                    </ul>
                    <nav className='hero-item'>
                        <a href="tel:+998 (33) 306 0098" className='hero-item-link'>+998 (33) 306 0098</a>
                        <p className='hero-ietm-text'>Hoziroq qo'ng'roq qiling</p>
                    </nav>
                </div>
                <div className="hero-content">
                    <div className='hero-content-item'>
                        <p className="hero-content-text">
                            3 oyda Koreys tilida gapirishni boshlang
                        </p>
                        <h1 className="hero-content-title">
                            Janubiy Koreya Universitetlarida 100% gacha grant asosida o’qish imkoniyati
                        </h1>
                        <nav className="hero-content-list">
                            <nav className='hero-nav'>
                                <svg width="15" height="37" viewBox="0 0 15 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.4383 8.36725C11.6597 6.48423 8.77345 1.55129 8.14546 1.02953C7.3602 0.377302 6.82647 0.848342 4.98869 3.81481C-1.05027 13.5615 -1.07593 23.3184 4.91098 33.4675C6.63202 36.3847 7.06851 36.8544 7.87958 36.6613C8.49814 36.5141 11.8919 30.8146 12.9047 28.2214C13.9611 25.5178 14.7713 21.0337 14.6785 18.4046C14.5853 15.7559 13.5201 10.9834 12.4383 8.36725Z" fill="#ABDDB1" />
                                </svg>
                                <p className='hero-content-list-text'>5 oyda Topikdan 6 darajagacha olishda yordam beramiz</p>
                            </nav>
                            <nav className='hero-nav'>
                                <svg width="15" height="37" viewBox="0 0 15 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.4383 8.36725C11.6597 6.48423 8.77345 1.55129 8.14546 1.02953C7.3602 0.377302 6.82647 0.848342 4.98869 3.81481C-1.05027 13.5615 -1.07593 23.3184 4.91098 33.4675C6.63202 36.3847 7.06851 36.8544 7.87958 36.6613C8.49814 36.5141 11.8919 30.8146 12.9047 28.2214C13.9611 25.5178 14.7713 21.0337 14.6785 18.4046C14.5853 15.7559 13.5201 10.9834 12.4383 8.36725Z" fill="#ABDDB1" />
                                </svg>
                                <p className='hero-content-list-text'>Topikdan yuqori darajani qo’lga kiritib, Janubiy Koreyada o’qish va ishlash imkoniyati</p>
                            </nav>
                        </nav>
                        <button onClick={scrollToSection} className="hero-content-btn">BEPUL DARSGA YOZDIRISH</button> 
                        <p className='hero-content-item-text'>Birinchi darsga bepul yoziling!</p>
                    </div>
                    <img src={topic} alt="rasm" className='hero-content-img' />
                </div>
            </div>
        </div>
    );
}

export default Hero;
