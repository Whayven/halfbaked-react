import React, { useState } from 'react';
import "../../App.css";
import "./PotencyCalculator.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const PotencyCalculator = () => {
  const [calculated, setCalculated] = useState(false);
  const [oilType, setOilType] = useState("");
  const [extractionRate, setExtractionRate] = useState(0.0);
  const [amount, setAmount] = useState(0);
  const [servings, setServings] = useState(0);
  const [percentage, setPercentage] = useState(0.0);
  const [servingTHC, setServingTHC] = useState(0.0);
  const [totalTHC, setTotalTHC] = useState(0.0);

  const calculateExtractionRate = (oil) => {
    let etr = 0;
    if (oil === "Butter") {
      etr = 0.67;
    }
    else if (oil === "MCT-Oil" || oil === "Coconut-Oil") {
      etr = 0.89;
    }
    else if (oil === "Ghee") {
      etr = 0.85;
    }
    else if (oil == "Glycerin") {
      etr = 0.90;
    }
    else if (oil === "Ethanol") {
      etr = 1.00;
    }
    return etr;
  }

  const calculatePotency = (e) => {
    e.preventDefault();
    const etr = calculateExtractionRate(oilType);
    setCalculatedPotency(etr);
    setCalculated(true);
  }

  const setCalculatedPotency = (etr) => {
    setExtractionRate(etr);
    const tthc = (amount * percentage * etr * 0.88) * 1000;
    const sthc = (tthc / servings);
    setTotalTHC(tthc);
    setServingTHC(sthc);

    console.log("Amount: " + amount);
    console.log("Percantage: " + percentage);
    console.log("Extraction Rate: " + extractionRate);
    console.log("Total: " + totalTHC);
    console.log("Serving: " + servingTHC);
  }


  return (
    <div>
      <Container fluid className="mx-auto">
        <Row className="justify-content-md-center">
          <Col>
            <Row className="my-2">
              <Col className="end-align">
                <label>Amount of Cannabis: </label>
              </Col>
              <Col className="start-align">
                <input type="decimal" size="10" className="input" onChange={(e) => {
                  setAmount(e.target.value);
                }} />
              </Col>
            </Row>
            <Row className="my-2">
              <Col className="end-align">
                <label>THC Percentage: </label>
              </Col>
              <Col className="start-align">
                <input type="decimal" size="10" className="input" onChange={(e) => {
                  setPercentage((e.target.value / 100));
                }} />
              </Col>
            </Row>
            <Row className="my-2">
              <Col className="end-align">
                <label>Number of Servings: </label>
              </Col>
              <Col className="start-align">
                <input type="decimal" size="10" className="input" onChange={(e) => {
                  setServings(e.target.value);
                }} />
              </Col>
            </Row>
            <Row className="my-2">
              <Col className="end-align">
                <label>Type of oil: </label>
              </Col>
              <Col className="start-align">
                <select className="select-offset" value={oilType} onChange={(e) => {
                  setOilType(e.target.value)
                }}>
                  <option value=""></option>
                  <option value="Butter">Butter</option>
                  <option value="Ghee">Ghee</option>
                  <option value="Coconut-Oil">Coconut Oil</option>
                  <option value="MCT-Oil">MCT Oil</option>
                  <option value="Glycerin">Vegetable Glycerin</option>
                  <option value="Ethanol">Ethanol</option>
                </select>
              </Col>
            </Row>
            <Row className="my-5">
              <Col>
                <Button variant="success" className="button-offset" onClick={(e) => {
                  calculatePotency(e);
                }}>
                  Calculate Potency
                </Button>
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
      {calculated &&
        <Container>
          <Row className="my-2">
            <Col className="end-align">
              <label>THC per serving: </label>
            </Col>
            <Col className="center-align">
              <label id="servingTHC">{servingTHC} mg</label>
            </Col>
          </Row>
          <Row className="my-2">
            <Col className="end-align">
              <label>Total THC: </label>
            </Col>
            <Col className="center-align">
              <label id="totalTHC">{totalTHC} mg</label>
            </Col>
          </Row>
        </Container>
      }
    </div>
  );
};

export default PotencyCalculator;
