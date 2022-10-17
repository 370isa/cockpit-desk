import logo from '../images/logo.svg';
import '../css/App.css';
import FormLogin from '../components/Forms';

function App() {
    return (
        <div className="app">
            <body className="app-body">
                <img src={logo} className="app-logo" alt="logo" />

                <div className="app-formlogin">
                    <FormLogin />
                </div>
            </body>
        </div>
    );
}

export default App;
