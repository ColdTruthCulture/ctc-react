import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./Hero.css";
import cat from "../../Assets/images/art/cat.png";
import yinyang from "../../Assets/images/art/yinyang.png";
import tv from "../../Assets/images/art/tv.png";

const Hero = () => {
  return (
    <>
      <Row id="hero" className="justify-content-lg-center">
        <Container>
          <Row>
            <Col lg="auto" id="hero-body">
              <h1>Cold Truth Culture —</h1>
              <h2>
                A Community That <br />
                Empowers NFT Artists
              </h2>

              <Button
                href="https://app.coldtruthculture.io/market-view.html?location=0x3DC29eafeE1e21A122ad17173F927980D1863529"
                target="_blank"
                rel="noreferrer"
                className="light-button mt-4"
              >
                Marketplace
              </Button>

              <Button
                href="https://medium.com/@ColdTruthCultureNFTs"
                target="_blank"
                rel="noreferrer"
                className="light-button mt-4 ml-5"
              >
                Learn more
              </Button>
            </Col>
            <Col className="featured-art-container">
              <Container id="hero-art">
                <img
                  src={cat}
                  alt="cat"
                  id="hero-cat"
                  className="img-move img-fluid"
                />
                <img
                  src={yinyang}
                  alt="yin yang"
                  id="hero-yinyang"
                  className="img-move img-fluid"
                />
                <img
                  src={tv}
                  alt="tv"
                  id="hero-tv"
                  className="img-move  img-fluid"
                />
              </Container>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row>
        <Col id="hero-footer" className="align-left text-left">
          <div className="marquee">
            <div className="track">
              &nbsp;COLD TRUTH CULTURE COLD TRUTH CULTURE COLD TRUTH CULTURE
              COLD TRUTH CULTURE COLD TRUTH CULTURE COLD TRUTH CULTURE COLD TRUTH CULTURE COLD TRUTH CULTURE
              COLD TRUTH CULTURE COLD TRUTH CULTURE
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Hero;
