import { Facebook, LinkedIn, Instagram, Twitter } from '@mui/icons-material';
import React, { Component } from 'react'
import styled from 'styled-components';

const Container = styled.div``;

const FooterContainer = styled.div`
    width: 100vw;
    height: auto;
    background-color: var(--color-brown);
    padding: 50px;
`;

const FootBox = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 60px;
    list-style: none;
    width: 100%;
    margin-bottom: 15%;
`;

const FootCard = styled.li`
    margin-bottom: 32px;
    width: 180px;
`;

const Title = styled.h4`
    margin-bottom: 32px;
    font-size: 14px;
    text-transform: uppercase;
    color: #f1b604;
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
    };
    & svg: hover {
        color: #f1b604;
    }
`;

const List = styled.li`
    color: #bbb;
    margin: 4px 0
`;

const Copyright = styled.p`
    color: #bbb;
    text-align: center;
    font-size: 13px;
`;

class Footer extends Component {
  render() {
    return (
      <Container>
        <FooterContainer>
            <FootBox>
                <FootCard>
                    <Title>rerefefeffefr</Title>
                    <ListContent>
                        <List>jhghghjgh</List>
                        <List>jhghghjgh</List>
                        <List>jhghghjgh</List>
                        <List>jhghghjgh</List>
                    </ListContent>
                </FootCard>
                <FootCard>
                    <Title>rerefefeffefr</Title>
                    <ListContent>
                        <List>jhghghjgh</List>
                        <List>jhghghjgh</List>
                        <List>jhghghjgh</List>
                        <List>jhghghjgh</List>
                    </ListContent>
                </FootCard>
                <FootCard>
                    <Title>rerefefeffefr</Title>
                    <Socials>
                        <Instagram />
                        <Twitter />
                        <Facebook />
                        <LinkedIn />
                    </Socials>
                </FootCard>
                <FootCard>
                    <Title>rerefefeffefr</Title>
                    <ListContent>
                        <List>jhghghjgh</List>
                        <List>jhghghjgh</List>
                        <List>jhghghjgh</List>
                        <List>jhghghjgh</List>
                    </ListContent>
                </FootCard>
            </FootBox>
            <Copyright>Copyright © 2022 - 2024 by Bridge Code House, all rights reserved.</Copyright>
            <Copyright>Kumasi</Copyright>
        </FooterContainer>
      </Container>
    )
  }
}

export default Footer;