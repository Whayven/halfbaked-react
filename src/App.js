import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import PotencyCalculator from './components/PotencyCalculator/PotencyCalculator';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Half Baked Kitchen!</h1>
      <PotencyCalculator></PotencyCalculator>
    </div>
  );
}

export default App;
