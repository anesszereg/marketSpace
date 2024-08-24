import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import SubCategoriesTable from './subCategoriesTable';

const SubCategories = () => {

    document.title = "Sub Categories | Toner eCommerce + Admin React Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Sub Categories" pageTitle="Products" />
                    <Row>
                        <Col xxl={3}>
                            <Card>
                                <Card.Header>
                                    <h6 className="card-title mb-0" id="addCategoryLabel">Create Sub Categories</h6>
                                </Card.Header>
                                <Card.Body>
                                    <form autoComplete="off" className="needs-validation createCategory-form" id="createCategory-form" noValidate>
                                        <input type="hidden" id="categoryid-input" className="form-control" value="" />
                                        <Row>
                                            <Col xxl={12} lg={6}>
                                                <div className="mb-3">
                                                    <label htmlFor="SubcategoryTitle" className="form-label">Sub Category Title
                                                        <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" id="SubcategoryTitle" placeholder="Enter title" required />
                                                    <div className="invalid-feedback">Please enter a sub category title.
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xxl={12} lg={6}>
                                                <div className="mb-3">
                                                    <label htmlFor="categorySelect" className="form-label">Category <span
                                                        className="text-danger">*</span></label>
                                                    <select className="form-select" name="categorySelect" id="categorySelect">
                                                        <option value="">Select Category</option>
                                                        <option value="Headphone">Headphone</option>
                                                        <option value="Watch">Watch</option>
                                                        <option value="Furniture">Furniture</option>
                                                        <option value="Clothing">Clothing</option>
                                                        <option value="Footwear">Footwear</option>
                                                        <option value="Lighting">Lighting</option>
                                                        <option value="Beauty & Personal Care">Beauty & Personal Care
                                                        </option>
                                                        <option value="Books">Books</option>
                                                        <option value="Other Accessories">Other Accessories</option>
                                                    </select>

                                                    <div className="error-msg mt-n3">Please select a category.</div>
                                                </div>
                                            </Col>
                                            <Col xxl={12} lg={6}>
                                                <div className="mb-3">
                                                    <label htmlFor="descriptionInput" className="form-label">Description</label>
                                                    <textarea className="form-control" id="descriptionInput" rows={3}
                                                        placeholder="Description" required></textarea>
                                                    <div className="invalid-feedback">Please enter a description.</div>
                                                </div>
                                            </Col>
                                            <Col lg={12}>
                                                <div className="text-end">
                                                    <Button variant='success' type="submit" id="addNewCategory">Add Sub Category</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </form>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={9}>
                            <Row className="justify-content-between mb-4">
                                <Col xxl={3} lg={6}>
                                    <div className="search-box mb-3 mb-lg-0">
                                        <input type="text" className="form-control" id="searchResultList" autoComplete="off" placeholder="Search category & sub category..." />
                                        <i className="ri-search-line search-icon"></i>
                                    </div>
                                </Col>
                                <Col xxl={2} lg={6}>
                                    <select className="form-select" data-choices data-choices-search-false name="choices-single-default" id="idStatus">
                                        <option value="">Status</option>
                                        <option value="all" defaultValue="All">All</option>
                                        <option value="Today">Today</option>
                                        <option value="Yesterday">Yesterday</option>
                                        <option value="Last 7 Days">Last 7 Days</option>
                                        <option value="Last 30 Days">Last 30 Days</option>
                                        <option value="This Month">This Month</option>
                                        <option value="Last Month">Last Month</option>
                                    </select>
                                </Col>
                            </Row>

                            <SubCategoriesTable />
                        </Col>
                    </Row>
                </Container>
            </div >
        </React.Fragment >
    );
}

export default SubCategories;