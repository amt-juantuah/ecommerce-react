import React, { Component } from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import ProductsAll from '../components/ProductsAll';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div``;

const Title = styled.h1`
  margin: 50px;
`;

const FiltContain = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filt = styled.div`
  margin: 50px;
`;

const FiltText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 10px;
`;

const Option = styled.option`
  border-radius: 4px;
  margin-bottom: 3px;
`;

class Category extends Component {
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

export default Category;