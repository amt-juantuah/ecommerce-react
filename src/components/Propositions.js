import { CategoryOutlined, FactoryOutlined, VerifiedUserOutlined, LocalShippingOutlined, PhoneIphoneOutlined, StoreOutlined } from '@mui/icons-material';
import React, { Component } from 'react'
import { mobile } from '../responsive';
import styled from 'styled-components';

const Container = styled.div`
    padding: 60px 0 0 0;
    width: 100vw;
    height: auto;
    ${mobile({padding: "50px 0px"})}
`;

const Into = styled.div`
    max-width: 600px;
    height: auto;
    margin-bottom: 30px;
    color: var(--color-brown);
    margin-left: 50px;
    ${mobile({maxWidth: "100%", margin: "0 20px 30px 20px"})}
`;

const IntoTitle = styled.h3`
    font-weight: 400;
    ${mobile({marginBottom: "15px", color: "var(--color-orange)"})}
`;

const IntoMessage = styled.h2`
    font-size: 23px;
    ${mobile({fontSize: "18px", lineHeight: "28px"})}
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
    transition: all 0.4s ease;
    &:hover {
        transform: scale(1.05);
    }
    ${mobile({maxWidth: "290px", minWidth: "280px", height: "430px"})}
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
    ${mobile({fontSize: "18px", fontWeight: "600"})}
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

const Figures = styled.div`
    min-height: 400px;
    width: auto;
    margin-right: 100px;
    border-radius: 0 50px 0 0;
    background-color: var(--color-brown);
    padding-top: 50px;
    padding-bottom: 30px;
    & ${Into} {
        color: #fff;
        ${IntoTitle} {
            ${mobile({color: "var(--color-orange)"})}
        }
    };
    
    & ${PropositionContainer} {
        ${mobile({
            marginBottom: "30px",
            rowGap: "13px",
        })}
    };

    ${mobile({
        margin: "auto", 
        width: "90vw", 
        height: "auto", 
        borderRadius: "10px",
        padding: "15px",
    })}
`;

const FigureCard = styled.div`
    display: flex;
    min-height: 120px;
    flex-flow: column;
    align-items: center;
    transition: all 0.3s ease;
    justify-content: space-between;
    & svg {
        color: #fff;
    };
    & ${IntoMessage} {
        color: #fff;
        font-size: 40px;
        ${mobile({fontSize: "24px"})}
    };
    & ${IntoTitle} {
        color: #fff;
    };
    @media only screen and (max-width: 480px) {
        &:hover {
            transform: scale(1.04);
            & ${IntoMessage} {
                color: var(--color-orange);
            }
        }
    };
    ${mobile({borderBottom: "2px solid #eee"})}
`;




class Propositions extends Component {
  render() {
    return (
      <Container>
        <Into>
            <IntoTitle>Our Solution</IntoTitle>
            <IntoMessage>Last Mile Master, Democratizing High Volume Key Destribution for FMCG Manufacturers. Convenient Product Sourcing for Retailers and Wholesalers</IntoMessage>
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
                <CardTitle>Brand Standards Execution</CardTitle>
                <IconContainerDiv>
                    <IconContainer>
                        <VerifiedUserOutlined />
                    </IconContainer>
                </IconContainerDiv>
                <CardWords>
                    Your Brand and Company-specific execution standards are important to us. If it is standards in POS, mechandizing, branding, display, and sales KPIs <br /><br /> <b>We have you covered</b> 
                </CardWords>
                <Button>Reach Out</Button>
            </PropositionCard>
            <PropositionCard>
                <CardTitle>Last Mile Master, Technology</CardTitle>
                <IconContainerDiv>
                    <IconContainer>
                        <PhoneIphoneOutlined />
                    </IconContainer>
                    <IconContainer>
                        <LocalShippingOutlined />
                    </IconContainer>
                </IconContainerDiv>
                <CardWords>
                    Transform your business and tap into an unsurpassed network that has Total control of last mile delivery and the perfect solution for high volume Route-to-Market with Strategic Sales Analytics. 
                </CardWords>
                <Button>Talk to us about you needs</Button>
            </PropositionCard>
        </PropositionContainer>
        <Figures>
            <Into>
                <IntoTitle>Figures</IntoTitle>
                <IntoMessage>Our figures speak for themselves</IntoMessage>
            </Into>
            <PropositionContainer>
                <FigureCard>
                    <FactoryOutlined />
                    <IntoMessage>19</IntoMessage>
                    <IntoTitle>FMCG Manufacturers</IntoTitle>
                </FigureCard>
                <FigureCard>
                    <CategoryOutlined />
                    <IntoMessage>342</IntoMessage>
                    <IntoTitle>Popular FMCG Brands</IntoTitle>
                </FigureCard>
                <FigureCard>
                    <StoreOutlined />
                    <IntoMessage>4201</IntoMessage>
                    <IntoTitle>Retail and Wholesale Shops</IntoTitle>
                </FigureCard>
            </PropositionContainer>
        </Figures>
      </Container>
    )
  }
}


export default Propositions;