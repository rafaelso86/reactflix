import React from 'react';

import './index.css';
import Logo from '../../assets/images/reactflix-logo.png';

import Button from '../../components/Buttons';

export default function Menu() {
    return (
        <header> 
            <nav className="menu">
                <a href="/" alt="ReactFlix">
                    <img className="logo" src={Logo} alt="ReactFlix"/>
                </a>

                <a href="/" alt="ReactFlix">
                    <Button className="btn-menu">Novo vídeo</Button>
                </a>
            </nav>
        </header>
    )
}