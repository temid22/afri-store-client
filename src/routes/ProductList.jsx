import styled from "styled-components";
import Navbarr from "../components/navbar/NavBarr";
import Promo from "../components/Promo";
import Products from "../components/Products";
import GetUpdates from "../components/GetUpdates";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  color: maroon;
  font-size: 16px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-right: 20px;
  color: gray;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  border: 0;
  outline: none;
  color: gray;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option`
  background-color: none;
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filtered, setFiltered] = useState({});
  const [sorted, setSorted] = useState("newest");

  const handleFiltered = (e) => {
    const value = e.target.value;
    setFiltered({
      ...filtered,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbarr />
      <Promo />
      <Title style={{ color: "gray" }}>PRODUCTS</Title>
      <Title>{cat} Fashion</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter</FilterText>
          <Select name="color" onChange={handleFiltered}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={handleFiltered}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort</FilterText>
          <Select onChange={(e) => setSorted(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filtered={filtered} sorted={sorted} />
      <GetUpdates />
      <Footer />
    </Container>
  );
};

export default ProductList;
