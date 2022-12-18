import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styled from 'styled-components';
import { ArrowBackIosNewRounded, ArrowForwardIosRounded } from '@mui/icons-material';
import { slideData } from '../slideData';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
`;

const Wrapper = styled.div`
    height: 100px;
    display: flex;
    flex-flow: row;
    transform: translateX(${props => props.sl * -100}vw);
    transition: all 1000ms;
`;

const BannerSlide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${props => props.bg};
    ${mobile({flexFlow: "column"})};
`;

const BannerImage = styled.div`
    flex: 1;
    height: 100vh;
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    ${mobile({
        flex: "0.4",
        width: "100vw",
        // position: "absolute",
        // borderRadius: "10px",
        // top: "30%",
        // left: "24.5%",
    })};
`;

const BannerInfo = styled.div`
    flex: 1;
    padding: 50px;
    color: ${props => props.lc};
    ${mobile({
        padding: "65px",
        flex: "0.6",
        width: "100vw",
    })};
`;

const Title = styled.h1`
    ${mobile({fontSize: "19px"})}
`;

const Description = styled.p`
    margin: 50px 0;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 3px;
    max-width: 300px;
    ${mobile({letterSpacing: "1px"})}
`;

const Button = styled.button`
    // color: #fff;
    font-size: 14px;
    background-color: ${props => props.lc};
    color: ${props => props.bg};
    height: 50px;
    width: 150px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: all 500ms;
    &: hover {
        opacity: 0.5;
    };
    ${mobile({ width: "100%"})}
`;


const Arrow = styled.div`
    cursor: pointer;
    width: 50px;
    height: 50px;    
    color: #f1b604;
    border: 1px solid #f1b604;
    border-radius: 5px;
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "20px"};
    right: ${props => props.direction === "right" && "20px"};
    align-items: center;
    justify-content: center;
    margin: auto;
    z-index: 2;
    &:hover {
        background-color: #fafafaba;
    };
    ${mobile({width: "30px", height: "30px"})};
`;

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = { slideIndex: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(dir) {
        const num = this.state.slideIndex;

        if (dir === 'right') {
            if (num >= 0 && num < 4) {
                this.setState(st => (
                    {slideIndex: num + 1}
                ))
            } else if (num === 4) {
                this.setState(st => (
                    {slideIndex: 0}
                ))
            }
        } else if (dir === 'left') {            
            if (num <= 4 && num > 0) {
                this.setState(st => (
                    {slideIndex: num - 1}
                ))
            } else if (num === 0) {
                this.setState(st => (
                    {slideIndex: 4}
                ))
            }
        }
    }
    render() {
        return (
        <Container>
            <Arrow direction="left" onClick={() => this.handleClick("left")}>
                <ArrowBackIosNewRounded />
            </Arrow>

            <Wrapper sl={this.state.slideIndex}>
                { 
                    slideData.map(item => (
                        <BannerSlide key={item.id} bg={item.bg}>
                            <BannerImage bg={item.img}></BannerImage>
                            <BannerInfo lc={item.lc}>
                                <Title>{item.title}</Title>
                                <Description>{item.description}</Description>
                                <Link to="/all"><Button bg={item.bg} lc={item.lc}>Order Now</Button></Link>
                            </BannerInfo>
                        </BannerSlide>
                    ))
                }
                
            </Wrapper>

            <Arrow direction="right" onClick={() => this.handleClick("right")}>
                <ArrowForwardIosRounded />
            </Arrow>            
        </Container>
        );
    }
}

export default Slider;