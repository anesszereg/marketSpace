import React from 'react'
import { Card, Col, Nav, Row, Tab, Image } from 'react-bootstrap';

// import Images
import smallImg4 from 'assets/images/small/img-4.jpg'
import smallImg5 from 'assets/images/small/img-5.jpg'
import smallImg6 from 'assets/images/small/img-6.jpg'
import smallImg7 from 'assets/images/small/img-7.jpg'

import avatar2 from 'assets/images/users/avatar-2.jpg'
import avatar3 from 'assets/images/users/avatar-3.jpg'
import avatar5 from 'assets/images/users/avatar-5.jpg'

const VerticalCard = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <h5 className="mb-3">Vertical Nav Tabs</h5>
                    <Card>
                        <Card.Body>
                            <p className="text-muted">Use <code>flex-column</code> class to create Vertical nav tabs.</p>
                            <Tab.Container defaultActiveKey="v-pills-home-tab">
                                <Row>
                                    <Col md={3}>
                                        <Nav variant="pills" className="flex-column text-center" id="v-pills-tab" aria-orientation="vertical" >
                                            <Nav.Link eventKey="v-pills-home-tab" className="mb-2" id="v-pills-home-tab" >
                                                Home
                                            </Nav.Link>
                                            <Nav.Link eventKey="v-pills-profile-tab" className="mb-2" id="v-pills-profile-tab" >
                                                Profile
                                            </Nav.Link>
                                            <Nav.Link eventKey="v-pills-messages-tab" className="mb-2" id="v-pills-messages-tab" >
                                                Messages
                                            </Nav.Link>
                                            <Nav.Link eventKey="v-pills-settings-tab" id="v-pills-settings-tab" >
                                                Settings
                                            </Nav.Link>
                                        </Nav>
                                    </Col>
                                    <Col md={9}>
                                        <Tab.Content className="text-muted mt-4 mt-md-0" id="v-pills-tabContent">
                                            <Tab.Pane eventKey="v-pills-home-tab">
                                                <div className="d-flex mb-2">
                                                    <div className="flex-shrink-0">
                                                        <Image src={smallImg4} alt="" width="150" className="rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <p className="mb-0">You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you’re working with reputable font websites.</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0">
                                                    This may be the most commonly encountered tip I received from the designers I spoke with. They highly encourage that you use different fonts in one design, but do not over-exaggerate and go overboard.
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="v-pills-profile-tab">
                                                <div className="d-flex mb-2">
                                                    <div className="flex-shrink-0">
                                                        <Image src={smallImg5} alt="" width="150" className="rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <p className="mb-0"> I also decreased the transparency in the text so that the mountains come through the text, bringing the quote truly to life. Make sure that the placement of your text is pleasing to look at, and you try to achieve symmetry for this effect.</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0">
                                                    You've probably heard that opposites attract. The same is true for fonts. Don't be afraid to combine font styles that are different but complementary. You can always play around with the text that is overlaid on an image.
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="v-pills-messages-tab">
                                                <div className="d-flex mb-2">
                                                    <div className="flex-shrink-0">
                                                        <Image src={smallImg6} alt="" width="150" className="rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <p className="mb-0">In this image, you can see that the line height has been reduced significantly, and the size was brought up exponentially. Experiment and play around with the fonts that you already have in the software you’re working with reputable font websites.</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0">
                                                    They highly encourage that you use different fonts in one design, but do not over-exaggerate and go overboard This may be the most commonly encountered tip I received from the designers I spoke with.
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="v-pills-settings-tab">
                                                <div className="d-flex mb-2">
                                                    <div className="flex-shrink-0">
                                                        <Image src={smallImg7} alt="" width="150" className="rounded" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <p className="mb-0">When designing, the goal is to draw someone’s attention and portray to them what you’re trying to say. You can make a big statement by using little tricks, like this one. Use contrasting fonts. you can use a bold sanserif font with a cursive.</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0">
                                                    If you’re using multiple elements, make sure that your principal object is larger than the others, as the eye of your viewer will automatically be drawn to the larger of the two objects.
                                                </p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={6}>
                    <h5 className="mb-3">Card Header Tabs</h5>
                    <Card>
                        <Tab.Container defaultActiveKey="home2">
                            <Card.Header className="card-header align-items-center d-flex">
                                <div className="flex-grow-1 oveflow-hidden">
                                    <p className="text-muted text-truncates mb-0">Use <code>card-header-tabs</code> class to create card header tabs.</p>
                                </div>
                                <div className="flex-shrink-0 ms-2">
                                    <Nav as="ul" variant="tabs" className="justify-content-end nav-tabs-custom rounded card-header-tabs border-bottom-0">
                                        <Nav.Item as="li">
                                            <Nav.Link eventKey="home2">
                                                Home
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Nav.Link eventKey="profile2">
                                                Profile
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Nav.Link eventKey="messages2">
                                                Message
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Tab.Content className="text-muted">
                                    <Tab.Pane eventKey="home2">
                                        <p className="flex-grow-1 mb-0"><Image src={avatar2} alt="" className="avatar-lg rounded float-start me-3" />
                                            Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                            single-origin coffee squid. Exercitation +1 labore velit, blog
                                            sartorial PBR leggings next level wes anderson artisan four loko
                                            farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                                            vinyl cillum PBR. Homo nostrud organic, assumenda labore
                                            aesthetic magna delectus.commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                                            vinyl cillum PBR. Homo nostrud organic, assumenda labore
                                            aesthetic magna delectus. If you’re using multiple elements, make sure that your principal object is larger than assumenda.
                                        </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="profile2">
                                        <p className="me-3 mb-0">
                                            <Image src={avatar3} alt="" className="avatar-lg rounded float-end ms-3" /> Experiment and play around with the fonts that you already have in the software you’re working with reputable font websites. commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus.commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus Scale all elements of your design: text, elements, buttons, everything. Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each.
                                        </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="messages2">
                                        <p className="ms-3 mb-0">
                                            <Image src={avatar5} alt="" className="avatar-lg rounded float-start me-3" />Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aes Homo nostrud organic, assumenda labore aesthetic magna delectus Scale all elements of your design: text, elements, buttons, everything.Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each.
                                        </p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                        </Tab.Container>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default VerticalCard;