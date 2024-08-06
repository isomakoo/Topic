import { useState } from "react";
import "./Foother.css";
import logojon from "../../assets/logojon.svg";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Foother() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `Ism: ${name}\nTelefon: ${phone}`;

    const token = "7079304090:AAHz0hdemV3kKxzSiksKthyugnQ3oGpBadU";
    const chat_id = "6914657739";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: message,
      }),
    });

    const result = await response.json();

    if (result.ok) {
      alert("Xabar muvaffaqiyatli yuborildi");
      setName(""); // Input qiymatini tozalash
      setPhone(""); // Input qiymatini tozalash
    } else {
      alert("Xabar yuborishda xatolik yuz berdi");
    }
  };
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

  return (
    <>
      <div className="foother">
        <div className="container">
          <div id="foother-list">
            <nav className="foother-list-item">
              <h3 className="foother-list-title">Savollaringiz qoldimi?</h3>
              <p className="foother-list-text">
                Ma’lumotlaringizni qoldiring siz bilan bog’lanib barcha
                savollaringizga javob beramiz.
              </p>
            </nav>
            <form onSubmit={handleSubmit}>
              <input
                className="foother-input"
                type="text"
                placeholder="Ismingizni kiriting"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <input
                className="foother-input"
                type="tel"
                placeholder="+998"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <br />
              <button className="foother-list-btn">Ariza qoldirish</button>
            </form>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0360977185!2d-74.30933341658171!3d40.69753995848721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodCo0JA!5e0!3m2!1sru!2s!4v1722498314446!5m2!1sru!2s"
            width="1200"
            height="350"
            style={{ borderRadius: 30 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="foother-kart"
          ></iframe>
          <div className="foother-navbar">
            <a href="/">
                <img src={logojon} alt="rasm" />
            </a>
            <ul className="hero-navbar">
                <li className="hero-navbar-item">
                    <a href="#" className="foother-navbar-link" onClick={(e) => scrollToSection(e, 'sidebar-navbar')}>
                        Nega biz
                    </a>
                </li>
                <li className="hero-navbar-item">
                    <a href="#" className="foother-navbar-link" onClick={(e) => scrollToSection(e, 'header-navbar')}>
                        Natijalar
                    </a>
                </li>
                <li className="hero-navbar-item">
                    <a href="#" className="foother-navbar-link" onClick={(e) => scrollToSection(e, 'main-list')}>
                        Kurslar
                    </a>
                </li>
                <li className="hero-navbar-item">
                    <a href="#" className="foother-navbar-link" onClick={(e) => scrollToSection(e, 'sidebar-nav')}>
                        Ko’p beriladigan savollar
                    </a>
                </li>
            </ul>
            <nav className="iconslar">
                <a href="#">
                    <FaInstagram className="foother-icons" />
                </a>
                <a href="#">
                    <IoLogoYoutube className="foother-icons" />
                </a>
                <a href="#">
                    <FaTelegram className="foother-icons" />
                </a>
                <a href="#">
                    <FaFacebook className="foother-icons" />
                </a>
            </nav>
        </div>
        </div>
      </div>
    </>
  );
}

export default Foother;
