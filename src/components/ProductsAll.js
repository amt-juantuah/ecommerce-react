// import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { categoryData } from '../slideData';
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

const ProductsAll = ({cat, sort}) => {

  const [products, setProducts] = useState([]);
  const [sortedproducts, setSortedproducts] = useState([])

  useEffect(() => {
    const getProds = async () => {
      try {
        const category = cat ? cat : "";
        const res = await axios.get(`http://localhost:5005/product?category=${category}`);
        setProducts(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProds();
  }, [cat]);

  // useEffect(() => {
  //   cat && setSortedproducts(products);
  // }, [cat, products])

  useEffect(() => {
            if (cat && sort === "new") {
              setSortedproducts(
                [...products].sort((a, b) => {
                  return (a.createdAt - b.createdAt);
                })
                )
            } else if (cat && sort === "old") {
              setSortedproducts(
                [...products].sort((a, b) => {
                  return (b.createdAt - a.createdAt);
                })
                )
            } else if (cat && sort === "asc") {
              setSortedproducts(
                [...products].sort((a, b) => {
                  if (a.title < b.title) {
                    return -1;
                  } else return 0;
                })
                )
            } else if (cat && sort === "dsc") {
              setSortedproducts(
                [...products].sort((a, b) => {
                  if (a.title > b.title) {
                    return 1
                  } else return 0
                })
                )
            } else if (cat && sort === "high"){
              setSortedproducts(
                [...products].sort((a,b)=>a.unitprice - b.unitprice)
              )
            } else if (cat && sort === "low") {
              setSortedproducts(
                [...products].sort((a,b)=>b.unitprice - a.unitprice)
              )
            } else {
              setSortedproducts(products);
            }
  }, [cat, products, sort]);
  
    return (
      <Container>
        <ProductsAllContainer>
          { 
              sortedproducts.map(product => 
                  <Product det={product} key={product.id}/>
                  )        
          }
        </ProductsAllContainer>
        <Button>Load More</Button>
      </Container>
    )
}

export default ProductsAll;