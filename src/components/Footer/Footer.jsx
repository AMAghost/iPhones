import { Link, NavLink } from 'react-router-dom';
import footer_logo from '../../images/image.png'
import './Footer.css';

export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer__inner">
                    <Link to="/" >
                        <img className="footer__logo" src={footer_logo} alt="" />
                    </Link>
                    <div className="">
                        <input className='search' type="search" placeholder="Поиск..." />
                    </div>
                    <nav className="footer__nav nav">
                        <NavLink to="/" className="nav__link">Главная</NavLink>
                        <NavLink to="/catalog" className="nav__link">Каталог</NavLink>
                        <NavLink to="/about" className="nav__link">О нас</NavLink>
                    </nav>
                </div>
            </div>
        </footer>
    );
}