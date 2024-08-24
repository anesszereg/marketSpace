import React from "react";
import { Link } from "react-router-dom";
import { Table, Image } from "react-bootstrap";

//img 
import logodark from "assets/images/logo-dark.png";
import Logolight from "assets/images/logo-light.png";
import products4 from "assets/images/products/img-4.png";
import products6 from "assets/images/products/img-6.png";
import products5 from "assets/images/products/img-5.png";

const Ordersuccess2 = () => {
    return (
        <React.Fragment>
            <section style={{ fontFamily: "'Poppins', sans-serif", boxSizing: "border-box", fontSize: "15px", width: "100%", backgroundColor: "transparent", margin: "35px 0", color: "#06283D" }}>
                <div style={{ maxWidth: "650px", margin: "auto", boxShadow: "rgba(135, 138, 153, 0.10) 0 5px 20px -6px", borderRadius: "6px", border: "1px solid #eef1f5", overflow: "hidden", backgroundColor: "#fff" }}>
                    <div style={{ padding: "1.5rem", display: "flex", gap: "8px", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
                        <div>
                            <Link to='/'><Image src={logodark} alt="" height="24" /></Link>
                        </div>
                        <div style={{ display: "flex", gap: "6px" }}>
                            <p style={{ marginBottom: "0px", fontSize: "14px", fontWeight: 500, marginTop: "0px" }}><span style={{ color: "#878a99" }}>Order ID:</span> HY45120010</p>
                            <p style={{ marginBottom: "0px", fontSize: "14px", fontWeight: 500, marginTop: "0px" }}><span style={{ color: "#878a99" }}>Date:</span> 01 Dec, 2022</p>
                        </div>
                    </div>
                    <div style={{ padding: "1.5rem", backgroundColor: "#438eff", textAlign: "center" }}>
                        <h6 style={{ fontSize: "15px", fontWeight: 500, marginBottom: "12px", marginTop: "0px", lineHeight: 1.2, color: "rgba(255, 255, 255, 0.80)" }}>Hello, Edward</h6>
                        <h5 style={{ fontSize: "18px", fontFamily: "'Poppins', sans-serif", fontWeight: 600, marginBottom: "0px", marginTop: "0px", lineHeight: 1.2, color: "#fff" }}>Your Order Confirmed!</h5>
                    </div>
                    <div style={{ padding: "1.5rem" }}>

                        <p style={{ color: "#878a99", marginBottom: "20px", marginTop: "0px" }}>Your order has been Confirmed and will be shipping soon.</p>

                        <h6 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "15px", fontWeight: 600, textDecorationLine: "underline", marginBottom: "16px", marginTop: "20px" }}>Her'e what you ordered:</h6>
                        <Table style={{ width: "100%", borderCollapse: "collapse" }} cellSpacing="0" cellPadding="0">
                            <tbody><tr>
                                <td style={{ padding: "12px 5px", verticalAlign: "top", width: "65px" }}>
                                    <div style={{ border: "1px solid #eaeef4", height: "64px", width: "64px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px" }}>
                                        <Image src={products5} alt="" height="38" />
                                    </div>
                                </td>
                                <td style={{ padding: "12px 5px", verticalAlign: "top" }}>
                                    <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 500, fontFamily: "'Poppins', sans-serif" }}>Noise NoiseFit Endure Smart Watch</h6>
                                    <p style={{ color: "#878a99", marginBottom: "10px", fontSize: "13px", fontWeight: 500, marginTop: "6px" }}>Graphic Print Men &amp; Women Sweatshirt</p>
                                    <p style={{ color: "#878a99", marginBottom: "0px", fontSize: "13px", fontWeight: 500, marginTop: "0" }}><span>Color: Red</span> <span style={{ marginLeft: "15px" }}>Size: 8 (US)</span></p>
                                </td>
                                <td style={{ padding: "12px 5px", verticalAlign: "top" }}>
                                    <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 400, fontFamily: "'Poppins', sans-serif" }}>Qty 5</h6>
                                </td>
                                <td style={{ padding: "12px 5px", verticalAlign: "top", textAlign: "end" }}>
                                    <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>$599.99</h6>
                                </td>
                            </tr>
                                <tr>
                                    <td style={{ padding: "12px 5px", verticalAlign: "top", width: "65px" }}>
                                        <div style={{ border: "1px solid #eaeef4", height: "64px", width: "64px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px" }}>
                                            <Image src={products6} alt="" height="38" />
                                        </div>
                                    </td>
                                    <td style={{ padding: "12px 5px", verticalAlign: "top" }}>
                                        <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 500, fontFamily: "'Poppins', sans-serif" }}>Striped High Neck Men Orange Sweater</h6>
                                        <p style={{ color: "#878a99", marginBottom: "10px", fontSize: "13px", fontWeight: 500, marginTop: "6px" }}>Graphic Print Men &amp; Women Sweatshirt</p>
                                        <p style={{ color: "#878a99", marginBottom: "0px", fontSize: "13px", fontWeight: 500, marginTop: "0" }}><span>Color: Orange</span> <span style={{ marginLeft: "15px" }}>Size: M</span></p>
                                    </td>
                                    <td style={{ padding: "12px 5px", verticalAlign: "top" }}>
                                        <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 400, fontFamily: "'Poppins', sans-serif" }}>Qty 1</h6>
                                    </td>
                                    <td style={{ padding: "12px 5px", verticalAlign: "top", textAlign: "end" }}>
                                        <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>$62.40</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "12px 5px", verticalAlign: "top", width: "65px" }}>
                                        <div style={{ border: "1px solid #eaeef4", height: "64px", width: "64px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px" }}>
                                            <Image src={products4} alt="" height="38" />
                                        </div>
                                    </td>
                                    <td style={{ padding: "12px 5px", verticalAlign: "top" }}>
                                        <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 500, fontFamily: "'Poppins', sans-serif" }}>Girls Mint Green Solid Open Flats</h6>
                                        <p style={{ color: "#878a99", marginBottom: "10px", fontSize: "13px", fontWeight: 500, marginTop: "6px" }}>Women Footwear</p>
                                        <p style={{ color: "#878a99", marginBottom: "0px", fontSize: "13px", fontWeight: 500, marginTop: "0" }}><span>Color: Mint Green</span> <span style={{ marginLeft: "15px" }}>Size: 10 (US)</span></p>
                                    </td>
                                    <td style={{ padding: "12px 5px", verticalAlign: "top" }}>
                                        <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 400, fontFamily: "'Poppins', sans-serif" }}>Qty 3</h6>
                                    </td>
                                    <td style={{ padding: "12px 5px", verticalAlign: "top", textAlign: "end" }}>
                                        <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>$43.00</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={3} style={{ padding: "12px 8px", fontSize: "15px", borderTop: "1px solid #e9ebec" }}>
                                        Subtotal
                                    </td>
                                    <td style={{ padding: "12px 8px", fontSize: "15px", textAlign: "end", borderTop: "1px solid #e9ebec" }}>
                                        <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>$705.39</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={3} style={{ padding: "12px 8px", fontSize: "15px" }}>
                                        Shipping Charge
                                    </td>
                                    <td style={{ padding: "12px 8px", fontSize: "15px", textAlign: "end" }}>
                                        <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>$20.00</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={3} style={{ padding: "12px 8px", fontSize: "15px" }}>
                                        Taxs (18.00%)
                                    </td>
                                    <td style={{ padding: "12px 8px", fontSize: "15px", textAlign: "end" }}>
                                        <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>$126.97</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={3} style={{ padding: "12px 8px", fontSize: "15px" }}>
                                        Discount (Toner50)
                                    </td>
                                    <td style={{ padding: "12px 8px", fontSize: "15px", textAlign: "end" }}>
                                        <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>$50.00</h6>

                                    </td></tr>
                                <tr>
                                    <td colSpan={3} style={{ padding: "12px 8px", fontSize: "15px", borderTop: "1px solid #e9ebec" }}>
                                        Total Amount
                                    </td>
                                    <td style={{ padding: "12px 8px", fontSize: "15px", textAlign: "end", borderTop: "1px solid #e9ebec" }}>
                                        <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>$802.36</h6>
                                    </td>
                                </tr>
                            </tbody></Table>
                        <p style={{ color: "#878a99", marginBottom: "20px", marginTop: "15px" }}>We'll send you shipping Confirmation when your item(s) are on the way! We appereciate your business, and hope you enjoy your purchase.</p>
                        <div style={{ textAlign: "right" }}>
                            <h6 style={{ fontSize: "17px", margin: "0px", fontWeight: 500, fontFamily: "'Poppins', sans-serif" }}>Thank you!</h6>
                            <p style={{ color: "#878a99", marginBottom: "0", marginTop: "8px" }}>Themesbrand</p>
                        </div>
                    </div>
                    <div style={{ padding: "1.5rem", backgroundColor: "#fafafa" }}>
                        <div style={{ textAlign: "center" }}>
                            <p style={{ color: "#878a99", margin: "0", fontWeight: 500 }}> {new Date().getFullYear()} © Toner.</p>
                        </div>
                    </div>
                </div>
            </section >
            <section style={{ fontFamily: "'Poppins', sans-serif", boxSizing: "border-box", fontSize: "15px", width: "100%", backgroundColor: "transparent", margin: "35px 0", color: "#fafafa" }}>
                <div style={{ maxWidth: "650px", margin: "auto", boxShadow: "rgba(135, 138, 153, 0.10) 0 5px 20px -6px", borderRadius: "6px", overflow: "hidden", backgroundColor: "#06283D" }}>
                    <div style={{ padding: "1.5rem", display: "flex", gap: "8px", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
                        <div>
                            <Link to='/'><Image src={Logolight} alt="" height="24" /></Link>
                        </div>
                        <div style={{ display: "flex", gap: "6px" }}>
                            <p style={{ marginBottom: "0px", fontSize: "14px", fontWeight: 500, marginTop: "0px" }}><span style={{ color: "#878a99" }}>Order ID:</span> HY45120010</p>
                            <p style={{ marginBottom: "0px", fontSize: "14px", fontWeight: 500, marginTop: "0px" }}><span style={{ color: "#878a99 " }}>Date:</span> 01 Dec, 2022</p>
                        </div>
                    </div>
                    <div style={{ padding: "1.5rem", backgroundColor: "#438eff", textAlign: "center" }}>
                        <h6 style={{ fontSize: "15px", fontWeight: 500, marginBottom: "12px", marginTop: "0px", lineHeight: 1.2, color: "rgba(255, 255, 255, 0.80) " }}>Hello, Edward</h6>
                        <h5 style={{ fontSize: "18px", fontFamily: "'Poppins', sans-serif", fontWeight: 600, marginBottom: "0px", marginTop: "0px", lineHeight: 1.2, color: "#fff " }}>Your Order Confirmed!</h5>
                    </div>
                    <div style={{ padding: "1.5rem" }}>
                        <p style={{ color: "#878a99 ", marginBottom: "20px", marginTop: "0px" }}>Your order has been Confirmed and will be shipping soon.</p>
                        <Table style={{ width: "100%" }} cellSpacing="0" cellPadding="0">
                            <tbody><tr>
                                <td style={{ padding: "5px", verticalAlign: "top" }}>
                                    <p style={{ color: "#878a99 ", marginBottom: "12px", fontSize: "13px", textTransform: "uppercase", fontWeight: 500, marginTop: "0px" }}>Order Date</p>
                                    <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: "#fafafa" }}>01 Jan, 2023</h6>
                                </td>
                                <td style={{ padding: "5px", verticalAlign: "top" }}>
                                    <p style={{ color: "#878a99 ", marginBottom: "12px", fontSize: "13px", textTransform: "uppercase", fontWeight: 500, marginTop: "0px" }}>Order ID</p>
                                    <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: "#fafafa" }}>HY45120010</h6>
                                </td>
                                <td style={{ padding: "5px", verticalAlign: "top" }}>
                                    <p style={{ color: "#878a99 ", marginBottom: "12px", fontSize: "13px", textTransform: "uppercase", fontWeight: 500, marginTop: "0px" }}>Payment</p>
                                    <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: "#fafafa" }}>Cash On Delivery</h6>
                                </td>
                                <td style={{ padding: "5px", verticalAlign: "top" }}>
                                    <p style={{ color: "#878a99 ", marginBottom: "12px", fontSize: "13px", textTransform: "uppercase", fontWeight: 500, marginTop: "0px" }}>Address</p>
                                    <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: "#fafafa" }}>USA</h6>
                                </td>
                            </tr>
                            </tbody></Table>

                        <h6 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "15px", fontWeight: 600, textDecorationLine: "underline", marginBottom: "16px", marginTop: "20px", color: "#fafafa" }}>Her'e what you ordered:</h6>
                        <Table style={{ width: "100%", borderCollapse: "collapse" }} cellSpacing="0" cellPadding="0">
                            <tbody><tr>
                                <td style={{ padding: "12px 5px", verticalAlign: "top", width: "65px" }}>
                                    <div style={{ border: "1px solid #ffffff14", height: "64px", width: "64px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px" }}>
                                        <Image src={products5} alt="" height="38" />
                                    </div>
                                </td>
                                <td style={{ padding: "12px 5px", verticalAlign: "top" }}>
                                    <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 500, fontFamily: "'Poppins', sans-serif", color: "#fafafa" }}>Noise NoiseFit Endure Smart Watch</h6>
                                    <p style={{ color: "#878a99 ", marginBottom: "10px", fontSize: "13px", fontWeight: 500, marginTop: "6px" }}>Graphic Print Men &amp; Women Sweatshirt</p>
                                    <p style={{ color: "#878a99 ", marginBottom: "0px", fontSize: "13px", fontWeight: 500, marginTop: "0" }}><span>Color: Red</span> <span style={{ marginLeft: "15px" }}>Size: 8 (US)</span></p>
                                </td>
                                <td style={{ padding: "12px 5px", verticalAlign: "top" }}>
                                    <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 400, fontFamily: "'Poppins', sans-serif", color: "#fafafa" }}>Qty 5</h6>
                                </td>
                                <td style={{ padding: "12px 5px", verticalAlign: "top", textAlign: "end" }}>
                                    <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: "#fafafa" }}>$599.99</h6>
                                </td>
                            </tr>
                                <tr>
                                    <td style={{ padding: "12px 5px", verticalAlign: "top", width: "65px" }}>
                                        <div style={{ border: "1px solid #ffffff14", height: "64px", width: "64px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px" }}>
                                            <Image src={products6} alt="" height="38" />
                                        </div>
                                    </td>
                                    <td style={{ padding: "12px 5px", verticalAlign: "top" }}>
                                        <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 500, fontFamily: "'Poppins', sans-serif", color: "#fafafa" }}>Striped High Neck Men Orange Sweater</h6>
                                        <p style={{ color: "#878a99 ", marginBottom: "10px", fontSize: "13px", fontWeight: 500, marginTop: "6px" }}>Graphic Print Men &amp; Women Sweatshirt</p>
                                        <p style={{ color: "#878a99 ", marginBottom: "0px", fontSize: "13px", fontWeight: 500, marginTop: "0" }}><span>Color: Orange</span> <span style={{ marginLeft: "15px" }}>Size: M</span></p>
                                    </td>
                                    <td style={{ padding: "12px 5px", verticalAlign: "top" }}>
                                        <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 400, fontFamily: "'Poppins', sans-serif", color: "#fafafa" }}>Qty 1</h6>
                                    </td>
                                    <td style={{ padding: "12px 5px", verticalAlign: "top", textAlign: "end" }}>
                                        <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: "#fafafa" }}>$62.40</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "12px 5px", verticalAlign: "top", width: "65px" }}>
                                        <div style={{ border: "1px solid #ffffff14", height: "64px", width: "64px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px" }}>
                                            <Image src={products4} alt="" height="38" />
                                        </div>
                                    </td>
                                    <td style={{ padding: "12px 5px", verticalAlign: "top" }}>
                                        <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 500, fontFamily: "'Poppins', sans-serif", color: "#fafafa" }}>Girls Mint Green Solid Open Flats</h6>
                                        <p style={{ color: "#878a99 ", marginBottom: "10px", fontSize: "13px", fontWeight: 500, marginTop: "6px" }}>Women Footwear</p>
                                        <p style={{ color: "#878a99 ", marginBottom: "0px", fontSize: "13px", fontWeight: 500, marginTop: "0" }}><span>Color: Mint Green</span> <span style={{ marginLeft: "15px" }}>Size: 10 (US)</span></p>
                                    </td>
                                    <td style={{ padding: "12px 5px", verticalAlign: "top" }}>
                                        <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 400, fontFamily: "'Poppins', sans-serif", color: "#fafafa" }}>Qty 3</h6>
                                    </td>
                                    <td style={{ padding: "12px 5px", verticalAlign: "top", textAlign: "end" }}>
                                        <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: "#fafafa" }}>$43.00</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={3} style={{ padding: "12px 8px", fontSize: "15px", borderTop: "1px solid #ffffff14" }}>
                                        Subtotal
                                    </td>
                                    <td style={{ padding: "12px 8px", fontSize: "15px", textAlign: "end", borderTop: "1px solid #ffffff14" }}>
                                        <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: "#fafafa" }}>$705.39</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={3} style={{ padding: "12px 8px", fontSize: "15px" }}>
                                        Shipping Charge
                                    </td>
                                    <td style={{ padding: "12px 8px", fontSize: "15px", textAlign: "end" }}>
                                        <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: "#fafafa" }}>$20.00</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={3} style={{ padding: "12px 8px", fontSize: "15px" }}>
                                        Taxs (18.00%)
                                    </td>
                                    <td style={{ padding: "12px 8px", fontSize: "15px", textAlign: "end" }}>
                                        <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: "#fafafa" }}>$126.97</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={3} style={{ padding: "12px 8px", fontSize: "15px" }}>
                                        Discount (Toner50)
                                    </td>
                                    <td style={{ padding: "12px 8px", fontSize: "15px", textAlign: "end" }}>
                                        <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: "#fafafa" }}>$50.00</h6>

                                    </td></tr>
                                <tr>
                                    <td colSpan={3} style={{ padding: "12px 8px", fontSize: "15px", borderTop: "1px solid #ffffff14" }}>
                                        Total Amount
                                    </td>
                                    <td style={{ padding: "12px 8px", fontSize: "15px", textAlign: "end", borderTop: "1px solid #ffffff14" }}>
                                        <h6 style={{ fontSize: "15px", margin: "0px", fontWeight: 600, fontFamily: "'Poppins', sans-serif", color: "#fafafa" }}>$802.36</h6>
                                    </td>
                                </tr>
                            </tbody></Table>
                        <p style={{
                            color: "#878a99 ",
                            marginBottom: "20px",
                            marginTop: "15px"
                        }}>We'll send you shipping Confirmation when your item(s) are on the way! We appereciate your business, and hope you enjoy your purchase.</p>
                        <div style={{ textAlign: "right" }}>
                            <h6 style={{
                                fontSize: "17px",
                                margin: "0px",
                                fontWeight: 500,
                                fontFamily: "'Poppins', sans-serif",
                                color: "#fafafa"
                            }}>Thank you!</h6>
                            <p style={{
                                color: "#878a99 ",
                                marginBottom: "0",
                                marginTop: "8px"
                            }}>Themesbrand</p>
                        </div>
                    </div>
                    <div style={{ padding: "1.5rem", backgroundColor: "#0f3146" }}>
                        <div style={{ textAlign: "center", fontWeight: 500 }}>
                            <p style={{ color: "#878a99 ", margin: "0" }}>
                                {new Date().getFullYear()} © Toner.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment >
    )
}
export default Ordersuccess2;