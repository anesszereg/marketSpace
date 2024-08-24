import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap";
import { CommonService } from "Components/CommonService";
import { PublishedProduct } from "Components/ProductSilde";
import EmailClothe from "Pages/Catalog/EmailClothe";

const Purchaseguide = () => {
    return (
        <React.Fragment>
            <PublishedProduct title="Purchase Guide" dicription="Last Updated 24 Nov, 2022" />
            <section className="section pt-0">
                <Container>
                    <Card className="term-card mb-0">
                        <Card.Body className="p-5">
                            <Row>
                                <Col lg={12}>
                                    <h5 className="fs-18 mb-3">Account Registering</h5>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">In some instances, use of the Clients on Demand Website and Services may require that you disclose certain personal information for identification, including a unique email address and demographic information to register.</p>
                                    </div>
                                    <ul className="text-muted vstack gap-2 fs-15 ps-5" style={{ listStyleType: "circle" }}>
                                        <li>
                                            Name
                                        </li>
                                        <li>
                                            Age
                                        </li>
                                        <li>
                                            Date of birth
                                        </li>
                                        <li>
                                            Current career
                                        </li>
                                        <li>
                                            Mobile phone numbers
                                        </li>
                                        <li>
                                            Email address
                                        </li>
                                        <li>
                                            Hobbies interests
                                        </li>
                                        <li>
                                            Social profiles
                                        </li>
                                    </ul>

                                    <h5 className="fs-18 my-3">Select Product</h5>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">Products can be selected using through five modes of selection you choose from the product selection area titled Select product by:</p>
                                    </div>
                                    <ul className="text-muted vstack gap-2 fs-15 ps-5" style={{ listStyleType: "circle" }}>
                                        <li>
                                            Search
                                        </li>
                                        <li>
                                            Items
                                        </li>
                                        <li>
                                            Product Selection Tree
                                        </li>
                                        <li>
                                            Clusters
                                        </li>
                                        <li>
                                            Aggregates
                                        </li>
                                    </ul>

                                    <h5 className="fs-18 my-3">Confirm Order Content</h5>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">You’ve done the legwork to define your audience and their challenges. Now you want to put that information to use. Build the outline of your buyer’s guide based on pain points and lead with the solution.</p>
                                    </div>

                                    <h5 className="fs-18 my-3">Transaction Completed</h5>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">All transactions eventually end, either in a commit or a rollback. If a transaction commits, all work done through the resources enlisted over the course of that transaction is made permanent and visible to other transactions. If a transaction rolls back, none of the work done through any enlisted resources is made permanent.</p>
                                    </div>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">prepare: The transaction instructs each resource to prepare itself for a commit. Each resource prepares by evaluating whether a commit succeeds or not, and responds with a vote to commit or roll back. If any resource responds with a rollback during the prepare phase, all resources are immediately rolled back and the transaction ends with a rollback. If a resource votes to commit, that resource must ensure that it can commit its work, even if a system failure occurs before the commit occurs.</p>
                                    </div>

                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">commit : If all resources vote to commit, the transaction instructs each resource to commit. Resources cannot roll back at this point.</p>
                                    </div>
                                    <div className="d-flex gap-2 mb-4">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">After a transaction commits or rolls back, it ends and is dissociated from its thread, leaving the thread without a transaction.</p>
                                    </div>
                                    <h5 className="fs-18 my-3">Accepted Credit Cards</h5>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">Taxes are calculated by your local bank and location.</p>
                                    </div>
                                    <ul className="text-muted vstack gap-2 fs-15 ps-5" style={{ listStyleType: "circle" }}>
                                        <li>
                                            Visa
                                        </li>
                                        <li>
                                            Mastercards
                                        </li>
                                        <li>
                                            American Express
                                        </li>
                                        <li>
                                            Discover
                                        </li>
                                    </ul>

                                    <h5 className="fs-18 my-3">Download and Setup</h5>
                                    <div className="d-flex gap-2 mb-2">
                                        <div className="flex-shrink-0">
                                            <i className="ri-flashlight-fill text-primary fs-15"></i>
                                        </div>
                                        <p className="text-muted fs-15 flex-grow-1 mb-0">You can use the Content Installer application to locate, download, and install extra content from Library.</p>
                                    </div>
                                    <ul className="text-muted vstack gap-2 fs-15 ps-5 mb-0" style={{ listStyleType: "circle" }}>
                                        <li>
                                            Updated content on a regular basis
                                        </li>
                                        <li>
                                            Secure hassle-free payment
                                        </li>
                                        <li>
                                            1-click checkout
                                        </li>
                                        <li>
                                            Easy access smart user dashboard
                                        </li>
                                    </ul>

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
export default Purchaseguide;