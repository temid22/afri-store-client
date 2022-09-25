import styled from "styled-components";
import Footer from "../components/Footer";
import Navbarr from "../components/navbar/NavBarr";
import GetUpdates from "../components/GetUpdates";
import Promo from "../components/Promo";
import { MdRemove } from "react-icons/md";
import { GrFormAdd } from "react-icons/gr";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { generalRequest } from "../httpService";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 350px;
  height: 40vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 400;
  color: #9a1750;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-size: 16px;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 20px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #9a1750;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 1px;
  cursor: pointer;
  border-radius: 10px;
`;

const FilterSizeOption = styled.option`
  color: #ee4c7c;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 20px;
  border-radius: 10px;
  border: 2px solid #53900f;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 3px;
  border-radius: 50px;
  border: none;
  background-color: #e3afbc;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: maroon;
    color: white;
  }
`;

const Product = ({ type }) => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState({});
  const [size, setSize] = useState({});
  const dispath = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await generalRequest.get("parcel/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const handleButton = () => {
    //update cart
    dispath(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <Container>
      <Navbarr />
      <Promo />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>${product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <MdRemove
                style={{ fontSize: "20px", cursor: "pointer" }}
                onClick={() => handleQuantity("dec")}
              />
              <Amount>{quantity}</Amount>
              <GrFormAdd
                style={{ fontSize: "20px", cursor: "pointer" }}
                onClick={() => handleQuantity("inc")}
              />
            </AmountContainer>
            <Button onClick={handleButton}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <GetUpdates />
      <Footer />
    </Container>
  );
};

export default Product;
