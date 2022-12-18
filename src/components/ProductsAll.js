import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styled from 'styled-components';
import { categoryData } from '../slideData';
import Product from './Product';

const Container = styled.div``;

const ProductsAllContainer = styled.div`
    display: flex;
    // width: 100vw;
    height: auto;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    gap: 20px;
    padding: 50px;
    overflow: hidden;
`;

const Button = styled.button`
  display: block;
  height: 40px;
  width: 120px;
  margin: auto;
  margin-bottom: 50px;
  background-color: #ecd6b1;
  border-radius: 5px;
  border: 1px solid var(--color-orange);
  outline: none;
  &:hover {
    opacity: 0.7;
  }
`;

class ProductsAll extends Component {
  render() {
    return (
      <Container>
        <ProductsAllContainer>
          { categoryData.map(item => 
              (item.products.map(product => 
                  <Product det={product} key={product.id}/>
                  )
              )
              )
          }
        </ProductsAllContainer>
        <Link to="/all"><Button>Load More</Button></Link>
      </Container>
    )
  }
}

export default ProductsAll;