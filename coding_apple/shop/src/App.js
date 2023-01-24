import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import bg from "./img/son.jpg";
import data from "./data";

import { useState } from "react";

function App() {
  const [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shoe Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Cart">Cart</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>
      {/* <Button variant="primary">Primary</Button> */}
      <Container className="container">
        <Row className="row">
          {shoes.map((shoe, idx) => {
            return <Item shoe={shoe} idx={idx + 1} />;
          })}
        </Row>
      </Container>
    </div>
  );
}

const Item = ({ shoe, idx }) => {
  return (
    <Col className="col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + idx + ".jpg"}
        width="80%"
        alt="shoes1"
      />
      <h4>{shoe.title}</h4>
      <p>{shoe.price}</p>
    </Col>
  );
};

export default App;
