import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React, { Component } from 'react'
import styled from 'styled-components';


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
    }
`;

const PiictureBack = styled.div`
    background-color: #fff;
    width: 150px;
    height: 150px;
    position: absolute;
    z-index: 0;
`;

const Image = styled.div`
    background-image: url(${props => props.img});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 200px;
    height: 250px;
    z-index: 1
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

class Product extends Component {
  render() {
    return (
      <Container>
        <PiictureBack />
        <Image img={this.props.det.img} />
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