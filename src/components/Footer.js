import { Facebook, LinkedIn, Instagram, Twitter } from '@mui/icons-material';
import React, { Component } from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div``;

const FooterContainer = styled.div`
    width: 100vw;
    height: auto;
    background-color: var(--color-brown);
    padding: 50px;
    ${mobile({padding: "30px 10px"})}
`;

const FootBox = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 60px;
    list-style: none;
    width: 100%;
    margin-bottom: 15%;
    ${mobile({padding: "0px 40px"})}
`;

const FootCard = styled.li`
    margin-bottom: 32px;
    width: 210px;
    ${mobile({
        width: "220px",
        marginBottom: "35px"
    })}
`;

const Title = styled.h4`
    margin-bottom: 32px;
    font-size: 14px;
    text-transform: uppercase;
    color: #f1b604;
    ${mobile({marginBottom: "18px"})}
`;

const ListContent = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 100%;
`;

const Socials = styled.div`
    display: flex;
    flex-direction: row;
    width: 100px;
    padding: 0;
    // align-items: center;
    color: #bbb;
    & svg {
        font-size: 40px;
        margin-right: 3px;
        ${mobile({fontSize: "25px"})}
    };
    & svg: hover {
        color: #f1b604;
    }
`;

const List = styled.li`
    color: #bbb;
    margin: 4px 0;
    display: flex;
    flex-direction: row;
    & a {
        color: var(--color-blue);
        text-decoration: none;
        margin-left: 5px;
        display: block;
    }
`;

const Copyright = styled.p`
    color: #bbb;
    text-align: center;
    font-size: 13px;
    ${mobile({fontSize: "11px"})}
`;

class Footer extends Component {
  render() {
    return (
      <Container>
        <FooterContainer>
            <FootBox>
                <FootCard style={{width: "300px"}}>
                    <Title>Get in touch</Title>
                    <ListContent>
                        <List>Email: <a href='mailto:info@megatron.com' rel="noreferrer" target='_blank' >info@megatron.com</a></List>
                        <List>Hotline: <a href='tel:+233XXXXXXX33'>+233XXXXXXX33</a></List>
                        <List>Sales: <a href='mailto:info@megatron.com' rel="noreferrer" target='_blank' >sales@megatron.com</a></List>
                        <List>Partnership: <a href='mailto:info@megatron.com' rel="noreferrer" target='_blank' >partner@megatron.com</a></List>
                        <List>Logistics: <a href='mailto:info@megatron.com' rel="noreferrer" target='_blank' >logistics@megatron.com</a></List>
                    </ListContent>
                </FootCard>
                <FootCard>
                    <Title>Address / Location</Title>
                    <ListContent>
                        <List>GHANA</List>
                        <List>Accra</List>
                        <List>Rawlings Circle, Madina</List><br />
                        <List>ZIMBABWE</List>
                        <List>Harare</List>
                        <List>Speke Avenue</List>
                    </ListContent>
                </FootCard>
                <FootCard>
                    <Title>Social Media</Title>
                    <Socials>
                        <Instagram />
                        <Twitter />
                        <Facebook />
                        <LinkedIn />
                    </Socials>
                </FootCard>
                <FootCard>
                    <Title>Links</Title>
                    <ListContent>
                        <List>FAQ</List>
                        <List>About Us</List>
                        <List>The MegaTron Story</List>
                        <List>Be inspired by Us</List>
                        <List>The Team</List>
                        <List>Support Us</List>
                        <List>Logistics in Urban Africa</List>
                        <List>Logistics in Rural Africa</List>
                    </ListContent>
                </FootCard>
            </FootBox>
            <Copyright>Copyright © 2022 - 2024 by <b>Bridge Code House</b>, all rights reserved.</Copyright>
            <Copyright>Kumasi</Copyright>
        </FooterContainer>
      </Container>
    )
  }
}

export default Footer;