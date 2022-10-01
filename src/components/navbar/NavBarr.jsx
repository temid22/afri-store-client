import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaDev } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetCart } from "../../redux/cartRedux";
import { logout } from "../../redux/userRedux";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  NavbarLogout,
  Logo,
  CartQuantity,
  OpenLinksButton,
  NavbarLinkExtended,
  NavbarLogoutExtended,
} from "../navbar/NavBarStyles";

function Navbarr() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  const cartQuantity = useSelector((state) => state.cart.quantity);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
    window.location = "/";
  };
  const handleClearCart = () => {
    dispatch(resetCart());
  };
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">
              <FaDev /> TD
            </NavbarLink>
            {!currentUser && (
              <>
                <NavbarLink to="/login"> Log In</NavbarLink>
                <NavbarLink to="/signup"> Sign Up</NavbarLink>
              </>
            )}
            <NavbarLink to="/products">All Products</NavbarLink>
            {currentUser && (
              <NavbarLogout onClick={handleClick}> Log Out</NavbarLogout>
            )}
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src="https://dynamic.brandcrowd.com/preview/logodraft/760ee9a2-cfe1-4dc8-a510-0e6ec7b84304/image/large.png"></Logo>
          <Link to="/cart">
            <AiOutlineShoppingCart
              style={{
                height: 25,
                fontSize: 20,
                fontWeight: 600,
                marginTop: 10,
                marginLeft: 5,
                color: "white",
                cursor: "pointer",
              }}
            />
          </Link>
          <CartQuantity>{cartQuantity}</CartQuantity>
          <MdOutlineCancel
            onClick={handleClearCart}
            style={{ color: "orange", marginLeft: "10px" }}
          />
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/">
            {" "}
            <FaDev /> TD
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/products">All Products</NavbarLinkExtended>
          {!currentUser && (
            <>
              {" "}
              <NavbarLinkExtended to="/login"> Login</NavbarLinkExtended>
              <NavbarLinkExtended to="/signup"> SignUp</NavbarLinkExtended>
            </>
          )}
          {currentUser && (
            <NavbarLogoutExtended onClick={handleClick}>
              {" "}
              Log Out
            </NavbarLogoutExtended>
          )}
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbarr;
