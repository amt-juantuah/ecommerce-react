// import React from 'react'
// import styled from 'styled-components'
import React, { Component } from 'react';
import styled from 'styled-components';
import Search from '@mui/icons-material/Search';

const StyledNavbar = styled.div`
  height: 60px;
  background-color: white;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`

const Left = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: end;
`

const LanguageStyle = styled.span`
  color: red;
  cursor: pointer;
`

const SearchContainer = styled.div`
  border: 0.4px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  margin-left: 15px;
  padding: 4px;
  outline: none;
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

class Navbar extends Component {
  render() {
    return (
      <StyledNavbar>
        <Wrapper>
          <Left> 
            <Logo>Bridge Ease</Logo>
          </Left>
          <Center>Center item</Center>
          <Right>
            <LanguageStyle>ENG</LanguageStyle>
            <SearchContainer>
              <Search />
              <Input />
            </SearchContainer>
          </Right>
        </Wrapper>
      </StyledNavbar>
    )
  }
}

export default Navbar;