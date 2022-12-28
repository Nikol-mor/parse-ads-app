import './App.css';
import MainPage from './pages/MainPage';
import { Header } from './components/Header';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <main className='main-container'>
        <MainPage />
      </main>
    </div>
  );
}

export default App;
