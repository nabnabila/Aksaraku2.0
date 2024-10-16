import { Container, Row, Col, Card, Image } from "react-bootstrap";
import level1image from "../assets/image/level1.png";
import level2image from "../assets/image/level2.png";
import level3image from "../assets/image/level3.png";
import level4image from "../assets/image/level4.png";
import level5image from "../assets/image/level5.png";

const PilihanKuis3 = () => {
  return (
    <div className="mode">
      <Container>
        <br />
        <h1 className="mt-5 mb-0 text-center">Memory Games</h1>
        <br />
        <Row>
          <Col md={4} id="categories">
            <Card className="modeImage">
              <Image src={level1image} alt="level1" className="modeimages" />
              <div>
                <div className="text-center">
                  <a href="/games/memory/1" class="btn btn-custom">
                    Mulai
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} id="categories">
            <Card className="modeImage">
              <Image src={level2image} alt="level2" className="modeimages" />
              <div>
                <div className=" text-center">
                  <a href="/games/memory/2" class="btn btn-custom">
                    Mulai
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} id="categories">
            <Card className="modeImage">
              <Image src={level3image} alt="level3" className="modeimages" />
              <div>
                <div className=" text-center">
                  <a href="/games/memory/3" class="btn btn-custom">
                    Mulai
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} id="categories">
            <Card className="modeImage">
              <Image src={level4image} alt="level4" className="modeimages" />
              <div>
                <div className="text-center">
                  <a href="/games/memory/4" class="btn btn-custom">
                    Mulai
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="modeImage">
              <Image src={level5image} alt="level5" className="modeimages" />
              <div>
                <div className="text-center">
                  <a href="/games/memory/5" class="btn btn-custom">
                    Mulai
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="categoryWrapper">
            <Card className="modeImage1">
              <a href="/games">
                <i
                  className="bi bi-arrow-left"
                  style={{ fontSize: "160px", color: "white" }}
                ></i>{" "}
              </a>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PilihanKuis3;
