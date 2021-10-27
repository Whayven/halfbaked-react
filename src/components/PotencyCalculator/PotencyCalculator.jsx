import React from "react";
import "../../App.css";
import "./PotencyCalculator.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const PotencyCalculator = () => {
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
                <input type="decimal" size="10" className="input" />
              </Col>
            </Row>
            <Row className="my-2">
              <Col className="end-align">
                <label>THC Percentage: </label>
              </Col>
              <Col className="start-align">
                <input type="decimal" size="10" className="input" />
              </Col>
            </Row>
            <Row className="my-2">
              <Col className="end-align">
                <label>Number of Servings: </label>
              </Col>
              <Col className="start-align">
                <input type="decimal" size="10" className="input" />
              </Col>
            </Row>
            <Row className="my-2">
              <Col className="end-align">
                <label>Type of oil: </label>
              </Col>
              <Col className="start-align">
                <select className="select-offset">
                  <option value="butter">Butter</option>
                  <option value="ghee">Ghee</option>
                  <option value="coconut-oil">Coconut Oil</option>
                  <option value="mct-oil">MCT Oil</option>
                  <option value="glycerin">Vegetable Glycerin</option>
                  <option value="ethanol">Ethanol</option>
                </select>
              </Col>
            </Row>
            <Row className="my-5">
              <Col>
                <Button variant="success" className="button-offset">
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
