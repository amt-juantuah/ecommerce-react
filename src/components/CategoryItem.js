import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    // flex: 1;
    width: 350px;
    height: 400px;
    margin: 3px;
    position: relative;
`;

const Image = styled.div`
    background-image: url(${props => props.img});
    width: 350px;
    height: 400px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    // position: relative;
    z-index: 1;
`;

const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

const InfoCard = styled.div`
    width: 100%;
    height: 150px;
    background-color: #d6dff0c7;
    border-radius: 5px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    color: #06108d;
    &: hover button {
        color: #fff;
        background-color: #f1b604;
    }
`;

const Title = styled.h2``;

const Description = styled.p``;

const Button = styled.button`
    font-size: 14px;
    background-color: #06108d;
    color: #d6dff0;
    height: 50px;
    width: 150px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
`;

class CategoryItem extends Component {
  render() {
    return (
      <Container>
        <Image img={this.props.det.img}/>
        <Info>
            <InfoCard>
                <Title>{this.props.det.cat}</Title>
                <Description>{this.props.det.description}</Description>
                <Button>Enter for Products</Button>
            </InfoCard>
        </Info>
      </Container>
    )
  }
}
export default CategoryItem;

// {
//     id: 8,
//     img: "https://i0.wp.com/mrpocu.com/wp-content/uploads/2022/10/supermarket-shelves.webp?fit=1170%2C754&ssl=1",
//     cat: "Others",
//     description: "Find all other Products in this section"
// },