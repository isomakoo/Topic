import './Sidebar.css'
import topik2 from '../../assets/topic1.png'
import topik3 from '../../assets/topic2.png'
import topik4 from '../../assets/topic3.png'
import bir from '../../assets/bir.png'
import ikki from '../../assets/ikki.png'
import uch from '../../assets/uch.png'
import turt from '../../assets/turt.png'
import  besh from '../../assets/besh.png'
import olti from '../../assets/olti.png'


function Sidebar() {
    const scrollToSection = () => {
        const section = document.getElementById('foother-list');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <>
       <div className="sidebar">
        <div className="container">
            <h4 className='sidebar-list-title'>O’zingizga mos kursga ro’yxatdan o’ting</h4>
           <ul className='sidebar-list'>
               <li className="sidebar-item">
                <img src={topik2} alt="rasm" className='sidebar-item-img' />
                <nav className="sidebar-item-nav">
                    <p className="sidebar-item-nav-text">Intiensive</p>
                    <button className="sidebar-item-btn" onClick={scrollToSection}>Davomiyligi 6 oy</button>
                </nav>
                <p className='sidebar-item-text'>Koreys tilini chuqur o’zlashtirmoqchi bo’lganlar uchun haftada 6 kun 1.5 soatdan intensive kurs.</p>
                <nav className="sidebar-item-nav">
                    <button className="sidebar-item-btn"onClick={scrollToSection}>Ro’yxatdan o’tish</button>
                    <p className="sidebar-item-nav-title">970.000 so’m /oy</p>
                </nav>
               </li>
               <li className="sidebar-item">
                <img src={topik3} alt="rasm" className='sidebar-item-img' />
                <nav className="sidebar-item-nav">
                    <p className="sidebar-item-nav-text">Odatiy</p>
                    <button className="sidebar-item-btn"onClick={scrollToSection}>Davomiyligi 6 oy</button>
                </nav>
                <p className='sidebar-item-text'>Haftada 3 kun 1.5 soatdan iborat odatiy Koreys tili darslari.</p>
              <nav className='sidebar-item-nav '>
            
                    <button className="sidebar-item-btn"onClick={scrollToSection}>Ro’yxatdan o’tish</button>
                    <p className="sidebar-item-nav-title">560.000 so’m /oy</p>
              </nav>
               </li>
               <li className="sidebar-item">
                <img src={topik4} alt="rasm" className='sidebar-item-img' />
                <nav className="sidebar-item-nav">
                    <p className="sidebar-item-nav-text">Individual</p>
                    <button className="sidebar-item-btn" onClick={scrollToSection} >Davomiyligi 6 oy</button>
                </nav>
                <p className='sidebar-item-text'>O’qituvchidan individual dars olmoqchi bo’lganlar uchun haftada 3 kun 1.5 soatdan darslar.Individual yondashuv.</p>
                <nav className="sidebar-item-nav">
                    <button className="sidebar-item-btn" onClick={scrollToSection} >Ro’yxatdan o’tish</button>
                    <p className="sidebar-item-nav-title">1.800.000 so’m /oy</p>
                </nav>
               </li>
           </ul>
           <h4 className='sidebar-list-title'>
              Nima uchun aynan TOPIK academy?
           </h4>
           <ul id="sidebar-navbar">
            <li className="sidebar-navbar-item">
                <img src={bir} alt="rasm" className='sidebar-icon' />
                <p className='sidebar-item-title'>Professional ustozlar</p>
                <p className="sidebar-item-texts">Sizga 4 yildan ortiq tajriba va Topik darajasi 6 bo’lgan o’qituvchilar dars beradi</p>
            </li>
            <li className="sidebar-navbar-item">
                <img src={ikki} alt="rasm" className='sidebar-icon'/>
                <p className='sidebar-item-title'>Professional ustozlar</p>
                <p className="sidebar-item-texts">Sizga 4 yildan ortiq tajriba va Topik darajasi 6 bo’lgan o’qituvchilar dars beradi</p>
            </li>
            <li className="sidebar-navbar-item">
                <img src={uch} alt="rasm" className='sidebar-icon'/>
                <p className='sidebar-item-title'>Professional ustozlar</p>
                <p className="sidebar-item-texts">Sizga 4 yildan ortiq tajriba va Topik darajasi 6 bo’lgan o’qituvchilar dars beradi</p>
            </li>
            <li className="sidebar-navbar-item">
                <img src={turt} alt="rasm"className='sidebar-icon' />
                <p className='sidebar-item-title'>Professional ustozlar</p>
                <p className="sidebar-item-texts">Sizga 4 yildan ortiq tajriba va Topik darajasi 6 bo’lgan o’qituvchilar dars beradi</p>
            </li>
            <li className="sidebar-navbar-item">
                <img src={besh} alt="rasm"className='sidebar-icon' />
                <p className='sidebar-item-title'>Professional ustozlar</p>
                <p className="sidebar-item-texts">Sizga 4 yildan ortiq tajriba va Topik darajasi 6 bo’lgan o’qituvchilar dars beradi</p>
            </li>
            <li className="sidebar-navbar-item">
                <img src={olti} alt="rasm" className='sidebar-icon'/>
                <p className='sidebar-item-title'>Professional ustozlar</p>
                <p className="sidebar-item-texts">Sizga 4 yildan ortiq tajriba va Topik darajasi 6 bo’lgan o’qituvchilar dars beradi</p>
            </li>
           </ul>
             <h3 className='sidebar-list-title'>Ko’p beriladigan savollar</h3>
             <nav id='sidebar-nav'><p className="sidebar-text">O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?</p></nav>
             <nav id='sidebar-nav'><p className="sidebar-text">O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?</p></nav>
             <nav id='sidebar-nav'><p className="sidebar-text">O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?</p></nav>
             <nav id='sidebar-nav'><p className="sidebar-text">O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?</p></nav>
        </div>
       </div>
    </>
  )
}

export default Sidebar