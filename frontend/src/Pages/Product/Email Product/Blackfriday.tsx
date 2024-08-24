import React from "react";
import { Link } from "react-router-dom";
import { Button, Table, Image } from "react-bootstrap";

//img
import products5 from "assets/images/products/img-5.png";
import products14 from "assets/images/products/img-14.png";
import { BlackFridaysymbol, BlueFridaySymbol } from "Components/FridaySymbol";

const Blackfriday = () => {
    return (
        <React.Fragment>
            <section style={{ fontFamily: "'Inter', sans-serif", boxSizing: "border-box", fontSize: "15px", width: "100%", backgroundColor: "transparent", margin: "35px 0", color: "#06283D" }}>
                <div style={{ maxWidth: "600px", margin: "auto", boxShadow: " rgba(135, 138, 153, 0.10) 0 5px 20px -6px", borderRadius: "6px", overflow: "hidden", backgroundColor: "rgb(206, 236, 250)", position: "relative" }}>
                    <div style={{ position: "absolute", inset: 0, opacity: "0.5" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
                            <g mask="url(&quot;#SvgjsMask1136&quot;)" fill="none">
                                <use xlinkHref="#SvgjsSymbol1143" x="0" y="0"></use>
                                <use xlinkHref="#SvgjsSymbol1143" x="720" y="0"></use>
                            </g>
                            <BlueFridaySymbol />
                        </svg>
                    </div>
                    <div style={{ padding: "3.5rem", zIndex: 1, position: "relative" }}>
                        <div style={{ textAlign: "center" }}>
                            <h5 style={{ color: "#0d84b3", fontSize: "16px", fontFamily: "'Inter', sans-serif", fontWeight: 500, textTransform: "uppercase", marginBottom: "18px", marginTop: "0px", lineHeight: "1.2" }}>✨ Black Friday Sale ✨</h5>
                            <h5 style={{ color: "#0d355d", fontSize: "45px", fontFamily: "'Inter', sans-serif", fontWeight: 600, textTransform: "uppercase", marginBottom: "18px", marginTop: "0px", lineHeight: "1.2" }}><span style={{ fontSize: "120px" }}>50</span> <span style={{ width: "20px", display: "inline-block" }}>% Off</span></h5>
                            <p style={{ color: "#0d355d", marginBottom: "25px", marginTop: "0px", lineHeight: "1.5" }}>Black Friday always occurs the day after Thanksgiving, but the exact date changes from year to year. In 2022, Black Friday falls on November 25.</p>
                        </div>
                        <div>
                            <h5 style={{ color: "#0d355d", fontSize: "18px", fontFamily: "'Inter', sans-serif", fontWeight: "600", marginBottom: "10px", marginTop: "0px", lineHeight: "1.2", textAlign: "center" }}>Additional 50% Off</h5>
                            <p style={{ color: "#0d355d ", marginBottom: "25px", marginTop: "0px", lineHeight: "1.5", textAlign: "center" }}>On Clothes for kids,women &amp; Mens Wear</p>
                            <Table style={{ width: "100 %" }} cellSpacing="0" cellPadding="0">
                                <tbody><tr>
                                    <td style={{ padding: "8px", verticalAlign: "top", textAlign: "center" }}>
                                        <div style={{ position: "relative" }}>
                                            <div style={{ padding: "35px", backgroundColor: "#fff", borderRadius: "6px" }}>
                                                <Image src={products5} alt="" height="150" />
                                            </div>
                                            <Link to="#">
                                                <h6 style={{ fontSize: "15px", margin: "10px 0", fontWeight: 600, fontFamily: "'Inter', sans-serif", color: "#0d355d" }}>Sports Footwear</h6>
                                            </Link>
                                        </div>
                                    </td>
                                    <td style={{ padding: "8px", verticalAlign: "top", textAlign: "center" }}>
                                        <div style={{ position: "relative" }}>
                                            <div style={{ padding: "35px", backgroundColor: "#fff", borderRadius: "6px" }}>
                                                <Image src={products14} alt="" height="150" />
                                            </div>
                                            <Link to="#">
                                                <h6 style={{ fontSize: "15px", margin: " 10px 0", fontWeight: 600, fontFamily: "'Inter', sans-serif", color: "#0d355d" }}>Furniture &amp; Decore</h6>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                </tbody></Table>

                            <div style={{ textAlign: "center", marginTop: "25px" }}>
                                <Button style={{ display: "inline - block", padding: "12px 24px", fontSize: "14px", fontWeight: 400, borderRadius: "6px", backgroundColor: "#438eff", color: "#fff", border: "none ", boxShadow: "none", cursor: "pointer", textAlign: "center", boxSizing: "border-box", width: "250px" }}>Shop Now</Button>
                                <p style={{ margin: "8px 0 0 0", fontSize: "13px" }}>Use code <b>BLACK</b> at checkout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ fontFamily: "'Inter', sans-serif", boxSizing: "border-box", fontSize: "15px", width: "100%", backgroundColor: "transparent", margin: "35px 0", color: "#e6f4fd" }}>
                <div style={{ maxWidth: "600px", margin: "auto", boxShadow: "rgba(135, 138, 153, 0.10) 0 5px 20px -6px", borderRadius: "6px", overflow: "hidden", backgroundColor: "#062e41", position: "relative" }}>
                    <div style={{ position: "absolute", inset: 0, opacity: "0.5" }}>
                        <BlackFridaysymbol />
                    </div>
                    <div style={{ padding: "3.5rem", zIndex: 1, position: "relative" }}>
                        <div style={{ textAlign: "center" }}>
                            <h5 style={{ color: "#438eff", fontSize: "16px", fontFamily: "'Inter', sans-serif", fontWeight: 500, textTransform: "uppercase", marginBottom: "18px", marginTop: "0px", lineHeight: "1.2" }}>✨ Black Friday Sale ✨</h5>
                            <h5 style={{ color: "#daedff", fontSize: " 45px", fontFamily: "'Inter', sans-serif", fontWeight: 600, textTransform: "uppercase", marginBottom: " 18px", marginTop: "0px", lineHeight: "1.2" }}><span style={{ fontSize: "120px" }}>50</span> <span style={{ width: "20px", display: "inline-block" }}>% Off</span></h5>,
                            <p style={{ color: "#9eb8d1", marginBottom: "25px", marginTop: "0px", lineHeight: "1.5" }}>Black Friday always occurs the day after Thanksgiving, but the exact date changes from year to year. In 2022, Black Friday falls on November 25.</p>
                        </div>
                        <div>
                            <h5 style={{ color: "#daedff ", fontSize: "18px", fontFamily: "'Inter', sans-serif", fontWeight: 600, marginBottom: "10px", marginTop: "0px", lineHeight: "1.2", textAlign: "center" }}>Additional 50% Off</h5>
                            <p style={{ color: "#9eb8d1 ", marginBottom: "25px", marginTop: "0px", lineHeight: "1.5", textAlign: "center" }}>On Clothes for kids,women &amp; Mens Wear</p>
                            <Table style={{ width: "100%" }} cellSpacing="0" cellPadding="0">
                                <tbody><tr>
                                    <td style={{ padding: "8px", verticalAlign: "top", textAlign: "center" }}>
                                        <div style={{ position: "relative" }}>
                                            <div style={{ padding: "35px", backgroundColor: "#113b4f", borderRadius: "6px" }}>
                                                <Image src={products5} alt="" height="150" />
                                            </div>
                                            <Link to="#">
                                                <h6 style={{ fontSize: "15px", margin: " 10px 0", fontWeight: 600, fontFamily: "'Inter', sans-serif", color: "#daedff" }}>Sports Footwear</h6>
                                            </Link>
                                        </div>
                                    </td>
                                    <td style={{ padding: "8px", verticalAlign: "top", textAlign: "center" }}>
                                        <div style={{ position: "relative" }}>
                                            <div style={{ padding: "35px", backgroundColor: "#113b4f", borderRadius: "6px" }}>
                                                <Image src={products14} alt="" height="150" />
                                            </div>
                                            <Link to="#">
                                                <h6 style={{ fontSize: "15px", margin: "10px 0", fontWeight: 600, fontFamily: "'Inter', sans-serif", color: "#daedff" }}>Furniture &amp; Decore</h6>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                </tbody></Table>

                            <div style={{ textAlign: "center", marginTop: "25px" }}>
                                <Button style={{ display: "inline-block", padding: "12px 24px", fontSize: "14px", fontWeight: 400, borderRadius: "6px", backgroundColor: "#438eff", color: "#fff", border: "none ", boxShadow: "none", cursor: "pointer", textAlign: "center", boxSizing: "border-box", width: "250px" }}>Shop Now</Button>
                                <p style={{ margin: "8px 0 0 0", fontSize: "13px" }}>Use code <b>BLACK</b> at checkout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment >
    )
}

export default Blackfriday;