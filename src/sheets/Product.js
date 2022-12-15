import React, { Component } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import { Add, Remove } from '@mui/icons-material';

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    width: 100vw;
    height: 90vh;
`;
const Image = styled.div`
    background-image: url(${props => props.img});
    height: 100%;
    background-position: center;
    background-size: cover;
    flex: 1;
`;
const Details = styled.div`
    flex: 1;
    height: 100%;
    padding: 8%;
`;
const Title = styled.h3`
    font-wreight: 200;
`;
const Description = styled.p`
    margin: 20px 0;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 35px;
    display: flex;
    align-items: end;
`;

const Source = styled.p`
    font-weight: 100;
    font-size: 11px;
    
`;

const Package = styled.sub`
    font-size: 22px;
`;

const BuyContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 60px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid var(--color-orange);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 4px;
`;

const Button = styled.button`
    display: block;
    width: 150px;
    height: 40px;
    border-radius: 5px;
    color: var(--color-brown);
    text-transform: uppercase;
    font-weight: 500;
    transition: all 500ms ease;
    border: 2px solid var(--color-orange);
    background-color: var(--color-orange);
    &:hover {
        background-color: #007020;
        color: var(--color-orange);   
    };
`;

class Product extends Component {
  render() {
    return (
      <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <Image img="https://melcom.com/media/catalog/product/cache/d0e1b0d5c74d14bfa9f7dd43ec52d082/4/8/48454a_1.jpg"></Image>
            <Details>
                <Title>Gino Tomato Paste</Title>
                <Description>16 pieces in a Carton.</Description>
                <Price>GHS 28 <Package>/ Carton</Package></Price>
                <Source>From Unilever, Ghana</Source>
                <BuyContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>                    
                </BuyContainer>
                <Button>Add to cart</Button>
            </Details>            
        </Wrapper>
        <Footer />
      </Container>
    )
  }
}


export default Product;