import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 100vh;
  position: relative;
  background-color: pink;
  ${tablet({ height: "30vh" })};
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  ${mobile({ height: "20vh" })};
  ${tablet({ height: "30vh" })};
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${tablet({ fontSize: 10 })};
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  ${mobile({ fontSize: 20 })};
`;

const Button = styled.button`
  padding: 5px;
  font-size: 15px;
  font-weight: 600;
  background-color: black;
  opacity: 0.5;
  cursor: pointer;
  border-radius: 40%;
  color: #e3e2df;
  :hover {
    opacity: 0.8;
  }
  ${tablet({ fontSize: 10 })};
  ${mobile({ fontSize: 10 })};
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
