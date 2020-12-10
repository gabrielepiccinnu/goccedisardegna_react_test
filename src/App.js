import React, { useState, useEffect} from 'react';
import './App.scss';
import '@wordpress/components/build-style/style.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import logo from './logo.svg';
//import './App.css';

function App() {
  const [login, setLogin] = useState( '' );
  const siteURL = 'yoursite_here';

  useEffect(() => {
    const localLogin = localStorage.getItem('login');
    // If we have logged in, set it.
    if ( localLogin ) {
      setLogin( localLogin );
    }
  }, [login]);
 
  return (
    <div className="App container">
      <h1>Headless WordPress</h1>
      {
        login && <Dashboard url={siteURL} token={login} setLogin={setLogin} />
      }
      {
        ! login && <Login url={siteURL} setLogin={setLogin}/>
      }

    </div>
  );
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
