import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import CurrencyTable from './currencyTable';

const CurrencyRates = () => {

    document.title = "Currency Rates | Toner eCommerce + Admin React Template";

    const [modal_AddCouponsModals, setmodal_AddCouponsModals] = useState<boolean>(false);
    function tog_AddCouponsModals() {
        setmodal_AddCouponsModals(!modal_AddCouponsModals);
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Currency Rates" pageTitle="Localization" />
                    <Row id="currencyRatesList">
                        <Col lg={12}>
                            <Card>
                                <Card.Header className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <h5 className="card-title mb-0">Currency Rates</h5>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Button variant='primary' onClick={() => tog_AddCouponsModals()} className="add-btn"><i className="bi bi-plus-circle me-1 align-middle"></i>Add Currency</Button>
                                    </div>
                                </Card.Header>
                                    <CurrencyTable />
                            </Card>
                        </Col>
                    </Row>

                    <Modal className="fade zoomIn" size='lg' show={modal_AddCouponsModals} onHide={() => { tog_AddCouponsModals(); }} centered>
                        <Modal.Header className="px-4 pt-4" closeButton>
                            <h5 className="modal-title fs-18" id="exampleModalLabel">Add New Currency</h5>
                        </Modal.Header>
                        <Modal.Body className="p-4">
                            <Form className="tablelist-form">
                                <Row>
                                    <div id="alert-error-msg" className="d-none alert alert-danger py-2"></div>
                                    <input type="hidden" id="id-field" />
                                    <Col lg={12}>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="exchangeRate">Exchange Rate (USD)</Form.Label>
                                            <Form.Control type="text" id="exchangeRate-field" placeholder="Enter exchange rate" />
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="currencyName">Currency Name</Form.Label>
                                            <Form.Control type="text" id="currencyName-field" placeholder="Currency name" required/>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="mb-3">
                                            <label htmlFor="typeInput" className="form-label">Type</label>
                                            <div>
                                            <select className="form-control" data-choices data-choices-search-false id="type-field" required>
                                                <option value="">Type</option>
                                                <option value="Euro (€)">Euro (€)</option>
                                                <option value="Yuan (¥)">Yuan (¥)</option>
                                                <option value="AFN (؋)">AFN (؋)</option>
                                                <option value="CAD ($)">CAD ($)</option>
                                                <option value="DKK (Kr)">DKK (Kr)</option>
                                                <option value="EGP (E£)">EGP (E£)</option>
                                                <option value="KES (K)">KES (K)</option>
                                                <option value="GBP (£)">GBP (£)</option>
                                                <option value="COP ($)">COP ($)</option>
                                            </select>
                                        </div>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="currencyAmount">Currency Amount (USD)</Form.Label>
                                            <Form.Control type="text" id="currencyAmount-field" placeholder="Currency amount (USD)" required/>
                                        </div>
                                    </Col>
                                    <Col lg={12} className="modal-footer">
                                        <div className="hstack gap-2 justify-content-end">
                                            <Button className="btn-ghost-danger" onClick={() => { tog_AddCouponsModals(); }}><i className="ri-close-line align-bottom me-1"></i> Close</Button>
                                            <Button variant='primary' id="add-btn">Add Currency</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </Modal.Body> 
                    </Modal>
                    
                </Container>
            </div>
        </React.Fragment>
    );
}

export default CurrencyRates;