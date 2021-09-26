import Persons from './components/persons/Persons';
import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App data-container">
      <div className='container'>
        <Header/>
        <Persons/>
      </div>
    </div>
  );
}

export default App;
