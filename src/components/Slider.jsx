import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { sliderItems } from "../data";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: #e3e2df;
`;

const Arrow = styled.div`
  width: 30px;
  height: 50px;
  background-color: #9a1750;
  color: #e3e2df;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  :hover {
    opacity: 0.8;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
  color: #9a1750;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 5px;
  font-weight: 600;
  font-size: 10px;
  background-color: maroon;
  opacity: 0.5;
  cursor: pointer;
  border: 0;
  border-radius: 50px;
  color: #e3e2df;
  :hover {
    color: #fff;
    opacity: 0.9;

    transition: all 0.5s ease;
  }
  @media (min-width: 900px) {
    margin-right: 20px;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  const navigate = useNavigate();
  const handleProducts = () => {
    navigate("/products");
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <BsArrowLeftCircle />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.path} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button onClick={handleProducts}>shop now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <BsArrowRightCircle />
      </Arrow>
    </Container>
  );
};

export default Slider;
