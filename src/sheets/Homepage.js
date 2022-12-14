import React, { Component } from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import ProductsAll from '../components/ProductsAll';
import Propositions from '../components/Propositions';
import Slider from '../components/Slider';


class Homepage extends Component {
  render() {
    return (
      <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Propositions />
        <Categories />
        <ProductsAll />
        <Newsletter />
        <Footer></Footer>
      </div>
    )
  }
}

export default Homepage