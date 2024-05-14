import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './assets/css/styles.css';
import homeImage from './assets/img/main1.jpg';
import aboutImage from './assets/img/main3.jpg';

import JapaneseChicken from './components/JapaneseChicken';
import ChettinadChicken from './components/ChettinadChicken';
import ButterChicken from './components/ButterChicken';
import ChickenRice from './components/ChickenRice';
import SpicyChickenRice from './components/SpicyChickenRice';
import SchickenRice from './components/SchickenRice';
import ChickenBiryani from './components/ChickenBiryani';  
import HyderabadiBiryani from './components/HBiryani';
import ThokkuBiryani from './components/TBiryani';
import VegFriedRice   from './components/VegFriedRice';
import PannerRice from './components/PannerRice';
import MushroomRice from './components/MushroomRice';
import Chicken65 from './components/Chicken65';
import DragonChicken from './components/DragonChicken';
import PepperChicken from './components/PepperChicken';



import ScrollReveal from 'scrollreveal';

function Home() {

    useEffect(() => {
        const showMenu = (toggleId, navId) => {
            const toggle = document.getElementById(toggleId),
                nav = document.getElementById(navId)
            if (toggle && nav) {
                toggle.addEventListener('click', () => {
                    nav.classList.toggle('show-menu')
                })
            }
        }
        showMenu('nav-toggle', 'nav-menu')
        const navLink = document.querySelectorAll('.nav__link')

        function linkAction() {
            const navMenu = document.getElementById('nav-menu')
            navMenu.classList.remove('show-menu')
        }
        navLink.forEach(n => n.addEventListener('click', linkAction))
        const sections = document.querySelectorAll('section[id]')

        function scrollActive() {
            const scrollY = window.pageYOffset

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight
                const sectionTop = current.offsetTop - 50;
                sectionId = current.getAttribute('id')

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
                } else {
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
                }
            })
        }
        window.addEventListener('scroll', scrollActive)
        function scrollHeader() {
            const nav = document.getElementById('header')
            if (this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
        }
        window.addEventListener('scroll', scrollHeader)
        function scrollTop() {
            const scrollTop = document.getElementById('scroll-top');
            if (this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
        }
        window.addEventListener('scroll', scrollTop)

        const sr = ScrollReveal({
            origin: 'top',
            distance: '30px',
            duration: 2000,
            reset: true
        });

        sr.reveal(`.home__data, .home__img,
                    .about__data, .about__img,
                    .services__content, .menu__content,
                    .app__data, .app__img,
                    .contact__data, .contact__button,
                    .footer__content`, {
            interval: 200
        })
    }, []);
    return (
        <div>
            {/* Header */}
            <header className="l-header" id="header">
                <nav className="nav bd-container">
                <h2 className="nav__logo" style={{ color: '#069C54' }}>SRI THINDAL PUNJABI</h2>


                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item"><a href="#home" className="nav__link active-link">Home</a></li>
                            <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                            <li className="nav__item"><a href="#menu" className="nav__link">Menu</a></li>
                            <li className="nav__item"><a href="#contact" className="nav__link">Contact us</a></li>
                            <li className="nav__item"><Link className='nav__link' to={'/login'}>Login</Link></li>

                        </ul>
                    </div>

                    <div className="nav__toggle" id="nav-toggle">
                        <i className='bx bx-menu'></i>
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <main className="l-main">
                {/* Home section */}
                <section className="home" id="home">
                    <div className="home__container bd-container bd-grid">
                        <div className="home__data">
                            <h1 className="home__title">Geetings!</h1>
                            <h2 className="home__subtitle">Reserve your hall and celebrate your<br />occasion with Us!</h2>
                            <Link className='button' to={'/login'}>BOOK NOW !</Link>
                        </div>
                        <img src={homeImage} alt="img" className="home__img" />
                    </div>
                </section>

                {/* About section */}
                <section className="about section bd-container" id="about">
                    <div className="about__container  bd-grid">
                        <div className="about__data">
                            <span className="section-subtitle about__initial">About us</span>
                            <h2 className="section-title about__initial">We cook the best <br /> tasty food</h2>
                            <p className="about__description">We cook the best food in the entire city, with excellent customer service, the best meals and at the best price, visit us.</p>
                        </div>
                        <img src={aboutImage} alt="img  " className="about__img" />
                    </div>
                </section>

                {/* More sections can be added here */}

            </main>

            {/* MENU */}
            <section className="menu section bd-container" id="menu">
            
    <span className="section-subtitle">Special</span>
    <h2 className="section-title">Menu</h2>

    <div className="menu__container bd-grid">
        <div className="menu__content">
            <ButterChicken />
        </div>
        <div className="menu__content">
            <JapaneseChicken />
        </div>
        <div className="menu__content">
            <ChettinadChicken />
        </div>
        <div className="menu__content">
            <ChickenRice />
        </div>
        <div className="menu__content">
            <SchickenRice />
        </div>
        <div className="menu__content">
            <SpicyChickenRice />
        </div>
        <div className="menu__content">
            <ChickenBiryani/>
        </div>
        <div className="menu__content">
            <HyderabadiBiryani/>
        </div>
        <div className="menu__content">
            <ThokkuBiryani/>
        </div>
        <div className="menu__content">
            <VegFriedRice/>
        </div>
        <div className="menu__content">
            <PannerRice/>
        </div>
        <div className="menu__content">
            <MushroomRice/>
        </div>
        <div className="menu__content">
            <Chicken65/>
        </div>
        <div className="menu__content">
            <DragonChicken/>
        </div>
        <div className="menu__content">
            <PepperChicken/>
        </div>
        
</div>

               
            </section>

            {/* Contact section */}
            <section className="contact section bd-container" id="contact">
                <div className="contact__container bd-grid">
                    <div className="contact__data">
                        <span className="section-subtitle contact__initial">Let's talk</span>
                        <h2 className="section-title contact__initial">Contact us</h2>
                        <p className="contact__description">If you want to reserve hall in our restaurant, contact us and we will attend to you quickly at +1 737-375-2000 or srithindalpunjab@gmail.com.</p>
                    </div>
                </div>
            </section>

            <footer className="footer section bd-container">
                <div className="footer__container bd-grid">
                    <div className="footer__content">
                        <a href="#" className="footer__logo">SRI THINDAL PUNJABI</a>
                        <span className="footer__description">Restaurant</span>
                      
                        <div>
                            <a href="#" className="footer__social"><i className='bx bxl-facebook'></i></a>
                            <a href="#" className="footer__social"><i className='bx bxl-instagram'></i></a>
                            <a href="#" className="footer__social"><i className='bx bxl-twitter'></i></a>
                        </div>
                    </div>

                    <div className="footer__content">
                        <h3 className="footer__title">Development</h3>
                        <ul>
                            <li><a href="https://senthan-vigas-m.onrender.com/" target='new' className="footer__link">SENTHAN VIGAS M</a></li>
                            <li><a href="https://www.linkedin.com/in/sarankanth-k" target='new' className="footer__link">SARANKANTH K</a></li>
                            <li><a href="https://www.linkedin.com/in/shivaani-j-8b254024b/" target='new' className="footer__link">SHIVAANI J</a></li>
                        </ul>
                    </div>

                    <div className="footer__content">
                        <h3 className="footer__title">Information</h3>
                        <ul>
                            <li><a href="#home" className="footer__link">Home</a></li>
                            <li><a href="#about" className="footer__link">About</a></li>
                            <li><a href="#menu" className="footer__link">Menu</a></li>
                            <li><a href="#contact" className="footer__link">Contact us</a></li>
                        </ul>
                    </div>



                    <div className="footer__content">
                        <h3 className="footer__title">Address</h3>
                        <ul>
                            <li>Sri Thindal Punjabi,</li>
                            <li>Perundurai road,</li>
                            <li>Thindal,</li>
                            <li>Erode – 638 012.</li>
                        </ul>
                    </div>
                </div>
                <p className="footer__copy">&#169; 2024. All right reserved by SRI THINDAL PUNJABI.</p>
            </footer>

        </div>
    );
}

export default Home;
