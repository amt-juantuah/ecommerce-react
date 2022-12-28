import { FavoriteBorderOutlined, SearchOutlined, AddShoppingCartOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
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
    min-height: 45px;
    padding: 10px;
`;

const Para = styled.p`
    font-size: 13px;
`;
const Price = styled.p`
    font-family: 'Georgia';
    font-size: 14px;
    font-weight: 600;
`;

const Product = (det) => {
    return (
      <Container>
        <PiictureBack />
        <Image img={det.det.img} />
        <Info>            
            <Icon>
              <AddShoppingCartOutlined />
            </Icon>
            <Link to={`/prod/${det.det._id}`}>
              <Icon>
                  <SearchOutlined />
              </Icon>
            </Link>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
            <Words>
              <Para>{det.det.title}</Para>
              <Price>GHC{ det.det.unitprice } per {det.det.sku}</Price>
              <Para>{det.det.skuquantity} pieces in a {det.det.sku}</Para>
              <Para>{det.det.volumeperpiece}</Para>
            </Words>
        </Info>
      </Container>
    )
}

export default Product;