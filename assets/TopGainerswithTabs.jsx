<Tab.Container id="left-tabs-example" defaultActiveKey="first">
<div className="row">
  <div className="col-md-12">
    <Nav
      variant="pills"
      className="flex-column- align-items-center border-top-gray-1px py-3"
    >
      {" "}
      <div className="border-top-gray--- pt-3-- d-flex---">
        <h2 className="font-inter upper-title">Top Gainers</h2>
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
  </div>
  <div className="col-md-12">
    <Tab.Content>
      <Tab.Pane eventKey="first">
        <Accordion />
        <div className="col-12">
          <div className="d-flex flex-row bd-highlight mb-3">
            <div className="pe-3">
              <div className="card cardStock">
                <h3>Adani Ports PVT. LTD</h3>
                <div className="mb-0">
                  <h2 className="font-inter">₹994.10</h2>
                  <p className="font-inter mb-0">
                    <img src={Uparrow} alt="down arrow" />
                    1% (₹1.5.00)
                  </p>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
        <p className="mb-0 font-inter time-text">
          Last Updated: May 10, 2022 | 02:45 PM IST
        </p>
      </Tab.Pane>
      <Tab.Pane eventKey="second">
        <Accordion />
        <div className="col-12">
          <div className="d-flex flex-row bd-highlight mb-3">
            <div className="pe-3">
              <div className="card cardStock">
                <h3>Adani Ports PVT. LTD</h3>
                <h2 className="font-inter">₹994.10</h2>
                <p className="mb-0 font-inter">
                  <img src={Uparrow} alt="down arrow" />
                  1% (₹1.5.00)
                </p>
              </div>
            </div>
          </div>
        </div>       
      </Tab.Pane>
    </Tab.Content>
  </div>
</div>
</Tab.Container>