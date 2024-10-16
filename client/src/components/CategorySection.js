import { Card, Container, Row, Col, Image } from "react-bootstrap";
import NglegenaImage from "../assets/image/Nglegena.png";
import Pasangan1Image from "../assets/image/Pasangan.png";
import MurdaImage from "../assets/image/Murda.png";
import Pasangan2Image from "../assets/image/Pasangan2.png";
import Sandhangan1Image from "../assets/image/Sandhangan1.png";
import KuisImage from "../assets/image/Kuis.png";

const CategorySection = () => {
  return (
    <div className="category">
      <Container>
        <br />
        <h1></h1>
        <h2 className="text-center">KATEGORI</h2>
        <br />
        <Row>
          <Col md={4} id="categories">
            <Card className="categoryImage">
              <Image
                src={NglegenaImage}
                alt="Nglegena Image"
                className="images"
              />
              <div>
                <div className="p-2 m-2">
                  <Card.Title className="text-center">
                    Aksara Nglegena
                  </Card.Title>
                </div>
                <div className="p-1 m-1 text-center">
                  <a href="/aksaranglegena" class="btn btn-custom">
                    Mulai
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="categoryImage">
              <Image
                src={Pasangan1Image}
                alt="Pasangan Aksara Nglegena"
                className="images"
              />
              <div>
                <div className="p-2 m-2">
                  <Card.Title className="text-center">
                    Pasangan Aksara Nglegena
                  </Card.Title>
                </div>
                <div className="p-1 m-1 text-center">
                  <a href="/pasanganaksaranglegena" class="btn btn-custom">
                    Mulai
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="categoryImage">
              <Image src={MurdaImage} alt="Aksara Murda" className="images" />
              <div>
                <div className="p-2 m-2">
                  <Card.Title className="text-center">Aksara Murda</Card.Title>
                </div>
                <div className="p-1 m-1 text-center">
                  <a href="/aksaramurda" class="btn btn-custom">
                    Mulai
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="categoryImage">
              <Image
                src={Pasangan2Image}
                alt="Pasangan Aksara Murda"
                className="images"
              />
              <div>
                <div className="p-2 m-2">
                  <Card.Title className="text-center">
                    Pasangan Aksara Murda
                  </Card.Title>
                </div>
                <div className="p-1 m-1 text-center">
                  <a href="/pasanganaksaramurda" class="btn btn-custom">
                    Mulai
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="categoryImage">
              <Image
                src={Sandhangan1Image}
                alt="Sandhangan I"
                className="images"
              />
              <div>
                <div className="p-2 m-2">
                  <Card.Title className="text-center">Sandhangan</Card.Title>
                </div>
                <div className=" p-1 m-1 text-center">
                  <a href="/sandhangan1" class="btn btn-custom">
                    Mulai
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="categoryImage">
              <Image src={KuisImage} alt="KuisImage" className="images" />
              <div>
                <div className="p-2 m-2">
                  <Card.Title className="text-center">Games</Card.Title>
                </div>
                <div className=" p-1 m-1 text-center">
                  <a href="/games" class="btn btn-custom">
                    Mulai
                  </a>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategorySection;
