import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import telegram from "../../Assets/images/logos/telegram.png";
import twitter from "../../Assets/images/logos/twitter.png";
import discord from "../../Assets/images/logos/discord.png";
import medium from "../../Assets/images/logos/medium.png";
import "./Join.css";

const Join = () => {
  return (
    <>
      <div className="green-block mt-4"></div>
      <Container className="mt-5 text-left">
        <Row className="mt-4">
          <Col>
            <h2>
              <strong>We invite you to join</strong>
            </h2>
          </Col>
        </Row>

        <Row className="ml-5">
          <Col sm={10}>
            <p className="content-text">
              {/* <strong> */}
              Looking to learn more about Cold Truth Culture? No matter where
              you’re from and what your skills are, you can always become part
              of the Community just by joining our social media channels. We
              invite you to explore with us!
              {/* </strong> */}
            </p>
          </Col>
        </Row>
        <Row className="ml-5 content-text">
          <Col lg={5} className="mb-4">
            <a
              href="mailto:crosschainapplications@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="content-text"
              id="footer-email"
            >
              <strong>Email: crosschainapplications@gmail.com</strong>
            </a>
            <ul className="list-unstyled mt-3 ">
              <li className="mt-3">
                <a
                  href="https://t.me/ColdTruthCultureNFTs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={telegram} alt="telegram" /> Telegram
                </a>
              </li>

              <li className="mt-3">
                <a
                  href="https://twitter.com/ColdTruthCult"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={twitter} alt="twitter" /> Twitter
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="https://discord.gg/6sdT77HP9u"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={discord} alt="discord" /> Discord
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="https://medium.com/@ColdTruthCultureNFTs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={medium} alt="medium" /> Medium
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Join;
