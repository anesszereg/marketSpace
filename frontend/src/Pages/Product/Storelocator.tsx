import React from "react"
import { Location, storeLocation } from "Common/data";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";

import { StoreMap } from "./MapStoreLocation";
import { CommonService, ContactHelp } from "Components/CommonService";

const Storelocator = () => {
    return (
        <React.Fragment>
            <section className="ecommerce-about bg-primary">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className="text-center">
                                <h1 className="text-white mb-2">Toner Store Locator</h1>
                                <p className="text-white-75 mb-0">Last Updated 24 Nov, 2022</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section">
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div>
                                <h5 className="fs-18 mb-4">Store Location</h5>
                            </div>
                            <div className="mx-n3">
                                <SimpleBar className="px-3" style={{ maxHeight: "450px" }} >
                                    {
                                        (Location || [])?.map((item, inx) => {
                                            return (
                                                <Card key={inx} className="border-0 shadow-lg">
                                                    <Card.Body className="p-4">
                                                        <h5 className="text-capitalize lh-base fs-16 mb-1">{item.country}</h5>
                                                        <p className="fs-14">{item.Address}</p>
                                                        <div>
                                                            <Link to="#" className="link-effect link-danger fw-medium">View On Map <i className="ri-arrow-right-line align-bottom ms-1"></i></Link>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            )
                                        })
                                    }
                                </SimpleBar>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <StoreMap />
                        </Col>
                    </Row>
                </Container>
            </section>
            <ContactHelp cname="position-relative py-5" />
            <section className="section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6} >
                            <div className="text-center mb-5">
                                <h2 className="mb-3">Store Details</h2>
                                <p className="text-muted">A typical online store enables the customer to browse the firm's range of products and services, view photos or images of the products.</p>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <Card className="overflow-hidden mb-0">
                                <Card.Body >
                                    <div className="table-responsive table-card">
                                        <Table className="align-middle table-nowrap mb-0 fs-14">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Store Name</th>
                                                    <th scope="col">Location</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Contact No.</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    (storeLocation || [])?.map((item, inx) => {
                                                        return (
                                                            <tr key={inx}>
                                                                <th scope="row">{item.name}</th>
                                                                <td>{item.location}</td>
                                                                <td>{item.Email}</td>
                                                                <td>{item.contactNo}</td>
                                                                <td>
                                                                    <Link to="#" className="link-effect link-primary">View Map
                                                                        <i className="ri-arrow-right-line align-bottom"></i>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <CommonService />
        </React.Fragment>
    )
}

export default Storelocator;