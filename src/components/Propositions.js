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
    font-weight: 600px;
`;


const PropositionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    row-gap: 50px;
    margin-top: 30px;
    margin-bottom: 50px;
`;

const PropositionCard = styled.div`
    max-width: 350px;
    min-width: 300px;
    height: 400px;
    background-color: #fff;
    padding: 20px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 6px;
`;

const CardTitle = styled.h2`
    color: var(--color-brown);
`;

const CardWords = styled.p`
    color: var(--color-brown);
`;

const Button = styled.button`
    background-color: var(--color-orange);
    color: #fff;
    display: block;
    height: 50px;
    width: 90%;
    border: none;
    outline: none;
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
            <IntoMessage>Last Mile Master, Convenience to Retail and Wholesale shop Owners, High Volume Sales Cycle to FMCG Manufacturers</IntoMessage>
        </Into>
        <PropositionContainer>
            <PropositionCard>
                <CardTitle>Boom</CardTitle>
                <CardWords>fsdfsfsfsfssfsffs</CardWords>
                <Button>Send</Button>
            </PropositionCard>
            <PropositionCard>
                <CardTitle>Boom</CardTitle>
                <CardWords>fsdfsfsfsfssfsffs</CardWords>
                <Button>Send</Button>
            </PropositionCard>
            <PropositionCard>
                <CardTitle>Boom</CardTitle>
                <CardWords>fsdfsfsfsfssfsffs</CardWords>
                <Button>Send</Button>
            </PropositionCard>
        </PropositionContainer>
      </Container>
    )
  }
}


export default Propositions;