import './Footer.css';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Մեր մասին</h3>
          <ul>
            <li>Մեր մասին</li>
            <li>Պատճառած ազդեցությունը</li>
            <li>Աշխատեք մեզ մոտ</li>
            <li>Մեր աջակիցները</li>
            <li>Վաճառք և հովանավորություն</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Ինչպե՞ս կարող ենք օգնել</h3>
          <ul>
            <li>Կապ մեզ հետ</li>
            <li>Մեր գտնվելու վայրը</li>
            <li>Նորություններ և բլոգներ</li>
            <li>Տեղի վարձույթ</li>
            <li>STEM նշան</li>
          </ul>
        </div>

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
