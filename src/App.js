import './App.css';
import Navbar from './components/Navbar';
import { AppProvider } from './context/AppProvider';

function App() {
  return (
    <>
      
        <AppProvider >
          <header>
            <Navbar/>
          </header>

          <main>
            <h1>Stays in Finland</h1>
          </main>
        </AppProvider>
        
      

      
      
    </>
  );
}

export default App;
