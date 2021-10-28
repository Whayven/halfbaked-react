import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Container, Nav} from "react-bootstrap";

function Navigation() {
    return (
        // <div>
        //     <Link to="/">Potency Calc</Link>
        //     <Link to="/cart">Cart</Link>
        //     <Link to="/shop">Merchandise</Link>
        //     <Link to="/signup">Sign Up</Link>
        // </div>

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">HBK</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Calculator</Nav.Link>
                    <Nav.Link href="/shop">Merchandise</Nav.Link>
                    <Nav.Link href="/cart">Cart</Nav.Link>
                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;