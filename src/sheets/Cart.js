import React, { Component } from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const FirstSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const SecondSection = styled.div``;

const InitialButton = styled.button`
    display: block;
    width: 150px;
    height: 40px;
    color: var(--color-brown);
    background-color: #fff;
    border: 2px solid var(--color-orange);
    border-radius: 5px;
    &:hover {
        background-color: var(--color-orange);
    }
`;

const FinalButton = styled.button`
    display: block;
    color: var(--color-brown);
    text-transform: uppercase;
    width: 150px;
    height: 40px;
    background-color: var(--color-orange);
    border: 2px solid var(--color-orange);
    border-radius: 5px;
    &:hover {
        background-color: red;
        color: #fff;
    }
`;

class Cart extends Component {
  render() {
    return (
      <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <Title>Items in Cart</Title>
            <FirstSection>
                <InitialButton>Back to the Store</InitialButton>
                <FinalButton>Checkout Now</FinalButton>
            </FirstSection>
            <SecondSection>
            </SecondSection>
        </Wrapper>
        <Footer />
      </Container>
    )
  }
}

export default Cart;