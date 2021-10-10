import './App.scss';
import { UserCard } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          TIme Tracking Dashboard
        </p>
      </header>
      <section className='user-card'>
        <UserCard />
      </section>
    </div>
  );
}

export default App;
