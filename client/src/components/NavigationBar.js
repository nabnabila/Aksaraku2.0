import { Container, NavbarBrand } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div className="navbar-container">
      <Container className="d-flex justify-content-center align-items-center">
        <a className="navbarbrand" href="/">
          <NavbarBrand>AksaraKU</NavbarBrand>
        </a>
      </Container>
    </div>
  );
};

export default NavigationBar;
