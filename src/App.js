import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import PotencyCalculator from './components/PotencyCalculator/PotencyCalculator';

function App() {
  return (
    <div className="App">
      <header className="my-4">
        <h1>Half Baked Kitchen</h1>
      </header>
      <PotencyCalculator></PotencyCalculator>
    </div>
  );
}

export default App;
