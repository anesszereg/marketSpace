import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import withRouter from 'Common/withRouter';

import PropTypes from "prop-types";
import { Collapse, Container } from 'react-bootstrap';

import logoSm from "assets/images/logo-sm.png";
//i18n
import { withTranslation } from "react-i18next";

// Import Data
import navdata from "../LayoutMenuData";
import VerticalLayout from "../VerticalLayouts";

//SimpleBar
import SimpleBar from "simplebar-react";

const TwoColumnLayout = (props: any) => {
    const navData = navdata().props.children;
    const activateParentDropdown = useCallback((item: any) => {
        item.classList.add("active");
        let parentCollapseDiv = item.closest(".collapse.menu-dropdown");
        if (parentCollapseDiv) {
            // to set aria expand true remaining
            parentCollapseDiv.classList.add("show");
            parentCollapseDiv.parentElement.children[0].classList.add("active");
            parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
            if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
                parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
                const parentParentCollapse = parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling;
                if (parentParentCollapse) {
                    parentParentCollapse.classList.add("active");
                    if (parentParentCollapse.closest(".collapse.menu-dropdown")) {
                        parentParentCollapse.closest(".collapse.menu-dropdown").classList.add("show");
                    }
                }
            }
            activateIconSidebarActive(parentCollapseDiv.firstChild.getAttribute("id"));
            return false;
        }
        return false;
    }, []);

    const path = props.router.location.pathname;

    const initMenu = useCallback(() => {
        const pathName = props.router.location.pathname;
        const ul: any = document.getElementById("navbar-nav");
        const items = ul.getElementsByTagName("a");
        let itemsArray = [...items]; // converts NodeList to Array
        removeActivation(itemsArray);
        let matchingMenuItem = itemsArray.find((x) => {
            return x.pathname === pathName;
        });
        if (matchingMenuItem) {
            activateParentDropdown(matchingMenuItem);
        } else {
            if (process.env.PUBLIC_URL) {
                var id = pathName.replace(process.env.PUBLIC_URL, '');
                id = id.replace("/", "");
            } else {
                id = pathName.replace("/", "");
            }
            if (id) document.body.classList.add('twocolumn-panel');
            activateIconSidebarActive(id);
        }
    }, [props.router.location.pathname, activateParentDropdown]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        initMenu();
    }, [path, initMenu]);

    function activateIconSidebarActive(id: any) {

        var menu = document.querySelector("#two-column-menu .simplebar-content-wrapper a[class='nav-icon " + id + "'].nav-icon");
        if (menu !== null) {
            menu.classList.add("active");
        }
    }

    const removeActivation = (items: any) => {
        let activeItems = items.filter((x: any) => x.classList.contains("active"));
        activeItems.forEach((item: any) => {
            if (item.classList.contains("menu-link")) {
                if (!item.classList.contains("active")) {
                    item.setAttribute("aria-expanded", false);
                }
                item.nextElementSibling?.classList.remove("show");
            }
            if (item.classList.contains("nav-link")) {
                if (item.nextElementSibling) {
                    item.nextElementSibling.classList.remove("show");
                }
                item.setAttribute("aria-expanded", false);
            }
            item.classList.remove("active");
        });

        const ul: any = document.getElementById("two-column-menu");
        const iconItems = ul.getElementsByTagName("a");
        let itemsArray = [...iconItems];
        let activeIconItems = itemsArray.filter((x) => x.classList.contains("active"));
        activeIconItems.forEach((item) => {
            item.classList.remove("active");
            var id = item.getAttribute("subitems");
            if (document.getElementById(id))
                document.getElementById(id)?.classList.remove("show");
        });
    };

    // Resize sidebar
    const [isMenu, setIsMenu] = useState("twocolumn");
    const windowResizeHover = () => {
        initMenu();
        var windowSize = document.documentElement.clientWidth;
        if (windowSize < 767) {
            document.documentElement.setAttribute("data-layout", "vertical");
            setIsMenu('vertical');
        }
        else {
            document.documentElement.setAttribute("data-layout", "twocolumn");
            setIsMenu('twocolumn');
        }
    };

    useEffect(function setupListener() {
        if (props.layoutType === 'twocolumn') {
            window.addEventListener('resize', windowResizeHover);

            // remove classname when component will unmount
            return function cleanupListener() {
                window.removeEventListener('resize', windowResizeHover);
            };
        }
    });
    return (
        <React.Fragment>
            {isMenu === "twocolumn" ?
                <div id="scrollbar">
                    <Container fluid>
                        <div id="two-column-menu">
                            <SimpleBar className="twocolumn-iconview">
                                <Link to="#" className="logo">
                                    <img src={logoSm} alt="" height="22" />
                                </Link>
                                {(navData || []).map((item: any, key: number) => (
                                    <React.Fragment key={key}>
                                        {item.icon && (
                                            item.subItems ? (
                                                <li>
                                                    <Link
                                                        onClick={item.click}
                                                        to="#"
                                                        // subitems={item.id}
                                                        className={"nav-icon " + item.id}
                                                        data-bs-toggle="collapse">
                                                        <i className={item.icon}></i>
                                                    </Link>
                                                </li>

                                            ) : (
                                                <li>
                                                    <Link
                                                        onClick={item.click}
                                                        to={item.link ? item.link : "/#"}
                                                        // subitems={item.id}
                                                        className={"nav-icon " + item.id}
                                                        data-bs-toggle="collapse">
                                                        <i className={item.icon}></i>
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </React.Fragment>
                                ))}

                            </SimpleBar>
                        </div>
                        <SimpleBar id="navbar-nav" className="navbar-nav">
                            {(navData || []).map((item: any, key: number) => (
                                <React.Fragment key={key}>
                                    {item.subItems ? (
                                        <li className="nav-item">
                                            <Collapse
                                                className="menu-dropdown"
                                                // className={item.stateVariables ? "menu-dropdown d-block" : "menu-dropdown d-none"}
                                                in={item.stateVariables}>
                                                <div>
                                                    <ul className="nav nav-sm flex-column test" id={item.id}>
                                                        {/* subItms  */}
                                                        {item.subItems && ((item.subItems || []).map((subItem: any, key: number) => (
                                                            <React.Fragment key={key}>
                                                                {!subItem.isChildItem ? (
                                                                    <li className="nav-item">
                                                                        <Link
                                                                            to={subItem.link ? subItem.link : "/#"}
                                                                            className="nav-link"
                                                                        >
                                                                            {props.t(subItem.label)}
                                                                            {subItem.badgeName ?
                                                                                <span className={"badge badge-pill bg-" + subItem.badgeColor} data-key="t-new">{subItem.badgeName}</span>
                                                                                : null}
                                                                        </Link>
                                                                    </li>
                                                                ) : (
                                                                    <li className="nav-item">
                                                                        <Link
                                                                            onClick={subItem.click}
                                                                            className="nav-link"
                                                                            to="/#"
                                                                            data-bs-toggle="collapse"
                                                                            aria-expanded={subItem.stateVariables ? "true" : "false"}
                                                                        > {props.t(subItem.label)}
                                                                            {subItem.badgeName ?
                                                                                <span className={"badge badge-pill bg-" + subItem.badgeColor} data-key="t-new">{subItem.badgeName}</span>
                                                                                : null}
                                                                        </Link>
                                                                        <Collapse
                                                                            className="menu-dropdown"
                                                                            in={subItem.stateVariables}>
                                                                            <div>
                                                                                <ul className="nav nav-sm flex-column" id={item.id}>
                                                                                    {/* child subItms  */}
                                                                                    {subItem.childItems && (
                                                                                        (subItem.childItems || []).map((childItem: any, key: number) => (
                                                                                            <li className="nav-item" key={key}>
                                                                                                <Link
                                                                                                    to={childItem.link ? childItem.link : "/#"}
                                                                                                    onClick={childItem.click}
                                                                                                    className="nav-link" >
                                                                                                    {props.t(childItem.label)}

                                                                                                </Link>
                                                                                                <Collapse
                                                                                                    className="menu-dropdown"
                                                                                                    in={childItem.stateVariables}>
                                                                                                    <div>
                                                                                                        <ul className="nav nav-sm flex-column" id={item.id}>
                                                                                                            {/* child subChildItems  */}
                                                                                                            {childItem.isChildItem && (
                                                                                                                (childItem.childItems || []).map((childItem: any, key: number) => (
                                                                                                                    <li className="nav-item" key={key} >
                                                                                                                        <Link
                                                                                                                            to={childItem.link ? childItem.link : "/#"}
                                                                                                                            className="nav-link">
                                                                                                                            {props.t(childItem.label)}
                                                                                                                        </Link>
                                                                                                                    </li>
                                                                                                                ))
                                                                                                            )}
                                                                                                        </ul>
                                                                                                    </div>
                                                                                                </Collapse>
                                                                                            </li>
                                                                                        ))
                                                                                    )}
                                                                                </ul>
                                                                            </div>
                                                                        </Collapse>
                                                                    </li>
                                                                )}
                                                            </React.Fragment>
                                                        ))
                                                        )}
                                                    </ul>
                                                </div>

                                            </Collapse>
                                        </li>
                                    ) : null
                                    }
                                </React.Fragment>
                            ))}
                        </SimpleBar>
                    </Container>
                </div>
                :
                <SimpleBar id="scrollbar" className="h-100">
                    <Container fluid>
                        <div id="two-column-menu"></div>
                        <ul className="navbar-nav" id="navbar-nav">
                            <VerticalLayout />
                        </ul>
                    </Container>
                </SimpleBar>
            }
        </React.Fragment >
    );
};

TwoColumnLayout.propTypes = {
    location: PropTypes.object,
    t: PropTypes.any,
};

export default withRouter(withTranslation()(TwoColumnLayout))