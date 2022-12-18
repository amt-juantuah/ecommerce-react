import React, { Component } from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div``;

const Title = styled.h2`
  margin: 50px auto;
  text-align: center;
`;

class Category extends Component {
  render() {
    return (
      <Container>
        <Announcement />
        <Navbar />
        <Title> More from Categories </Title>
        <Categories />
        <Footer />
      </Container>
    )
  }
}

export default Category;