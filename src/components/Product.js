import { FavoriteBorderOutlined, SearchOutlined, AddShoppingCartOutlined } from '@mui/icons-material';
import React, { Component } from 'react'
import styled from 'styled-components';
import { mobile } from "../responsive";

const Info = styled.div`
    background-color: #d6dff0a8;
    width: 95%;
    height: 95%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    z-index: 2;
    opacity: 0;
    transition: all 300ms ease;
    border-bottom: 1px solid #f1b604;
    border-radius: 8px 8px 0 0;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    width: 200px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    &:hover ${Info} {
      opacity: 1;
    };
    ${mobile({
      width: "150px",
      height: "200px",
    })}
`;

const PiictureBack = styled.div`
    background-color: #fff;
    width: 150px;
    height: 150px;
    position: absolute;
    z-index: 0;
    ${mobile({
      width: "100px",
      height: "100px",
    })}
`;

const Image = styled.div`
    background-image: url(${props => props.img});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 200px;
    height: 250px;
    z-index: 1;
    ${mobile({
      width: "150px",
      height: "200px",
    })}
`;

const Icon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #f1b604;
    color: #f1b604;
    transition: all 300ms ease;
    &:hover {
      transform: scale(1.2);
      margin-bottom: 10px;
    }
`;

const Words = styled.div`
    align-self: end;
    justify-self: start;
    position: absolute;
    width: 100%;
    height: 45px;
    padding: 10px;
`;

const Para = styled.p``;
const Price = styled.h5`
    font-family: 'Georgia';
`;

class Product extends Component {
  render() {
    return (
      <Container>
        <PiictureBack />
        <Image img={this.props.det.img} />
        <Info>
            <Icon>
                <AddShoppingCartOutlined />
            </Icon>
            <Icon>
                <SearchOutlined />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
            <Words>
              <Para>{this.props.det.title}</Para>
              <Price>{ this.props.det.price } per Carton</Price>
            </Words>
        </Info>
      </Container>
    )
  }
}

export default Product;