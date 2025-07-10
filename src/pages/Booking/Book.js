import React, { useState } from 'react';
import './Book.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomToast = ({ name, subject, date, time }) => (
  <div>
    <h4 style={{ margin: 0, padding: 10 }}>✅ Գրանցումն ընդունված է</h4>
    <div style={{ marginTop: 10 }}>
      <p style={{ margin: '0 0 8px 0' }}>{name}, դուք գրանցվել եք</p>
      <p style={{ margin: 0 }}>
        «{subject}» {date} Ժամը {time}-ին
      </p>
    </div>
  </div>
);


const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    date: '',
    time: '',
  });

  const subjects = [
    'Ռոբոտաշինություն',
    'Ծրագրավորում երեխաների համար',
    'Մաթեմատիկական գլուխկոտրուկներ',
    'Գիտական փորձարկումներ տանը',
    'Ինժեներական նախագծեր պատանիների համար',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast(<CustomToast {...formData} />, {
      className: 'custom-toast-absolute',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      date: '',
      time: '',
    });
  };

  return (
    <div className="booking-container">
      <h1>Գրանցվեք STEM վեբինարին</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Անուն:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Էլ․ հասցե:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Ընտրեք թեման:
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="">-- Ընտրեք --</option>
            {subjects.map((subj, i) => (
              <option key={i} value={subj}>
                {subj}
              </option>
            ))}
          </select>
        </label>

        <label>
          Ընտրեք ամսաթիվ:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Ընտրեք ժամանակ:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Ուղարկել հայտ</button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Booking;
