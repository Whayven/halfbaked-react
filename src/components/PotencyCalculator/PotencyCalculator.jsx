import React from 'react'
import '../../App.css'
import { Container, Row, Col } from 'react-bootstrap';

const PotencyCalculator = () => {
    return (
        <div>
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col>
                        <Row className="my-2">
                            <Col>
                                <label>Amount of Cannabis: </label>
                            </Col>
                            <Col>
                                <input type="decimal" />
                            </Col>
                        </Row>
                        <Row className="my-2">
                            <Col>
                                <label>THC Percentage: </label>
                            </Col>
                            <Col className="col">
                                <input type="decimal" />
                            </Col>
                        </Row>
                        <Row className="my-2">
                            <Col className="mx-5">
                                <label>Type of oil: </label>
                            </Col>
                            <Col>
                                <select>
                                    <option value="butter">Butter</option>
                                    <option value="ghee">Ghee</option>
                                    <option value="coconut-oil">Coconut Oil</option>
                                    <option value="mct-oil">MCT Oil</option>
                                    <option value="glycerin">Vegetable Glycerin</option>
                                    <option value="ethanol">Ethanol</option>
                                </select>
                            </Col>
                            </Row>
                        <Row className="my-4">
                            <Col>
                                <button>Calculate Potency</button>
                            </Col>
                        </Row>
                    </Col>
                    </Row>
            </Container>
        </div>
    )
}

export default PotencyCalculator