import React, { Component } from 'react';
import styled from 'styled-components';
import { MailLockOutlined, StorefrontOutlined, LockOutlined, LocalShippingOutlined, PersonOutlineOutlined } from '@mui/icons-material';

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
    }
`;

const SideContainer = styled.div`
    flex: 1;
    height: 100%;
    background: linear-gradient(#00000080, #00000080), url("https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80");
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
    margin: 0 0 50px 0;
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
  text-align: center;
`;

const Select = styled.select`
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

`;

const Option = styled.option``;

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
                    Create an Account
                </FormTitle>
                <InputBox>
                    <Label>
                        <PersonOutlineOutlined />
                        Full Name
                        <Important>*</Important>
                    </Label>
                    <Input type="text" placeholder='eg. Mary Antonia' required />
                </InputBox>
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
                <InputBox>
                    <Label>
                        <LockOutlined />
                        Confirm Password
                        <Important>*</Important>
                    </Label>
                    <Input type="password" placeholder='******' required />
                </InputBox>  
                <InputBox>
                    <Label>
                        <LocalShippingOutlined />
                        I represent a:
                        <Important>*</Important>
                    </Label>
                    <Select required>
                        <Option selected disabled>Choose One</Option>
                        <Option>Retail Shop</Option>
                        <Option>Wholesale Shop</Option>
                        <Option>FMCG Manufacturer/Producer</Option>
                        <Option>FMCG Distributor</Option>
                        <Option>Logistics Business</Option>
                        <Option>Other</Option>
                    </Select>
                </InputBox>               
                <InputBox>
                    <Label>
                        <StorefrontOutlined />
                        Company or Shop Name
                    </Label>
                    <Input type="text" placeholder='eg. Hope Ventures' required />
                </InputBox>
                <Label>
                    <Checkbox type="checkbox" required/>
                    <Important>*</Important>
                    <Span> By creating an account, I hereby consent to the data handling and processing policy of Megatron</Span>
                </Label>

                <Words style={{textAlign: "center", margin: "15px"}}>
                    <Important>*</Important>
                    Mandatory Field
                </Words>
                <SendButtom type='submit'>
                <Words>Register</Words>
                </SendButtom>
                <Link>Have an account? Login</Link>
            </Form>
        </FormContainer>
        <SideContainer>
            <Logo>Join a SPeciaL CommuniTY oF 6000+ memBers</Logo>
        </SideContainer>
      </Container>
    )
  }
}

export default Signup;