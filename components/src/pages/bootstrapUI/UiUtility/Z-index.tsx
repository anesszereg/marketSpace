import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { ZindexExample } from './UiUtilityCode'

// import Images
import avatar1 from 'assets/images/users/avatar-1.jpg'
import avatar2 from 'assets/images/users/avatar-2.jpg'
import avatar3 from 'assets/images/users/avatar-3.jpg'
import avatar4 from 'assets/images/users/avatar-4.jpg'
import avatar5 from 'assets/images/users/avatar-5.jpg'

const Zindex = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Z-index</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted mb-3">Use our low-level <code>z-index</code> utilities to quickly change the stack level of an element or component.</p>
                            <div className="position-relative z-1">
                                <img src={avatar1} alt="" className="avatar-xxl rounded position-relative z-n1" />
                                <img src={avatar2} alt="" className="avatar-xxl rounded position-relative z-0 ms-n5 mt-5" />
                                <img src={avatar3} alt="" className="avatar-xxl rounded position-relative z-1 ms-n5" />
                                <img src={avatar4} alt="" className="avatar-xxl rounded position-relative z-2 ms-n5 mt-5" />
                                <img src={avatar5} alt="" className="avatar-xxl rounded position-relative z-3 ms-n5" />
                            </div>
                        </Card.Body>
                        <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
                            <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
                        </Card.Body>
                        <Card.Body>
                            <pre className="language-markup">
                                <ZindexExample />
                            </pre>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Zindex;