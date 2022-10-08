import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "../components";
import notFound from "../assets/images/pageNotFound.svg";
const Error = () => {
  return (
    <Wrapper className="section ">
      <Navbar />
      <div className="section-center error">
        <img src={notFound} alt="page not found" className="not-found" />
        <br />
        <Link to="/" className="btn">
          Back to Home{" "}
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  align-items: center;
  color: var(--primary-color);

  .error {
    height: 50vh;
    margin: auto;
  }
  .error-img-container {
  }
  .not-found {
    max-height: 50vh;
    max-width: 100%;
    margin-bottom: 4rem;
  }
`;

export default Error;
