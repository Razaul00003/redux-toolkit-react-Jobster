import logo from "../assets/images/logo.svg";
import styled from "styled-components";
const Navbar = () => {
  return (
    <Wrapper>
      <img src={logo} alt="jobster" className="logo" />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  margin-top: 3rem;
`;
export default Navbar;
