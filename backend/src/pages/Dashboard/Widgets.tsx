import React from 'react';
import { Card, Col } from 'react-bootstrap';
import CountUp from 'react-countup';

interface WidgetsProps {
    id : number;
    name : string;
    amount : number;
    decimal ?: number;
    perstange : string;
    badgeColor : string;
    icon : string;
    iconColor : string;
}
const Widgets = () => {

    const widgetsData : Array<WidgetsProps> = [
        {
            id : 1,
            name : "TOTAL EARNINGS",
            amount : 98851.35,
            decimal : 2,
            perstange : "+18.30",
            badgeColor : "success",
            icon : "ph-wallet",
            iconColor : "secondary"
        },
        {
            id : 2,
            name : "ORDERS",
            amount : 65802,
            perstange : "-2.74",
            badgeColor : "danger",
            icon : "ph-storefront",
            iconColor : "info"
        },
        {
            id : 3,
            name : "CUSTOMERS",
            amount : 79958,
            perstange : "+29.08",
            badgeColor : "success",
            icon : "ph-user-circle",
            iconColor : "warning"
        },
        {
            id : 4,
            name : "PRODUCTS",
            amount : 36758,
            perstange : "+1.67",
            badgeColor : "success",
            icon : "ph-sketch-logo",
            iconColor : "primary"
        },
    ];
    return (
        <React.Fragment>
            {(widgetsData || []).map((item : any, key : number) => (
            <Col key={key}>
                <Card className="card-animate">
                    <Card.Body>
                        <div className="d-flex justify-content-between">
                            <div className={"vr rounded bg-" + item.iconColor + " opacity-50"} style={{ width: "4px"}}></div>
                            <div className="flex-grow-1 ms-3">
                                <p className="text-uppercase fw-medium text-muted fs-14 text-truncate">{item.name}</p>
                                <h4 className="fs-22 fw-semibold mb-3">{item.decimal ? "$" : ""}<span className="counter-value" data-target="98851.35">
                                    <CountUp start={0} end={item.amount} separator="," decimals={item.decimal && 2} />
                                    </span></h4>
                                <div className="d-flex align-items-center gap-2">
                                    <h5 className={"badge badge-soft-" + item.badgeColor + " mb-0"}>
                                        <i className={item.badgeColor === "success" ? "ri-arrow-right-up-line align-bottom" : "ri-arrow-right-down-line align-bottom"}></i> {item.perstange} %
                                    </h5>
                                    <p className="text-muted mb-0">than last week</p>
                                </div>
                            </div>
                            <div className="avatar-sm flex-shrink-0">
                                <span className={"avatar-title bg-" + item.iconColor + "-subtle text-" + item.iconColor + " rounded fs-3"}>
                                    <i className={item.icon}></i>
                                </span>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            ))}
        </React.Fragment>
    );
}

export default Widgets;