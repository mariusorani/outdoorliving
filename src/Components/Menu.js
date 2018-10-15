import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => (
    <div className="menu">
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to ='/lamellendach'>Lamellendach</Link></li>
                <li><Link to ='/optionen'>Optionen</Link></li>
                <li><Link to ='/aufbau'>Aufbau</Link></li>
                <li><Link to ='/technik'>Technik</Link></li>
                <li><Link to ='/referenzen'>Referenzen</Link></li>
                <li><Link to ='/team'>Team</Link></li>
                <li><Link to ='/kontakt'>Kontakt</Link></li>
            </ul>
        </nav>
    </div>
)

export default Menu;