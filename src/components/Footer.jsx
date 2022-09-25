import styled from "styled-components";
import { mobile } from "../responsive";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import { FaDev } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { ImLocation } from "react-icons/im";
import { FcPhone } from "react-icons/fc";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #ffcccb;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-size: 16px;
`;

const Logo = styled.h1`
  color: maroon;
`;

const Desc = styled.p`
  margin: 20px 0px;
  color: maroon;
  font-size: 16px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  flex-wrap: wrap;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  color: maroon;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const LiLink = styled(Link)`
  width: 50%;
  font-size: 16px;
  margin-bottom: 10px;
  color: maroon;
  text-decoration: none;
  :hover {
    text-decoration: underline;
    cursor: pointer;
    color: black;
    opacity: 0.8;
    transition: all 0.5s ease;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  color: maroon;
  ${mobile({ backgroundColor: "#ffcccb" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <FaDev />
          TD
        </Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <TiSocialFacebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <TiSocialInstagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TiSocialTwitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <TiSocialYoutube />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>
          <GoTriangleDown />
        </Title>
        <List>
          <LiLink to="/">Home</LiLink>
          <LiLink to="/cart">Cart</LiLink>
          <LiLink to="/products">Men Fashion</LiLink>
          <LiLink to="/products">Women Fashion</LiLink>
          <LiLink to="/">Profile</LiLink>
          <LiLink to="/">Order Tracking</LiLink>
          <LiLink to="/">Terms&Conditions</LiLink>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <ImLocation style={{ marginRight: "10px" }} /> Sir Matt Busby Way, Old
          Trafford, Stretford, Manchester M16 0RA, United Kingdom
        </ContactItem>
        <ContactItem>
          <FcPhone style={{ marginRight: "10px" }} /> +234 9036378740.
        </ContactItem>
        <ContactItem>
          <MdAlternateEmail style={{ marginRight: "10px" }} /> temid22@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
