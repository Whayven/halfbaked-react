import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/reducers/UserReducer";

import { Navbar, Container, Nav } from "react-bootstrap";

function Navigation() {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUser());
    };
    
    const loggedIn = useSelector(state => state.user.loggedIn);

    if (loggedIn) {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">HBK</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Calculator</Nav.Link>
                        <Nav.Link href="/shop">Merchandise</Nav.Link>
                        <Nav.Link href="/cart">Cart</Nav.Link>
                        <Nav.Link href="/" onClick={logout}>Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }

    return (
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