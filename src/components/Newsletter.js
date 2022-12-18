import { CancelScheduleSendTwoTone, Send } from '@mui/icons-material';
import React, { Component } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const NewsContainer = styled.div`
    height: auto;
    width: 100vw;
    padding: 70px;
    padding-right: 80px;
    padding-left: 110px;
    background-color: var(--color-brown);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    ${mobile({
        padding: "30px 10px",
    })}
`;

const Container = styled.div`
    display: flex;
    flex-flow: column;
    align-items: end;
    justify-content: center;
`;

const Title = styled.h2`
    color: #f1b604;
    margin-bottom: 20px;
    ${mobile({
        fontSize: "17px"
    })}
`;

const Button = styled.button`
    background-color: #f1b604;
    color: #fff;
    display: flex;
    flex-direction: row;
    height: 40px;
    width: 250px;
    padding: 15px;
    justify-content: space-evenly;
    align-items: center;
    border: none;
    outline: none;
    border-radius: 4px;
    margin-bottom: 20px;
    &:hover {
        opacity: 0.7;
    };
    @media only screen and (max-width: 480px) {
        &:hover {
            border: 1px solid var(--color-orange)
        };
        & svg {
            display: none;
        }
    };
    ${mobile({
        height: "50px",
        width: "180px",
        backgroundColor: "var(--color-brown)",
        border: "1px solid #fff"
    })}
`;

const SendButtom = styled.button`
    background-color: #393a34;
    color: #fff;
    display: flex;
    flex-direction: row;
    height: 50px;
    width: 100%;
    padding: 15px;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    border-radius: 4px;
    margin: 20px 0;
    gap: 5px;
    &:hover {
        opacity: 0.7;
    }
`;

const Words = styled.p`
    font-size: 14px;
    font-weight: 500;
`;

const NewsletterForm = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: rgba(0,0,0,.8);
    z-index: 5;
    content: "";
    top: 0;
    left: 0;
    transition: all 0.5s ease;
    display: ${props => props.disp};
    justify-content: center;
    align-items: center;
    padding-top: 35px;
    padding-bottom: 35px;
`;

const Form = styled.form`
    background-color: #fff;
    height: 100%;
    width: 350px;
    border-radius: 8px;
    overflow-y: scroll;
    padding: 20px;
    display:flex;
    flex-flow: column;
`;

const FormTitle = styled.h2`
    text-align: center;
    margin: 10px;
    color: #393a34;
`;

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: left;
    background-color: #f1b604;
    height: 60px;
    width: 100%;
    margin: 15px 0;
`;

const Label = styled.label`
    font-size: 14px;
    display: flex;
    color: #393a34;
`;

const Important = styled.sup`
    color: red !important;
    margin-left: 2px;
    margin-right: 4px;
    font-size: 18px;
`;

const Input = styled.input`
    height: 40px;
    width: 100%;
    padding: 5px 10px;
    border: 1px solid #f1b604;
    outline: none;
    color: #393a34;
    letter-spacing: 2px;
    &:focus {
        outline: 1px solid #393a34;
        border: none;
    };

    &:hover {
        outline: 1px solid #393a34;
        border: none;
    };

    &::placeholder {
        color: #393a34;
        letter-spacing: 2px;
        opacity: 0.5;
    }
`;

const Span = styled.span`
    font-size: 11px;
    color: #393a34;
    opacity: 0.8;
`;

const Checkbox = styled.input`
    margin-right: 3px;
    height: 12px;
    width: 12px;
`;

const Logo = styled.h2`
  font-weight: bold;
  cursor: pointer;
  color: var(--color-orange);
  width: 70px;
  float: left;
  font-variant: unicase;
`;

class Newsletter extends Component {

    constructor(props) {
        super(props);
        this.state = { newsletter : "none"};
        this.handleNewsletter = this.handleNewsletter.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleNewsletter() {
        this.setState(st => (
            {newsletter : "flex"}
        ))
    }

    handleCloseModal() {
        this.setState(st => (
            {newsletter : "none"}
        ))
    }

  render() {
    return (
      <div>
        <NewsletterForm disp={this.state.newsletter}>
            <Form>
                <CancelScheduleSendTwoTone className='cancel' onClick={this.handleCloseModal} style={{ transition: "all 0.5s ease", cursor: "pointer", marginLeft: "90%", fontSize: "28px" }} sx={{ "&:hover": { color: "red" } }}/>
                <FormTitle>
                    Newsletter
                </FormTitle>
                <InputBox>
                    <Label>
                        E-Mail
                        <Important>*</Important>
                    </Label>
                    <Input type="email" placeholder='eg. megatron@example.com' required />
                </InputBox>
                <InputBox>
                    <Label>
                        First Name
                        <Important>*</Important>
                    </Label>
                    <Input type="text" placeholder='eg. Mary' required />
                </InputBox>
                <InputBox>
                    <Label>
                        Last Name
                        <Important>*</Important>
                    </Label>
                    <Input type="text" placeholder='eg. Enyonam' required />
                </InputBox>
                <InputBox>
                    <Label>
                        Company or Organisation
                        <Important>*</Important>
                    </Label>
                    <Input type="text" placeholder='eg. Hope Ventures' required />
                </InputBox>
                <InputBox>
                    <Label>
                        Your Job Title
                        <Important></Important>
                    </Label>
                    <Input type="text" placeholder='eg. Owner, Director' />
                </InputBox>
                <Label>
                    <Checkbox type="checkbox" required/>
                    <Important>*</Important>
                    <Span> I hereby consent to the data handling and processing policy of Megatron which relates with Newsletters </Span>
                </Label>

                <Words style={{textAlign: "center", margin: "15px"}}>
                    <Important>*</Important>
                    Mandatory Field
                </Words>
                <SendButtom type='submit'>
                <Words>Send</Words> <Send />
                </SendButtom>
            </Form>
        </NewsletterForm>
        <NewsContainer> 
            <Logo>MegaTron</Logo> 
            <Container>          
                <Title>Newsletter</Title>
                <Button onClick={this.handleNewsletter}>
                    <Words>Sign up for our newsletter</Words>
                    <Send />
                </Button>
            </Container>
        </NewsContainer>
      </div>
    )
  }
}

export default Newsletter;