import { FactoryOutlined, LocalShippingOutlined, PhoneIphoneOutlined, StoreOutlined } from '@mui/icons-material';
import React, { Component } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    padding: 60px 30px;
    width: 100vw;
    height: auto;
`;

const Into = styled.div`
    max-width: 600px;
    height: auto;
    margin-bottom: 30px;
    color: var(--color-brown);
`;

const IntoTitle = styled.h3`
    font-weight: 400;
`;

const IntoMessage = styled.h2`
    font-size: 23px;
`;


const PropositionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    row-gap: 50px;
    column-gap: 50px;
    margin-top: 50px;
    margin-bottom: 100px;
`;

const PropositionCard = styled.div`
    max-width: 320px;
    min-width: 300px;
    height: 400px;
    background-color: #fff;
    padding: 20px;
    display: flex;
    flex-flow: column;
    align-items: center;
    // justify-content: space-between;
    border-radius: 6px;
`;

const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    background-color: #fafafa;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    // flex: 0.6;
    margin-bottom: 40px;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
    & svg {
        color: var(--color-orange);
    };
`;

const IconContainerDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
`;

const CardTitle = styled.h2`
    color: var(--color-brown);
    font-size: 20px;
    flex: 1;
`;

const CardWords = styled.p`
    color: var(--color-brown);
    flex: 3;
    width: 100%;
    text-align: center;
    line-height: 25px;
    font-size: 14.5px;
`;

const Button = styled.button`
    background-color: var(--color-orange);
    color: #fff;
    display: block;
    height: 50px;
    width: 90%;
    border: none;
    outline: none;
    flex: 0.7;
    font-size: 14px;
    border-radius: 4px;
    &:hover {
        opacity: 0.7;
    }
`;


class Propositions extends Component {
  render() {
    return (
      <Container>
        <Into>
            <IntoTitle>Our Solution</IntoTitle>
            <IntoMessage>Last Mile Master, Democratizing High Volume Key Destribution for FMCG Manufacturers,</IntoMessage>
            <IntoMessage>Convenient Product Sourcing for Retailers and Wholesalers</IntoMessage>
        </Into>
        <PropositionContainer>
            <PropositionCard>
                <CardTitle>FMCG Manufacturers</CardTitle>
                <IconContainer>
                    <FactoryOutlined />
                </IconContainer>
                <CardWords>
                    Do you want an optimized last mile solution to introduce new and poor performing products? Do you want to hyper-up your Route to Market strategy? Do you want access to all markets, near and far? <br /> <b>Don't be left out. Be smart</b>
                </CardWords>
                <Button>Get Started</Button>
            </PropositionCard>
            <PropositionCard>
                <CardTitle>Retailers & WholeSalers</CardTitle>
                <IconContainer>
                    <StoreOutlined />
                </IconContainer>
                <CardWords>
                    Do you need a reliable supply of any product you want in your shop? Do you want the best prices? From the manufacturer, right to your Shop. That is exactly what you need to grow your business.<br /> <b>Delivery is free and the fastest</b> 
                </CardWords>
                <Button>Join and Grow</Button>
            </PropositionCard>
            <PropositionCard>
                <CardTitle>Boom</CardTitle>
                <IconContainerDiv>
                    <IconContainer>
                        <PhoneIphoneOutlined />
                    </IconContainer>
                    <IconContainer>
                        <LocalShippingOutlined />
                    </IconContainer>
                </IconContainerDiv>
                <CardWords>
                    Do you want an optimized last mile solution to introduce new and poor performing products? Do you want to hyper-up your Route to Market strategy? Do you want access to all markets, near and far?
                </CardWords>
                <Button>Send</Button>
            </PropositionCard>
        </PropositionContainer>
      </Container>
    )
  }
}


export default Propositions;