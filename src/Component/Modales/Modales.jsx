import React, { useState } from "react";
import "./modales.css";
import axios from 'axios';

function Modales({ closeModal }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async () => {
    if (!name || !phone) {
      alert('Iltimos, barcha maydonlarni to\'ldiring.');
      return;
    }

    const message = `Yangi ma'lumotlar:\nIsm: ${name}\nTelefon: ${phone}`;
    const botToken = '7079304090:AAHz0hdemV3kKxzSiksKthyugnQ3oGpBadU'; 
    const chatId = '6914657739'; 
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      await axios.post(url, {
        chat_id: chatId,
        text: message
      });
      alert('Xabar yuborildi');
      closeModal(); 
    } catch (error) {
      alert('Xatolik yuz berdi');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-modal" onClick={closeModal}>&times;</button>
        <h2>O'z ma'lumotlaringizni qoldiring</h2>
        <p>Sizga to'liqroq ma'lumot berish uchun mutaxassislarimiz siz bilan bog'lanishadi</p>
        <input 
          type="text" 
          placeholder="Ismingiz" 
          required
          className="modal-input" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <div className="phone-input">
          <input 
            type="tel"
            required
            placeholder="99-999-9999" 
            className="modal-input" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
          />
        </div>
        <button className="submit-btn" onClick={handleSubmit}>Bepul darsga yozilish</button>
      </div>
    </div>
  );
}

export default Modales;
