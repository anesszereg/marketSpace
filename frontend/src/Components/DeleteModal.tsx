import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from 'yup';

//delete modal
const DeleteModal = ({ removeModel, hideModal, deleteData }: any) => {

    const handleDelete = () => {
        deleteData();
        hideModal();
    }
    return (
        <Modal show={removeModel} onHide={hideModal} centered id='removeItemModal' className="zoomIn">
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div className="mt-2 text-center">
                    {/* <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger=" loop" colors={'primary:#f7b84b,secondary:#f06548'} style={{ width: "100px", height: "100px" }}></lord-icon> */}
                    <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                        <h4>Are you sure ?</h4>
                        <p className="text-muted mx-4 mb-0">Are you sure you want to remove this product ?</p>
                    </div>
                </div>
                <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                    <Button className="btn w-sm btn-light" data-bs-dismiss="modal" onClick={hideModal}>Close</Button>
                    <Button className="btn w-sm btn-danger" id="remove-product" onClick={handleDelete}>Yes, Delete It!</Button>
                </div>
            </Modal.Body>
        </Modal >
    )
}

export default DeleteModal;

//=================================================================

//add addres modal
export const ModalAdd = ({ addressModal, handleClose }: any) => {
    const formik = useFormik({
        initialValues: {
            name: "Witney Blessington",
            address: "144 Cavendish Avenue, Indianapolis, IN 46251",
            phone: "012-345-6789",
            addressType: "Home (7am to 10pm)",
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Please Enter Your Name'),
            address: Yup.string().required('Please Enter Your Address'),
            phone: Yup.string().matches(RegExp('[0-9]{7}')).required("Please Enter Your Phone"),
            addressType: Yup.string().required("Please Enter Your Type")
        }),
        onSubmit: (values) => {
            // console.log("value", values);
        },
    });

    return (
        <React.Fragment>
            <Modal show={addressModal} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <h1 className="modal-title fs-5" id="addAddressModalLabel">Add New Address</h1>
                </Modal.Header>
                <Modal.Body>
                    <Form autoComplete="off" className="needs-validation createAddress-form" id="createAddress-form" onSubmit={formik.handleSubmit} >
                        <Form.Control type="hidden" id="addressid-Form.Control" defaultValue="" />
                        <div>
                            <div className="mb-3">
                                <Form.Label htmlFor="addaddress-Name" >Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="addaddress-Name"
                                    placeholder="Enter name"
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {
                                    formik.errors.name && formik.touched.name ?
                                        (
                                            <span className="text-danger">{formik.errors.name}</span>
                                        ) : null
                                }
                            </div>

                            <div className="mb-3">
                                <Form.Label htmlFor="addaddress-textarea" >Address</Form.Label>
                                <Form.Control as="textarea"
                                    id="addaddress-textarea"
                                    placeholder="Enter address"
                                    rows={2}
                                    name="address"
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                ></Form.Control>
                                {
                                    formik.errors.address && formik.touched.address ?
                                        (<span className="text-danger">{formik.errors.address}</span>
                                        ) : null
                                }
                            </div>

                            <div className="mb-3">
                                <Form.Label htmlFor="addaddress-phone" >Phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="addaddress-phone"
                                    placeholder="Enter phone no."
                                    name="phone"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {
                                    formik.errors.phone && formik.touched.phone ?
                                        (<span className="text-danger">{formik.errors.phone}</span>
                                        ) : null
                                }
                            </div>

                            <div className="mb-3">
                                <Form.Label htmlFor="state" >Address Type</Form.Label>
                                <Form.Select id="state" name="addressType" value={formik.values.addressType} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                                    <option value="Home">Home (7am to 10pm)</option>
                                    <option value="Office">Office (11am to 7pm)</option>
                                </Form.Select>
                                {
                                    formik.errors.addressType && formik.touched.addressType ?
                                        (<span className="text-danger">{formik.errors.addressType}</span>
                                        ) : null
                                }
                            </div>
                        </div>

                        <div className="d-flex justify-content-end gap-2 mt-4">
                            <Button className="btn btn-light" data-bs-dismiss="modal" onClick={handleClose}>Close</Button>
                            <Button type="submit" id="addNewAddress" className="btn btn-primary">Add</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}