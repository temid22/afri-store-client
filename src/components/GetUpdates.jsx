import React from "react";
import styled from "styled-components";
import { IoMdSend } from "react-icons/io";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ height: "30vh" })}
  ${tablet({ height: "30vh" })}
`;
const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  color: maroon;
  ${mobile({ fontSize: 25 })};
  ${tablet({ fontSize: 25 })};
`;

const Desc = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
  font-style: italic;
  ${mobile({ textAlign: "center", fontSize: 12 })}
  ${tablet({ textAlign: "center", fontSize: 12 })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  border: 0.5px solid lightgray;
  align-items: center;
  margin-left: 40px;
  padding: 2px;
  border-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: transparent;
  ${mobile({ width: "80%", marginRight: 40, height: "30px" })};
  ${tablet({ width: "80%", marginRight: 40, height: "30px" })};
`;

const Input = styled.input`
  flex: 8;
  height: 30px;
  padding-left: 20px;
  border: 0;
  border-radius: 10px;
  outline: none;
  font-weight: 600;
  :hover {
    opacity: 0.7;
  }
  ${mobile({ height: "20px" })};
  ${tablet({ height: "20px" })};
`;
const Button = styled.button`
  flex: 1;
  border: none;
  border-radius: 50px;
  background-color: gray;
  color: #fff;
  :hover {
    cursor: pointer;
    opacity: 0.8;
    background-color: maroon;
    color: #fff;
    height: 30px;
    transition: all 0.5s ease;
  }
`;

const GetUpdates = () => {
  return (
    <Container>
      <Title>Updates and Offers</Title>
      <Desc>
        Get timely updates from your favorite products with awoof rates(ole).
      </Desc>
      <InputContainer>
        <Input placeholder="email..." />
        <Button>
          <IoMdSend />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default GetUpdates;
