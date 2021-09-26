import Persons from './components/persons/Persons';
import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App data-container">
      <div className='container'>
        {/* this is header component  */}
        <Header/>
        {/* this is persons component  */}
        <Persons/>
      </div>
    </div>
  );
}

export default App;
