import React, { Component } from "react";
import '../css/MessageList.css';

class MessageList extends Component {
    render() {
        const openChat = () => {
            var chatContent = document.querySelector(".dashboard-chat");
            chatContent.className = 'dashboard-chat show';
        };

        return (
            <div className="dashboard-scroll__list">
                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Whatsapp</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification high">alto</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Email</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification medium">médio</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Site</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification low">baixo</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Email</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification high">alto</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Site</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification medium">médio</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Whatsapp</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification low">baixo</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Site</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification high">alto</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Whatsapp</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification medium">médio</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Email</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification low">baixo</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Whatsapp</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification high">alto</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Email</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification medium">médio</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Site</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification low">baixo</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Email</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification high">alto</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Site</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification medium">médio</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Whatsapp</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification low">baixo</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Site</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification high">alto</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Site</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification high">alto</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Whatsapp</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification medium">médio</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Email</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification low">baixo</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Email</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification low">baixo</span><br />
                    </a>
                </div>
            </div>
        )
    }
}

export default MessageList;
