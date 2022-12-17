import React, { Component } from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive'; 


const Container = styled.div``;


const DivisionContainer = styled.div`
    // width: 100vw;
    height: auto;
    background-color: #e4c38d;
    border-top: 40px solid #007020;
    color: #007020;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 0;
    ${mobile({borderTop: "20px solid #007020", padding: "15px 0"})}
`;

const Title = styled.h1`
    text-align: center;
    margin: 20px;
    ${mobile({
      fontSize: "20px",
      textAlign: "center",
      margin: "10px",
  })}
`;

const Free = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    margin: 20px;
    ${mobile({
      textAlign: "center",
      marginBottom: "10px",      
    })}
`;


class Division extends Component {
  render() {
    return (
      <Container>
        <DivisionContainer>
          <Title>{this.props.title}</Title>
          <Free>
            <p style={{display: "flex", justifyContent: "center"}}>{this.props.para}</p>
            <h2>{this.props.subhead}</h2>
          </Free>
        </DivisionContainer>
      </Container>
    )
  }
}

export default Division;