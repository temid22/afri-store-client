import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { mobile } from "../responsive";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 70px;
  background-color: maroon;
  color: #fff;
  ${mobile({ height: "40px" })};
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  text-align: center;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-self-center;
  align-items: center;
  width: 40%;
  margin-left: 40px;
  padding: 5px;
  border-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 10px;
  background-color: #e3e2df;
  ${mobile({ height: 20, width: 20 })}
`;
const Input = styled.input`
  border: 0;
  border-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  outline: none;
  font-size: 16px;
  padding: 10px;
  height: 5px;
  width: 500px;
  background-color: #e3e2df;
  :hover {
    opacity: 0.5;
  }
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  font-weight: bold;
  display: Flex;
  font-size: 30px;
  ${mobile({ fontSize: "24px" })};
`;
const Image = styled.img`
  display: Flex;
  font-size: 30px;
  height: 50px;
  ${mobile({ display: "none" })};
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
display: flex;
justify-contents: center;
align-items center;
  height: 30px;
  width: 50px;
  font-size: 13px;
  font-weight: 600;
  background-color: gray;
  border: 1px solid black;
  border-radius: 20px;
  cursor: pointer;
  margin-left: 15px;
  color: #cccccc;
  :hover {
    font-size: 13.3px;
    color: #fff;
    transition: all 0.5s ease;
  }

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link style={{ textDecoration: "none" }} to="/">
            <Logo>
              <Image src="https://dynamic.brandcrowd.com/preview/logodraft/760ee9a2-cfe1-4dc8-a510-0e6ec7b84304/image/large.png" />
            </Logo>
          </Link>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search..." />
            <FaSearch
              style={{ color: "maroon", fontSize: 16, cursor: "pointer" }}
            />
          </SearchContainer>
        </Center>
        <Right>
          <Link style={{ textDecoration: "none" }} to="/signup">
            <MenuItem>sign up</MenuItem>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/login">
            <MenuItem> login</MenuItem>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/logout">
            <MenuItem>log out</MenuItem>
          </Link>

          <Link style={{ color: "#fff", textDecoration: "none" }} to="/cart">
            <MenuItem>
              <AiOutlineShoppingCart />
              {quantity}
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
