import { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/images/logo.svg";
import { FormRow } from "../components";
const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: true,
  };
  const [value, setValue] = useState(initialState);
  const handleChange = (e) => {};
  const toggleMember = () => {
    setValue({ ...value, isMember: !value.isMember });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <img src={Logo} alt="jobster logo" />
          <h3>{value.isMember ? "Login" : "Register"}</h3>
        </div>
        {!value.isMember ? (
          <FormRow
            type="text"
            name="name"
            value={value.name}
            handleChange={handleChange}
            labelText="Name"
          />
        ) : null}

        <FormRow
          type="email"
          name="email"
          value={value.email}
          handleChange={handleChange}
          labelText="Email"
        />
        <FormRow
          type="password"
          name="password"
          value={value.password}
          handleChange={handleChange}
          labelText="Password"
        />
        <button className="btn btn-block" type="submit">
          {value.isMember ? "Login" : "Register"}
        </button>
        {!value.isMember ? (
          <button onClick={toggleMember} className="member-btn">
            Existing member? <span className="text-color-primary">Login</span>
          </button>
        ) : (
          <button onClick={toggleMember} className="member-btn">
            Not a member yet? <span className="text-color-primary">Signup</span>
          </button>
        )}
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  form {
    border-top: 5px solid var(--primary-500);
    text-align: center;
    label {
      text-align: left;
    }
  }
`;
export default Register;
