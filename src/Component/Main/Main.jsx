import "./Main.css";
import gks1 from '../../assets/gks.png';
import topik1 from '../../assets/topic6.png'
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Main() {
  const scrollToSection = () => {
    const section = document.getElementById('foother-list');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};
  return (
    <>
      <div className="main">
        <div className="container">
          <h3 className="main-list-title">
            Koreya Universitetlariga 100% gacha grant yutish imkoniyati
          </h3>
          <div id="main-list">
            <img src={gks1} alt="rasm" className="main-list-img" />
            <nav className="main-list-item">
              <h3 className="main-list-item-title">
                GKS (Global Korean Scholarship) -{" "}
                <span className="span-title"> $70.000</span> lik Grant
              </h3>
              <p className="main-list-item-text">
                Janubiy Koreya hukumatining stipendiya dasturi (GKS) Koreyaning
                Xalqaro ta'lim bo'yicha milliy instituti tomonidan{" "}
                <span className="span-title">xorijiy</span>
                talabalarning Koreyada bakalavr va magistratura bosqichida{" "}
                <span className="span-title">100%</span>
                gacha to’liq grant va oylik{" "}
                <span className="span-title">stipendiya</span> olish
                imkoniyatingiz bor
              </p>
              <h3 className="main-list-item-title">
                GKS granti sizga nima beradi
              </h3>
              <li className="main-list-item-text">
                Dastur boshlanganida va tugaganida Koreyaga borish hamda
                Koreyadan qaytish xarajatlari qoplanadi.
              </li>
              <li className="main-list-item-text">
                Koreyaga yetib borganda joylashib olish uchun bir martalik
                to'lovberiladi. Miqdori - 200 000 Koreya voni (taxminan 157 AQSh
                dollari).
              </li>
              <li className="main-list-item-text">
                Til kursi va universitetning kontrak to'lovi to'liq to'lab
                beriladi (faqat magistr va doktorantlarga)... ko’proq
              </li>
            </nav>
          </div>
          <iframe
            width="853"
            height="480"
            src="https://www.youtube.com/embed/zj355hKD3lY"
            title="QANDAY QILIB GKS GRANTINI YUTIB OLSA BO&#39;LADI ? 60,000 $ LIK GRANT🤯"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="main-images"
          ></iframe>
          <h3 className="main-list-title">
            Muvafaqqiyatli bitiruvchilarimizga universitet tanlash va grant yutishda yordam beramiz
          </h3>
           <div className="main-navbar">
            <div className="main-navbar-item">
            <p className="main-navbar-title"><span className="span-title">TOPIK academy consulting</span> jamoasi sizga universitet tanlash, visa olish va grant yutishingizda yaqindan ko’maklashadi</p>
            <p className="main-navbar-text">Ko’proq ma’lumot olish uchun bepul konsultatsiyaga yoziling!</p>
            <button className="main-navbar-btn" onClick={scrollToSection}>Ariza qoldirish</button>
            </div>
              <img src={topik1} alt="rasm" className="main-img" />
              <img src={topik1} alt="rasm" className="main-img"/>
              <img src={topik1} alt="rasm" className="main-img"/>
           </div>
        </div>
      </div>
    </>
  );
}

export default Main;
