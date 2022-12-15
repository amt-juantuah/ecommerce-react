import React, { Component } from 'react'
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
    background-color: #d4dbdb;
    overflow: hidden;
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
      </Container>
    )
  }
}

export default ProductsAll;