import React, { Component } from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div``;

class Category extends Component {
  render() {
    return (
      <Container>
        <Announcement />
        <Navbar />
        <Categories />
        <Footer />
      </Container>
    )
  }
}

export default Category;