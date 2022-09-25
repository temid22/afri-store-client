import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { mobile } from "../../responsive";
import { validate } from "../../Validate";
import { signup } from "../../redux/apiCalls";
import Navbarr from "../../components/navbar/NavBarr";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(167, 134, 201, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://data.whicdn.com/images/273744730/original.jpg") center;
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
  color: gray;
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
  height: 400px;
  margin: 20px;
  border-radius: 55px;
`;

const Input = styled.input`
  font-weight: 900;
  width: 90%;
  margin: 20px;
  height: 40px;
  border-radius: 50px;
  outline: none;
  border-bottom: 3px solid teal;
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
  margin-top: 20px;
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Signup = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);

  const handleSignup = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if (isSubmit === true) {
      signup(dispatch, { ...formValues });
    }
  };

  const handleLogin = () => {
    navigate("/login");
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
                name="username"
                type="text"
                placeholder="username"
                onChange={handleChange}
                value={formValues.username}
              />
              <Error>{formErrors.username}</Error>
              <Input
                name="email"
                placeholder="email"
                type="text"
                onChange={handleChange}
                value={formValues.email}
              />
              <Error>{formErrors.email}</Error>
              <Input
                name="password"
                placeholder="password"
                type="password"
                onChange={handleChange}
                value={formValues.password}
                autoComplete="off"
              />
              <Error>{formErrors.password}</Error>
            </InputContainer>
            <Button onClick={handleSignup} disabled={isFetching}>
              LOGIN
            </Button>
            {error && <Error>Invalid Details!</Error>}

            <Link onClick={handleLogin}>Already registered? Login</Link>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Signup;
