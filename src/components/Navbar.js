import React, { Component } from 'react';
import styled from 'styled-components';
import Badge from "@mui/material/Badge";
import { ShoppingCartOutlined, Search } from '@mui/icons-material';


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
  flex: 0.5;
  text-align: center;
`

const Logo = styled.h2`
  font-weight: bold;
  cursor: pointer;
  color: var(--color-orange);
`

const Right = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const MenuStyle = styled.div`
  height: 40px; 
  border-radius: 5px; 
  padding: 4px; 
  background-color: #f1b604; 
  display: inline-flex;
  align-items: center;
  color: #fff;
`

const MenuItem = styled.div`
  font-size: 13px;
  cursor: pointer;
  margin-left: 20px;
`

const LanguageStyle = styled.span`
  color: red;
  cursor: pointer;
  margin-left: 25px;
  font-size: 13px;
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
          <Center>
            <SearchContainer>
              <Search style={{color: 'lightgrey', fontSize: '18px', marginRight: "5px"}}/>
              <Input />
            </SearchContainer>
          </Center>
          <Right>
            <MenuStyle>
              <MenuItem>Signup</MenuItem>
              <MenuItem>Login</MenuItem>
              <MenuItem>
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlined style={{color: "#001"}}/>
                </Badge>
              </MenuItem>
            </MenuStyle>
            <LanguageStyle>ENG</LanguageStyle>            
          </Right>
        </Wrapper>
      </StyledNavbar>
    )
  }
}

export default Navbar;