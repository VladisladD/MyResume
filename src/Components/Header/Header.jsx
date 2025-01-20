import './Header.css';
import  { useState } from 'react';
const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };


    return (
        <header className="header">
            <div className="logo">Моё резюме</div>
            <nav className={`nav ${isNavOpen ? 'active' : ''}`}>
                <ul>
                    <li><a href="#Info">Информация</a></li>
                    <li><a href="#Experience">Опыт работы</a></li>
                    <li><a href="#Skills">Навыки</a></li>
                    <li><a href="#ForMe">О себе</a></li>
                    <li><a href="#Footer">Обратная связь</a></li>
                </ul>
            </nav>
            <div className="menu-icon" onClick={toggleNav}>
                <span></span>
                <span></span>
                <span></span>
                
            </div>
        </header>
    );
};

export default Header;