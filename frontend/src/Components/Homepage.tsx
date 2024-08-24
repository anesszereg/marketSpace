import React from "react";
import { Row, Col } from "react-bootstrap";

export const CommonTitle = ({ title, dicription }: any) => {
    return (
        <Row className="justify-content-center">
            <Col lg={7}>
                <div className="text-center">
                    <h3 className="mb-3">{title}</h3>
                    <p className="text-muted fs-15">{dicription}</p>
                </div>
            </Col>
        </Row>
    )
}

export const ProductNoui = () => {
    return (
        <React.Fragment>
            <div className="noUi-pips noUi-pips-horizontal">
                <div className="noUi-marker noUi-marker-horizontal noUi-marker-large" style={{ left: " 0%" }}></div>
                <div className="noUi-value noUi-value-horizontal noUi-value-large" data-value="0" style={{ left: "0%" }}>0</div>
                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: " 4.16667%" }}></div>
                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: " 8.33333%" }}></div>
                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: " 12.5%" }}></div>
                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: " 16.6667%" }}></div>
                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: " 20.8333%" }}></div>
                <div className="noUi-marker noUi-marker-horizontal noUi-marker-large" style={{ left: " 25%" }}></div>
                <div className="noUi-value noUi-value-horizontal noUi-value-large" data-value="500" style={{ left: "25%" }}>500</div>
                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: " 29.1667%" }}></div>
                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: " 33.3333%" }}></div>
                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: " 37.5%" }}></div>
                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: " 41.6667%" }}></div>
                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: " 45.8333%" }}></div>
                <div className="noUi-marker noUi-marker-horizontal noUi-marker-large" style={{ left: " 50%" }}></div>
                <div className="noUi-value noUi-value-horizontal noUi-value-large" data-value="1000" style={{ left: "50%" }}>1000</div>
                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: " 54.1667%" }}></div>
                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: " 58.3333%" }}></div>
                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: " 62.5%" }}></div>
                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: " 66.6667%" }}></div>
                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: " 70.8333%" }}></div>
                <div className="noUi-marker noUi-marker-horizontal noUi-marker-large" style={{ left: " 75%" }}></div>
                <div className="noUi-value noUi-value-horizontal noUi-value-large" data-value="1500" style={{ left: "75%" }}>1500</div>
                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: " 79.1667%" }}></div>
                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: " 83.3333%" }}></div>
                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: " 87.5%" }}></div>
                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: " 91.6667%" }}></div>
                <div className="noUi-marker noUi-marker-horizontal noUi-marker-normal" style={{ left: " 95.8333%" }}></div>
                <div className="noUi-marker noUi-marker-horizontal noUi-marker-large" style={{ left: "100%" }}></div>
                <div className="noUi-value noUi-value-horizontal noUi-value-large" data-value="2000" style={{ left: "100%" }}>2000</div>
            </div>
        </React.Fragment>
    )
}