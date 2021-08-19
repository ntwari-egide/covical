import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <div className="app-upper-part">
          <Navbar />
          <h1 className="updates-title text-center text-white font-bold">UPDATES</h1>
      </div>
    </div>
  );
}

export default App;
