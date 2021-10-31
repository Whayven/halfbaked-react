import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard/ProductCard'

function Merchandise() {
    return (
        <div>
            Merchandise
            <Container>
                <Row className='my-5'>
                    <Col>
                        <ProductCard></ProductCard>
                    </Col>
                    <Col>
                        <ProductCard></ProductCard>
                    </Col>
                    <Col>
                        <ProductCard></ProductCard>
                    </Col>
                    <Col>
                        <ProductCard></ProductCard>
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col>
                        <ProductCard></ProductCard>
                    </Col>
                    <Col>
                        <ProductCard></ProductCard>
                    </Col>
                    <Col>
                        <ProductCard></ProductCard>
                    </Col>
                    <Col>
                        <ProductCard></ProductCard>
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col>
                        <ProductCard></ProductCard>
                    </Col>
                    <Col>
                        <ProductCard></ProductCard>
                    </Col>
                    <Col>
                        <ProductCard></ProductCard>
                    </Col>
                    <Col>
                        <ProductCard></ProductCard>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Merchandise
