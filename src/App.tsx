import Sidebar from './components/Sidebar';
import Pitch from './components/Pitch';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <header className="app-header">
          <h1>SSD FC TAKIM KADROSU</h1>
          <div className="formation-badge">1-2-2-2</div>
        </header>
        <Pitch />
      </main>
    </div>
  );
}

export default App;
