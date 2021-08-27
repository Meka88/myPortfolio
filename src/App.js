import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  // HashRouter,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    < Router>
    <div className="App">
      <header>
        < Navbar />
      </header>
      <body>
        < Main />
        < Footer />
      </body>
    </div>
    </Router>
  );
}

export default App;
