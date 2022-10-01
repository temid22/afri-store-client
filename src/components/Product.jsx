import styled from "styled-components";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineHeart,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { mobile, tablet } from "../responsive";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  border-radius: 10px;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff4f3;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
  border-radius: 10px;
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
  border-radius: 10px;
  width: 250px;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
  ${mobile({ width: "25px", height: "25px" })}
  ${tablet({ width: "25px", height: "25px" })}
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <AiOutlineShoppingCart />
        </Icon>
        <Icon>
          <NavLink to={`/product/${item._id}`}>
            <AiOutlineSearch />
          </NavLink>
        </Icon>
        <Icon>
          <AiOutlineHeart />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
