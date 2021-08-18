import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header>
        < Navbar />
      </header>
      <body>
        < Main />
        < Footer />
      </body>
    </div>
  );
}

export default App;
