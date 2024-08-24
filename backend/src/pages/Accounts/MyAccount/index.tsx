import React from 'react';
import { Container } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import Profile from './Profile';

const MyAccount = () => {

    document.title = "My Account | Toner eCommerce + Admin React Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="My Account" pageTitle="Accounts" />
                    <Profile />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default MyAccount;