import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { categoryData } from '../slideData';
import Product from './Product';
import axios from 'axios';

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
    overflow: hidden;
`;

const Button = styled.button`
  display: block;
  height: 40px;
  width: 120px;
  margin: auto;
  margin-bottom: 50px;
  background-color: #ecd6b1;
  border-radius: 5px;
  border: 1px solid var(--color-orange);
  outline: none;
  &:hover {
    opacity: 0.7;
  }
`;

const ProductsAll = (cat, sort) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProds = async () => {
      try {
        const res = await axios.get(cat ? `http://localhost:5005/product?category=${cat.cat}` : "http://localhost:5005/product");
        setProducts(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProds();
  }, [cat])


    return (
      <Container>
        <ProductsAllContainer>
          { 
              products.map(product => 
                  <Product det={product} key={product.id}/>
                  )        
          }
        </ProductsAllContainer>
        <Link to="/products"><Button>Load More</Button></Link>
      </Container>
    )
}

export default ProductsAll;