import React, { Component } from 'react';
import styled from 'styled-components';
import { categoryData } from '../slideData';
import CategoryItem from './CategoryItem';
import { mobile } from '../responsive'

const Container = styled.div`
`;

const CategoryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 50px;
    gap: 20px;
    ${mobile({
      alignItems: "center",
      justifyContent: "center"
    })}
`;

class Categories extends Component {
  render() {
    return (
      <Container>
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
