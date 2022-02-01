import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from '../img/logo.png'

const Nav = styled.div`
  width: 230px;
  height: auto;
  background-color: #347ab4;
  text-color: #fff;
`;

const Logo = styled.div`
  color: #fff;
  display: flex;
  justify-content:center;

  img {
    width: 100px;
    height: 50px;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-transform: uppercase;
  margin-top: 20px;

  a {
    color: #fff;
    text-decoration: none;
    margin: 0;
  }
`;

function Navbar() {
  return (
    <Nav>
      <Logo>
        <img src={logo} alt="" />
      </Logo>
      <Menu>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="about">
          <p>About</p>
        </Link>
        <Link to="contact">
          <p>Contact</p>
        </Link>
      </Menu>
    </Nav>
  );
}

export default Navbar;
