import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BrandsTable = ({brands} : any) => {
    const noresult : any = useRef();
    const teamList : any = useRef();
    const [brandList, setBrandList] = useState([]);
    const [show, setShow] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(15);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = brandList.slice(startIndex, endIndex);
    const totalPages = Math.ceil(brandList.length / itemsPerPage);

    useEffect(() => {
        setBrandList(brands);
        setItemsPerPage(15)
    }, [brands]);

    const handleSearchClick = (event : any) => {
        setCurrentPage(1);
        let inputVal = event.toLowerCase();

        const filterItems = (arr : any, query : any) => {
            return arr.filter((el : any) => {
                return el.brandName.toLowerCase().indexOf(query.toLowerCase()) !== -1
            })
        }

        let filterData = filterItems(brands, inputVal);
        setBrandList(filterData);
        if (filterData.length === 0) {
            noresult.current.style.display = "block";
            teamList.current.style.display = "none";
        } else {
            noresult.current.style.display = "none";
            // teamList.current.style.display = "block";
        }
    }
    
  return (
    <React.Fragment>
         <Row className="align-items-center mb-4">
            <Col xxl={3} lg={4} sm={9}>
                <div className="search-box mb-3 mb-sm-0">
                    <input 
                        onChange={(e : any) => handleSearchClick(e.target.value)}
                        type="text" 
                        className="form-control" 
                        id="searchInputList" 
                        autoComplete="off"
                        placeholder="Search brands..." />
                    <i className="ri-search-line search-icon"></i>
                </div>
            </Col>
            <Col sm={3} className="col-lg-auto ms-auto">
                <Button variant='success' onClick={() => setShow(true)} className="w-100"><i className="bi bi-plus-circle me-1 align-middle"></i> Add Brand</Button>
            </Col>
        </Row>

        <Row className="row-cols-xxl-5 row-cols-lg-4 row-cols-sm-2 row-cols-1" id="brand-list" ref={teamList}>
            {(paginatedData || []).map((item : any, key : number) => (
                <Col key={key}>
                    <Card className="card brand-widget card-animate">
                        <Card.Body className="card-body text-center pb-2">
                            <img src={item.companyLogo} alt="" className="brand-img" />
                        </Card.Body>
                        <div className="card-footer text-center border-0">
                            <h6 className="fs-17">{item.brandName}</h6>
                            <p className="mb-0"><Link to="#" className="link-success stretched-link">{item.productItems} Items</Link></p>
                        </div>
                    </Card>
                </Col>
            ))}
        </Row>

        <div id="noresult" className="" ref={noresult} style={{ display: "none" }}>
            <div className="text-center py-4">
                <div className="avatar-md mx-auto mb-4">
                    <div className="avatar-title bg-primary-subtle text-primary rounded-circle fs-24">
                        <i className="bi bi-search"></i>
                    </div>
                </div>
                <h5 className="mt-2">Sorry! No Result Found</h5>
            </div>
        </div>

        <Row className="mb-4" id="pagination-element" style={{display: "flex"}}>
            <Col lg={12}>
                <div className="pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                    <div className="page-item" onClick={() => setCurrentPage(currentPage - 1)}>
                        <Link to="#" className="page-link" id="page-prev"><i className="mdi mdi-chevron-left"></i></Link>
                    </div>
                    {Array.from({ length: totalPages }, (_, i) => {
                    const pageNumber = i + 1;
                    const isActive = pageNumber === currentPage;
                    return (
                        <span id="page-num" className="pagination" key={pageNumber}  onClick={() => setCurrentPage(pageNumber)}>
                            <div className={isActive ? "page-item active" : "page-item"}>
                                <Link className="page-link clickPageNumber" to="#"> {pageNumber}</Link>
                            </div>
                        </span>
                    );
                    })}
                    <div className="page-item" onClick={() => setCurrentPage(currentPage + 1)}>
                        <Link to="#"  className="page-link" id="page-next"><i className="mdi mdi-chevron-right"></i></Link>
                    </div>
                </div>
            </Col>
        </Row>


        <Modal show={show}  onHide={() => setShow(false)} id="createModal" className="zoomIn border-0" centered>
            <Modal.Header className="px-4 pt-4" closeButton>
                <h5 className="modal-title fs-18">Create brand profile</h5>
            </Modal.Header>
            <Modal.Body className="p-4">
                <form className="create-form">
                    <input type="hidden" id="id-field" />   
                    <div id="alert-error-msg" className="d-none alert alert-danger py-2"></div>

                    <Row>
                        <Col lg={12}>
                            <div className="text-center mb-3">
                                <div className="position-relative d-inline-block">
                                    <div className="position-absolute top-100 start-100 translate-middle">
                                        <label htmlFor="brandLogo-image-input" className="mb-0" data-bs-toggle="tooltip" data-bs-placement="right" title="Select company logo">
                                            <span className="avatar-xs d-inline-block">
                                                <span className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                                    <i className="ri-image-fill"></i>
                                                </span>
                                            </span>
                                        </label>
                                        <input className="form-control d-none" id="brandLogo-image-input" type="file" accept="image/png, image/gif, image/jpeg" />
                                    </div>
                                    <div className="avatar-lg">
                                        <div className="avatar-title bg-light rounded-3">
                                            <img src="#" alt="" id="brandLogo-img" className="avatar-md h-auto rounded-3 object-fit-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="mb-3">
                                <label htmlFor="brandName-input" className="form-label">Brand Name</label>
                                <input type="text" className="form-control" id="brandName-input" placeholder="Enter brand name" required />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="hstack gap-2 justify-content-end">
                                <Button variant='ghost-danger' className="btn btn-ghost-danger" onClick={() => setShow(false)}><i className="ri-close-line align-bottom me-1"></i> Close</Button>
                                <Button variant='primary' id="addNew" className="btn btn-primary">Add Brand</Button>
                            </div>
                        </Col>
                    </Row>
                </form>
            </Modal.Body>
    </Modal>
    </React.Fragment>
  )
}

export default BrandsTable
