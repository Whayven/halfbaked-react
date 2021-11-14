import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard/ProductCard'

import "./Merchandise.css";

function Merchandise() {
    const [products, setProducts] = useState([{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}]);
    return (
        <div>
            <h1>Merchandise</h1>
            <div className="grid-container">
                { products.map((product, index) => {
                    return (
                        <div key={index}>
                            <ProductCard></ProductCard>
                        </div>
                        );
                }) }
            </div>
        </div>
    )
}

export default Merchandise
