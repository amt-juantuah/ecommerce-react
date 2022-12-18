import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`;

const Er = styled.h1`
    font-size: 50px;
    color: red;
    margin-bottom: 50px;
`;

const Text = styled.h1`
    font-size: 20px;
    color: var(--color-orange);
    width: 400px;
    height: auto;
    text-align: center;
`;

const Button = styled.button`
    height: 80px;
    width: 200px;
    display: block;
    margin-top: 50px;
    border: 2px solid red;
    background-color: #fff;
    border-radius: 8px;
`;

const Para = styled.p`
    width: 300px;
    height: auto;
`;

class Blank extends Component {
  render() {
    return (
      <Container>
        <Er>404: oops!!</Er>
        <Text>MEGATRON Robot says: The REqUeSteD pAGE dOEs nOT ExIST</Text>
        <Para>Click on the "Ugly" Button below to return back to Civilization</Para>
        <Link to="/">
            <Button>
                Home
            </Button>
        </Link>
      </Container>
    )
  }
}

export default Blank;