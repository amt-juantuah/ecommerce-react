import { LocalShippingRounded, StoreTwoTone } from '@mui/icons-material';
import React, { Component } from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Propositions from '../components/Propositions';
import Slider from '../components/Slider';
import Division from '../components/Division';


class Homepage extends Component {
  render() {
    const icons = [<LocalShippingRounded />, <StoreTwoTone />, "DELIVERY IS FREE... yeah we love you too!"];

    return (
      <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Propositions />
        <Division 
          title="Stock your shop from our Categories"
          para={icons}
        />
        <Categories />
        <Newsletter />
        <Footer></Footer>
      </div>
    )
  }
}

export default Homepage