import './App.css';
import Navbar from './components/Navbar';
import { AppProvider } from './context/AppProvider';
 
import CardFilter from './components/CardFilter';

function App() {

  
  return (
    <>
      <AppProvider >
        <header>
          <Navbar/>
        </header>

        <main>

          <div className='row'>
            <h1>Stays in Finland</h1>
            <p>12+ stays</p>
          </div>

          <CardFilter />
          
        </main>
      </AppProvider>

      <footer>
        <p>created by JosephPL - devChallenges.io</p>
      </footer>
    </>
  );
}

export default App;
