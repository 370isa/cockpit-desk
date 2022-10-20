import React, { Component } from "react";
import close_icon from "../images/close-icon.svg";
import send_icon from "../images/send-icon.svg";
import '../css/Chat.css';

class Chat extends Component {
    render() {
        const closeChat = () => {
            document.querySelector(".dashboard-chat").className = "dashboard-chat";
        };

        return (
            <div className="dashboard-chat">
                <img className="close-icon" src={ close_icon } alt="Fecha Chat" onClick={ closeChat }/>

                <div className="chat-container">
                    <form className="form--chat">
                        <input className="form__input form__input--chat" type="text" name="chat-messages" placeholder="Envie sua mensagem aqui..." required />
                        <button className="form__button form__button--chat">
                            <img className="form__form__button--chat-img" src={ send_icon } alt="Enviar Mensagem" />
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Chat;
