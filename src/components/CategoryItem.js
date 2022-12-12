import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    // flex: 1;
    width: 300px;
    height: 350px;
    position: relative;
    border: 1px solid #ced4de;
    border-radius: 16px;
`;

const Image = styled.div`
    background-image: url(${props => props.img});
    width: 250px;
    height: 200px;
    background-size: contain;
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
    justify-content: end;
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

const Title = styled.h2`
    text-align: center;
`;

const Description = styled.p`
    text-align: center;
    font-size: 13px;
`;

const Button = styled.button`
    font-size: 12px;
    background-color: #06108d;
    color: #d6dff0;
    height: 40px;
    width: 120px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: all 500ms;
    &:hover {
      opacity: 0.7;
      color: #fff;
      border: 1px solid #06108d;
    }
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