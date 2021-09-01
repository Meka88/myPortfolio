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
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function App() {
  return (
    < Router>
      <div className="App">
        <header>
          < Navbar />
        </header>
      <body>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
      </Switch>
      < Footer />
      </body>
      </div>
    </Router>
  );
}

export default App;
