import React from 'react';
import { Card, Col, Nav, Row, Tab } from 'react-bootstrap';

// import Images
import img3 from 'assets/images/small/img-3.jpg'
import img4 from 'assets/images/small/img-4.jpg'
import img5 from 'assets/images/small/img-5.jpg'
import img6 from 'assets/images/small/img-6.jpg'
import img7 from 'assets/images/small/img-7.jpg'
import img8 from 'assets/images/small/img-8.jpg'


const CustomHoverVertical = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <h5 className="mb-3">Custom Hover Tabs</h5>
                    <Card>
                        <Tab.Container defaultActiveKey="custom-hover-customere">
                            <Card.Body>
                                <p className="text-muted">Use <code>custom-hover-nav-tabs</code> class to create custom hover tabs.</p>
                            </Card.Body>
                            <div className="border">
                                <Nav as="ul" variant='pills' className="custom-hover-nav-tabs">
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="custom-hover-customere">
                                            <i className="ri-user-fill nav-icon nav-tab-position"></i>
                                            <h5 className="nav-titl nav-tab-position m-0">Customer</h5>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="custom-hover-description">
                                            <i className="ri-file-text-line nav-icon nav-tab-position"></i>
                                            <h5 className="nav-titl nav-tab-position m-0">Description</h5>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="custom-hover-reviews">
                                            <i className="ri-star-half-line nav-icon nav-tab-position"></i>
                                            <h5 className="nav-titl nav-tab-position m-0">Reviews</h5>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <Card.Body>
                                <Tab.Content className="text-muted">
                                    <Tab.Pane eventKey="custom-hover-customere">
                                        <h6>Customer Details</h6>
                                        <div className="table-responsive">
                                            <table className="table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Address</th>
                                                        <th scope="col">Country</th>
                                                        <th scope="col">Pincode</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Ruby Butcher</td>
                                                        <td>412 Rosewood Lane</td>
                                                        <td>New York</td>
                                                        <td>10019</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Martha T Goldberg</td>
                                                        <td>2760 Clarksburg Park Road</td>
                                                        <td>Arizona</td>
                                                        <td>86038</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="custom-hover-description">
                                        <h6>Description</h6>
                                        <div className="table-responsive">
                                            <table className="table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Title</th>
                                                        <th scope="col">Categories</th>
                                                        <th scope="col">Author</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Building Web Apps With Wordpress</td>
                                                        <td>Web, Wordpress, Design</td>
                                                        <td>Lucia Victor</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Information Technology</th>
                                                        <td>Management, Manager, Design</td>
                                                        <td>Arora Sumita</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="custom-hover-reviews">
                                        <h6>Customer Reviews</h6>
                                        <div className="table-responsive">
                                            <table className="table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Location</th>
                                                        <th scope="col">Amount</th>
                                                        <th scope="col">Ratings</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Luke Brown</td>
                                                        <td>New York</td>
                                                        <td>$745</td>
                                                        <td>4.4 <i className="ri-star-s-fill ms-1 text-warning align-middle"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Matilda Walker</td>
                                                        <td>USA</td>
                                                        <td>$87.125</td>
                                                        <td>2.7 <i className="ri-star-s-fill ms-1 text-warning align-middle"></i></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                        </Tab.Container>
                    </Card>
                </Col>


                <Col xxl={6}>
                    <h5 className="mb-3">Custom Vertical Tabs</h5>
                    <Card>
                        <Card.Body>
                            <p className="text-muted">Use <code>custom-verti-nav-pills</code> class to create custom vertical tabs.</p>
                            <Row>
                                <Tab.Container defaultActiveKey="custom-v-pills-home">
                                    <Col lg={3}>
                                        <Nav variant='pills' className="flex-column nav-pills-tab custom-verti-nav-pills text-center" role="tablist" aria-orientation="vertical">
                                            <Nav.Link eventKey="custom-v-pills-home">
                                                <i className="ri-home-4-line d-block fs-20 mb-1"></i> Home
                                            </Nav.Link>
                                            <Nav.Link eventKey="custom-v-pills-profile">
                                                <i className="ri-user-2-line d-block fs-20 mb-1"></i> Profile
                                            </Nav.Link>
                                            <Nav.Link eventKey="custom-v-pills-messages">
                                                <i className="ri-mail-line d-block fs-20 mb-1"></i> Messages
                                            </Nav.Link>
                                        </Nav>
                                    </Col>
                                    <Col lg={9}>
                                        <Tab.Content className="text-muted mt-3 mt-lg-0">
                                            <Tab.Pane eventKey="custom-v-pills-home">
                                                <div className="d-flex mb-4">
                                                    <div className="flex-shrink-0">
                                                        <img src={img4} alt="" width="150" className="rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <p className="mb-0">Experiment and play around with the fonts that you already have in the software you’re working with reputable font websites. commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus.</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="flex-grow-1 me-3">
                                                        <p className="mb-0">Always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you’re working with reputable font websites.</p>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <img src={img5} alt="" width="150" className="rounded" />
                                                    </div>
                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="custom-v-pills-profile">
                                                <div className="d-flex mb-4">
                                                    <div className="flex-shrink-0">
                                                        <img src={img3} alt="" width="150" className="rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <p className="mb-0">In some designs, you might adjust your tracking to create a certain artistic effect. It can also help you fix fonts that are poorly spaced to begin with. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="flex-grow-1 me-3">
                                                        <p className="mb-0">Each design is a new, unique piece of art birthed into this world, and while you have the opportunity to be creative and make your own style choices. For that very reason, I went on a quest and spoke to many different professional graphic designers.</p>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <img src={img6} alt="" width="150" className="rounded" />
                                                    </div>
                                                </div>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="custom-v-pills-messages">
                                                <div className="d-flex mb-4">
                                                    <div className="flex-shrink-0">
                                                        <img src={img7} alt="" width="150" className="rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <p className="mb-0">Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR.</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <div className="flex-grow-1 me-3">
                                                        <p className="mb-0">They all have something to say beyond the words on the page. They can come across as casual or neutral, exotic or graphic. That's why it's important to think about your message, then choose a font that fits. Cosby sweater eu banh mi, qui irure terry richardson ex squid.</p>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <img src={img8} alt="" width="150" className="rounded" />
                                                    </div>
                                                </div>
                                            </Tab.Pane>

                                        </Tab.Content>
                                    </Col>
                                </Tab.Container>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default CustomHoverVertical;