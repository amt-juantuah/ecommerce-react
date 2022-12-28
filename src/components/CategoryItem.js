import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive'; 

const Container = styled.div`
    // flex: 1;
    width: 300px;
    height: 350px;
    position: relative;
    border: 1px solid #ced4de;
    border-radius: 16px;
    background-color: #fff;
    ${mobile({
      width: "250px",
      height: "300px",
      borderRadius: "8px"
    })}
`;

const Image = styled.div`
    background-image: url(${props => props.img});
    width: 250px;
    height: 200px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    // position: relative;
    z-index: 1;
    margin-right: auto;
    margin-left: auto;
    ${mobile({
      width: "200px",
      height: "150px",
    })}
`;

const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: end;
    padding: 20px;
    ${mobile({
      padding: "10px",
    })}
    
`;

const InfoCard = styled.div`
    width: 100%;
    height: 150px;
    background-color: #e4c38dad;
    border-radius: 5px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    color: #007020;
    &: hover button {
        color: #fff;
        background-color: #f1b604;
    };
    ${mobile({
      height: "130px",
      padding: "10px",
    })}
`;

const Title = styled.h2`
    text-align: center;
    ${mobile({
      fontSize: "17px",
    })}
`;

const Description = styled.p`
    text-align: center;
    font-size: 13px;
    ${mobile({
      fontSize: "12px",
    })}
`;

const Button = styled.button`
    font-size: 12px;
    background-color: #007020;
    color: #d6dff0;
    height: 40px;
    width: 120px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: all 500ms;    
    &:hover {
      opacity: 0.7;
      color: #fff;
      border: 1px solid #06108d;
    };
    ${mobile({
      width: "100%",
    })}
`;

const CategoryItem = (det) => {
    return (
      <Container>
        <Image img={det.det.img}/>
        <Info>
            <InfoCard>
                <Title>{det.det.cat.replace(/_/g, " ")}</Title>
                <Description>{det.det.description}</Description>
                <Link to={`/products/${det.det.cat}`}><Button>Enter for Products</Button></Link>
            </InfoCard>
        </Info>
      </Container>
      )
}
export default CategoryItem;

