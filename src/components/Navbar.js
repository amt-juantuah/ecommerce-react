import React, { Component } from 'react';
import styled from 'styled-components';
import Badge from "@mui/material/Badge";
import { ShoppingCartOutlined } from '@mui/icons-material';


const StyledNavbar = styled.div`
  height: 60px;
  background-color: var(--color-brown);
  position: sticky;
  top: 0;
  z-index: 4;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background-color: white;
`;

const Left = styled.div`
  flex: 1;
  text-align: start;
  padding-left: 50px;
`;

const Logo = styled.h2`
  font-weight: bold;
  cursor: pointer;
  color: var(--color-orange);
  width: 70px;
  font-variant: unicase;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 30px;
`;

const MenuStyle = styled.div`
  height: 40px; 
  border-radius: 5px; 
  padding: 4px; 
  border: 2px solid #f1b604; 
  display: inline-flex;
  align-items: center;
  color: #f1b604;
  &:hover {
    background-color: #f1b604;
    color: #fff;
  }
`;

const MenuItem = styled.div`
  font-size: 13px;
  cursor: pointer;
  margin-left: 20px;
`;

const LanguageStyle = styled.span`
  color: red;
  cursor: pointer;
  margin-left: 25px;
  font-size: 13px;
`;

// const Input = styled.input`
//   border: none;
//   padding: 8px;
//   outline: none;
//   width: 90%;
//   border-radius: 0 8px 8px 0;
//   border-left: 2px solid #f1b604;
//   &::placeholder {
//     color: var(--color-brown);
//   }
// `;

// const SearchContainer = styled.div`
//   border: 2px solid #f1b604;
//   display: flex;
//   align-items: center;
//   padding: 5px;
//   justify-content: space-around;
//   border-radius: 12px;
//   width: 100%;
//   height: 40px;
//   &:hover ${Input} {
//     background-color: #f1b604;
//   }
// `;

// const Center = styled.div`
//   flex: 1;
//   text-align: center;
// `;

class Navbar extends Component {
  render() {
    return (
      <StyledNavbar>
        <Wrapper>
          <Left> 
            <Logo>MegaTron</Logo>
          </Left>
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