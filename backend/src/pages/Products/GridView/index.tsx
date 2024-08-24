import React, { useState, useEffect, useMemo } from 'react';
import { Button, Card, Col, Container, Dropdown, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import ProductCategoryFilter from '../ListView/ProductCategoryFilter';
import { productList } from 'Common/data';
import { Link } from 'react-router-dom';

const GridView = () => {

    document.title = "Product Grid | Toner eCommerce + Admin React Template";

    // Pagination
    const [pagination, setPagination] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<any>(1);
    const [currentpages, setCurrentpages] = useState<any>([]);
    const perPageData = 6;

    const handleClick = (e: any) => {
        setCurrentPage(Number(e.target.id));
    };

    const indexOfLast = currentPage * perPageData;
    const indexOfFirst = indexOfLast - perPageData;

    const currentdata = useMemo(() => productList.slice(indexOfFirst, indexOfLast), [indexOfFirst, indexOfLast])

    useEffect(() => {
        setCurrentpages(currentdata)
    }, [currentPage, currentdata])

    const searchProducts = (ele: any) => {
        let search = ele.target.value;
        if (search) {
            search = search.toLowerCase()
            setCurrentpages(productList.filter((data: any) => (data.productTitle.toLowerCase().includes(search))));
            setPagination(false)
        } else {
            setCurrentpages(currentdata);
            setPagination(true)
        }
    };

    const pageNumbers: any = [];
    for (let i = 1; i <= Math.ceil(productList.length / perPageData); i++) {
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

                    <Breadcrumb title="Product Grid" pageTitle="Products" />

                    <Row>
                        <Col xl={3} lg={4}>
                            <Card className="overflow-hidden">
                                <Card.Header>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            <h5 className="fs-16 mb-0">Filters</h5>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Link to="#" className="text-decoration-underline" id="clearall">Clear All</Link>
                                        </div>
                                    </div>
                                </Card.Header>
                                <ProductCategoryFilter />
                            </Card>
                        </Col>

                        <Col xl={9} lg={8}>
                            <Row className="g-4 mb-4">
                                <Col className="col-sm-auto">
                                    <div>
                                        <Link to="/product-create" className="btn btn-primary" id="addproduct-btn"><i className="ri-add-line align-bottom me-1"></i> Add Product</Link>
                                    </div>
                                </Col>
                                <Col className="col-sm">
                                    <div className="d-flex justify-content-sm-end">
                                        <div className="search-box ms-2">
                                            <input type="text" className="form-control" autoComplete="off" id="searchProductList" placeholder="Search Products..." onChange={(e) => searchProducts(e)} />
                                            <i className="ri-search-line search-icon"></i>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row id="product-grid">
                                {(currentpages || []).map((item: any, key: number) => (
                                    <Col lg={4} sm={6} key={key}>
                                        <Card className="ecommerce-product-widgets overflow-hidden">
                                            <Card.Body>
                                                <div className="bg-light rounded py-5 position-relative">

                                                    <Dropdown className="action">
                                                        <Dropdown.Toggle className="btn btn-soft-secondary btn-sm btn-icon arrow-none">
                                                            <i className="ph-dots-three-outline" />
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu as="ul">
                                                            <li> <Dropdown.Item href="#"> Edit </Dropdown.Item> </li>
                                                            <li> <Dropdown.Item href="#"> Remove </Dropdown.Item> </li>
                                                        </Dropdown.Menu>
                                                    </Dropdown>

                                                    <img src={item.productImg} alt="" style={{ maxHeight: "150px", maxWidth: "100%" }} className="mx-auto d-block rounded-2" />

                                                    {parseFloat(item.discount) > 0 && <div className="avatar-xs label">
                                                        <div className="avatar-title bg-danger rounded-circle fs-11">{item.discount}</div>
                                                    </div>}
                                                </div>

                                                <div className="mt-3">
                                                    <div className="mb-2 d-flex justify-content-between align-items-center">
                                                        <h5 className="text-primary fs-17 mb-0">${(parseFloat(item.price) * (((100 - parseFloat(item.discount)) / 100))).toFixed(2)}  <span className="text-muted fs-14">
                                                            {parseFloat(item.discount) > 0 && <del>${item.price}</del>}
                                                        </span></h5>
                                                        <span>{item.rating} <i className="ri-star-half-fill text-warning align-middle"></i></span>
                                                    </div>
                                                    <Link to="#!">
                                                        <h6 className="fs-16 text-capitalize lh-base text-truncate mb-0">{item.productTitle}</h6>
                                                    </Link>
                                                    <p className="text-muted">{item.category}</p>
                                                    <Row className="d-none">
                                                        <Col className="col-6">
                                                            <ul className="clothe-colors list-unstyled hstack gap-1 d-flex mb-0 flex-wrap mb-3">
                                                                <li>
                                                                    <input type="radio" name="color1" id="product-color-12" />
                                                                    <label className="avatar-xxs border border-2 border-white btn btn-secondary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="product-color-12"></label>
                                                                </li>
                                                                <li>
                                                                    <input type="radio" name="color1" id="product-color-13" />
                                                                    <label className="avatar-xxs border border-2 border-white btn btn-light p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="product-color-13"></label>
                                                                </li>
                                                                <li>
                                                                    <input type="radio" name="color1" id="product-color-14" />
                                                                    <label className="avatar-xxs border border-2 border-white btn btn-dark p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="product-color-14"></label>
                                                                </li>
                                                            </ul>
                                                        </Col>
                                                        <Col className="col-6">
                                                            <ul className="clothe-size list-unstyled hstack gap-2 d-flex mb-0 flex-wrap mb-3"><li>
                                                                <input type="radio" name="sizes1" id="product-size-15" />
                                                                <label className="avatar-xxs border border-2 border-white btn btn-soft-primary text-uppercase p-0 fs-12 d-flex align-items-center justify-content-center rounded-circle" htmlFor="product-size-15">s</label>
                                                            </li>
                                                                <li>
                                                                    <input type="radio" name="sizes1" id="product-size-16" />
                                                                    <label className="avatar-xxs border border-2 border-white btn btn-soft-primary text-uppercase p-0 fs-12 d-flex align-items-center justify-content-center rounded-circle" htmlFor="product-size-16">m</label>
                                                                </li>
                                                                <li>
                                                                    <input type="radio" name="sizes1" id="product-size-17" />
                                                                    <label className="avatar-xxs border border-2 border-white btn btn-soft-primary text-uppercase p-0 fs-12 d-flex align-items-center justify-content-center rounded-circle" htmlFor="product-size-17">l</label>
                                                                </li>
                                                            </ul>
                                                        </Col>
                                                    </Row>
                                                    <Row className="text-center g-0">
                                                        <Col className="col-4 border-end border-end-dashed">
                                                            <div className="mt-3">
                                                                <h5 className="fs-15 text-truncate mb-1">{item.stock}</h5>
                                                                <p className="text-muted mb-0">Stocks</p>
                                                            </div>
                                                        </Col>
                                                        <Col className="col-4 border-end border-end-dashed">
                                                            <div className="mt-3">
                                                                <h5 className="fs-15 text-truncate mb-1">{item.orders}</h5>
                                                                <p className="text-muted mb-0">Orders</p>
                                                            </div>
                                                        </Col>
                                                        <Col className="col-4">
                                                            <div className="mt-3">
                                                                <h5 className="fs-15 text-truncate mb-1">{item.publish}</h5>
                                                                <p className="text-muted mb-0">Publish</p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>

                            {pagination && <Row className="mb-4" id="pagination-element">
                                <Col lg={12}>
                                    <div className="pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                                        <div className={currentPage <= 1 ? "page-item disabled" : "page-item"}>
                                            <Button variant="link" href="#" className="page-link" id="page-prev" onClick={() => handleprevPage()}>Previous</Button>
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
                                            <Button variant="link" href="#" className="page-link" id="page-next" onClick={() => handlenextPage()}>Next</Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>}

                            {!currentpages.length && <Row id="search-result-elem">
                                <Col lg={12}>
                                    <div className="text-center py-5">
                                        <div className="avatar-lg mx-auto mb-4">
                                            <div className="avatar-title bg-primary-subtle text-primary rounded-circle fs-24">
                                                <i className="bi bi-search"></i>
                                            </div>
                                        </div>

                                        <h5>No matching records found</h5>
                                    </div>
                                </Col>
                            </Row>}
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment >
    );
};

export default GridView;