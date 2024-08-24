import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { productData } from "Common/data";
import { Shoporder } from "Components/ShopTopBar";
import DeleteModal from "Components/DeleteModal";

const Cardshop = () => {
    const [productcount, setProductcount] = useState(productData);
    const [charge, setCharge] = useState(0);
    const [dis, setDis] = useState(0);
    const [tax, setTax] = useState(0);
    //delete id
    const [id, setId] = useState('');
    //modal
    const [removeModel, setRemovemodel] = useState(false);
    const RemoveModel = (id: any) => {
        setRemovemodel(!removeModel);
        setId(id);
    };

    const deleteData = () => {
        setProductcount(productData?.filter((delet: any) => delet.id !== id));
    }

    const assinged = (productcount || [])?.map(M => M.Total);
    let subtotal = 0;
    for (let i = 0; i < assinged.length; i++) {
        subtotal += Math.round(assinged[i])
    }

    useEffect(() => {
        let dis: any = (0.15 * subtotal).toFixed(2);
        let tax = (0.125 * subtotal);

        if (subtotal !== 0) {
            setCharge(65)
        } else {
            setCharge(0)
        }
        setDis(dis);
        setTax(tax);
    }, [subtotal])


    const countUP = (item: any) => {
        setProductcount((productData || [])?.map(count => count.id === item.id ? { ...count, num: item.num + 1, Total: (item.num + 1) * item.ItemPrice } : count))
    }

    const countDown = (item: any) => {
        setProductcount((productData || []).map((count: any) => (count.id === item.id && count.num > 0) ? { ...count, num: item.num > 0 ? item.num - 1 : 0, Total: (item.num > 0 ? item.num - 1 : 0) * item.ItemPrice } : count));
    }

    return (
        <React.Fragment>
            <Col lg={8}>
                <div className="d-flex align-items-center mb-4">
                    <h5 className="mb-0 flex-grow-1 fw-medium">There are <span className="fw-bold product-count">4</span> products in your cart</h5>
                    <div className="flex-shrink-0">
                        <Link to="#" className="text-decoration-underline link-secondary">Clear Cart</Link>
                    </div>
                </div>
                {
                    (productcount || [])?.map((item: any, inx) => {
                        return (
                            <Card key={inx} className="product">
                                <Card.Body className="p-4">
                                    <Row className="gy-3">
                                        <Col className="col-sm-auto">
                                            <div className="avatar-lg h-100">
                                                <div className={`avatar-title bg-${item.bg}-subtle rounded py-3`}>
                                                    <Image src={item.img} alt="" className="avatar-md" />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col className="col-sm">
                                            <Link to="#">
                                                <h5 className="fs-16 lh-base mb-1">{item.title}</h5>
                                            </Link>
                                            <ul className="list-inline text-muted fs-13 mb-3">
                                                <li className="list-inline-item">Color : <span className="fw-medium">{item.Color}</span></li>
                                                {item.Size && <li className="list-inline-item">Size : <span className="fw-medium">{item.Size || ''}</span></li>}
                                            </ul>
                                            <div className="input-step">
                                                <Button className="minus" onClick={() => countDown(item)}>–</Button>
                                                <Form.Control type="number" className="product-quantity" value={item.num} min="0" max="100" readOnly />
                                                <Button className="plus" onClick={() => countUP(item)}>+</Button>
                                            </div>
                                        </Col>
                                        <Col className="col-sm-auto">
                                            <div className="text-lg-end">
                                                <p className="text-muted mb-1 fs-12">Item Price:</p>
                                                <h5 className="fs-16">$<span className="product-price">{item.ItemPrice}</span></h5>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Footer>
                                    <Row className="align-items-center gy-3">
                                        <Col className="col-sm">
                                            <div className="d-flex flex-wrap my-n1">
                                                <div>
                                                    <Link to="#" className="d-block text-body p-1 px-2" data-bs-toggle="modal" data-bs-target="#removeItemModal" onClick={() => RemoveModel(item.id)}>
                                                        <i className="ri-delete-bin-fill text-muted align-bottom me-1"></i> Remove</Link>

                                                </div>
                                                <div>
                                                    <Link to="#" className="d-block text-body p-1 px-2"><i className="ri-star-fill text-muted align-bottom me-1"></i> Add Wishlist</Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col className="col-sm-auto">
                                            <div className="d-flex align-items-center gap-2 text-muted">
                                                <div>Total :</div>
                                                <h5 className="fs-14 mb-0">$<span className="product-line-price">{(item.Total).toFixed(2)}</span></h5>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        )
                    })
                }

            </Col>
            <div className="col-xl-4">
                <div className="sticky-side-div">
                    <Shoporder subtotal={subtotal} dic={dis} charge={charge} tax={tax} total={subtotal + charge + tax - dis} />
                    <div className="hstack gap-2 justify-content-end">
                        <Button variant="danger" className="btn btn-hover">Continue Shopping</Button>
                        <Button variant="success" className="btn btn-hover">Check Out <i className="ri-logout-box-r-line align-bottom ms-1"></i></Button>
                    </div>
                </div>
            </div>
            <DeleteModal removeModel={removeModel} hideModal={RemoveModel} deleteData={deleteData} />
        </React.Fragment >
    )
}

export default Cardshop;