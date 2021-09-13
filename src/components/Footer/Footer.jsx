import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CTClogoText from "../../Assets/images/logos/CTC_logo_text.png";
import telegram from "../../Assets/images/logos/telegram.png";
import twitter from "../../Assets/images/logos/twitter.png";
import discord from "../../Assets/images/logos/discord.png";
import medium from "../../Assets/images/logos/medium.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <Container fluid className="pt-5 pb-5 mt-5">
        <Row>
          <Col xl={5}>
            <Row>
              <Col sm={7} className="mb-5">
                <a href="/" className="">
                  <img src={CTClogoText} alt="CTC logo" className="mr-3" />
                </a>
              </Col>
              <Col
                sm={5}
                className="content-text text-left d-flex justify-content-around mb-4"
              >
                <Row>
                  <Col xs={6}>
                    <Link to="/">Home</Link>
                  </Col>
                  <Col xs={6}>
                    <Link to="/about">About</Link>
                  </Col>
                  <Col xs={6}>
                    {/* <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://app.honeyswap.org/#/swap?inputCurrency=0xEeeeeEEeeEEEEeeEEEEEeeeeeEEe&outputCurrency=0xdbcade285846131a5e7384685eaddbdfd9625557"
                    >
                      $COLD
                    </a> */}
                    <Link to="/cold">$Cold</Link>
                  </Col>
                  <Col xs={6}>
                    <Link to="/education">Education</Link>
                  </Col>
                  <Col xs={6}>
                    <Link to="/rewards">Rewards</Link>
                  </Col>
                  <Col xs={6}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      // href="https://unifty.io/xdai/market-view.html?location=0x3DC29eafeE1e21A122ad17173F927980D1863529"
                    href="https://app.coldtruthculture.io/"
                    >
                      Marketplace
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

          <Col xl={7}>
            <Row>
              <Col lg={7} className="text-left">
                <h5>We invite you</h5>
                <p className="content-text">
                  Looking to learn more about Cold Truth Culture? No matter
                  where you’re from and what's your skills are, you can always
                  become part of the Community just by joining our social media
                  channels. We invite you to explore with us!
                </p>
              </Col>
              <Col lg={5} className="mb-4">
                <a
                  href="mailto:crosschainapplications@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="content-text"
                  id="footer-email"
                >
                  <strong>crosschainapplications@gmail.com</strong>
                </a>
                <Container className="d-flex justify-content-around mt-3">
                  <a
                    href="https://t.me/ColdTruthCultureNFTs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={telegram} alt="telegram" />
                  </a>
                  <a
                    href="https://twitter.com/ColdTruthCult"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={twitter} alt="twitter" />
                  </a>
                  <a
                    href="https://discord.gg/6sdT77HP9u"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={discord} alt="discord" />
                  </a>
                  <a
                    href="https://medium.com/@ColdTruthCultureNFTs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={medium} alt="medium" />
                  </a>
                </Container>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
