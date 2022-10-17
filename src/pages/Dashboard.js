import logo from '../images/logo2.svg';
import Main from '../components/Main';
import MessageList from '../components/MessageList';
import '../css/Dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard">
            <Main />

            <body className="dashboard-body">
                <div className="dashboard-container">
                    <img className="dashboard-logo" src={logo} alt="Logo" />

                    <p className="dashboard-salute">
                        Olá @nomeAtendente!
                        <div className="dashboard-text">
                            Sua fila de atendimento já está
                            <br />
                            à todo vapor:
                        </div>
                    </p>

                    <div className="dashboard-scroll">
                        <MessageList />
                    </div>
                </div>

                <div className="dashboard-container">
                </div>
            </body>
        </div>
    );
}

export default Dashboard;
