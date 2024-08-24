import React, {useState} from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import { Link } from 'react-router-dom';
import Flatpickr from "react-flatpickr";
import Dropzone from "react-dropzone";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CreateProduct = () => {

    document.title = "Create Product | Toner eCommerce + Admin React Template";

    const [selectedFiles, setselectedFiles] = useState([]);

    function handleAcceptedFiles(files: any) {
        files.map((file: any) =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size),
            })
        );
        setselectedFiles(files);
    }

    /* Formats the size */
    function formatBytes(bytes: any, decimals = 2) {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Create Product" pageTitle="Products" />
                    <form id="createproduct-form" autoComplete="off" className="needs-validation" noValidate>
                        <Row>
                            <Col xl={9} lg={8}>
                                <Card>
                                    <Card.Header>
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar-sm">
                                                    <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                                                        <i className="bi bi-box-seam"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="card-title mb-1">Product Information</h5>
                                                <p className="text-muted mb-0">Fill all information below.</p>
                                            </div>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="mb-3">

                                            <Form.Label htmlFor="product-title-input">Product title</Form.Label>
                                            <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
                                            <Form.Control type="text" className="d-none" id="product-id-input" />
                                            <Form.Control type="text" id="product-title-input" defaultValue="" placeholder="Enter product title" required />
                                            
                                            <div className="invalid-feedback">Please enter a product title.</div>
                                        </div>
                                        <div className="mb-3">
                                            <Form.Label>Product description</Form.Label>
                                            <CKEditor
                                                editor={ClassicEditor}
                                                data="<p>Tommy Hilfiger men striped pink sweatshirt. Crafted with cotton. Material composition is 100% organic cotton. This is one of the world’s leading designer lifestyle brands and is internationally recognized for celebrating the essence of classic American cool style, featuring preppy with a twist designs.</p>
                                                        <ul>
                                                            <li>Full Sleeve</li>
                                                            <li>Cotton</li>
                                                            <li>All Sizes available</li>
                                                            <li>4 Different Color</li>
                                                        </ul>"
                                                onReady={(editor:any) => {
                                                    // You can store the "editor" and use when it is needed.
                                                }}
                                                onChange={(editor:any) => {
                                                    editor.getData();
                                                }}
                                            />
                                        </div>

                                        <div>
                                            <div className="d-flex align-items-start">
                                                <div className="flex-grow-1">
                                                    <Form.Label>Product category</Form.Label>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <Link to="#" className="float-end text-decoration-underline">Add New</Link>
                                                </div>
                                            </div>
                                            <div>
                                                <select className="form-select" id="choices-category-input" name="choices-category-input">
                                                    <option value="">Select product category</option>
                                                    <option value="Appliances">Appliances</option>
                                                    <option value="Automotive Accessories">Automotive Accessories</option>
                                                    <option defaultValue="Electronics">Electronics</option>
                                                    <option value="Fashion">Fashion</option>
                                                    <option value="Furniture">Furniture</option>
                                                    <option value="Grocery">Grocery</option>
                                                    <option value="Kids">Kids</option>
                                                    <option value="Watches">Watches</option>
                                                </select>
                                            </div>
                                            <div className="error-msg mt-1">Please select a product category.</div>
                                        </div>
                                    </Card.Body>
                                </Card>

                                <Card>
                                    <Card.Header>
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar-sm">
                                                    <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                                                        <i className="bi bi-images"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="card-title mb-1">Product Gallery</h5>
                                                <p className="text-muted mb-0">Add product gallery images.</p>
                                            </div>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="dropzone my-dropzone">
                                            <Dropzone
                                                onDrop={acceptedFiles => {
                                                    handleAcceptedFiles(acceptedFiles);
                                                }}
                                            >
                                                {({ getRootProps, getInputProps }) => (
                                                    <div className="dropzone dz-clickable text-center">
                                                        <div className="dz-message needsclick"
                                                            {...getRootProps()}
                                                        >
                                                            <div className="mb-3">
                                                                <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                                                            </div>
                                                            <h4>Drop files here or click to upload.</h4>
                                                        </div>
                                                    </div>
                                                )}
                                            </Dropzone>
                                            <div className="list-unstyled mb-0" id="file-previews">
                                                {selectedFiles.map((f: any, i: number) => {
                                                    return (
                                                        <Card
                                                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                            key={i + "-file"}
                                                        >
                                                            <div className="p-2">
                                                                <Row className="align-items-center">
                                                                    <Col className="col-auto">
                                                                        <img
                                                                            data-dz-thumbnail=""
                                                                            height="80"
                                                                            className="avatar-sm rounded bg-light"
                                                                            alt={f.name}
                                                                            src={f.preview}
                                                                        />
                                                                    </Col>
                                                                    <Col>
                                                                        <Link
                                                                            to="#"
                                                                            className="text-muted font-weight-bold"
                                                                        >
                                                                            {f.name}
                                                                        </Link>
                                                                        <p className="mb-0">
                                                                            <strong>{f.formattedSize}</strong>
                                                                        </p>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </Card>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        <div className="error-msg mt-1">Please add a product images.</div>
                                    </Card.Body>
                                </Card>

                                <Card>
                                    <Card.Header>
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar-sm">
                                                    <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                                                        <i className="bi bi-list-ul"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="card-title mb-1">General Information</h5>
                                                <p className="text-muted mb-0">Fill all information below.</p>
                                            </div>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="manufacturer-name-input">Manufacturer Name</Form.Label>
                                                    <Form.Control type="text" id="manufacturer-name-input" placeholder="Enter manufacturer name" />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="manufacturer-brand-input">Manufacturer Brand</Form.Label>
                                                    <Form.Control type="text" id="manufacturer-brand-input" placeholder="Enter manufacturer brand" />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={3} sm={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="stocks-input">Stocks</Form.Label>
                                                    <Form.Control type="text" id="stocks-input" placeholder="Stocks" required />
                                                    <div className="invalid-feedback">Please enter a product stocks.</div>
                                                </div>
                                            </Col>
                                            <Col lg={3} sm={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="product-price-input">Price</Form.Label>
                                                    <div className="input-group has-validation mb-3">
                                                        <span className="input-group-text" id="product-price-addon">$</span>
                                                        <Form.Control type="text" id="product-price-input" placeholder="Enter price" aria-label="Price" aria-describedby="product-price-addon" required />
                                                        <div className="invalid-feedback">Please enter a product price.</div>
                                                    </div>

                                                </div>
                                            </Col>
                                            <Col lg={3} sm={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="product-discount-input">Discount</Form.Label>
                                                    <div className="input-group has-validation mb-3">
                                                        <span className="input-group-text" id="product-discount-addon">%</span>
                                                        <Form.Control type="text" id="product-discount-input" placeholder="Enter discount" aria-label="discount" aria-describedby="product-discount-addon" required />
                                                        <div className="invalid-feedback">Please enter a product discount.</div>
                                                    </div>

                                                </div>
                                            </Col>
                                            <Col lg={3} sm={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="orders-input">Orders</Form.Label>
                                                    <Form.Control type="text" id="orders-input" placeholder="Orders" required />
                                                    <div className="invalid-feedback">Please enter a product orders.</div>
                                                </div>
                                            </Col>

                                        </Row>


                                        <Row>
                                            <Col lg={6}>
                                                <div>
                                                    <Form.Label>Colors</Form.Label>
                                                    <ul className="clothe-colors list-unstyled hstack gap-2 mb-0 flex-wrap">
                                                        <li>
                                                            <Form.Check defaultValue="success" id="color-1" />
                                                            <label className="avatar-xs btn btn-success p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-1"></label>
                                                        </li>
                                                        <li>
                                                            <Form.Check defaultValue="info" id="color-2" />
                                                            <label className="avatar-xs btn btn-info p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-2"></label>
                                                        </li>
                                                        <li>
                                                            <Form.Check defaultValue="warning" id="color-3" />
                                                            <label className="avatar-xs btn btn-warning p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-3"></label>
                                                        </li>
                                                        <li>
                                                            <Form.Check defaultValue="danger" id="color-4" />
                                                            <label className="avatar-xs btn btn-danger p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-4"></label>
                                                        </li>
                                                        <li>
                                                            <Form.Check defaultValue="primary" id="color-5" />
                                                            <label className="avatar-xs btn btn-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-5"></label>
                                                        </li>
                                                        <li>
                                                            <Form.Check defaultValue="secondary" id="color-6" />
                                                            <label className="avatar-xs btn btn-secondary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-6"></label>
                                                        </li>
                                                        <li>
                                                            <Form.Check defaultValue="dark" id="color-7" />
                                                            <label className="avatar-xs btn btn-dark p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-7"></label>
                                                        </li>
                                                        <li>
                                                            <Form.Check defaultValue="light" id="color-8" />
                                                            <label className="avatar-xs btn btn-light p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-8"></label>
                                                        </li>
                                                    </ul>
                                                    <div className="error-msg mt-1">Please select a product colors.</div>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="mt-3 mt-lg-0">
                                                    <Form.Label>Sizes</Form.Label>
                                                    <ul className="clothe-size list-unstyled hstack gap-2 mb-0 flex-wrap" id="size-filter">
                                                        <li>
                                                            <Form.Check defaultValue="xs" id="sizeXs" />
                                                            <label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="sizeXs">XS</label>
                                                        </li>
                                                        <li>
                                                            <Form.Check defaultValue="s" id="sizeS" />
                                                            <label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="sizeS">S</label>
                                                        </li>
                                                        <li>
                                                            <Form.Check defaultValue="m" id="sizeM" />
                                                            <label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="sizeM">M</label>
                                                        </li>
                                                        <li>
                                                            <Form.Check defaultValue="l" id="sizeL" />
                                                            <label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="sizeL">L</label>
                                                        </li>
                                                        <li>
                                                            <Form.Check defaultValue="xl" id="sizeXl" />
                                                            <label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="sizeXl">XL</label>
                                                        </li>
                                                        <li>
                                                            <Form.Check defaultValue="2xl" id="size2xl" />
                                                            <label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="size2xl">2XL</label>
                                                        </li>
                                                        <li>
                                                            <Form.Check defaultValue="3xl" id="size3xl" />
                                                            <label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="size3xl">3XL</label>
                                                        </li>
                                                        <li>
                                                            <Form.Check defaultValue="40" id="size40" />
                                                            <label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="size40">40</label>
                                                        </li>
                                                        <li>
                                                            <Form.Check defaultValue="41" id="size41" />
                                                            <label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="size41">41</label>
                                                        </li>
                                                        <li>
                                                            <Form.Check defaultValue="42" id="size42" />

                                                            <label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="size42">42</label>
                                                        </li>
                                                    </ul>
                                                    <div className="error-msg mt-1">Please select a product sizes.</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <div className="text-end mb-3">
                                    <Button variant='success' type="submit" className="w-sm">Submit</Button>
                                </div>
                            </Col>


                            <Col xl={3} lg={4}>
                                <Card>
                                    <Card.Header>
                                        <h5 className="card-title mb-0">Publish</h5>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="mb-3">
                                            <label htmlFor="choices-publish-status-input" className="form-label">Status</label>

                                            <select className="form-select" id="choices-publish-status-input" data-choices data-choices-search-false>
                                                <option defaultValue="Published">Published</option>
                                                <option value="Scheduled">Scheduled</option>
                                                <option value="Draft">Draft</option>
                                            </select>
                                        </div>

                                        <div>
                                            <Form.Label htmlFor="choices-publish-visibility-input">Visibility</Form.Label>
                                            <select className="form-select" id="choices-publish-visibility-input" data-choices data-choices-search-false>
                                                <option defaultValue="Public">Public</option>
                                                <option value="Hidden">Hidden</option>
                                            </select>
                                        </div>
                                    </Card.Body>

                                </Card>

                                <Card>
                                    <Card.Header>
                                        <h5 className="card-title mb-0">Publish Schedule</h5>
                                    </Card.Header>

                                    <Card.Body>
                                        <div>
                                            <Form.Label htmlFor="datepicker-publish-input">Publish Date & Time</Form.Label>
                                            <Flatpickr
                                                className="form-control flatpickr-input"
                                                placeholder='Enter publish date'
                                                options={{
                                                    dateFormat: "d M, Y",
                                            }}
                                        />
                                        </div>
                                    </Card.Body>
                                </Card>


                                <Card>
                                    <Card.Header>
                                        <h5 className="card-title mb-0">Product Tags</h5>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="hstack gap-3 align-items-start">
                                            <div className="flex-grow-1">
                                                <Form.Control data-choices data-choices-multiple-remove="true" placeholder="Enter tags" type="text" defaultValue="Cotton" />
                                            </div>
                                        </div>
                                    </Card.Body>

                                </Card>

                                <Card>
                                    <Card.Header>
                                        <h5 className="card-title mb-0">Product Short Description</h5>
                                    </Card.Header>
                                    <Card.Body>
                                        <p className="text-muted mb-2">Add short description for product</p>
                                        <textarea className="form-control" placeholder="Must enter minimum of a 100 characters" rows={3}></textarea>
                                    </Card.Body>

                                </Card>

                            </Col>
                        </Row>
                    </form>
                </Container>
            </div>
        </React.Fragment >
    );
}

export default CreateProduct;