import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Pagination = ({ pagination, currentpages, pageNumbers, currentPage, handleprevPage, handleClick, handlenextPage }: any) => {
    return (
        <React.Fragment>
            {pagination && <Row className="mb-4" id="pagination-element">
                <Col lg={12}>
                    <div className="pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                        <div className={currentPage <= 1 ? "page-item disabled" : "page-item"}>
                            <Button variant="link" href="#" className="page-link" id="page-prev" onClick={() => handleprevPage()}>Previous</Button>
                        </div>
                        <span id="page-num" className="pagination">
                            {(pageNumbers || []).map((item: any, key: any) => (
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
        </React.Fragment>
    );
}

export default Pagination;