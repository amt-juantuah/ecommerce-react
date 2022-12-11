// import React from 'react'
// import styled from 'styled-components'
import React, { Component } from 'react';
import styled from 'styled-components';


const StyledNavbar = styled.div`
  height: 60px;
  background-color: yellow;
`

const Wrapper = styled.div`
  padding: 10px 20px;
`

class Navbar extends Component {
  render() {
    return (
      <StyledNavbar>
        <Wrapper>
          Wrapped Navbar;
        </Wrapper>
      </StyledNavbar>
    )
  }
}

export default Navbar;