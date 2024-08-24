import React, { useState } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Shoporder } from "Components/ShopTopBar"
import DeleteModal, { ModalAdd } from "Components/DeleteModal";
import { selectAddressData } from "Common/data";

const Selectaddress = () => {
    document.title = "Shop | Select address | Toner - React FrontEnd";

    const [addressData, setAddressData] = useState(selectAddressData);
    //delete id
    const [id, setId] = useState('');

    //Home Address
    const [removeModel, setRemovemodel] = useState(false);
    const RemoveModel = (id: any) => {
        setRemovemodel(!removeModel);
        setId(id);
    };

    const deleteData = () => {
        setAddressData(selectAddressData?.filter((delet: any) => delet.id !== id));
    }

    //Add address
    const [addressModal, setAddressModal] = useState(false);
    const handleClose = () => setAddressModal(false);
    const handleShow = () => setAddressModal(true);

    return (
        <React.Fragment>
            <section className="section">
                <Container>
                    <Row>
                        <Col xl={8}>
                            <div>
                                <h4 className="fs-18 mb-4">Select or add an address</h4>
                                <Row className="g-4" id="address-list">
                                    {
                                        (addressData || [])?.map((item: any) => {
                                            return (
                                                <Col lg={6} key={item.id}>
                                                    <div>
                                                        <div className="form-check card-radio">
                                                            <Form.Control id="shippingAddress1" name="shippingAddress" type="radio" className="form-check-input" />
                                                            <Form.Label className="form-check-label" htmlFor="shippingAddress1">
                                                                <span className="mb-4 fw-semibold fs-12 d-block text-muted text-uppercase">{item.address}</span>
                                                                <span className="fs-14 mb-2 fw-semibold  d-block">{item.addressname}</span>
                                                                <span className="text-muted fw-normal text-wrap mb-1 d-block">{item.addressdetails}</span>
                                                                <span className="text-muted fw-normal d-block">Mo. {item.phonenumber}</span>
                                                            </Form.Label>
                                                        </div>
                                                        <div className="d-flex flex-wrap p-2 py-1 bg-light rounded-bottom border mt-n1 fs-13">
                                                            <div>
                                                                <Link to="#" className="d-block text-body p-1 px-2 edit-list" data-edit-id="1" data-bs-toggle="modal" data-bs-target="#addAddressModal" onClick={handleShow}>
                                                                    <i className="ri-pencil-fill text-muted align-bottom me-1"></i>
                                                                    Edit</Link>
                                                            </div>
                                                            <div>
                                                                <Link to="#" className="d-block text-body p-1 px-2 remove-list" data-remove-id="1" data-bs-toggle="modal" data-bs-target="#removeAddressModal" onClick={() => RemoveModel(item.id)}>
                                                                    <i className="ri-delete-bin-fill text-muted align-bottom me-1"></i> Remove
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                                <Row className="mt-4">
                                    <Col lg={6}>
                                        <div className="text-center p-4 rounded-3 border border-2 border-dashed">
                                            <div className="avatar-md mx-auto mb-4">
                                                <div className="avatar-title bg-success-subtle text-success rounded-circle display-6">
                                                    <i className="bi bi-house-add"></i>
                                                </div>
                                            </div>
                                            <h5 className="fs-16 mb-3">Add New Address</h5>
                                            <Button variant="success" className="btn-sm w-xs stretched-link addAddress-modal" data-bs-toggle="modal" data-bs-target="#addAddressModal" onClick={handleShow}>Add</Button>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="hstack gap-2 justify-content-start mt-3">
                                    <Button variant="danger" className="btn btn-hover">Continue Shopping</Button>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} >
                            <div className="sticky-side-div">
                                <Shoporder />
                            </div>
                        </Col>
                    </Row>
                    <DeleteModal removeModel={removeModel} hideModal={RemoveModel} deleteData={deleteData} />
                    <ModalAdd addressModal={addressModal} handleClose={handleClose} />
                </Container>
            </section>
        </React.Fragment>
    )
}
export default Selectaddress;