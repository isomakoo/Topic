import "./Header.css";
import chat1 from "../../assets/chat.png";
import money1 from "../../assets/money.png";
import nishon1 from "../../assets/nishon.png";
import rocet1 from "../../assets/rocet.png";
import sumka1 from "../../assets/sumka.png";
import kalit1 from "../../assets/kalit.png";
import topik from "../../assets/topic6.png";
import Baccol from "../../assets/baccol.png";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Modales from "../Modales/Modales";

function Header() {
  const scrollToSection = () => {
    const section = document.getElementById('foother-list');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden'; // Scrollni to'xtatish
    };
  
    const closeModal = () => {
      setIsOpen(false);
      document.body.style.overflow = 'auto'; // Scrollni qayta yoqish
    };

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header-list">
            <h2 className="header-list-title">
              TOPIK academy aniq siz uchun agar siz:
            </h2>
            <div className="header-list-item">
              <nav className="header-list-navbar">
                <img src={chat1} alt="rasm" className="header-list-img" />
                <p className="header-list-text">
                  <span className="header-list-texts"> Qisqa</span> muddat
                  ichida Koreys tilida gapirishni istaysiz
                </p>
              </nav>
              <nav className="header-list-navbar">
                <img src={rocet1} alt="rasm" className="header-list-img" />
                <p className="header-list-text">
                  Koreys tili o’rganib o’z{" "}
                  <span className="header-list-texts">karyerangizni</span>{" "}
                  qurmoqchisiz
                </p>
              </nav>
              <nav className="header-list-navbar">
                <img src={money1} alt="rasm" className="header-list-img" />
                <p className="header-list-text">
                  Topik sertifikatini olib Koreyaning nufuzli universitetlariga{" "}
                  <span className="header-list-texts">GRANT</span> yutmoqchisiz
                </p>
              </nav>
              <nav className="header-list-navbar">
                <img src={sumka1} alt="rasm" className="header-list-img" />
                <p className="header-list-text">
                  Janubiy Koreya davlatida o’qish va{" "}
                  <span className="header-list-texts">ishlash</span> uchun
                  ketmoqchisiz
                </p>
              </nav>
              <nav className="header-list-navbar">
                <img src={nishon1} alt="rasm" className="header-list-img" />
                <p className="header-list-text">
                  Koreys tilini o’rta darajda bilasiz va darajangizni{" "}
                  <span className="header-list-texts">oshirmoqchisiz</span>
                </p>
              </nav>
              <nav className="header-list-navbar">
                <img src={kalit1} alt="rasm" className="header-list-img" />
                <p className="header-list-text">
                  Ko’p yillardan buyon o’qib ham{" "}
                  <span className="header-list-texts">natijaga</span> chiqa
                  olmayapsiz
                </p>
              </nav>
            </div>
            <button onClick={openModal} className="header-list-btn">HA BU MEN</button>
                        {isOpen && <Modales closeModal={closeModal} />}
          </div>
          <div id="header-navbar">
            <h2 className="header-navbar-title">
              O’quvchilarimizning natijalari TOPIK 6 gacha
            </h2>
            <Swiper
              slidesPerView={4}
              spaceBetween={5}
              pagination={{
                clickable: false,
              }}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
              loop={true}
            >
              {[...Array(9)].map((_, index) => (
                <SwiperSlide key={index}>
                  <img src={topik} alt="rasm" className="header-navbar-img" />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              slidesPerView={4}
              spaceBetween={5}
              pagination={{
                clickable: false,
              }}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
              loop={true}
              dir="rtl"
            >
              {[...Array(9)].map((_, index) => (
                <SwiperSlide key={index}>
                  <img src={topik} alt="rasm" className="header-navbar-img" />
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="header-navbar-btn" onClick={scrollToSection}>Ariza qoldirish</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
