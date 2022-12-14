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

const Free = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    margin: 20px;
`;


class ProductsAll extends Component {
  render() {
    return (
      <Container>
        <Division>
          <Title>Take a Little Sneaky Peak at our Catalogue</Title>
          <Free>
            <p>Stock your Retail Shop, Mart, and Mall with the Best and Quality Products</p>
            <h2>...At The Cheapest Prices...</h2>
          </Free>
        </Division>
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