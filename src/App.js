import logo from './logo.svg';
import './App.css';
import FormLogin from './Forms';

function App() {
    return (
        <div className="App">
            <body className="App-body">
                <img src={logo} className="App-logo" alt="logo" />

                <div className="App-formlogin">
                    <FormLogin />
                </div>
            </body>
        </div>
    );
}

export default App;
