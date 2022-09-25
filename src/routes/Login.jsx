import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbarr from "../components/navbar/NavBarr";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(167, 134, 201, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.pinimg.com/originals/9f/6b/11/9f6b11c62e1a61a4ad66e8f3ac729d1d.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: hidden;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  width: 400px;
  padding: 20px;
  margin-bottom: 100px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 900;
  color: teal;
  margin-bottom: 10px;
  display flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const InputContainer = styled.div`
  width: 100%;
  height: 55px;
  margin: 20px;
  border-radius: 55px;
`;

const Input = styled.input`
  font-weight: 900;
  width: 90%;
  margin: 10px;
  height: 40px;
  border-radius: 50px;
  outline: none;
  border-bottom: 3px solid maroon;
  border-top: 1px solid maroon;
  background-color: transparent;
  color: black;
  caret-color: purple;
  :hover {
  }
`;

const Button = styled.button`
  width: 25%;
  border: 0;
  margin-top: 70px;
  display: flex;
  justify-content: center;
  border-radius: 40px;
  padding: 15px 15px;
  background-color: none;
  color: teal;
  cursor: pointer;
  margin-bottom: 10px;
  opacity: 0.8;
  :hover {
    background-color: none;
    opacity: 1;
    color: teal;
    font-weight: 900;
  }
  &:disabled {
    background-color: none;
    color: teal;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: none;
  color: #000;
  font-weight: 600;
  cursor: pointer;
  :hover {
    color: teal;
  }
`;
const Error = styled.span`
  color: red;
  font-size: 12px;
  font-weight: 600;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  const handleForgot = () => {
    navigate("/");
  };
  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <Navbarr />
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <InputContainer>
              <Input
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
              />
            </InputContainer>
            <Button onClick={handleLogin} disabled={isFetching}>
              LOGIN
            </Button>
            {error && <Error>Invalid username or password!</Error>}
            <Link
              style={{ color: "maroon", textDecoration: "underline" }}
              onClick={handleForgot}
            >
              Forgot password?
            </Link>
            <Link onClick={handleSignup}>Don't have an account? Register</Link>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
