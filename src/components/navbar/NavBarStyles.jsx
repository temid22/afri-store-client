import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100px" : "40px")};
  background-color: maroon;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  z-index: 9999;
  @media (min-width: 700px) {
    height: 40px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  margin-top: 10px;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 8px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-weight: 600;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  :hover {
    color: pink;
    transition: 0.5s ease;
  }
  margin: 10px;
  @media (max-width: 700px) {
    display: none;
  }
`;
export const NavbarLogout = styled.button`
  color: white;
  background-color: maroon;
  border: 0;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  :hover {
    border: 1px solid pink;
    cursor: pointer;
    transition: 0.5s ease;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: 12px;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 5px;
  :hover {
    color: pink;
    transition: 0.5s ease;
  }
`;
export const NavbarLogoutExtended = styled.button`
  color: white;
  background-color: maroon;
  font-weight: 600;
  border: 0;
  border-radius: 50px;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 5px;
  :hover {
    border: 0.5px solid pink;
    cursor: pointer;
    transition: 0, 5s ease;
  }
`;

export const Logo = styled.img`
  margin: 5px;
  max-width: 180px;
  height: 30px;
`;
export const CartQuantity = styled.span`
  color: pink;
`;

export const OpenLinksButton = styled.button`
  width: 40px;
  height: 20px;
  margin-bottom: 18px;
  background none;
  border: none;
  color: #999;
  font-size: 20px;
  cursor: pointer;
  :hover {
    color: white;
  }
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;
