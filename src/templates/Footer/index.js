import React from 'react';

import './index.css';
import Logo from '../../assets/images/reactflix-logo.png';

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <a href="/" alt="ReactFlix">
                    <img className="logo" src={Logo} alt="ReactFlix" />
                </a>

                <div className="direitos">
                    <p>Todos os direitos - 2020 - <a href="/">RafaelSO</a></p>
                </div>
            </div>
        </footer>
    )
}