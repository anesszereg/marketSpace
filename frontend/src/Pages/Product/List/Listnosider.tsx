import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { CommonService } from "Components/CommonService";
import HotDeals from "Components/HotDeals";
import EmailClothe from "Pages/Catalog/EmailClothe";
import { ProductGrid, ProductSelector } from 'Components/ProductSilde';
import ListProductData from "Components/ListProductData";
import { filterProduct } from "Common/data";

const Listnoslider = () => {

    const [listnoslider, setListnoslider] = useState<any>(filterProduct);

    //ratting
    const handleRatting = (event: any) => {
        setListnoslider(filterProduct?.filter((rat: any) => rat.ratting.toString().startsWith(event.value)));
    }
    //diccount
    const handleDicount = (event: any) => {
        setListnoslider(filterProduct?.filter((dicCount: any) => dicCount.dic === event.value))
    }
    //category
    const handleCategory = (event: any) => {
        setListnoslider(filterProduct?.filter((category: any) => category.products === event.value))
    }
    return (
        <React.Fragment>
            <ProductGrid title="Product List No Sidebar" />
            <section className="section">
                <Container>
                    <div className="ecommerce-product gap-4">
                        <div className="flex-grow-1">
                            <ProductSelector
                                handleratting={(e: any) => handleRatting(e)}
                                handledicount={(e: any) => handleDicount(e)}
                                handlecategory={(e: any) => handleCategory(e)}
                            />
                            <ListProductData listnoslider={listnoslider} />
                        </div>
                    </div>
                </Container>
            </section>
            <HotDeals />
            <EmailClothe />
            <CommonService />
        </React.Fragment>
    );
}

export default Listnoslider;