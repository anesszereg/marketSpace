import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Nav, Row, Tab } from 'react-bootstrap';

const DefaultJustify = () => {
  document.title=" Tabs | Toner eCommerce + React Admin Template";

  return (
    <React.Fragment>
      <div className="page">
        <Breadcrumb breadcrumb="Base UI" breadcrumbItem="Tabs" />
        <Row>
          <Col xxl={6}>
            <h5 className="mb-3">Default Tabs</h5>
            <Card>
              <Card.Body>
                <Tab.Container defaultActiveKey="product1">
                  <p className="text-muted">Use <code>nav-tabs</code> class to generate a default tabbed interface.</p>

                  <Nav as="ul" variant='tabs' className="mb-3">
                    <Nav.Item as="li"> <Nav.Link eventKey="home"> Home </Nav.Link> </Nav.Item>
                    <Nav.Item as="li"> <Nav.Link eventKey="product1"> Product </Nav.Link> </Nav.Item>
                    <Nav.Item as="li"> <Nav.Link eventKey="messages"> Messages </Nav.Link> </Nav.Item>
                    <Nav.Item as="li"> <Nav.Link eventKey="settings"> Settings </Nav.Link> </Nav.Item>
                  </Nav>

                  <Tab.Content className="text-muted">
                    <Tab.Pane eventKey="home" id="home">
                      <h6>Graphic Design</h6>
                      <p className="mb-0">
                        They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. That's why it's important to think about your message, then choose a font that fits. Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="product1" id="product1">
                      <h6>Product</h6>
                      <p className="mb-0">
                        You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary, like sans serif with serif, short with tall, or decorative with simple. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="messages" id="messages">
                      <h6>Messages</h6>
                      <p className="mb-0">
                        Etsy mixtape wayfarers, ethical wes anderson tofu before they
                        sold out mcsweeney's organic lomo retro fanny pack lo-fi
                        farm-to-table readymade. Messenger bag gentrify pitchfork
                        tattooed craft beer, iphone skateboard locavore carles etsy
                        salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="settings" id="settings">
                      <h6>Settings</h6>
                      <p className="mb-0">
                        Trust fund seitan letterpress, keytar raw denim keffiyeh etsy
                        art party before they sold out master cleanse gluten-free squid
                        scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                        art party locavore wolf cliche high life echo park Austin. Cred
                        vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                        farm-to-table VHS.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Card.Body>
            </Card>
          </Col>

          <Col xxl={6}>
            <h5 className="mb-3">Justify Tabs</h5>
            <Card>
              <Card.Body>
                <Tab.Container defaultActiveKey="product">
                  <p className="text-muted">Use <code>nav-justified</code> class to generate equal-width elements with all horizontal space will be occupied by nav links.</p>
                  <Nav as="ul" variant='tabs' className="nav-justified mb-3">
                    <Nav.Item as="li">
                      <Nav.Link eventKey="base-justified-home">
                        Home
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link eventKey="product">
                        Product
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link eventKey="base-justified-messages">
                        Messages
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link eventKey="base-justified-settings">
                        Settings
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className="text-muted">
                    <Tab.Pane eventKey="base-justified-home">
                      <h6>Graphic Design</h6>
                      <p className="mb-0">
                        They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. That's why it's important to think about your message, then choose a font that fits. Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="product">
                      <h6>Product</h6>
                      <p className="mb-0">
                        You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary, like sans serif with serif, short with tall, or decorative with simple. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="base-justified-messages">
                      <h6>Messages</h6>
                      <p className="mb-0">
                        Etsy mixtape wayfarers, ethical wes anderson tofu before they
                        sold out mcsweeney's organic lomo retro fanny pack lo-fi
                        farm-to-table readymade. Messenger bag gentrify pitchfork
                        tattooed craft beer, iphone skateboard locavore carles etsy
                        salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="base-justified-settings">
                      <h6>Settings</h6>
                      <p className="mb-0">
                        Trust fund seitan letterpress, keytar raw denim keffiyeh etsy
                        art party before they sold out master cleanse gluten-free squid
                        scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                        art party locavore wolf cliche high life echo park Austin. Cred
                        vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                        farm-to-table VHS.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

    </React.Fragment>
  )
}

export default DefaultJustify;
