import React, { useState } from "react";
import styled from "styled-components";

const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <Container>
        <LogoWrapper>
            <a href="/">
            <img src="/images/logo.svg" alt="tesla logo" />
            </a>
        </LogoWrapper>
        <Menu>
            <a href="#">Model S</a>
            <a href="#">Model 3</a>
            <a href="#">Model X</a>
            <a href="#">Model Y</a>
        </Menu>
        <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
            <Burger onClick={() => setBurgerStatus(true)}>
            <span></span>
            <span></span>
            <span></span>
            </Burger>
        </RightMenu>
        <BurgerNav show={burgerStatus}>
            <CloseWrapper onClick={() => setBurgerStatus(false)}>
            <CustomClose>X</CustomClose>
            </CloseWrapper>
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-In</a></li>
            <li><a href="#">Test Drive</a></li>
            <li><a href="#">Insurance</a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Charging</a></li>
        </BurgerNav>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`;

const LogoWrapper = styled.div`
    width: 100px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        text-decoration: none;
        color: #393c41;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
        text-decoration: none;
        color: #393c41;
    }
`;

const Burger = styled.div`
    cursor: pointer;
    span {
        height: 3px;
        width: 25px;
        background-color: #333;
        margin-bottom: 4px;
        display: block;
    }
`;

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        a {
        font-weight: 600;
        text-decoration: none;
        color: #393c41;
        }
    }
`;

const CustomClose = styled.div`
    cursor: pointer;
`;

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

// Add your own styles and adjust the colors as needed.
