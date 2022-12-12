import { LocalShippingRounded, StoreTwoTone } from '@mui/icons-material';
import React, { Component } from 'react';
import styled from 'styled-components';
import { categoryData } from '../slideData';
import CategoryItem from './CategoryItem';

const Container = styled.div`
`;

const Division = styled.div`
    width: auto;
    height: 200px;
    background-color: #e4c38d;
    border-top: 40px solid #007020;
    color: #007020;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`;

const Title = styled.h1``;

const Free = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

const CategoryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 50px;
    gap: 20px;
    background-color: #fff;
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
            <p>FOR FREE</p>
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
