import React, { Component } from 'react';
import styled from 'styled-components';
import Badge from "@mui/material/Badge";
import { mobile } from '../responsive';
import { categoryData } from '../slideData';
import { KeyboardArrowDownRounded, KeyboardArrowRightRounded, ShoppingCartOutlined, CloseRounded, MenuOpenRounded } from '@mui/icons-material';


const StyledNavbar = styled.div`
  height: 60px;
  background-color: var(--color-brown);
  position: sticky;
  top: 0;
  z-index: 4;
  ${mobile({height:"50px"})};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({height: "50px", padding: "5px 5px"})};
`;

const Left = styled.div`
  flex: 1;
  text-align: start;
  padding-left: 50px;
  ${mobile({textAlign: "center", flex: "1.7"})};
`;

const Logo = styled.h2`
  font-weight: bold;
  cursor: pointer;
  color: var(--color-orange);
  font-variant: unicase;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 30px;
  position: relative;
  ${mobile({textAlign: "center", flex: "0.3", paddingRight: "15px"})};
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
  };
  ${mobile({height: "30px", border: "none"})};
`;

const MenuItem = styled.div`
  font-size: 13px;
  cursor: pointer;
  margin-left: 20px;
  ${mobile({display: "none"})};
`;

const CartItem = styled.div`
  font-size: 13px;
  cursor: pointer;
  margin-left: 20px;
  ${mobile({fontSize: "11px", marginLeft: "auto"})};
`;

const LanguageStyle = styled.span`
  color: red;
  cursor: pointer;
  margin-left: 25px;
  font-size: 13px;
  ${mobile({display: "none"})};
`;

const SignupMobile = styled.div``;
const LoginMobile = styled.div``;
const LanguageMobile = styled.div``;
const ToggleIcons = styled.div`
  padding: 2px;
  display: none;
  margin-right: 10px;
  & svg {font-size: 28px;};
  ${mobile({display: "flex"})};
`;


const MobileMenu = styled.div`
  // height: 50vh;
  height: auto;
  max-height: 70vh;
  overflow-y: auto;
  background-color: #fff;
  position: absolute;
  top: 52px;
  padding-bottom: 40px;
  right: -3px;
  transition: width 0.7s ease, height 1s ease;
  width: ${props => props.width}vw;
  // width: 72vw;
  // display: ${props => props.display};
  display: flex;
  flex-flow: column;
  align-items: center;
  border-top: 40px solid #eee;
  border-bottom: 40px solid var(--color-orange);
  border-radius: 0 0 0 30px;
  & ${SignupMobile} {
    height: 40px;
    width: 70%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-brown);
    color: #fff;
    border-radius: 4px;
    margin: 5px;
    padding: 0 20px;
    &:hover {
      opacity: 0.7;
    }
  };
  & ${LoginMobile} {
    height: 40px;
    width: 70%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-orange);
    border-radius: 4px;
    margin: 5px;
    padding: 0 20px;
    &:hover {
      opacity: 0.7;
    }
  };
  & ${LanguageMobile} {
    height: 40px;
    width: 70%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    border: 2px solid #eee;
    border-radius: 4px;
    margin: 5px;
    padding: 0 20px;
    color: red;
  }
`;

const Categories = styled.div`
    width: 70%;
    transition: all 0.5s ease;
    height: auto;
    padding: 10px 5px 10px 10px;
    border: 2px solid #eee;
    margin-top: 20px;
`;

const CategoryTitle = styled.h5`
    transition: all 0.5s ease;
    text-align: left;
`;

const CategoryItem = styled.div`
    cursor: pointer;
    height:30px;
    width: 100%;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-top: 10px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    transition: all 0.5s ease;
    &:hover {
      background-color: #eee;
    }
`;

// const LanguageStyle = styled.span`
//   color: red;
//   cursor: pointer;
//   margin-left: 25px;
//   font-size: 13px;
// `;

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {mobileMenu: 0, closeIcon: "none", openIcon: "flex"};
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
  }

  handleMenuOpen() {
    this.setState(st => (
      {mobileMenu: 72, closeIcon: "flex", openIcon: "none"}
    ))
  }

  handleMenuClose() {
    this.setState(st => (
      {mobileMenu: 0, closeIcon: "none", openIcon: "flex"}
    ))
  }

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
              <CartItem>
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlined style={{color: "#001"}}/>
                </Badge>
              </CartItem>
            </MenuStyle>
            <LanguageStyle>ENG</LanguageStyle>
          </Right>
          <ToggleIcons>
            <CloseRounded style={{fill: "var(--color-orange)",display: this.state.closeIcon, transition: "all 1s ease-in"}} onClick={this.handleMenuClose} />
            <MenuOpenRounded style={{fill: "var(--color-orange)",display: this.state.openIcon, transition: "all 1s ease-out"}} onClick={this.handleMenuOpen} />
          </ToggleIcons>
          <MobileMenu width={this.state.mobileMenu}>
            {this.state.mobileMenu ? 
            <>
              <SignupMobile><span>Signup</span><KeyboardArrowRightRounded /></SignupMobile>
              <LoginMobile><span>Login</span><KeyboardArrowRightRounded /></LoginMobile>
              <LanguageMobile><span>ENG</span><KeyboardArrowDownRounded /></LanguageMobile>
              <Categories>
                <CategoryTitle>Product Categories</CategoryTitle>
                { categoryData.map(data => (
                  <CategoryItem>{data.cat}</CategoryItem>
                ))}
              </Categories>
            </>
            : ""}
          </MobileMenu>            
        </Wrapper>
      </StyledNavbar>
    )
  }
}

export default Navbar;