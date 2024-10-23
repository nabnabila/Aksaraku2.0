import { Container, Row, Col, Card, Image } from "react-bootstrap";
import wordsearchImage from "../assets/image/wordsearch.png";
import memoryImage from "../assets/image/memory.png";
import imagematchImage from "../assets/image/imagematch.png";
import soundmatchImage from "../assets/image/soundmatch.png";
import aksaramatchImage from "../assets/image/aksaramatch.png";

const Kuisgames = () => {
  return (
    <div className="mode">
      <Container>
        <br />
        <h1 className="mt-5 mb-0 text-center">Kuis</h1>
        <br />
        <Row>
          <Col md={4} id="categories">
            <Card className="modeImage">
              <Image
                src={wordsearchImage}
                alt="Wordsearch"
                className="modeimages"
              />
              <div>
                <div className="p-1 m-1">
                  <Card.Title className="text-center">
                    Nggoleki Tembung
                  </Card.Title>
                </div>
                <div className="text-center">
                  <a href="/games/nggolekitembung" class="btn btn-custom">
                    Mulai
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} id="categories">
            <Card className="modeImage">
              <Image
                src={aksaramatchImage}
                alt="Aksaramatch"
                className="modeimages"
              />
              <div>
                <div className="p-1 m-1">
                  <Card.Title className="text-center">Ngatur Ukara</Card.Title>
                </div>
                <div className=" text-center">
                  <a href="/games/ngaturukara" class="btn btn-custom">
                    Mulai
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} id="categories">
            <Card className="modeImage">
              <Image src={memoryImage} alt="memory" className="modeimages" />
              <div>
                <div className="p-1 m-1">
                  <Card.Title className="text-center">Ngeling-eling</Card.Title>
                </div>
                <div className=" text-center">
                  <a href="/games/memory" class="btn btn-custom">
                    Mulai
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} id="categories">
            <Card className="modeImage">
              <Image
                src={imagematchImage}
                alt="Imagematch"
                className="modeimages"
              />
              <div>
                <div className="p-1 m-1">
                  <Card.Title className="text-center">
                    Nyocokake Gambar
                  </Card.Title>
                </div>
                <div className="text-center">
                  <a href="/games/gambar" class="btn btn-custom">
                    Mulai
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="modeImage">
              <Image
                src={soundmatchImage}
                alt="Soundmatch"
                className="modeimages"
              />
              <div>
                <div className="p-1 m-1">
                  <Card.Title className="text-center">
                    Nyocokake Swara
                  </Card.Title>
                </div>
                <div className="text-center">
                  <a href="/games/swara" class="btn btn-custom">
                    Mulai
                  </a>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="categoryWrapper">
            <Card className="modeImage1">
              <a href="/Homepage">
                <i
                  className="bi bi-arrow-left"
                  style={{ fontSize: "160px", color: "white" }}
                ></i>{" "}
              </a>
              <div>
                <Card.Title className="card-title-back">Pilih Mode</Card.Title>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Kuisgames;
