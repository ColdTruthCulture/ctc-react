import React from "react";
import { Navbar, Nav, NavDropdown, DropdownButton } from "react-bootstrap";
import { withRouter } from "react-router";
import "./Header.css";
import CTClogoGreen from "../../Assets/images/logos/CTC_logo_text.png";

const Header = (props) => {
  const { location } = props;

  return (
    <Navbar variant="dark" id="navbar" expand="md" collapseOnSelect>
      <Navbar.Brand href="/" className="ml-3">
        <img src={CTClogoGreen} alt="CTC logo" className="mr-3" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" activeKey={location.pathname}>
          <Nav.Link href="/" className="mx-1">
            Home
          </Nav.Link>
          <Nav.Link
            // target="_blank"
            // rel="noreferrer"
            // href="https://app.honeyswap.org/#/swap?inputCurrency=0xEeeeeEEeeEEEEeeEEEEEeeeeeEEe&outputCurrency=0xdbcade285846131a5e7384685eaddbdfd9625557"
            href="/cold"
            className="mx-1"
          >
            $COLD
          </Nav.Link>
          {/* <Nav.Link href="/education" className="mx-1">
            Education
          </Nav.Link> */}
          <Nav.Link href="/rewards" className="mx-1">
            Rewards
          </Nav.Link>

          <Nav.Link href="/about" className="mx-1">
            About
          </Nav.Link>
          <NavDropdown
            title="Join Us"
            menuAlign="right"
            variant="light"
            className="my-auto mx-auto pl-1 pr-2"
          >
            <NavDropdown.Item
              href="https://docs.google.com/forms/d/e/1FAIpQLScK6PevtdYqEQj_MCdLhZHEHRQq1K1ESe8uy79DIcZGDTtSxw/viewform"
              target="_blank"
            >
              Submit Art
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://docs.google.com/forms/d/e/1FAIpQLSdRAzibIq_W8K4i-Pbx4S-P8JgMFizfXcL8M8xP1VBaz0Nykg/viewform"
              target="_blank"
            >
              Request Art
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://discord.gg/6sdT77HP9u"
              target="_blank"
            >
              Discord
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://twitter.com/ColdTruthCult"
              target="_blank"
            >
              Twitter
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://t.me/ColdTruthCultureNFTs"
              target="_blank"
            >
              Telegram
            </NavDropdown.Item>
            <NavDropdown.Item
              href="mailto:crosschainapplications@gmail.com"
              target="_blank"
            >
              Email
            </NavDropdown.Item>
            {/* <NavDropdown.Divider />
            <NavDropdown.Item href="#" target="_blank">
              Governance
            </NavDropdown.Item> */}
          </NavDropdown>

          {/* Farms dropdown links to unifty */}
          <DropdownButton
            title="Farms"
            id="farms-nav-dropdown"
            menuAlign="right"
            variant="light"
            className="my-auto mx-auto "
          >
            <NavDropdown.Item
              // href="https://unifty.io/xdai/farm-view.html?address=0x18D57C5Dfe2e5839AC81630bE7dF359F2d4AE0A6"
              href="https://app.coldtruthculture.io"
              target="_blank"
              rel="noreferrer"
            >
              Farm NFTs
            </NavDropdown.Item>
            <NavDropdown.Item
              // href="https://unifty.io/xdai/farm-view.html?address=0x5d004F2576465aEa90328bCcC219cC8b4873cC53"
              href="https://app.elk.finance/#/elk/0xdbcadE285846131a5e7384685EADDBDFD9625557/0xE1C110E1B1b4A1deD0cAf3E42BfBdbB7b5d7cE1C"
              target="_blank"
              rel="noreferrer"
            >
              Farm ELK
            </NavDropdown.Item>
          </DropdownButton>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const HeaderWithRouter = withRouter(Header);

export default HeaderWithRouter;
