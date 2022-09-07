import logo from './logo.svg';
import './App.css';
import Home from './components/home';

function App() {
  return (
    <>
      <Home />
      <button onClick={methodDoesNotExist}>Break the world</button>;
    </>
  );
}

export default App;
