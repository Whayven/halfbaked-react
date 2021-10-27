import React from 'react'
import '../../App.css'
import { Container, Row, Col } from 'react-bootstrap';

const PotencyCalculator = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <label>Amount of Cannabis: </label>
                            </Col>
                            <Col>
                                <input type="decimal" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label>THC Percentage: </label>
                            </Col>
                            <Col className="col">
                                <input type="decimal" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
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
                        <Row>
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