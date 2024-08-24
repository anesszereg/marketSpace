import React from "react";
import EmailClothe from "Pages/Catalog/EmailClothe";
import Payment from "./Payment";
import { BrandedProduct, Shoptopbar } from "Components/ShopTopBar";
import { CommonService } from "Components/CommonService";


const PaymentIndex = () => {
    document.title = "Shop  | Toner - React FrontEnd";

    return (
        <React.Fragment>
            <Shoptopbar title="Payment" page="Payment" />
            <Payment />
            <BrandedProduct title="Recently Viewed" />
            <EmailClothe />
            <CommonService />
        </React.Fragment>
    )

}

export default PaymentIndex;