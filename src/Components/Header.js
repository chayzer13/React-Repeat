import logo from "../img/logo.svg";

export function Header() {
    return (
      <header className="topBar">
        <div className="brandContainer">
          <img src={logo} alt="Velozar Logo" className="brand" />
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="#about">О нас</a></li>
            <li><a href="#service">Услуги</a></li>
            <li><a href="#rent">Аренда</a></li>
          </ul>
        </nav>
        <button className="actionButton">Связаться</button>
      </header>
    );
}
