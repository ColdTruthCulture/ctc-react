import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import "./Rewards.css";

const Rewards = () => {
  return (
    <>
      <div className="green-block mt-4"></div>
      <Container className="mt-5 text-left">
        <Row className="mt-4">
          <Col>
            <h2>
              <strong>How to earn Rewards?</strong>
            </h2>
          </Col>
        </Row>
        <Row className="ml-5">
          <Col sm={10}>
            <p className="content-text">
              {/* <strong> */}
              The Cold Truth Culture Rewards Program will be revised by our
              governance council every 12 weeks and adjusted for best results
              and ongoing sustainability.
              {/* </strong> */}
            </p>
          </Col>
        </Row>
        <div className="bg-green">
          <p>
            To earn Cold Truth Cashback deposit COLD or LP tokens into any of 
            the farms listed below and use the points that you accumulate to 
            redeem NFTs. CTC will airdrop COLD to your wallet address at the 
            percentage rates listed below relative to the artist fee paid per 
            farm and the price of COLD.
            
          </p>
        </div>

        <Row className="ml-5">
          <Col md={8} className="mx-auto">
            <h5 className="mt-4">Rewards Table</h5>
            <Table striped bordered hover responsive="md">
              <thead>
                <tr>
                  <th>Farm</th>
                  <th>Reward</th>
                </tr>
              </thead>
              <tbody className="content-text">
                <tr>
                  <td>
                    <a
                      href="https://app.coldtruthculture.io/farm-view.html?address=0x4C0dB34dDfe13C86863c363b03d933f80599a3BD"
                      target="_blank"
                      rel="noreferrer"
                      style={{textDecoration:'underline'}}
                    >
                      Ice Cold OGs
                    </a>
                  </td>
                  <td>50% Cold Truth Cashback</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://app.coldtruthculture.io/farm-view.html?address=0x305dc5048d9680d8b93a60Fd9f0054Bb0F6C5B19"
                      target="_blank"
                      rel="noreferrer"
                      style={{textDecoration:'underline'}}
                    >
                      Music
                    </a>
                  </td>
                  <td>60% Cold Truth Cashback</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://app.coldtruthculture.io/farm-view.html?address=0x5d004F2576465aEa90328bCcC219cC8b4873cC53"
                      target="_blank"
                      rel="noreferrer"
                      style={{textDecoration:'underline'}}
                    >
                      NSFW
                    </a>
                  </td>
                  <td>60% Cold Truth Cashback</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://app.coldtruthculture.io/farm-view.html?address=0x18D57C5Dfe2e5839AC81630bE7dF359F2d4AE0A6"
                      target="_blank"
                      rel="noreferrer"
                      style={{textDecoration:'underline'}}
                    >
                      Music LP
                    </a>
                  </td>
                  <td>75% Cold Truth Cashback</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://app.coldtruthculture.io/farm-view.html?address=0xFcf213136b9D48d210AA79B7F372e6e63BDF2737"
                      target="_blank"
                      rel="noreferrer"
                      style={{textDecoration:'underline'}}
                    >
                      Collective LP
                    </a>
                  </td>
                  <td>75% Cold Truth Cashback</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://app.coldtruthculture.io/farm-view.html?address=0xb474F405F0DF84fbe57751Af0CB1AE534f5639b5"
                      target="_blank"
                      rel="noreferrer"
                      style={{textDecoration:'underline'}}
                    >
                      HNY Rare LP
                    </a>
                  </td>
                  <td>75% Cold Truth Cashback</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://app.coldtruthculture.io/farm-view.html?address=0x6Db5CfE5c9107C348cB863B64f8A2066CCC68982"
                      target="_blank"
                      rel="noreferrer"
                      style={{textDecoration:'underline'}}
                    >
                      Ice Cold Rare LP
                    </a>
                  </td>
                  <td>75% Cold Truth Cashback</td>
                </tr>
              </tbody>
            </Table>
            <p>Payments to be distributed monthly using Colony</p>
          </Col>

          <Col md={4}>
            <h5 className="mt-4">Bonus Events</h5>
            <ul className="list-unstyled content-text">
              <li>Coming Soon</li>
            </ul>
          </Col>
        </Row>

        <Row className="ml-5">
          <Col>
            <div className="bg-gray py-2 px-4">
              <p>
                Example:
                <span className="content-text">
                  {" "}
                  At the end of the month the collector has farmed the
                  following:
                </span>
              </p>
              <ul className="list-unstyled content-text">
                <li>Ice Cold OGs - 1x NFT for 1.50 xDAI each (50%) = 9.375 COLD</li>
                <li>The Collective LP - 4x NFT for 3.50 xDAI each (75%) = 131.25 COLD</li>
                <li>
                  The average price of COLD for that month was $0.08
                </li>
              </ul>
              <p className="content-text">
                Total Cold Truth Cashback = 140.625 COLD

              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Rewards;
