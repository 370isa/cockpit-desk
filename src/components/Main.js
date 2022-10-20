/* IMGs */
import userImg from '../images/atendentImg.svg';
import home from '../images/all-icon.svg';
import messages from '../images/balon-icon.svg';
import whatsapp from '../images/whatsapp2-icon.svg';
import email from '../images/message-icon.svg';
import logout from '../images/arrow_white-icon.svg';

/* Imports */
import React, { Component } from "react";
import '../css/Main.css';

class Nav extends Component {
    render() {
        return (
            <main className="main">
                <nav className="main__nav">
                    <div className="main__nav--item">
                        <img className="main__nav--img" src={ userImg } alt="Foto do Usuário" />
                    </div>

                    <hr className="main__nav--divisor" />

                    <div className="main__nav--item selected">
                        <a className="main__nav--link" href="#2">
                            <img className="main__nav--img" src={ home } alt="Página Inicial" />
                        </a>
                    </div>

                    <div className="main__nav--item">
                        <a className="main__nav--link" href="#3">
                            <img className="main__nav--img" src={ messages } alt="Mensagens do Site" />
                        </a>
                    </div>

                    <div className="main__nav--item">
                        <a className="main__nav--link" href="#4">
                            <img className="main__nav--img" src={ whatsapp } alt="Mensagens do Whats" />
                        </a>
                    </div>

                    <div className="main__nav--item">
                        <a className="main__nav--link" href="#5">
                            <img className="main__nav--img" src={ email } alt="Mensagens do Email" />
                        </a>
                    </div>
                </nav>

                <nav className="main__nav">
                    <div className="main__nav--item-logout">
                        <a className="main__nav--link" href="/">
                            <img className="main__nav--img-logout" src={ logout } alt="Logout" />
                        </a>
                    </div>
                </nav>
            </main>
        )
    }
}

export default Nav;
