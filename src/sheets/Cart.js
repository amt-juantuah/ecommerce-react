import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Add, Remove, ShoppingCartOutlined } from '@mui/icons-material';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px 5vw;
    height: auto;
    width: 100vw;
    ${mobile({
        padding: "20px 5px",
    })}
`;

const Title = styled.h2`
    font-weight: 300;
    text-align: center;
    display: flex;
    gap: 10px;
    margin: auto;
    width: fit-content;
`;

const FinalButton = styled.button`
    display: block;
    color: var(--color-brown);
    text-transform: uppercase;
    width: 150px;
    transition: all 300ms ease;
    height: 40px;
    background-color: var(--color-orange);
    border-radius: 5px;
    border: none;
    &:hover {
        background-color: red;
        color: #fff;
        opacity: 0.7;
        border: 2px solid var(--color-orange);
    };
    ${mobile({
        width: "100%",  
        backgroundColor: "red",
        color: "#fff",      
    })}
`;

const FirstSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 50px 0;
    & ${FinalButton} {
        ${mobile({display: "none"})}
    }
`;

const SecondSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
    padding: 20px;
    border: 3px double lightgray;
    background: white;
    border-radius: 16px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    ${mobile({
        border: "none",
        flexFlow: "column-reverse",
    })}
`;

const Info = styled.div`
    flex: 2.8;
    padding-right: 20px;
`;

const InitialButton = styled.button`
    display: block;
    width: 150px;
    height: 40px;
    color: var(--color-brown);
    background-color: #fff;
    border: 2px solid var(--color-orange);
    border-radius: 5px;
    transition: all 300ms ease;
    &:hover {
        background-color: var(--color-orange);
    };
    ${mobile({
        flex:"1",
        marginLeft: "17px",
    })}
`;

const Word = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    ${mobile({
        flex:"1.5",
        justifyContent: "end",
    })}
`;

const WordText = styled.span`
    cursor: pointer;
    margin: 0 20px;
    text-decoration: underline;
    color: var(--color-blue);
    &:hover {
        color: var(--color-orange);
    };
    ${mobile({
        fontSize: "12px",
        marginBottom: "5px",
    })}
`;

const Image = styled.div`
    background-image: url(${props => props.img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 150px;
    height: 150px;
    transition: all 300ms ease;
    // &:hover {
    //     transform: scale(1.1);
    // }
    ${mobile({maxWidth: "100px", maxHeight: "100px"})}
`;

const Product = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
    transition: all 300ms ease;
    &:hover {
        border-bottom: 1px solid var(--color-orange);
        & ${Image} {
            transform: scale(1.1);
        }
    };
    ${mobile({flexWrap:"nowrap"})}
`;

const ProductDetails = styled.div`
    display: flex;
    flex: 2;
    flex-flow: row;
    align-items: center;
`;

const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
`;

const ProductQuantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 25px;
`;

const Quantity = styled.div`
    font-size: 15px;
    max-width: 41px;
    margin: 5px;
    padding: 2px;
    border-radius: 3px;
    border: 1px solid var(--color-orange);
    text-align: center;
`;
const Price = styled.h4`
    font-weight: 200;
    font-size: 20px;
    font-family: Georgia;
    ${mobile({fontSize:"15px"})}
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    ${mobile({padding: "5px"})}

`;
const ProductName = styled.h5`
    letter-spacing: 0.5px;
    margin: 10px 0;
    font-weight: 400;
`;

const ProductDescription = styled.p`
    font-size: 13px;
    margin: 3px 0;
    font-weight: 100;
`;

const Summary = styled.div`
    flex: 1.2;
    align-self: start;
    padding: 20px;
    border: 2px solid #eee;
    border-radius: 10px;
    position: sticky;
    top: 60px;
    ${mobile({
        width: "100%",
        backgroundColor: "#eaeaea",
    })}
`;

const SummaryTitle = styled.h5`
    margin-bottom: 20px;
`;

const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 15px 15px;
`;

const ItemName = styled.p`
    font-size: 13px;
`;

const ItemPrice = styled.p`
    font-size: 13px;
    font-family: Georgia;
`;

const SummaryName = styled.h3`
`;

const SummaryTotal = styled.h3`
    font-family: Georgia;
`;


const Cart = () => {

    const cart = useSelector(state => state.cart);
    return (
      <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <Title>
                <ShoppingCartOutlined />
                Items in your Cart 
            </Title>
            <FirstSection>
                <Link to="/products"><InitialButton>Back to the Store</InitialButton></Link>
                <Word>
                    <WordText>Cart Item Quantity ({cart.cartQuantity})</WordText>
                    <WordText>Items on Wishlist (0)</WordText>
                </Word>
                <Link to="/"><FinalButton>Checkout Now</FinalButton></Link>
            </FirstSection>
            <SecondSection>
                <Info>
                    {
                        cart.products.map(item =>
                        (<Product>
                            <ProductDetails>
                                <Image img={item.img} />
                                <Details>
                                    <ProductName><b>Name: </b>{item.title}</ProductName>
                                    <ProductDescription><b>Price: </b>GHC {item.unitprice}</ProductDescription>
                                    <ProductDescription><b>SKU: </b>{item.sku}</ProductDescription>
                                    <ProductDescription><b>Total Pieces: </b>{item.skuquantity}</ProductDescription>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductQuantity>
                                    <Add />
                                    <Quantity>{item.quantity}</Quantity>
                                    <Remove />
                                </ProductQuantity>
                                <Price>GHS {item.unitprice * item.quantity}</Price>
                            </PriceDetails>
                        </Product>)
                        )
                    }
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>                    
                    <SummaryItem>
                        <ItemName>Subtotal</ItemName>
                        <ItemPrice>GHS {cart.total}</ItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <ItemName>Delivery</ItemName>
                        <ItemPrice>GHS 0</ItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <ItemName>Discount</ItemName>
                        <ItemPrice>GHS 0</ItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryName>TOTAL</SummaryName>
                        <SummaryTotal>GHS {cart.total}</SummaryTotal>
                    </SummaryItem>
                    <Link to="/"><FinalButton>CHECKOUT</FinalButton></Link>
                </Summary>
            </SecondSection>
        </Wrapper>
        <Footer />
      </Container>
    )
}

export default Cart;