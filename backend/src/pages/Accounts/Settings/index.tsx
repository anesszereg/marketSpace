import React from 'react';
import { Container } from 'react-bootstrap';

// Import Components
import Breadcrumb from 'Common/BreadCrumb';
import PersonalInformation from './PersonalInformation';
import SocialMedia from './SocialMedia';
import ChangePassword from './ChangePassword';
import ApplicationNotifications from './ApplicationNotifications';
import PrivacySecurity from './PrivacySecurity';

const Settings = () => {

    document.title = "Settings | Toner eCommerce + Admin React Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Settings" pageTitle="Accounts" />

                    <PersonalInformation />
                    <SocialMedia />
                    <ChangePassword />
                    <ApplicationNotifications />
                    <PrivacySecurity/>

                </Container>
            </div>
        </React.Fragment>
    );
}

export default Settings;