import React from 'react'
import cardimg from "../Assest/5eKX.gif"
import cardimg2 from "../Assest/02f73b4809ae455cbda8ef285c7a46f4.gif";
import cardimg4 from "../Assest/coding.gif";
import slid1 from "../Assest/slide1.png";
import slid2 from "../Assest/slide2.png";
import slid3 from "../Assest/slide3.png";
import slid4 from "../Assest/slide4.png";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import companylogo from "../Assest/CompanyLogos/company logo.png";

const Home = () => {
  return (
    <div className='Home'>
    
    <div className="overlay"></div>

      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="./Pages/About.js">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="./Pages/Learn.js">Learn</Nav.Link>
        </Nav.Item>
      </Nav>

      <div className="content">
        <Carousel>
          <Carousel.Item interval={2250}>
            <img src={slid1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img src={slid2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={2750}>
            <img src={slid3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img src={slid4} alt="Fourth slide" />
          </Carousel.Item>
        </Carousel>

        <div className="getstarted">
          <div className="mb-2">
            <Button href="#" size="lg">
              Start learning
            </Button>{" "}
          </div>
        </div>
        </div>
      {/* content of secend section of Pages */}

      <div className="company-logo">
      <img src={companylogo} alt=""/>
      </div>

        <div className="secend-sec">
      <Container>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cardimg} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
        
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cardimg2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
        
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cardimg4} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go Somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
      </Row>
    </Container>
        </div>
    
    </div>
  )
};

export default Home;