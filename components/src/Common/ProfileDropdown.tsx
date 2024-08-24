import React from 'react';
import { Dropdown } from 'react-bootstrap';

//import images
import avatar1 from "assets/images/users/avatar-1.jpg";

const ProfileDropdown = () => {
    return (
        <React.Fragment>
            <Dropdown className="ms-sm-3 header-item topbar-user">
                <Dropdown.Toggle type="button" className="btn bg-transparent border-0 arrow-none" id="page-header-user-dropdown">
                    <span className="d-flex align-items-center">
                        <img className="rounded-circle header-profile-user" src={avatar1} alt="Header Avatar" />
                        <span className="text-start ms-xl-2">
                            <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">Edward Diana</span>
                            <span className="d-none d-xl-block ms-1 fs-13 text-muted user-name-sub-text">Founder</span>
                        </span>
                    </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-end">
                    <h6 className="dropdown-header">Welcome Diana!</h6>
                    <Dropdown.Item href="/#"><i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Profile</span></Dropdown.Item>
                    <Dropdown.Item href="/#!"><i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Messages</span></Dropdown.Item>
                    <Dropdown.Item href="/#!"><i className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Taskboard</span></Dropdown.Item>
                    <Dropdown.Item href="/#"><i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Help</span></Dropdown.Item>
                    <div className="dropdown-divider"></div>
                    <Dropdown.Item href="/#"><i className="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Balance : <b>$8451.36</b></span></Dropdown.Item>
                    <Dropdown.Item href="/#"><span className="badge bg-soft-success text-success mt-1 float-end">New</span><i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Settings</span></Dropdown.Item>
                    <Dropdown.Item href="/#"><i className="mdi mdi-lock text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Lock screen</span></Dropdown.Item>
                    <Dropdown.Item href="/#"><i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span className="align-middle" data-key="t-logout">Logout</span></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </React.Fragment>
    );
}

export default ProfileDropdown;