import { Container, Row, Col } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="d-flex justify-content-left align-items-left">
        <Row>
          <Col>
            <div className="title">Ayo Belajar</div>
            <div className="title1">Carakan</div>
            <div className="note">Kenalan sama aksara Jawa</div>
            <div className="note">yang terlihat indah ini yuk!</div>
          </Col>
        </Row>
      </Container>
      ;
    </div>
  );
};

export default Intro;
