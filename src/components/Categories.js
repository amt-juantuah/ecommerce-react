import React, { Component } from 'react';
import styled from 'styled-components';
import { categoryData } from '../slideData';
import CategoryItem from './CategoryItem';

const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
    padding: 20px;
    overflow: auto;
    gap: 20px;
`;

class Categories extends Component {
  render() {
    return (
      <Container>
        { categoryData.map(item => (
            <CategoryItem det={item} key={item.id}/>
        ))}
      </Container>
    )
  }
}

export default Categories;
