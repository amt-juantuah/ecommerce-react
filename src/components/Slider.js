import React, { Component } from 'react';
import styled from 'styled-components';
import { ArrowBackIosNewRounded, ArrowForwardIosRounded } from '@mui/icons-material';
import { slideData } from '../slideData';

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
    transition: transform 1000ms;
`;

const BannerSlide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${props => props.bg};
`;

const BannerImage = styled.div`
    flex: 1;
    height: 100vh;
    background-image: url(${props => props.bg});
    background-repeat: none;
    background-size: cover;
    background-position: center;
`;

const BannerInfo = styled.div`
    flex: 1;
    padding: 50px;
    color: ${props => props.lc};
`;

const Title = styled.h1``;

const Description = styled.p`
    margin: 50px 0;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 3px;
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
    left: ${props => props.direction === "left" && "30px"};
    right: ${props => props.direction === "right" && "30px"};
    align-items: center;
    justify-content: center;
    margin: auto;
    z-index: 2;
    &:hover {
        background-color: #fafafaba;
    }
`;

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = { slideIndex: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(dir) {
        console.log(dir, "arrow clicked");
        const num = this.state.slideIndex;
        console.log("starting at", num);

        if (dir === 'right') {
            if (num >= 0 && num < 3) {
                this.setState(st => (
                    {slideIndex: num + 1}
                ))
            } else if (num === 3) {
                this.setState(st => (
                    {slideIndex: 0}
                ))
            }
            console.log("ending at",this.state.slideIndex)
        } else if (dir === 'left') {            
            if (num <= 3 && num > 0) {
                this.setState(st => (
                    {slideIndex: num - 1}
                ))
            } else if (num === 0) {
                this.setState(st => (
                    {slideIndex: 3}
                ))
            }
            console.log("ending at",this.state.slideIndex);            
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
                        <BannerSlide bg={item.bg}>
                            <BannerImage bg={item.img}></BannerImage>
                            <BannerInfo lc={item.lc}>
                                <Title>{item.title}</Title>
                                <Description>{item.description}</Description>
                                <Button bg={item.bg} lc={item.lc}>Order Now</Button>
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