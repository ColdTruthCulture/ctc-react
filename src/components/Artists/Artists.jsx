import React from "react";
import { Row, Col, Carousel, Container } from "react-bootstrap";
import "./Artists.css";
import portals from "../../Assets/images/art/artist_portals.png";
import sammyCold from "../../Assets/images/art/artist_sammy_cold.png";
import chomsky from "../../Assets/images/art/artist_chomsky.png";
import sammiches from "../../Assets/images/art/artist_sammiches.png";
import next from "../../Assets/images/misc/next.svg";
import prev from "../../Assets/images/misc/prev.svg";

const Artists = () => {
  return (
    <Row id="artists" className="pb-5">
      <Col>
        <h2>Featured Artists</h2>
        <p className="content-text fw-bold">
          We are here to <span className="truth-green">shape</span> the future
        </p>

        <Carousel
          className="mx-auto"
          nextIcon={<img src={next} alt="previous" />}
          prevIcon={<img src={prev} alt="next" />}
        >
          <Carousel.Item>
            <Container>
              <Row className="artist">
                <Col xs={4} className="my-auto">
                  <img src={portals} alt="portals" className="artist-image" />
                </Col>
                <Col xs={8} className="my-auto">
                  <h5>Portals</h5>
                  <p className="content-text fw-bold">
                    Founder of Cold Truth Culture NFTs, Developer and Music
                    Artist
                  </p>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

          <Carousel.Item>
            <Container>
              <Row className="artist">
                <Col xs={4} className="my-auto">
                  <img
                    src={sammyCold}
                    alt="sammy cold"
                    className="artist-image"
                  />
                </Col>
                <Col xs={8} className="my-auto">
                  <h5>Sammy Cold</h5>
                  <p className="content-text fw-bold">
                    OG Music and Tattoo Artist of Cold Truth Culture, Music
                    Producer, Clothing Designer
                  </p>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row className="artist">
                <Col xs={4} className="my-auto">
                  <img src={chomsky} alt="shomsky" className="artist-image" />
                </Col>
                <Col xs={8} className="my-auto">
                  <h5>Chomsky</h5>
                  <p className="content-text fw-bold">unknown</p>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row className="artist">
                <Col xs={4} className="my-auto">
                  <img
                    src={sammiches}
                    alt="sammiches"
                    className="artist-image"
                  />
                </Col>
                <Col xs={8} className="my-auto">
                  <h5>Sammiches</h5>
                  <p className="content-text fw-bold">
                    Engineer turned NFT Artist of Cold Truth Culture working
                    with programs such as Photoshop, Illustrator, Solidworks and
                    Vizualize
                  </p>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
};

export default Artists;
