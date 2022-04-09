import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    margin: 5px;
    color: black;
    margin-top: 20px;
    font-weight: 500;
`;

const Nav = styled.div`
    width: 100%;
    height: 80px;
    background-color: lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Navbar = () => {
  return (
    <>
        <Nav>
            <StyledLink to="/">HOME</StyledLink>
            <StyledLink to="/login">LOGIN</StyledLink>
            <StyledLink to="/register">REGISTER</StyledLink>
            <StyledLink to="/employees">EMPLOYEES</StyledLink>
        </Nav>
    </>
  )
}

export default Navbar