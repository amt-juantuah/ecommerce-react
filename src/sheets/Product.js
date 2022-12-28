import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from "../responsive";
import { useLocation } from 'react-router-dom';
import { outsideRequest } from '../requestAxios';
import { useDispatch } from "react-redux";
import { addProduct } from '../redux/cartRedx';


const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    width: 100vw;
    height: 90vh;
    ${mobile({flexFlow: "column"})}
`;
const Image = styled.div`
    background-image: url(${props => props.img});
    height: 100%;
    background-position: center;
    background-size: cover;
    flex: 1;
    ${mobile({
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
    })}
`;

const Details = styled.div`
    flex: 1;
    height: 100%;
    padding: 8%;
    ${mobile({
        alignSelf: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column", 
    })}
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
    ${mobile({
        fontSize: "25px",
    })}
`;

const Source = styled.p`
    font-weight: 100;
    font-size: 11px;
    
`;

const Package = styled.sub`
    font-size: 22px;
    ${mobile({
        fontSize: "15px",
    })}
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
    height: 30px;
    font-size: 15px;
    border-radius: 3px;
    border: 1px solid var(--color-orange);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 4px;
    overflow: hidden;
    background-color: #fff;
`;

const Total = styled.span`
    font-size: 13px;
    border-radius: 3px;
    margin: 0 4px;
    margin-left: 15px;
    color: red;
`;

// const Quantity = styled.input`
//     font-size: 15px;
//     max-width: 41px;
//     margin: 5px;
//     padding: 2px;
//     border-radius: 3px;
//     border: 1px solid var(--color-orange);
//     text-align: center;
// `;

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
    ${mobile({
        marginRight: "auto",
        marginLeft: "auto",
    })}
`;

const Product = () => {
    const location = useLocation()
    const pId = location.pathname.split("/")[2];

    const [product, setProduct] = useState([]);
    const [quant, setQuant] = useState(1);
    const [totalAmount, setTotalAmount] = useState();
    const dispatch = useDispatch();
    

    useEffect(() => {
        const getProd = async () => {
            try { 
                const prod = await outsideRequest.get(`/product/${pId}`)
                setProduct(prod.data.data);
            } catch (error) {
                console.log(error);
            }
        }
        getProd();
    }, [pId])

    useEffect(() => {
        const total = product.unitprice * quant;
        setTotalAmount(total);
    }, [product, quant])
    
    const handleQuantity = (action) => {
        if (action === "increase") {
            setQuant(quant+1)
        } else if (action === "decrease" && quant > 1) {
            setQuant(quant-1)
        }
    }

    const handleAddtocart = () => {
        dispatch(addProduct({ ...product, quantity:quant, total:totalAmount }))
    }

    return (
      <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <Image img={product.img}></Image>
            <Details>
                <Title>{product.title}</Title>
                <Description>{product.skuquantity} pieces in a {product.sku}</Description>
                <Price>GHS {product.unitprice} <Package>/ {product.sku}</Package></Price>
                <Source>From {product.source}</Source>
                <BuyContainer>
                    <AmountContainer>
                        <Remove onClick={() => handleQuantity("decrease")} />
                        <Amount>{quant}</Amount>
                        <Add onClick={() => handleQuantity("increase")} />                        
                    </AmountContainer>                    
                </BuyContainer>
                <Total>{totalAmount} cedis</Total>
                <Button onClick={handleAddtocart}>Add to cart</Button>
            </Details>            
        </Wrapper>
        <Footer />
      </Container>
    )
}


export default Product;