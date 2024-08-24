import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Image, Row } from "react-bootstrap";
import Countdown from "react-countdown";

//img
import cta from "assets/images/ecommerce/home/cta.png";

interface ShoppingProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
}
const Shopping = () => {
    const renderers = ({ days, hours, minutes, seconds, completed }: ShoppingProps) => {
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
            <section className="position-relative bg-danger-subtle bg-cta">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="py-5">
                                <p className="text-uppercase  badge badge-soft-danger fs-13">Get <b>50%</b> off to your order</p>

                                <h1 className="lh-base fw-semibold mb-3 text-capitalize">Deal off the week</h1>
                                <p className="fs-16 mt-2">The hands-down winner of denim-friendly sandal styles has to be flat and simple thong sandals. They can be paired with virtually every style of women's jeans imaginable, and, as long as you can stand the toe strap, they tend to be really comfortable as well.</p>
                                <Row>
                                    <Col lg={10}>
                                        <div className="ecommerce-land-countdown mt-3 mb-0">
                                            <div className="countdownlist">
                                                <Countdown date="Jan 30, 2025" className="countdownlist" renderer={renderers} />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <div className="mt-4 pt-2 d-flex gap-2">
                                    <Link to="#" className="btn btn-primary w-md btn-hover">Shopping Now</Link>
                                    <Link to="#" className="btn btn-danger w-md btn-hover">Subscribe</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} >
                            <div className="mt-lg-n5">
                                <Image src={cta} alt="" className="mt-lg-n4" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
};


export default Shopping;