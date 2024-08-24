import React, { useState, useEffect, useMemo } from 'react';
import { Button, Card, Col, Container, Form, Offcanvas, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Breadcrumb from 'Common/BreadCrumb';
import { categoryListData } from 'Common/data';

const Categories = () => {

    document.title = "Categories | Toner eCommerce + Admin React Template";

    const [show, setShow] = useState<boolean>(false);
    const [info, setInfo] = useState<any>([]);

    // Pagination
    const [pagination, setPagination] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<any>(1);
    const [currentpages, setCurrentpages] = useState<any>([]);
    const perPageData = 9;

    const handleClick = (e: any) => {
        setCurrentPage(Number(e.target.id));
    };

    const indexOfLast = currentPage * perPageData;
    const indexOfFirst = indexOfLast - perPageData;

    const currentdata = useMemo(() => categoryListData.slice(indexOfFirst, indexOfLast), [indexOfFirst, indexOfLast])

    useEffect(() => {
        setCurrentpages(currentdata)
    }, [currentPage, currentdata])

    const searchTeamMember = (ele: any) => {
        let search = ele.target.value;
        if (search) {
            search = search.toLowerCase()
            setCurrentpages(categoryListData.filter((data: any) => (data.categoryTitle.toLowerCase().includes(search))));
            setPagination(false)
        } else {
            setCurrentpages(currentdata);
            setPagination(true)
        }
    };

    const pageNumbers: any = [];
    for (let i = 1; i <= Math.ceil(categoryListData.length / perPageData); i++) {
        pageNumbers.push(i);
    }

    const handleprevPage = () => {
        let prevPage = currentPage - 1;
        setCurrentPage(prevPage);
    };

    const handlenextPage = () => {
        let nextPage = currentPage + 1;
        setCurrentPage(nextPage);
    };

    useEffect(() => {
        if (pageNumbers.length && pageNumbers.length < currentPage) {
            setCurrentPage(pageNumbers.length)
        }
    }, [currentPage, pageNumbers.length])


    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Categories" pageTitle="Products" />
                    <Row>
                        <Col xxl={3}>
                            <Card>
                                <Card.Header>
                                    <h6 className="card-title mb-0">Create Categories</h6>
                                </Card.Header>
                                <Card.Body>
                                    <form autoComplete="off" className="needs-validation createCategory-form" id="createCategory-form" noValidate>
                                        <input type="hidden" id="categoryid-input" className="form-control" value="" />
                                        <Row>
                                            <Col xxl={12} lg={6}>
                                                <div className="mb-3">
                                                    <label htmlFor="categoryTitle" className="form-label">Category Title<span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" id="categoryTitle" placeholder="Enter title" required />
                                                    <div className="invalid-feedback">Please enter a category title.</div>
                                                </div>
                                            </Col>
                                            <Col xxl={12} lg={6}>
                                                <div className="mb-3">
                                                    <label htmlFor="slugInput" className="form-label">Slug <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" id="slugInput" placeholder="Enter slug" />
                                                </div>
                                            </Col>
                                            <Col xxl={12} lg={6}>
                                                <div className="mb-3">
                                                    <label htmlFor="category-image-input" className="form-label d-block">Image <span className="text-danger">*</span></label>

                                                    <div className="position-relative d-inline-block">
                                                        <div className="position-absolute top-100 start-100 translate-middle">
                                                            <label htmlFor="category-image-input" className="mb-0" data-bs-toggle="tooltip" data-bs-placement="right" title="Select Category Image">
                                                                <span className="avatar-xs d-inline-block">
                                                                    <span className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                                                        <i className="ri-image-fill"></i>
                                                                    </span>
                                                                </span>
                                                            </label>
                                                            <input className="form-control d-none" id="category-image-input" type="file" accept="image/png, image/gif, image/jpeg" />
                                                        </div>
                                                        <div className="avatar-lg">
                                                            <div className="avatar-title bg-light rounded-3">
                                                                <img src="#" alt="" id="category-img" className="avatar-md h-auto rounded-3 object-fit-cover" />
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="error-msg mt-1">Please add a category images.</div>
                                                </div>
                                            </Col>
                                            <Col xxl={12} lg={6}>
                                                <div className="mb-3">
                                                    <label htmlFor="descriptionInput" className="form-label">Description</label>
                                                    <textarea className="form-control" id="descriptionInput" rows={3} placeholder="Description" required></textarea>
                                                    <div className="invalid-feedback">Please enter a description.</div>
                                                </div>
                                            </Col>
                                            <Col xxl={12}>
                                                <div className="text-end">
                                                    <Button variant='success' type="submit">Add Category</Button>
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
                                        <Form.Control type="text" id="searchInputList" placeholder="Search Category..." onChange={(e) => searchTeamMember(e)} />
                                        <i className="ri-search-line search-icon"></i>
                                    </div>
                                </Col>
                                <Col xxl={2} lg={6}>
                                    <select className="form-select" data-choices data-choices-search-false name="choices-single-default" id="idStatus">
                                        <option value="">Status</option>
                                        <option defaultValue="all">All</option>
                                        <option value="Today">Today</option>
                                        <option value="Yesterday">Yesterday</option>
                                        <option value="Last 7 Days">Last 7 Days</option>
                                        <option value="Last 30 Days">Last 30 Days</option>
                                        <option value="This Month">This Month</option>
                                        <option value="Last Month">Last Month</option>
                                    </select>
                                </Col>
                            </Row>

                            <Row id="categories-list">
                                {(currentpages || []).map((item: any, key: number) => (<Col xxl={4} md={6} key={key}>
                                    <Card className="categrory-widgets overflow-hidden">
                                        <Card.Body className="p-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <h5 className="flex-grow-1 mb-0">{item.categoryTitle}</h5>
                                                <ul className="flex-shrink-0 list-unstyled hstack gap-1 mb-0">
                                                    <li><Link to="#" className="badge badge-soft-info">Edit</Link></li>
                                                    <li><Link to="#" data-bs-toggle="modal" className="badge badge-soft-danger">Delete</Link></li>
                                                </ul>
                                            </div>
                                            <ul className="list-unstyled vstack gap-2 mb-0">
                                                {(item.subCategory || []).map((item: any, key: number) => (key < 4 && <li key={key}><Link to="#" className="text-muted">{item}</Link></li>))}
                                            </ul>
                                            <div className="mt-3">
                                                <Link to="#" className="fw-medium link-effect" onClick={() => { setShow(true); setInfo(item) }}>Read More <i className="ri-arrow-right-line align-bottom ms-1"></i></Link>
                                            </div>
                                            <img src={item.categoryImg} alt="" className="img-fluid category-img object-fit-cover" />
                                        </Card.Body>
                                    </Card>
                                </Col>))}
                            </Row>

                            {pagination && <Row id="pagination-element" className='mb-4'>
                                <Col lg={12}>
                                    <div className="pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                                        <div className={currentPage <= 1 ? "page-item disabled" : "page-item"}>
                                            <Button variant="link" href="#" className="page-link" id="page-prev" onClick={() => handleprevPage()}>←</Button>
                                        </div>
                                        <span id="page-num" className="pagination">
                                            {pageNumbers.map((item: any, key: any) => (
                                                <React.Fragment key={key}>
                                                    <div className={currentPage === item ? "page-item active" : "page-item"}>
                                                        <Link className="page-link clickPageNumber" to="#" key={key} id={item} onClick={(e) => handleClick(e)}>
                                                            {item}
                                                        </Link>
                                                    </div>
                                                </React.Fragment>
                                            ))}
                                        </span>
                                        <div className={currentPage >= pageNumbers.length ? "page-item disabled" : "page-item"}>
                                            <Button variant="link" href="#" className="page-link" id="page-next" onClick={() => handlenextPage()}>→</Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>}

                        </Col>
                    </Row>
                </Container>
            </div>


            <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>#TB12</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="avatar-lg mx-auto">
                        <div className="avatar-title bg-light rounded">
                            <img src={info.categoryImg} alt="" className="avatar-sm overview-img" />
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <h5 className="overview-title">{info.categoryTitle}</h5>
                        <p className="text-muted">by <Link to="#" className="text-reset">Admin</Link></p>
                    </div>

                    <h6 className="fs-14">Description</h6>
                    <p className="text-muted overview-desc">{info.description}</p>

                    <h6 className="fs-14 mb-3">Sub Categories</h6>
                    <ul className="vstack gap-2 mb-0 subCategory" style={{ listStyleType: "circle" }}>
                        {(info.subCategory || []).map((item: any, key: number) => (key < 4 && <li key={key}><Link to="#" className="text-reset">{item}</Link></li>))}
                    </ul>
                </Offcanvas.Body>
                <div className="p-3 border-top">
                    <Row>
                        <Col sm={6}>
                            <div data-bs-dismiss="offcanvas">
                                <Button variant="danger" type="button" className="btn btn-danger w-100 remove-list" data-bs-toggle="modal" data-bs-target="#delteModal" data-remove-id="12"><i className="ri-delete-bin-line me-1 align-bottom"></i> Delete</Button>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <Button variant="secondary" type="button" className="w-100 edit-list" data-bs-dismiss="offcanvas" data-edit-id="12"><i className="ri-pencil-line me-1 align-bottom"></i> Edit</Button>
                        </Col>
                    </Row>
                </div>
            </Offcanvas>
        </React.Fragment >

    );
}

export default Categories;