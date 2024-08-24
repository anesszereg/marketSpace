import React from "react";

//img 
import ecommerce2 from "assets/images/ecommerce/img-2.jpg";
import { BlackFalshSymbol, BlueFlashSymbol } from "Components/FlashSymbol";
import { Button } from "react-bootstrap";

const Flashsale = () => {
    return (
        <React.Fragment>
            <section style={{ fontFamily: "'Inter', sans-serif", boxSizing: "border-box", fontSize: "15px", width: "100%", backgroundColor: "transparent", margin: "35px 0", color: "#06283D" }}>
                <div style={{ maxWidth: "600px", margin: "auto", boxShadow: "rgba(135, 138, 153, 0.10) 0 5px 20px -6px", borderRadius: "6px", overflow: "hidden", backgroundColor: "#438eff", position: "relative" }}>
                    <div style={{ padding: "24px", textAlign: "center", fontWeight: 600, zIndex: 1, position: "relative", backgroundColor: "#0d355d", color: "#fff" }}>It's our biggest sale of the year</div>
                    <div style={{ padding: "4.5rem 3.5rem 3.5rem", zIndex: 1, position: "relative" }}>
                        <div style={{ position: "absolute", inset: 0, opacity: "0.5" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="1440" height="640" preserveAspectRatio="none" viewBox="0 0 1440 640">
                                <g mask="url(&quot;#SvgjsMask1136&quot;)" fill="none">
                                    <use xlinkHref="#SvgjsSymbol1143" x="0" y="0"></use>
                                    <use xlinkHref="#SvgjsSymbol1143" x="720" y="0"></use>
                                </g>
                                <BlueFlashSymbol />
                            </svg>
                        </div>
                        <div style={{ position: "relative", padding: "24px", backgroundImage: ` url(${ecommerce2})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "8px" }}>
                            <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, backgroundColor: " rgba(255, 255, 255, .75)", borderRadius: "8px" }}></div>
                            <div style={{ position: "relative" }}>
                                <div style={{ textAlign: "center" }}>
                                    <h5 style={{ color: "#0d355d", fontSize: "64px", fontFamily: "'Inter', sans-serif", fontWeight: 600, textTransform: "uppercase", marginBottom: "18px", marginTop: "-60px", lineHeight: "1.2" }}>Sale</h5>
                                    <h5 style={{ color: "#0d355d", fontSize: "24px", fontFamily: "'Inter', sans-serif", fontWeight: 600, marginBottom: "18px", margin: "0px", lineHeight: "1.2" }}>Up to</h5>
                                    <h5 style={{ color: "#438eff", fontSize: "45px", fontFamily: "'Inter', sans-serif", fontWeight: 600, textTransform: "uppercase", marginBottom: "18px", marginTop: "0px", lineHeight: "1.2" }}><span style={{ fontSize: "120px" }}>50</span> <span style={{ width: "20px", display: "inline-block" }}>% Off</span></h5>
                                    <p style={{ color: "#0d355d", marginBottom: "25px", marginTop: "0px", lineHeight: "1.5" }}>A flash sale is a discount or promotion offered for a limited period of time.</p>
                                </div>
                                <div>
                                    <h5 style={{ color: "#0d355d", fontSize: "18px", fontFamily: "'Inter', sans-serif", fontWeight: 600, marginBottom: "10px", marginTop: "0px", lineHeight: "1.2", textAlign: "center" }}>Additional 50% Off</h5>
                                    <p style={{ color: "#0d355d ", marginBottom: "25px", marginTop: "0px", lineHeight: 1.5, textAlign: "center" }}>On Clothes for kids,women &amp; Mens Wear</p>


                                    <div style={{ textAlign: "center", marginTop: "25px" }}>
                                        <Button style={{ display: "inline-block", padding: "12px 24px", fontSize: "14px", fontWeight: 400, borderRadius: "6px", backgroundColor: "#0d355d", color: "#fff", border: "none", boxShadow: "none", cursor: "pointer", textAlign: "center", boxSizing: "border-box", width: "250px" }}>Shop Now</Button>
                                        <p style={{ color: "#0d355d", margin: "8px 0 0 0", fontSize: "13px" }}>Use code <b>FLASH50</b> at checkout</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ fontFamily: "'Inter', sans-serif", boxSizing: "border-box", fontSize: " 15px", width: "100%", backgroundColor: "transparent", margin: "35px 0", color: "#06283D" }}>
                <div style={{ maxWidth: "600px", margin: "auto", boxShadow: "rgba(135, 138, 153, 0.10) 0 5px 20px -6px", borderRadius: "6px", overflow: "hidden", backgroundColor: "#0d355d", position: "relative" }}>
                    <div style={{ padding: "24px", textAlign: "center", fontWeight: 600, zIndex: 1, position: "relative", backgroundColor: " #103d6a", color: "#fff" }}>It's our biggest sale of the year</div>
                    <div style={{ padding: "4.5rem 3.5rem 3.5rem", zIndex: 1, position: "relative" }}>
                        <div style={{ position: "absolute", inset: 0, opacity: "0.25" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="1440" height="640" preserveAspectRatio="none" viewBox="0 0 1440 640">
                                <g mask="url(&quot;#SvgjsMask1136&quot;)" fill="none">
                                    <use xlinkHref="#SvgjsSymbol1143" x="0" y="0"></use>
                                    <use xlinkHref="#SvgjsSymbol1143" x="720" y="0"></use>
                                </g>
                                <BlackFalshSymbol />
                            </svg>
                        </div>
                        <div style={{ position: "relative", padding: "24px", backgroundImage: `url(${ecommerce2})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "8px" }}>
                            <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, backgroundColor: "rgba(67, 142, 255, .7)", borderRadius: "8px" }}></div>
                            <div style={{ position: "relative" }}>
                                <div style={{ textAlign: "center" }}>
                                    <h5 style={{ color: "#fff", fontSize: "64px", fontFamily: "'Inter', sans-serif", fontWeight: 600, textTransform: "uppercase", marginBottom: "18px", marginTop: "-60px", lineHeight: "1.2" }}>Sale</h5>
                                    <h5 style={{ color: "#fff", fontSize: "24px", fontFamily: "'Inter', sans-serif", fontWeight: 600, marginBottom: "18px", margin: "0px", lineHeight: "1.2" }}>Up to</h5>
                                    <h5 style={{ color: "#fff", fontSize: "45px", fontFamily: "'Inter', sans-serif", fontWeight: 600, textTransform: "uppercase", marginBottom: "18px", marginTop: "0px", lineHeight: "1.2" }}><span style={{ fontSize: "120px" }}>50</span> <span style={{ width: "20px", display: "inline-block" }}>% Off</span></h5>
                                    <p style={{ color: "#fff", marginBottom: "25px", marginTop: "0px", lineHeight: "1.5" }}>A flash sale is a discount or promotion offered for a limited period of time.</p>
                                </div>
                                <div>
                                    <h5 style={{ color: "#fff", fontSize: "18px", fontFamily: "'Inter', sans-serif", fontWeight: 600, marginBottom: "10px", marginTop: "0px", lineHeight: " 1.2", textAlign: "center" }}>Additional 50% Off</h5>
                                    <p style={{ color: "#fff", marginBottom: "25px", marginTop: "0px", lineHeight: "1.5", textAlign: "center" }}>On Clothes for kids,women &amp; Mens Wear</p>


                                    <div style={{ textAlign: "center", marginTop: "25px" }}>
                                        <Button style={{ display: "inline-block", padding: "12px 24px", fontSize: "14px", fontWeight: 400, borderRadius: "6px", backgroundColor: "#0d355d", color: "#fff", border: "none", boxShadow: "none", cursor: "pointer", textAlign: "center", boxSizing: "border-box", width: "250px" }}>Shop Now</Button>
                                        <p style={{ color: "#fff", margin: "8px 0 0 0", fontSize: "13px" }}>Use code <b>FLASH50</b> at checkout</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment >
    )
}

export default Flashsale;