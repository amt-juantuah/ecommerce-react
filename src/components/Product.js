import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React, { Component } from 'react'
import styled from 'styled-components';

const Container = styled.div``;


class Product extends Component {
  render() {
    return (
      <Container>
        <Circle />
        <Image />
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <SearchOutlined />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
      </Container>
    )
  }
}

export default Product;