import React from "react";
import { Tab, Row, Nav, Accordion, Col, Container } from "react-bootstrap";
import UpArrow from "./../assets/Uparrow.svg";

const TopGainers = () => {
  return (
    <div className="container">
      <div className="border-top-gray-4px py-2"></div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Row sm={3}>
            <Nav variant="pills" className="flex-column- align-items-center">
              {" "}
              <div className="border-top-gray--- pt-3-- d-flex---">
                <h1>Top Gainers</h1>
              </div>
              <div className="nse-bse-tabs d-flex ms-3">
                <Nav.Item>
                  <Nav.Link eventKey="first">NSE</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">BSE</Nav.Link>
                </Nav.Item>
              </div>
            </Nav>
          </Row>
          <Row sm={9} className="overflowx">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Accordion />
                <div class="col-12">
                  <div class="d-flex flex-row bd-highlight mb-3">
                    <div class="pe-2">
                      <div className="card">
                        <h3>Adani Ports PVT. LTD</h3>
                        <div className="mb-0">
                          <h2>₹994.10</h2>
                          <p>
                            <img src={UpArrow} alt="down arrow" />
                            1% (₹1.5.00)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="pe-2">
                      {" "}
                      <div className="card">
                        <h3>Reliance Industries Ltd</h3>
                        <div className="mb-0">
                          <h2>₹49.00</h2>
                          <p>
                            <img src={UpArrow} alt="down arrow" />
                            3% (₹1.5.00)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="pe-2">
                      {" "}
                      <div className="card">
                        <h3>Tata Power Limited</h3>
                        <div className="mb-0">
                          <h2>₹685.90 </h2>
                          <p>
                            <img src={UpArrow} alt="down arrow" />
                            3% (₹1.5.00)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="pe-2">
                      {" "}
                      <div className="card">
                        <h3>Adani Ports PVT. LTD</h3>
                        <div className="mb-0">
                          <h2>₹149.00</h2>
                          <p>
                            <img src={UpArrow} alt="down arrow" />
                            3% (₹1.5.00)
                          </p>
                        </div>
                      </div>{" "}
                    </div>
                    <div class="pe-2">
                      {" "}
                      <div className="card">
                        <h3>Infosys</h3>
                        <h2>₹1,407.05</h2>
                        <p>
                          <img src={UpArrow} alt="down arrow" />
                          3% (₹1.5.00)
                        </p>
                      </div>
                    </div>
                    <div class="pe-0">
                      {" "}
                      <div className="card">
                        <h3>Kotak Bank</h3>
                        <h2>₹1,926.40</h2>
                        <p>
                          <img src={UpArrow} alt="down arrow" />
                          3% (₹1.5.00)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p>Last Updated: May 10, 2022 | 02:45 PM IST</p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Accordion />
                <div class="col-12">
                  <div class="d-flex flex-row bd-highlight mb-3">
                    <div class="pe-2">
                      <div className="card">
                        <h3>Adani Ports PVT. LTD</h3>
                        <h2>₹994.10</h2>
                        <p>
                          <img src={UpArrow} alt="down arrow" />
                          1% (₹1.5.00)
                        </p>
                      </div>
                    </div>
                    <div class="pe-2">
                      {" "}
                      <div className="card">
                        <h3>Reliance Industries Ltd</h3>
                        <h2>₹49.00</h2>
                        <p>
                          <img src={UpArrow} alt="down arrow" />
                          3% (₹1.5.00)
                        </p>
                      </div>
                    </div>
                    <div class="pe-2">
                      {" "}
                      <div className="card">
                        <h3>Tata Power Limited</h3>
                        <h2>₹685.90 </h2>
                        <p>
                          <img src={UpArrow} alt="down arrow" />
                          3% (₹1.5.00)
                        </p>
                      </div>
                    </div>
                    <div class="pe-2">
                      {" "}
                      <div className="card">
                        <h3>Adani Ports PVT. LTD</h3>
                        <h2>₹149.00</h2>
                        <p>
                          <img src={UpArrow} alt="down arrow" />
                          3% (₹1.5.00)
                        </p>
                      </div>{" "}
                    </div>
                    <div class="pe-2 bg-light">
                      {" "}
                      <div className="card">
                        <h3>Infosys</h3>
                        <h2>₹1,407.05</h2>
                        <p>
                          <img src={UpArrow} alt="down arrow" />
                          3% (₹1.5.00)
                        </p>
                      </div>
                    </div>
                    <div class="pe-0">
                      {" "}
                      <div className="card">
                        <h3>Kotak Bank</h3>
                        <h2>₹1,926.40</h2>
                        <p>
                          <img src={UpArrow} alt="down arrow" />
                          3% (₹1.5.00)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p>Last Updated: May 10, 2022 | 02:45 PM IST</p>
              </Tab.Pane>
            </Tab.Content>
          </Row>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default TopGainers;
