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

const Button = styled.button`
  display: block;
  height: 40px;
  width: 120px;
  margin: 50px auto;
  background-color: #ecd6b1;
  border-radius: 5px;
  border: 1px solid var(--color-orange);
  outline: none;
  &:hover {
    opacity: 0.7;
  }
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
        <Button>Load More</Button>
      </Container>
    )
  }
}

export default Categories;
