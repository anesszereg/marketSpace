import React, { useState } from 'react';
import { Card, Col, Row, Button, Collapse } from 'react-bootstrap';
import { IconCollapseExample, InlineBLockCollapseExample } from './UiAccordianCode';
import { Link } from 'react-router-dom';

const IconInlineBlockCollapse = () => {
    const [iconColl, seticonColl] = useState(true);
    const [iconColl2, seticonColl2] = useState(true);
    const [blockColl, setblockColl] = useState(true);
    const [blockColl2, setblockColl2] = useState(true);
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Collapse with Icon</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">
                                Here is the example of collapse in which the icon is wrapped within the button collapse toggle.
                            </p>
                            <div className="hstack gap-3 mb-3">
                                <Link to='#' className="link-success" onClick={() => seticonColl(!iconColl)}>
                                    <i className="ri-arrow-down-circle-line fs-16"></i>
                                </Link>
                                <Button variant='light' onClick={() => seticonColl2(!iconColl2)}>
                                    <i className="ri-filter-2-line"></i>
                                </Button>
                            </div>
                            <Collapse in={iconColl}>
                                <Card className="mb-0">
                                    <Card.Body>
                                        If you enter text including symbols in the search criteria, the search criteria is interpreted exactly as you entered it, and the search is case sensitive as a case insensitive search that contains certain text but does also provide a lot of search criteria options.
                                    </Card.Body>
                                </Card>
                            </Collapse>
                            <Collapse in={iconColl2}>
                                <Card className="mb-0 mt-3">
                                    <Card.Body>
                                        When you want to search for data, such as customer names, addresses, or product groups, you enter criteria. In search criteria you can use all the numbers and letters that you normally use in the specific field. In addition, you can use special symbols to further filter the results.
                                    </Card.Body>
                                </Card>
                            </Collapse>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "295px" }}>
                                <IconCollapseExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Inline & Block Element Collapse</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Inline element collapse takes all horizontal space hence you can activate the collapse within by clicking on full-width horizontal space. Block element collapse can be activated by clicking on collapse toggle only.</p>
                            <div className="mb-3">
                                <h6 className="text-primary" onClick={() => setblockColl(!blockColl)}>
                                    <code>&lt;h6&gt;</code> Inline Element Collapse
                                </h6>
                                <span className="text-primary" onClick={() => setblockColl2(!blockColl2)}>
                                    <code>&lt;span&gt;</code> Block Element Collapse
                                </span>
                            </div>
                            <Row className="g-2">
                                <Collapse dimension='width' in={blockColl}>
                                    <div className="col-auto">
                                        <Card body className="mb-0" style={{ width: "300px" }}>
                                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring heart.
                                        </Card>
                                    </div>
                                </Collapse>
                                <Collapse dimension='width' in={blockColl2} >
                                    <div className="col-auto">
                                        <Card body className="mb-0" style={{ width: "300px" }}>
                                            When you have created a new account schedule and set up the rows, you must set up columns.
                                        </Card>
                                    </div>
                                </Collapse>
                            </Row>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup" style={{ height: "275px" }}>
                                <InlineBLockCollapseExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default IconInlineBlockCollapse ;