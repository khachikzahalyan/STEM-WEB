import './Footer.css';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [contactInfo, setContactInfo] = useState({});

  const randomAddresses = [
    { address: 'Նալբանդյան 50, Երևան', phone: '010 123456' },
    { address: 'Մաշտոցի պողոտա 24, Երևան', phone: '099 987654' },
    { address: 'Աբովյան 15, Երևան', phone: '077 112233' }
  ];

  const openContactModal = () => {
    const random = randomAddresses[Math.floor(Math.random() * randomAddresses.length)];
    setContactInfo(random);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const openRandomMap = () => {
    const locations = [
      'Cascade Complex, Yerevan',
      'Republic Square, Yerevan',
      'Yerevan State University',
      'Northern Avenue, Yerevan'
    ];
    const query = locations[Math.floor(Math.random() * locations.length)];
    window.open(`https://www.google.com/maps/search/${encodeURIComponent(query)}`, '_blank');
  };

  const showFAQ = () => {
    alert('💡 Հաճախակի հարցեր կավելացվեն շուտով։');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Մեր մասին</h3>
          <ul>
            <li>
              <Link to="/about">Մեր մասին</Link>
            </li>
            <li>Պատճառած ազդեցությունը</li>
            <li>Աշխատեք մեզ մոտ</li>
            <li>Մեր աջակիցները</li>
            <li>Վաճառք և հովանավորություն</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Ինչպե՞ս կարող ենք օգնել</h3>
          <ul>
            <li onClick={openContactModal}>Կապ մեզ հետ</li>
            <li onClick={openRandomMap}>Մեր գտնվելու վայրը</li>
            <li>Նորություններ և բլոգներ</li>
            <li>Տեղի վարձույթ</li>
            <li onClick={showFAQ}>Հաճախակի հարցեր</li>
          </ul>
        </div>
      {showModal && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Կապ մեզ հետ</h3>
            <p>🏠 Հասցե՝ {contactInfo.address}</p>
            <p>📞 Հեռախոս՝ {contactInfo.phone}</p>
            <button onClick={closeModal}>Փակել</button>
          </div>
        </div>
      )}
        <div className="footer-column">
          <p className="footer-copy">
            © STEM Learning Ltd. շահույթ չհետապնդող ընկերություն (05081097)<br />
            National STEM Learning Centre, University of York, York YO10 5DD<br />
            01904 328300
          </p>
          <div className="footer-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="footer-icon-link facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="footer-icon-link instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="footer-icon-link youtube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>


    </footer>
  );
}
