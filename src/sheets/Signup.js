import React, { Component } from 'react';
import styled from 'styled-components';
import { MailLockOutlined, LockOutlined, PersonOutlineOutlined, Send } from '@mui/icons-material';

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
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
    margin-top: 20px;
    gap: 5px;
    &:hover {
        opacity: 0.7;
    }
`;

const Words = styled.p`
    font-size: 14px;
    font-weight: 500;
`;

const FormContainer = styled.div`
    flex: 1;
    height: 100%;
    overflow: auto;
    background-color: #fff;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const SideContainer = styled.div`
    flex: 1;
    height: 100%;
    background-image: url("https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80");
    background-color: var(--color-brown);
    background-position: top;
    background-size: cover;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Form = styled.form`
    height: auto;
    min-width: 350px;
    max-width: 400px;
    padding: 20px;
    display:flex;
    margin: 80px 0;
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
    & svg {
        margin: 0 5px;
        font-size: 20px;
    }
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
  font-size: 30px;
  margin: 30px 0;
  font-variant: unicase;
`;

class Signup extends Component {
  render() {
    return (
      <Container>
        <FormContainer>
            <Form>
                <Logo>MegaTron</Logo>
                <FormTitle>
                    Create an Account
                </FormTitle>
                <InputBox>
                    <Label>
                        <MailLockOutlined /> E-Mail
                        <Important>*</Important>
                    </Label>
                    <Input type="email" placeholder='eg. megatron@example.com' required />
                </InputBox>
                <InputBox>
                    <Label>
                        <PersonOutlineOutlined />
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
        </FormContainer>
        <SideContainer>
        </SideContainer>
      </Container>
    )
  }
}

export default Signup;