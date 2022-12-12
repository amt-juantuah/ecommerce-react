import React, { Component } from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import ProductsAll from '../components/ProductsAll';
import Slider from '../components/Slider';

class Homepage extends Component {
  render() {
    return (
      <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <ProductsAll />
      </div>
    )
  }
}

export default Homepage