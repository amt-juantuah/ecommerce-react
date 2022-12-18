import React, { Component } from 'react';
import styled from 'styled-components';
import { MailLockOutlined, LockOutlined } from '@mui/icons-material';
import { mobile } from '../responsive';


const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    ${mobile({flexFlow: "column-reverse"})}
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
    height: auto;
    overflow: auto;
    background-color: #fff;
    transition: all 0.5s ease;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 50px;
    &::-webkit-scrollbar {
        display: none;
    };
    ${mobile({
        flex: "3",
        paddingTop: "0",
    })}
`;

const SideContainer = styled.div`
    flex: 1;
    height: 100%;
    background: linear-gradient(#00000080, #00000080), url("https://images.unsplash.com/photo-1563382454-400a632d7c4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80");
    background-color: var(--color-brown);
    background-position: top;
    background-size: cover;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({
        flex: "1",
        padding: "18px",
        backgroundPosition: "bottom",
    })}
`;

const Form = styled.form`
    height: auto;
    min-width: 350px;
    max-width: 400px;
    padding: 20px;
    display:flex;
    margin: 0 0 50px 0;
    flex-flow: column;
    ${mobile({
        minWidth: "340px",
        maxWidth: "350px",
    })}
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


const Logo = styled.h2`
  font-weight: bold;
  cursor: pointer;
  color: var(--color-orange);
  font-size: 30px;
  margin: 30px 0;
  font-variant: unicase;
`;

const Link = styled.a`
    text-decoration: none;
    font-size: 13px;
    color: blue;
    text-align: left;
    margin-top: 12px;
    margin-left: 12px;
    transition: all 300ms ease;
    &:hover {
        color: var(--color-orange);
    }
`;

class Signup extends Component {
  render() {
    return (
      <Container>
        <FormContainer>
            <Logo>MegaTron</Logo>
            <Form>
                <FormTitle>
                    Login
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
                        <LockOutlined />
                        Password
                        <Important>*</Important>
                    </Label>
                    <Input type="password" placeholder='******' required />
                </InputBox> 
                
                <Words style={{textAlign: "center", margin: "15px"}}>
                    <Important>*</Important>
                    Mandatory Field
                </Words>
                <SendButtom type='submit'>
                <Words>Register</Words>
                </SendButtom>
                <Link>Forgot Password?</Link>
                <Link>New here? Create an account</Link>
            </Form>
        </FormContainer>
        <SideContainer>
            <Logo>WeLcome</Logo>
        </SideContainer>
      </Container>
    )
  }
}

export default Signup;