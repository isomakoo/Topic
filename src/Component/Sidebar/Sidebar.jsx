import React, { useState } from 'react'; // useState import qilish
import './Sidebar.css';
import topic1 from '../../assets/topic1.png';
import topic2 from '../../assets/topic2.png';
import topic3 from '../../assets/topic3.png';
import bir from '../../assets/bir.png';
import ikki from '../../assets/ikki.png';
import uch from '../../assets/uch.png';
import turt from '../../assets/turt.png';
import besh from '../../assets/besh.png';
import olti from '../../assets/olti.png';
import Collapsible from '../modal/modal'; // Collapsible komponentini import qilish
import Modales from '../Modales/Modales';

function Sidebar() {
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
        <div className="sidebar">
            <div className="container">
                <h4 className='sidebar-list-title'>O’zingizga mos kursga ro’yxatdan o’ting</h4>
                <ul className='sidebar-list'>
                    <li className="sidebar-item">
                        <img src={topic1} alt="rasm" className='sidebar-item-img' />
                        <nav className="sidebar-item-nav">
                            <p className="sidebar-item-nav-text">Intiensive</p>
                            <p className="sidebar-item-tex" >Davomiyligi 6 oy</p>
                        </nav>
                        <p className='sidebar-item-text'>Koreys tilini chuqur o’zlashtirmoqchi bo’lganlar uchun haftada 6 kun 1.5 soatdan intensive kurs.</p>
                        <nav className="sidebar-item-nav">
                            <button onClick={openModal} className="sidebar-item-btn">Ariza qoldirish</button>
                            {isOpen && <Modales closeModal={closeModal} />}
                            <p className="sidebar-item-nav-title">970.000 so’m /oy</p>
                        </nav>
                    </li>
                    <li className="sidebar-item">
                        <img src={topic2} alt="rasm" className='sidebar-item-img' />
                        <nav className="sidebar-item-nav">
                            <p className="sidebar-item-nav-text">Odatiy</p>
                            <p className="sidebar-item-tex" >Davomiyligi 6 oy</p>
                        </nav>
                        <p className='sidebar-item-text'>Haftada 3 kun 1.5 soatdan iborat odatiy Koreys tili darslari.</p>
                        <nav className='sidebar-item-nav'>
                            <button onClick={openModal} className="sidebar-item-btn">Ariza qoldirish</button>
                            {isOpen && <Modales closeModal={closeModal} />}
                            <p className="sidebar-item-nav-title">560.000 so’m /oy</p>
                        </nav>
                    </li>
                    <li className="sidebar-item">
                        <img src={topic3} alt="rasm" className='sidebar-item-img' />
                        <nav className="sidebar-item-nav">
                            <p className="sidebar-item-nav-text">Individual</p>
                            <p className="sidebar-item-tex" >Davomiyligi 6 oy</p>
                        </nav>
                        <p className='sidebar-item-text'>O’qituvchidan individual dars olmoqchi bo’lganlar uchun haftada 3 kun 1.5 soatdan darslar. Individual yondashuv.</p>
                        <nav className="sidebar-item-nav">
                            <button onClick={openModal} className="sidebar-item-btn">Ariza qoldirish</button>
                            {isOpen && <Modales closeModal={closeModal} />}
                            <p className="sidebar-item-nav-title">1.800.000 so’m /oy</p>
                        </nav>
                    </li>
                </ul>
                <h4 className='sidebar-list-title'>Nima uchun aynan TOPIK academy?</h4>
                <ul id="sidebar-navbar">
                    <li className="sidebar-navbar-item">
                        <img src={bir} alt="rasm" className='sidebar-icon' />
                        <p className='sidebar-item-title'>Professional ustozlar</p>
                        <p className="sidebar-item-texts">Sizga 4 yildan ortiq tajriba va Topik darajasi 6 bo’lgan o’qituvchilar dars beradi</p>
                    </li>
                    <li className="sidebar-navbar-item">
                        <img src={ikki} alt="rasm" className='sidebar-icon' />
                        <p className='sidebar-item-title'>Professional ustozlar</p>
                        <p className="sidebar-item-texts">Sizga 4 yildan ortiq tajriba va Topik darajasi 6 bo’lgan o’qituvchilar dars beradi</p>
                    </li>
                    <li className="sidebar-navbar-item">
                        <img src={uch} alt="rasm" className='sidebar-icon' />
                        <p className='sidebar-item-title'>Professional ustozlar</p>
                        <p className="sidebar-item-texts">Sizga 4 yildan ortiq tajriba va Topik darajasi 6 bo’lgan o’qituvchilar dars beradi</p>
                    </li>
                    <li className="sidebar-navbar-item">
                        <img src={turt} alt="rasm" className='sidebar-icon' />
                        <p className='sidebar-item-title'>Professional ustozlar</p>
                        <p className="sidebar-item-texts">Sizga 4 yildan ortiq tajriba va Topik darajasi 6 bo’lgan o’qituvchilar dars beradi</p>
                    </li>
                    <li className="sidebar-navbar-item">
                        <img src={besh} alt="rasm" className='sidebar-icon' />
                        <p className='sidebar-item-title'>Professional ustozlar</p>
                        <p className="sidebar-item-texts">Sizga 4 yildan ortiq tajriba va Topik darajasi 6 bo’lgan o’qituvchilar dars beradi</p>
                    </li>
                    <li className="sidebar-navbar-item">
                        <img src={olti} alt="rasm" className='sidebar-icon' />
                        <p className='sidebar-item-title'>Professional ustozlar</p>
                        <p className="sidebar-item-texts">Sizga 4 yildan ortiq tajriba va Topik darajasi 6 bo’lgan o’qituvchilar dars beradi</p>
                    </li>
                </ul>
                <h3 className='sidebar-list-title'>Ko’p beriladigan savollar</h3>
                <Collapsible title="O’quv materiallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanmi?" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium alias quas minima assumenda maxime, eligendi odio atque voluptatem corporis quod earum fugit perspiciatis ullam eum, quae pariatur minus totam recusandae, reiciendis possimus. Autem sed tempora suscipit dolores sapiente, quis alias ut labore et, earum, consectetur ipsum ab est quia neque?" />
                <Collapsible title="Kurs Narxi" content="Kurs Narxi Kursga qarab bulinadi" />
                <Collapsible title="Ustozni Topic Darajasi nechi" content="Ustozlarimizni Hammasi Koreyaga borib malaka oshirib kelgan Hozirda topic Darajasi 7 dan baland " />
            </div>
        </div>
    );
}

export default Sidebar;
