import { useLocation } from 'react-router-dom';
import React, { useState } from 'react'
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

const Products = () => {
  
  const location = useLocation();
  const categoryName = location.pathname.split("/")[2];
  const [cat, setCat] = useState(categoryName);
  const [sort, setSort] = useState("new");

  const handleCat = (e) => {
    const val = e.target.value;
    setCat(val)
  }

  const handleSort = (e) => {
    const val = e.target.value;
    setSort(val)
  }
    return (
      <Container>
        <Announcement />
        <Navbar />
        <Title>{cat.replace(/_/g, " ")} products</Title>
        <FiltContain>
          <Filt>
            <FiltText>Filter: </FiltText>
            <Select onChange={handleCat}>
              <Option disabled>Category</Option>
              <Option value="canned_foods">Canned Foods</Option>
              <Option value="satchet_foods">Satchet Foods</Option>
              <Option value="frozen_creams">Frozen Creams</Option>
              <Option value="beverages_and_water">Beverages and Water</Option>
              <Option value="cleaners">Cleaners</Option>
              <Option value="paper_goods">Paper Goods</Option>
              <Option value="personal_care">Personal Care</Option>
              <Option value="baby_and_elderly_items">Baby and Elderly Items</Option>
              <Option value="others">Others</Option>
            </Select>
            <Select>
              <Option>Company Brand</Option>
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
            <Select onChange={handleSort}>
              <Option disabled>Sort by</Option>
              <Option value="new">Date Added (DSC)</Option>
              <Option value="old">Date Added (ASC)</Option>
              <Option value="asc">Name (ASC)</Option>
              <Option value="dsc">Name (DSC)</Option>
              <Option value="high">Price (ASC)</Option>
              <Option value="low">Price (DSC)</Option>
            </Select>
          </Filt>
        </FiltContain>
        <ProductsAll cat={cat} sort={sort}/>
        <Footer />
      </Container>
    )
}

export default Products;