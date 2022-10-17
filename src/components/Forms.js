import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import Dashboard from '../pages/Dashboard';
import '../css/Forms.css';

class FormLogin extends Component {
    loginSubmit = (e) => {
        e.preventDefault();

        if (!e.target.username.value) {
            alert("Email is required");
        } else if (!e.target.username.value) {
            alert("Valid email is required");
        } else if (!e.target.userpassword.value) {
            alert("Password is required");
        } else if (
            e.target.username.value === "user@cockpit.com" &&
            e.target.userpassword.value === "123456"
        ) {
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(
                <React.StrictMode>
                    <Dashboard />
                </React.StrictMode>
            );
        } else {
            alert("Wrong email or password combination");
        }
    };

    render() {
        return (
            <form className="form form--login" onSubmit={this.loginSubmit}>
                <div className="form__container form__container--login">
                    <label className="form__label form__label--login">Usuário</label>
                    <br />
                    <input className="form__input form__input--login" type="text" name="username" placeholder="Seu usuário" required />
                </div>

                <div className="form__container form__container--login">
                    <label className="form__label form__label--login">Senha</label>

                    <input className="form__input form__input--login" type="password" name="userpassword" placeholder="Sua senha" required />
                    <a className="form__link form__link--login" href="#Teste">Esqueceu sua senha?</a>
                </div>

                <div className="form__container form__container--login">
                    <input className="form__button form__button--login" type="submit" />
                </div>
            </form>
        )
    }
}

export default FormLogin;
