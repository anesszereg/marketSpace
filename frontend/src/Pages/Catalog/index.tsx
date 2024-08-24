import React from 'react';
import Clothing from './Clothing';
import Deals from './deals';
import EmailClothe from './EmailClothe';
import { CommonService } from 'Components/CommonService';

const Catalog = () => {
    document.title = "Catalog | Toner - React FrontEnd";

    return (
        <React.Fragment>
            <Clothing />
            <Deals />
            <EmailClothe />
           < CommonService />
        </React.Fragment>
    );
}

export default Catalog;