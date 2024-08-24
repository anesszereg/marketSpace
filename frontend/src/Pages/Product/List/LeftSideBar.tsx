import React from "react"
import { Container } from "react-bootstrap";
import { CommonService } from "Components/CommonService";
import { ProductGrid } from "Components/ProductSilde";
import { BrandedProduct } from "Components/ShopTopBar";
import EmailClothe from "Pages/Catalog/EmailClothe";
import Index from "Components/Index";

const LeftSideBar = () => {
    return (
        <React.Fragment>
            <ProductGrid title="Product List Left Sidebar" />
            <section className="section">
                <Container>
                    <div className="ecommerce-product gap-4">
                        <Index name="sidebar small-sidebar flex-shrink-0" cxl="12" />
                    </div>
                </Container>
            </section>
            <BrandedProduct title="New Branded Products" />
            <EmailClothe />
            <CommonService />
        </React.Fragment>
    )
}

export default LeftSideBar;