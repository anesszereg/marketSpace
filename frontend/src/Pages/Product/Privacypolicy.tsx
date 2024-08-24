import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import EmailClothe from "Pages/Catalog/EmailClothe";
import { PublishedProduct } from "Components/ProductSilde";
import { CommonService } from "Components/CommonService";

const Privacypolicy = () => {
    return (
        <React.Fragment>
            <PublishedProduct title="Privacy Policy" dicription="This Privacy policy was published on November 24th , 2022" />
            <section className="section pt-0">
                <Container>
                    <Card className="term-card mb-0">
                        <Card.Body className="p-lg-5">
                            <Row >
                                <Col lg={12}>
                                    <h5 className="fs-18 mb-3">Introduction</h5>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">Generally, we may collect and use personal information for many purposes, including, but not limited to: billing, product and service fulfillment, understanding customer needs, providing a better website, improving products and services, and communicating with customers and potential customers regarding our products and services with third-party products and services.</p>
                                    </div>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">Clients on Demand, LLC is committed to protecting both the personal as well as business information you share and/or store with us.</p>
                                    </div>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">This Privacy Policy applies to transactions and activities and data gathered through the Clients on Demand Website and interaction you may have with its related Social Media accounts. Please review this Privacy Policy periodically as we may revise it without notice.</p>
                                    </div>

                                    <h5 className="fs-18 my-3">Shipping Agreement</h5>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">We may share information about our audience in aggregate or de-identified form. Nothing in this Privacy Policy is intended to indicate a restriction of our use or sharing of aggregated or de-identified information in any way.</p>
                                    </div>

                                    <h5 className="fs-18 my-3">Refund Policy</h5>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">The information we collect is used for a variety of purposes, such as:</p>
                                    </div>
                                    <ul className="text-muted vstack gap-2 fs-15 ps-5" style={{ listStyleType: "circle" }}>
                                        <li>
                                            to enable your use of our services and fulfill your requests for certain features, such as enabling you to participate in and renew paid services, polls, and message boards
                                        </li>
                                        <li>
                                            by performing statistical, demographic and marketing analyses of users of our services to improve our relationship with our customers
                                        </li>
                                        <li>
                                            for product development purposes and to generally inform advertisers about the nature of our subscriber base to improve our relationship with our customers
                                        </li>
                                        <li>
                                            to customize your experience by allowing advertising to be targeted to the users for whom such advertising is most pertinent
                                        </li>
                                    </ul>

                                    <h5 className="fs-18 my-3">Use Of Cookies</h5>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">We use “cookies,” Web beacons, HTML5 local storage, and other similar technologies. These technologies allow us to manage access to and use of the Services, recognize you and provide personalization, and help us understand how people use our Services. You may not be able to access certain areas of our websites, including ClientsonDemand.com, if your computer does not accept cookies from us.</p>
                                    </div>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">We do not respond to browser-based “do not track” signals.</p>
                                    </div>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">We may transmit non-personally identifiable website usage information to third parties in order to show you advertising for Clients on Demand when you visit other sites.</p>
                                    </div>

                                    <h5 className="fs-18 my-3">Disclaimer</h5>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">This Privacy Policy may be amended by us at any time and without notice, but only by amending this Policy as posted on this Website. Any amendments will become effective 30 days after being posted on the website unless circumstances require that a change is immediately implemented.</p>
                                    </div>

                                    <div className="alert alert-danger">
                                        No use of Company Name's logo or other artwork will be allowed for linking absent a trademark license agreement.
                                    </div>

                                    <div className="hstack justify-content-end gap-2 mt-4">
                                        <Link to="#" className="btn btn-ghost-danger btn-hover"><i className="ri-close-line align-bottom me-1"></i> Decline</Link>
                                        <Link to="#" className="btn btn-success btn-hover">Accept Now</Link>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </section>
            <EmailClothe />
            <CommonService />
        </React.Fragment>
    )
}

export default Privacypolicy;