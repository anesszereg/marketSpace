import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";
import { catlogDeals } from "Common/data";

interface dealse {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean,
}

const Deals = () => {
    const renderers = ({ days, hours, minutes, seconds, completed }: dealse) => {
        if (completed) {
            return <span className='countdown-endtxt'>The countdown has ended!</span>
        } else {
            return (
                <>

                    <div className="countdownlist-item">
                        <div className="count-title">Days</div>
                        <div className="count-num">{days}</div>
                    </div>
                    <div className="countdownlist-item">
                        <div className="count-title">Hours</div>
                        <div className="count-num">{hours}</div>
                    </div>
                    <div className="countdownlist-item">
                        <div className="count-title">Minutes</div>
                        <div className="count-num">{minutes}</div>
                    </div>
                    <div className="countdownlist-item">
                        <div className="count-title">Seconds</div>
                        <div className="count-num">{seconds}</div>
                    </div>
                </>
            )
        }
    }
    return (
        <React.Fragment>
            <section className="section pt-0">
                <Container>
                    <Row >
                        <Col lg={12}>
                            <div className="d-flex align-items-center justify-content-between mb-4 pb-1">
                                <h3 className="flex-grow-1 mb-0">Deals Of The Day</h3>
                                <div className="flex-shrink-0">
                                    <Link to="#" className="link-effect link-success">All Deals
                                        <i className="ri-arrow-right-line ms-1 align-bottom"></i>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {
                            (catlogDeals || [])?.map((item, inx) => {
                                return (
                                    <Col lg={4} md={6} key={inx}>
                                        <div className="ecommerce-deals-widgets">
                                            <Card className="overflow-hidden mb-0">
                                                <div className="gallery-product">
                                                    <Image src={item.img} alt="" className="mx-auto d-block object-fit-cover" />
                                                </div>
                                            </Card>
                                            <div className="content mx-4">
                                                <div className="countdown-deals mb-3">
                                                    <div className="countdownlist">
                                                        <Countdown date={item.days} renderer={renderers} />
                                                    </div>
                                                </div>
                                                <Card className="border-0 p-4 position-relative rounded-3 shadow-lg">
                                                    <Link to="#">
                                                        <h6 className="text-capitalize fs-16 lh-base text-truncate">{item.title}</h6>
                                                    </Link>
                                                    <p className="text-muted">
                                                        <i className="ri-star-fill text-warning align-bottom"></i>
                                                        <i className="ri-star-fill text-warning align-bottom"></i>
                                                        <i className="ri-star-fill text-warning align-bottom"></i>
                                                        <i className="ri-star-fill text-warning align-bottom"></i>
                                                        <i className="ri-star-half-fill text-warning align-bottom"></i> ({item.ratting})</p>
                                                    <div className="mt-3 d-flex align-items-center">
                                                        <h5 className="text-secondary flex-grow-1 mb-0">{item.price} <span className="text-muted fs-12"><del>{item.deleteprice}</del></span></h5>
                                                        <Link to="#" className="btn btn-primary btn-sm"><i className="ri-shopping-bag-line align-bottom me-1"></i> Add</Link>
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Deals;