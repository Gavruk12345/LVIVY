import Slideshow from "./Slideshow";
import myPhoto from "./assets/IconLogo2.png";

export default function App() {
  return (
    <div className="app-container">
      <div className="top-square">
        <img src={myPhoto} alt="My Logo" className="logo-image" />
        <div className="photo-text">LVIVY</div>
      </div>

      <div className="search-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Почніть пошук..."
        />
      </div>

      <Slideshow />
      <footer className="footer">
        <nav className="footer-nav">
          <a href="#about">Про нас</a>
          <a href="#contacts">Контакти</a>
          <a href="#faq">FAQ</a>
          <a href="#reviews">Відгуки</a>
          <a href="#blog">Блог</a>
        </nav>
      </footer>
    </div>
  );
}
