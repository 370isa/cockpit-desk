import logo from "../images/logo2.svg";
import close_icon from "../images/close-icon.svg";
import send_icon from "../images/send-icon.svg";
import Main from "../components/Main";
import MessageList from "../components/MessageList";
import SimpleChart from "../components/SimpleChart";
import "../css/Dashboard.css";

function Dashboard() {
    const closeChat = () => {
        document.querySelector(".dashboard-chat").className = "dashboard-chat";
    };

    return (
        <div className="dashboard">
            <Main />

            <body className="dashboard-body">
                <div className="dashboard-container">
                    <img className="dashboard-logo" src={logo} alt="Logo" />

                    <p className="dashboard-salute">
                        Olá @nomeAtendente!
                            <div className="dashboard-text">
                            Sua fila de atendimento já está <br />
                            à todo vapor:
                        </div>
                    </p>

                    <div className="dashboard-scroll">
                        <MessageList />
                    </div>
                </div>

                <div className="dashboard-container">
                    <SimpleChart />

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
                </div>
            </body>
        </div>
    );
}

export default Dashboard;
