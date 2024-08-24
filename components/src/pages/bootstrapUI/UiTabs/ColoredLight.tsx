import React from 'react';
import { Card, Col, Nav, Row, Tab } from 'react-bootstrap';

// import Images
import avatar1 from "assets/images/users/avatar-1.jpg"
import avatar2 from "assets/images/users/avatar-2.jpg"
import avatar3 from "assets/images/users/avatar-3.jpg"
import avatar4 from "assets/images/users/avatar-4.jpg"

import smallImg4 from 'assets/images/small/img-4.jpg'
import smallImg5 from 'assets/images/small/img-5.jpg'


const ColoredLight = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <h5 className="mb-3">Colored Nav</h5>
                    <Card>
                        <Card.Body>
                            <p className="text-muted">Use <code>nav-custom-</code> class with modifier class to color tabs.</p>
                            <Tab.Container defaultActiveKey="nav-colored-home">
                                <Nav as="ul" variant="pills" className="nav-custom nav-custom-success mb-3" role="tablist">
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="nav-colored-home">
                                            Home
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="nav-colored-profile">
                                            Profile
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="nav-colored-messages">
                                            Messages
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className="text-muted">
                                    <Tab.Pane eventKey="nav-colored-home">
                                        <div className="d-flex mb-3">
                                            <div className="flex-shrink-0">
                                                <img src={avatar2} alt="" className="avatar-md rounded" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                                single-origin coffee squid. Exercitation +1 labore velit, blog
                                                sartorial PBR leggings next level wes anderson artisan four loko
                                                farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean shorts ullamco.
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="flex-grow-1 me-3">
                                                For that very reason, I went on a quest and spoke to many different professional graphic designers and asked them what graphic design tips they live. vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus.
                                            </div>
                                            <div className="flex-shrink-0">
                                                <img src={avatar3} alt="" className="avatar-md rounded" />
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="nav-colored-profile">
                                        <div className="d-flex mb-3">
                                            <div className="flex-shrink-0">
                                                <img src={avatar4} alt="" className="avatar-md rounded" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each. next level wes anderson artisan four loko farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean shorts ullamco.
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="flex-grow-1 me-3">
                                                Experiment and play around with the fonts that you already have in the software you’re working with reputable font websites. commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic.
                                            </div>
                                            <div className="flex-shrink-0">
                                                <img src={avatar1} alt="" className="avatar-md rounded" />
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="nav-colored-messages">
                                        <div className="d-flex mb-3">
                                            <div className="flex-shrink-0">
                                                <img src={avatar4} alt="" className="avatar-md rounded" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin.
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="flex-grow-1 me-3">
                                                Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each assumenda labore aes Homo nostrud organic, assumenda labore aesthetic magna elements, buttons, everything..
                                            </div>
                                            <div className="flex-shrink-0">
                                                <img src={avatar1} alt="" className="avatar-md rounded" />
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>


                <Col xxl={6}>
                    <h5 className="mb-3">Light Nav</h5>
                    <Card>
                        <Card.Body>
                            <p className="text-muted">Use <code>nav-custom-light</code> class to lighten the nav tabs area.</p>
                            <Tab.Container defaultActiveKey="nav-light-home">
                                <Nav as="ul" variant="pills" className="nav-custom nav-custom-light mb-3" role="tablist">
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="nav-light-home">
                                            Home
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="nav-light-profile">
                                            Profile
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="nav-light-messages">
                                            Messages
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className="text-muted">
                                    <Tab.Pane eventKey="nav-light-home">
                                        <div className="d-flex mb-1">
                                            <div className="flex-grow-1 me-3">
                                                Experiment and play around with the fonts that you already have in the software you’re working with reputable font websites. commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus. pposites attract, and that’s a fact. It’s in our nature to be interested in the unusual, and that’s why using contrasting.
                                            </div>
                                            <div className="flex-shrink-0">
                                                <img src={smallImg4} alt="" width="150" className="rounded" />
                                            </div>
                                        </div>
                                        <p className="mb-0"> Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                            single-origin coffee squid. Exercitation +1 labore velit, blog
                                            sartorial PBR leggings next level wes anderson artisan four loko
                                            farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean shorts ullamco.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="nav-light-profile">
                                        <div className="d-flex mb-1">
                                            <div className="flex-grow-1 me-3">
                                                Just like in the image where we talked about using multiple fonts, you can see that the background in this graphic design is blurred. Whenever you put text on top of an image, it’s important that your viewers can understand the text, and sometimes that means applying a gaussian readable Any bypasser will stop to see what you have to see, even if your design has nothing to do with them.
                                            </div>
                                            <div className="flex-shrink-0">
                                                <img src={smallImg5} alt="" width="150" className="rounded" />
                                            </div>
                                        </div>
                                        <p className="mb-0">It makes a statement, it’s impressive graphic design. Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each letter has the perfect spot of its own. commodo enim craft beer mlkshk aliquip jean shorts ullamco.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="nav-light-messages">
                                        <div className="d-flex mb-1">
                                            <div className="flex-grow-1 me-3">
                                                Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin On the note of consistency, color consistency is a MUST. If you’re not trying to create crazy contrast in your design.
                                            </div>
                                            <div className="flex-shrink-0">
                                                <img src={smallImg5} alt="" width="150" className="rounded" />
                                            </div>
                                        </div>
                                        <p className="mb-0">Big July earthquakes confound zany experimental vow. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. try again until it looks right, and each assumenda labore aes Homo nostrud organic, assumenda labore aesthetic magna elements, buttons, everything.</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </React.Fragment>
    )
}

export default ColoredLight