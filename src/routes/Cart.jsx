import styled from "styled-components";
import Promo from "../components/Promo";
import Footer from "../components/Footer";
import Navbarr from "../components/navbar/NavBarr";
import { MdRemove } from "react-icons/md";
import { GrFormAdd } from "react-icons/gr";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../httpService";
import { useNavigate } from "react-router";
import { resetCart } from "../redux/cartRedux";
import { BsArrowLeftCircle } from "react-icons/bs";

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 600;
  color: maroon;
  font-size 20px;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
`;

const TopButton = styled.button`
  padding: 5px;
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "navy" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  :hover {
    background-color: green;
    transition: 0.5s ease;
  }
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.div`
  text-decoration: none;
  cursor: pointer;
  margin: 0px 10px;
  :hover {
    color: maroon;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;

  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  height: 100px;
  width: 100px;
  border: none;
  border-radius: 50px;
`;

const Details = styled.div`
  font-size: 14px;
  margin: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
  font-size: 14px;
  margin: 2px;
`;

const ProductId = styled.span`
  font-size: 12px;
  margin: 2px;
`;

const ProductColor = styled.div`
  margin: 2px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span`
  font-size: 12px;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 20px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  font-size: 12px;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "20px"};
`;

const SummaryItemText = styled.span`
  color: black;
  font-size: 13px;
`;

const SummaryItemPrice = styled.span`
  color: black;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: navy;
  color: white;
  font-size: 10px;
  font-weight: 600;
  border-radius: 50px;
  :hover {
    cursor: pointer;
    background-color: green;
    transition: 0.5s ease;
  }
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const items = useSelector((state) => state.cart.products);

  const [stripeToken, setStripeToken] = useState();
  const cartQuantity = useSelector((state) => state.cart.quantity);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        navigate.push("/success", {
          stripeData: res.data,
          products: cart,
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, cart, navigate]);

  const handleNavigate = () => {
    navigate("/success");
  };
  const handleAddMore = () => {
    navigate("/products");
  };

  const handleClick = () => {
    dispatch(resetCart());
  };

  return (
    <Container>
      <Navbarr />
      <Promo />
      <Wrapper>
        <Title>MY CART</Title>
        <Top>
          <TopButton
            style={{
              color: "black",
              backgroundColor: "transparent",
              fontSize: 16,
            }}
            onClick={handleAddMore}
          >
            <BsArrowLeftCircle />
            Add More
          </TopButton>
          <TopTexts>
            <TopText>Bag({cartQuantity})</TopText>
            <TopText>Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled" onClick={handleNavigate}>
            Order
          </TopButton>
          <TopButton
            style={{ backgroundColor: "maroon", color: "whitesmoke" }}
            onClick={handleClick}
          >
            Clear Cart
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {items.map(
              ({ title, _id, size, color, quantity, price, img }, index) => (
                <Product key={index}>
                  <ProductDetail>
                    <Image src={img} />
                    <Details>
                      <ProductName>
                        <b></b> {title}
                      </ProductName>
                      <ProductId>
                        <b>id:</b> {_id}
                      </ProductId>
                      <ProductColor color={color} />
                      <ProductSize>
                        <b>size:</b> {size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <GrFormAdd style={{ cursor: "pointer" }} />
                      <ProductAmount>{quantity}</ProductAmount>
                      <MdRemove style={{ cursor: "pointer" }} />
                    </ProductAmountContainer>
                    <ProductPrice>${price * quantity}</ProductPrice>
                  </PriceDetail>
                </Product>
              )
            )}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Lama Shop"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
