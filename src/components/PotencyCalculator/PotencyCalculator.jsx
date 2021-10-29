import React , { useState } from 'react';
import { useDispatch } from 'react-redux';
import "../../App.css";
import "./PotencyCalculator.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const PotencyCalculator = () => {

  const dispatch = useDispatch();
  const [oilType, setOilType] = useState(""); 
  const [extractionRate, setExtractionRate] = useState("");
  const [amount, setAmount] = useState("");
  const [servings, setServings] = useState("");
  const [percentage, setPercentage] = useState("");
  const [servingTHC, setServingTHC] = useState("");
  const [totalTHC, setTotalTHC] = useState("");

  const calculatePotency = () => {
    switch(oilType){
      case oilType === "Butter":
        setExtractionRate(0.67);
        break;
      case oilType === "MCT-Oil" || oilType === "Coconut-Oil":
        setExtractionRate(0.89);
        break;
      case oilType === "Ghee":
        setExtractionRate(0.85);
        break;
      case oilType === "Glycerin":
        setExtractionRate(0.90);
        break;
      case oilType === "Ethanol":
        setExtractionRate(1.00);
        break;
      default:
        setExtractionRate(0);
        break;
    }

    setTotalTHC((amount * percentage * extractionRate * 0.88 * 1000));
    setServingTHC((totalTHC / servings));

    document.getElementById("totalTHC").innerHTML = totalTHC + " mg";
    document.getElementById("servingTHC").innerHTML = servingTHC + " mg";

    console.log("Amount: " + amount);
    console.log("Percentage: " + percentage);
    console.log("Servings: " + servings);
    console.log("Oil Type: " + oilType);
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
                setAmount(e.target.value);}}/>
              </Col>
            </Row>
            <Row className="my-2">
              <Col className="end-align">
                <label>THC Percentage: </label>
              </Col>
              <Col className="start-align">
                <input type="decimal" size="10" className="input" onChange={(e) => {
                setPercentage((e.target.value/100));}}/>
              </Col>
            </Row>
            <Row className="my-2">
              <Col className="end-align">
                <label>Number of Servings: </label>
              </Col>
              <Col className="start-align">
                <input type="decimal" size="10" className="input" onChange={(e) => {
                setServings(e.target.value);}}/>
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
                <Button variant="success" className="button-offset" onClick={calculatePotency}>
                  Calculate Potency
                </Button>
              </Col>
            </Row>
            <Row className="my-2">
              <Col className="end-align">
                <label>THC per serving: </label>
              </Col>
              <Col className="center-align">
                <label id="servingTHC">0 mg</label>
              </Col>
            </Row>
            <Row className="my-2">
              <Col className="end-align">
                <label>Total THC: </label>
              </Col>
              <Col className="center-align">
                <label id="totalTHC">0 mg</label>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PotencyCalculator;
