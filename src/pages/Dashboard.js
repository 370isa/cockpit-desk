import logo from "../images/logo2.svg";
import close_icon from "../images/close-icon.svg";
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

                        <div className="chat-content">
                        </div>
                    </div>
                </div>
            </body>
        </div>
    );
}

export default Dashboard;
