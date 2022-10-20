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
                        <b>Cliente:</b> <span className="item__customer">customer1@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification high">alto</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Email</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer2@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification medium">médio</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Site</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer3@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification low">baixo</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Email</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer4@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification high">alto</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Site</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer5@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification medium">médio</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Whatsapp</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer6@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification low">baixo</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Site</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer7@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification high">alto</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Whatsapp</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer8@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification medium">médio</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Email</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer9@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification low">baixo</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Whatsapp</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer10@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification high">alto</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Email</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer11@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification medium">médio</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Site</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer12@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification low">baixo</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Email</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer13@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification high">alto</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Site</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer14@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification medium">médio</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Whatsapp</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer15@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification low">baixo</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Site</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer16@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification high">alto</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Site</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer17@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification high">alto</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Whatsapp</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer18@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification medium">médio</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Email</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer19@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification low">baixo</span><br />
                    </a>
                </div>

                <div className="dashboard-scroll__list--item">
                    <a href="#id" className="item" onClick={ openChat }>
                        <b>Origem:</b> <span className="item__origin">Email</span><br />
                        <b>Cliente:</b> <span className="item__customer">customer20@customer.com.br</span><br />
                        <b>Classificação:</b> <span className="item__classification low">baixo</span><br />
                    </a>
                </div>
            </div>
        )
    }
}

export default MessageList;
