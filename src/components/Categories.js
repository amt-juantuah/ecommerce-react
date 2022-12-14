import { LocalShippingRounded, StoreTwoTone } from '@mui/icons-material';
import React, { Component } from 'react';
import styled from 'styled-components';
import { categoryData } from '../slideData';
import CategoryItem from './CategoryItem';

const Container = styled.div`
`;

const Free = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin: 20px;
`;

const Division = styled.div`
    width: 100vw;
    height: auto;
    background-color: #e4c38d;
    border-top: 40px solid #007020;
    color: #007020;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 0;
`;

const Title = styled.h1`
    text-align: center;
    margin: 20px;
`;

// const Free = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
//     justify-content: center;
//     align-items: center;
//     margin: 20px;
// `;

const CategoryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 50px;
    gap: 20px;
`;

class Categories extends Component {
  render() {
    return (
      <Container>
        <Division>
          <Title>Stock your shop from our Categories</Title>
          <Free>
            <LocalShippingRounded />
            <StoreTwoTone />
            <p>DELIVERY IS FREE... yeah we love you too!</p>
          </Free>
        </Division>
        <CategoryContainer>
          { categoryData.map(item => (
              <CategoryItem det={item} key={item.id}/>
          ))}
        </CategoryContainer>
      </Container>
    )
  }
}

export default Categories;
