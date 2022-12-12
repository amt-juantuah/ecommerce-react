import React, { Component } from 'react'
import styled from 'styled-components';
import { categoryData } from '../slideData';
import Product from './Product';

const Container = styled.div``;


class ProductsAll extends Component {
  render() {
    return (
      <Container>
        { categoryData.map(item => 
            (item.products.map(product => 
                <Product det={product} key={product.id}/>
                )
            )
            )
        }
      </Container>
    )
  }
}

export default ProductsAll;