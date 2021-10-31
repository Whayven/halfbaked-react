import React, { useState } from 'react';
import "../../../App.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import './ProductCard.css';

function ProductCard() {
    let productImg = "product img here";
    let productName = "product name here";
    let productRating = "rating graphic here";
    let productPrice = "product price here";

    const addToCart = (productId) => {
    }

    return (
        <div>
            <Container className="mx-auto">
                <Col className="ProductCardContainer mx-auto">
                    <Container>
                        <div className='border'>
                            <Row className="ProductCardRow mx-auto my-2">
                                <Col className='my-2'>{productImg}</Col>
                            </Row>
                            <Row className="ProductCardRow mx-auto my-2">
                                <Col className='my-2'>{productName}</Col>
                            </Row>
                            <Row className="ProductCardRow mx-auto my-2">
                                <Col className='my-2'>{productRating}</Col>
                            </Row>
                            <Row className="ProductCardRow mx-auto my-2">
                                <Col className='my-2'>{productPrice}</Col>
                            </Row>
                            <Row className="ProductCardRow mx-auto my-2">
                                <Col className='my-2'>
                                    <Button className='AddToCartButton my-2' variant="info" onClick={(e) => { addToCart(1); }}>Add to Cart</Button>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </Col>
            </Container>
        </div>
    )
}

export default ProductCard
