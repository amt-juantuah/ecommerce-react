import React, { Component } from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import ProductsAll from '../components/ProductsAll';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';


const Container = styled.div``;

const Title = styled.h2`
  margin: 50px;
  ${mobile({marginBottom: "20px", textAlign: "center"})}
`;

const FiltContain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({
    display: "grid",
    justifyContent: "stretch",
  })}
  
`;

const Filt = styled.div`
  margin: 50px;
  ${mobile({
    margin: "20px", 
    display: "grid", 
    alignItems: "end",
  })}
`;

const FiltText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
  ${mobile({fontSize: "15px"})}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 10px;
  background-color: #eee;
  border-radius: 4px;
  border: none;
  outline: none;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  ${mobile({marginBottom: "10px"})}
`;

const Option = styled.option`
  border-radius: 4px;
  margin-bottom: 3px;
`;

class Products extends Component {
  render() {
    return (
      <Container>
        <Announcement />
        <Navbar />
        <Title>Products</Title>
        <FiltContain>
          <Filt>
            <FiltText>Filter: </FiltText>
            <Select>
              <Option selected disabled>Category</Option>
              <Option>Canned Foods</Option>
              <Option>Satchet Foods</Option>
              <Option>Frozen Creams</Option>
              <Option>Beverages and Water</Option>
              <Option>Cleaners</Option>
              <Option>Paper Goods</Option>
              <Option>Personal Care</Option>
              <Option>Baby and Elderly Items</Option>
              <Option>Others</Option>
            </Select>
            <Select>
              <Option selected disabled>Company Brand</Option>
              <Option>Nestle</Option>
              <Option>Unilever</Option>
              <Option>Promasidor</Option>
              <Option>Twilium</Option>
              <Option>MultiPro</Option>
              <Option>Olam</Option>
              <Option>Coca Cola</Option>
              <Option>Kasapreko Soft Drinks</Option>
              <Option>Special Drinks</Option>
              <Option>Parle</Option>
              <Option>Others</Option>
            </Select>
          </Filt>
          <Filt>
            <FiltText>Sort: </FiltText>
            <Select>
              <Option selected>Date Added (DSC)</Option>
              <Option>Date Added (ASC)</Option>
              <Option>Name (DSC)</Option>
              <Option>Name (ASC)</Option>
            </Select>
          </Filt>
        </FiltContain>
        <ProductsAll />
        <Footer />
      </Container>
    )
  }
}

export default Products;