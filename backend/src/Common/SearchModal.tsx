import React, { useEffect, useRef, useState } from 'react';
import { Button, Modal, ModalHeader } from 'react-bootstrap';

import { Link } from 'react-router-dom';
//import images
import avatar1 from "assets/images/users/avatar-1.jpg";
import avatar7 from "assets/images/users/avatar-7.jpg";
import avatar5 from "assets/images/users/avatar-5.jpg";

const SearchModal = () => {
    const searchInputRef : any = useRef();
    const searchDropdown : any = useRef();
    const searchCloseOptions : any = useRef();

    const [show, setShow] = useState(false);
    const [value, setValue] = useState("");

    const handleToggleModal = () => {
        setShow(!show);
    }

    const onChangeData = (value : any) => {
        setValue(value);
    };
    
    useEffect(() => {
        //Search bar
		var searchOptions = searchCloseOptions.current;
		var dropdown = searchDropdown.current;
		var searchInput = searchInputRef.current;
		if(searchInput){
		searchInput.addEventListener("focus", function () {
			var inputLength = searchInput.value.length;
			if (inputLength > 0) {
				dropdown.classList.add("show");
				searchOptions.classList.remove("d-none");
			} else {
				dropdown.classList.remove("show");
				searchOptions.classList.add("d-none");
			}
		});

		searchInput.addEventListener("keyup", function (event : any) {
			var inputLength = searchInput.value.length;
			if (inputLength > 0) {
				dropdown.classList.add("show");
				searchOptions.classList.remove("d-none");

				var inputVal = searchInput.value.toLowerCase();
				var notifyItem = document.getElementsByClassName("notify-item");
				
				Array.from(notifyItem).forEach(function (element : any) {
					var notifiTxt = ''
					if(element.querySelector("h6")){
						var spantext = element.getElementsByTagName("span")[0].innerText.toLowerCase()
						var name = element.querySelector("h6").innerText.toLowerCase()
						if(name.includes(inputVal)){
							notifiTxt = name
						}else{
							notifiTxt = spantext
						}
					}else if(element.getElementsByTagName("span")){
						notifiTxt = element.getElementsByTagName("span")[0].innerText.toLowerCase()
					}

					if(notifiTxt){
						if(notifiTxt.includes(inputVal)){
							element.classList.add("d-block");
							element.classList.remove("d-none");
						}else{
							element.classList.remove("d-block");
							element.classList.add("d-none");
						}
					}

					Array.from(document.getElementsByClassName("notification-group-list")).forEach(function (element : any) {
						if(element.querySelectorAll(".notify-item.d-block").length === 0){
							element.querySelector(".notification-title").style.display = 'none'
						}else{
							element.querySelector(".notification-title").style.display = 'block'
						}
					});
				});
			} else {
				dropdown.classList.remove("show");
				searchOptions.classList.add("d-none");
			}
		});

		searchOptions.addEventListener("click", function () {
			searchInput.value = "";
			dropdown.classList.remove("show");
			searchOptions.classList.add("d-none");
		});

		document.body.addEventListener("click", function (e : any) {
			if (e.target.getAttribute("id") !== "search-options") {
				dropdown.classList.remove("show");
				searchOptions.classList.add("d-none");
			}
		});
	}
    }, []);
    return (
        <React.Fragment>
            <Button variant="link" type="button" size="sm" onClick={handleToggleModal} className="px-3 fs-15 user-name-text header-item d-none d-md-block">
                <span className="bi bi-search me-2"></span> Search for Toner...
            </Button>

                <Modal
                    show={show}
                    onHide={handleToggleModal}
                    dialogClassName="rounded"
                    size="lg"
                    id="searchModal"
                    >
                <ModalHeader className="p-3">
                    <div className="position-relative w-100">
                        <input 
                            type="text" 
                            className="form-control form-control-lg border-2" 
                            placeholder="Search for toner..." 
                            autoComplete="off" 
                            ref={searchInputRef}
                            id="search-options" 
                            value={value}
                            onChange={(e : any) => {
                                onChangeData(e.target.value);
                            }}
                            />
                        <span className="bi bi-search search-widget-icon fs-17"></span>
                        <Link to="#" className="search-widget-icon fs-14 link-secondary text-decoration-underline search-widget-icon-close d-none" ref={searchCloseOptions} id="search-close-options">Clear</Link>
                    </div>
                </ModalHeader>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 overflow-hidden" ref={searchDropdown} id="search-dropdown">

                    <div className="dropdown-head rounded-top">
                        <div className="p-3">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h6 className="m-0 fs-14 text-muted fw-semibold"> RECENT SEARCHES </h6>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown-item bg-transparent text-wrap">
                            <Link to="/" className="btn btn-soft-secondary btn-sm btn-rounded">how to setup <i className="mdi mdi-magnify ms-1 align-middle"></i></Link>
                            <Link to="/" className="btn btn-soft-secondary btn-sm btn-rounded">buttons <i className="mdi mdi-magnify ms-1 align-middle"></i></Link>
                        </div>
                    </div>

                    <div data-simplebar style={{maxHeight: "300px"}} className="pe-2 ps-3 my-3">
                        <div className="list-group list-group-flush">
                            <div className="notification-group-list">
                                <h5 className="text-overflow text-muted fs-13 mb-2 mt-3 text-uppercase notification-title">Apps Pages</h5>
                                <Link to="#" className="list-group-item dropdown-item notify-item"><i className="bi bi-speedometer2 me-2"></i> <span>Analytics Dashboard</span></Link>
                                <Link to="#" className="list-group-item dropdown-item notify-item"><i className="bi bi-filetype-psd me-2"></i> <span>hybrix.psd</span></Link>
                                <Link to="#" className="list-group-item dropdown-item notify-item"><i className="bi bi-ticket-detailed me-2"></i> <span>Support Tickets</span></Link>
                                <Link to="#" className="list-group-item dropdown-item notify-item"><i className="bi bi-file-earmark-zip me-2"></i> <span>hybrix.zip</span></Link>
                            </div>
                            
                            <div className="notification-group-list">
                                <h5 className="text-overflow text-muted fs-13 mb-2 mt-3 text-uppercase notification-title">Links</h5>
                                <Link to="#" className="list-group-item dropdown-item notify-item"><i className="bi bi-link-45deg me-2 align-middle"></i> <span>www.themesbrand.com</span></Link>
                            </div>

                            <div className="notification-group-list">
                                <h5 className="text-overflow text-muted fs-13 mb-2 mt-3 text-uppercase notification-title">People</h5>
                                <Link to="#" className="list-group-item dropdown-item notify-item">
                                    <div className="d-flex align-items-center">
                                        <img src={avatar1} alt="" className="avatar-xs rounded-circle flex-shrink-0 me-2" />
                                        <div>
                                            <h6 className="mb-0">Ayaan Bowen</h6>
                                            <span className="fs-13 text-muted">React Developer</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="#" className="list-group-item dropdown-item notify-item">
                                    <div className="d-flex align-items-center">
                                        <img src={avatar7} alt="" className="avatar-xs rounded-circle flex-shrink-0 me-2" />
                                        <div>
                                            <h6 className="mb-0">Alexander Kristi</h6>
                                            <span className="fs-13 text-muted">React Developer</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="#" className="list-group-item dropdown-item notify-item">
                                    <div className="d-flex align-items-center">
                                        <img src={avatar5} alt="" className="avatar-xs rounded-circle flex-shrink-0 me-2" />
                                        <div>
                                            <h6 className="mb-0">Alan Carla</h6>
                                            <span className="fs-13 text-muted">React Developer</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    );
}

export default SearchModal;