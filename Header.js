import React from "react";
import { Nav, Navbar, NavbarBrand, NavDropdown } from "react-bootstrap";
import Hamburger from "./../../assets/Hamburger.svg";
import Logo from "./../../assets/logo.svg";
import Userprofile from "./../../assets/User-profile.svg";
import Search from "./../../assets/Search.svg";
import Moremenu from "./../../assets/More.svg";
import { MenuSubmenu } from "./MenuSubmenu";
// import { SubMenu } from "./SubMenu";

const Header = () => {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        // sticky="top"
        expand="lg"
        className="d-flex col-lg-12 col-md-12"
      >
        <div className="d-flex col-lg-12 col-12">
          <div className="p-3 d-flex justify-content-start col-lg-2 col-2 icons">
            <img src={Hamburger} alt="Hamburger" />
          </div>
          <div className="d-flex justify-content-center col-lg-8 col-8 align-items-center">
            <NavbarBrand>
              <img src={Logo} alt="react logo" /> Logo
            </NavbarBrand>
          </div>

          <div className="d-flex justify-content-end col-lg-2 col-2 p-3 icons">
            <img
              src={Userprofile}
              alt="userprofile"
              className="p-1 img-fluid"
            />
            <img src={Search} alt="Search" className="p-1 img-fluid" />
          </div>
        </div>
      </Navbar>
      <div className="nav-scroller bg-white">
        <nav className="nav nav-underline border-top border-bottom align-items-center">
          <Navbar>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-start">
              {/* {MenuSubmenu.map((menu, index) => {
                return (
                  <>
                    <Nav key={index}>
                      <Nav.Link href={menu.path}>{menu.title}</Nav.Link>
                    </Nav>
                  </>
                );
              })} */}

              <Nav.Link path="#" className="active">
                Home
              </Nav.Link>
              <Nav.Link path="#">Latest</Nav.Link>
              <Nav.Link path="#">Market</Nav.Link>
              <Nav.Link path="#">Premium</Nav.Link>
              <Nav.Link path="#">Companies</Nav.Link>
              <Nav.Link path="#">Industry</Nav.Link>
              <Nav.Link path="#">Opnion</Nav.Link>
              <Nav.Link path="#">Technology</Nav.Link>
              <Nav.Link path="#">Finance</Nav.Link>
              <Nav.Link path="#">Economy</Nav.Link>
              <Nav.Link path="#">
                More <img src={Moremenu} alt="More menu" />
              </Nav.Link>

              <button
                type="button"
                class="btn btn-danger d-none d-lg-block d-xl-block"
              >
                Subscription
              </button>
            </Navbar.Collapse>
          </Navbar>
        </nav>
      </div>
      {/* Product submenu comes here */}
      {/* <Nav key={index}> */}
      {/* <NavDropdown title="products">
          {SubMenu.map((smenu, index) => {
            return (
              <>
                <Nav.Link href={smenu.path}>{smenu.title}</Nav.Link>
              </>
            );
          })}
        </NavDropdown> */}
      {/* </Nav> */}
      {/* End of Product submenu comes here */}
    </>
  );
};

export default Header;
