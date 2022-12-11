import React, { Component } from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';

class Homepage extends Component {
  render() {
    return (
      <div>
        <Announcement />
        <Navbar />
        <Slider />
      </div>
    )
  }
}

export default Homepage