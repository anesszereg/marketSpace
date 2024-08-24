import React from 'react';
import { Card, Col, Container, Row, ListGroup, Image } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import Dragula from 'react-dragula'


// Import Images
import avatar1 from "assets/images/users/avatar-1.jpg";
import avatar2 from "assets/images/users/avatar-2.jpg";
import avatar3 from "assets/images/users/avatar-3.jpg";
import avatar4 from "assets/images/users/avatar-4.jpg";
import avatar5 from "assets/images/users/avatar-5.jpg";
import avatar6 from "assets/images/users/avatar-6.jpg";
import avatar7 from "assets/images/users/avatar-7.jpg";


// import Components
// import Uinestable1 from './uinestable1';
// import Uinestable2 from './uinestable2';
// import Uinestable3 from './uinestable3';
// import Uinestable4 from './uinestable4';
// import Uinestable5 from './uinestable5';

const NestableList = () => {

  document.title=" Nestable List | Toner eCommerce + React Admin Template";

  const dragulaDecorator = (componentBackingInstance: any) => {
    if (componentBackingInstance) {
      let options = {};
      Dragula([componentBackingInstance], options);
    }
  };


  const nestableList1 = [
    { id: 1, class: "nested-1", title: "Item 1.1" },
    {
      id: 2, class: "nested-1", title: "Item 1.2",
      set1: [{ id: 1, class: "nested-2", title: "Item 2.1" },
      {
        id: 2, class: "nested-2", title: "Item 2.2", set2: [
          { id: 1, class: "nested-3", title: "Item 3.1" },
          { id: 2, class: "nested-3", title: "Item 3.2" },
        ]
      }]
    },
    {
      id: 3, class: "nested-1", title: "Item 1.3", set1: [
        { id: 1, class: "nested-2", title: "Item 2.1" },
        { id: 2, class: "nested-2", title: "Item 2.2" },
      ]
    },
  ]

  const nestableList2 = [
    { id: 1, class: "nested-2", title: "Item 2.1" },
    {
      id: 2, class: "nested-2", title: "Item 2.2",
      set1: [
        { id: 1, class: "nested-3", title: "Item 3.1" },
        { id: 2, class: "nested-3", title: "Item 3.2" },
        { id: 3, class: "nested-3", title: "Item 3.3" },
        { id: 4, class: "nested-3", title: "Item 3.4" }
      ]
    },
    { id: 3, class: "nested-2", title: "Item 2.3" },
    { id: 4, class: "nested-2", title: "Item 2.4" },
  ];


  const nestableList3 = [
    {
      id: 1, class: "nested-2", title: "css", icon: "mdi mdi-folder",
      set2: [{ id: 1, class: "nested-3", title: "style.css", icon: "mdi mdi-language-css3", iconClass: "secondary" }, { id: 2, class: "nested-3", title: "style.min.css", icon: "mdi mdi-language-css3", iconClass: "secondary" }]
    },
    {
      id: 2, class: "nested-2", title: "Images", icon: "mdi mdi-folder",
      set2: [{ id: 1, class: "nested-3", title: "logo.png", icon: "mdi mdi-image", iconClass: "info" }]
    },
    {
      id: 3, class: "nested-2", title: "js", icon: "mdi mdi-folder",
      set2: [{ id: 1, class: "nested-3", title: "app.js", icon: "mdi mdi-language-javascript", iconClass: "warning" }]
    },
    { id: 4, class: "nested-2", title: "index.html", icon: "mdi mdi-language-html5", iconClass: "danger", set1: true }
  ]

  const nestableList4 = [
    { id: 1, title: "Dashboards", icon: "ri-dashboard-2-line", set1: [{ id: 1, title: "Analytics" }, { id: 2, title: "CRM" }] },
    { id: 2, title: "Apps", icon: "ri-apps-2-line", set1: [{ id: 1, title: "Calendar" }, { id: 2, title: "Chat" }, { id: 3, title: "Email" }] },
    { id: 3, title: "Authentication", icon: "ri-account-circle-line", set1: [{ id: 1, title: "Sign In" }, { id: 2, title: "Sign Up" }] },
  ]

  const nestableList5 = [
    {
      id: 1, name: "David Houser", designation: "Lead Designer", img: avatar3, set1: [
        { id: 1, name: "Jame Baker", designation: "UI/UX Designer" }
      ]
    },
    {
      id: 2, name: "Mickie Reyes", designation: "Frontend Developer", img: avatar4, set1: [
        { id: 1, name: "Thomas Perez", designation: "Developer" },
        { id: 2, name: "Kim Wilson", designation: "Developer", img: avatar5 }
      ]
    },
    {
      id: 3, name: "Galen Coble", designation: "Backend Developer", img: avatar6, set1: [
        { id: 1, name: "Jean Wood", designation: "Developer", img: avatar7 }
      ]
    },
  ]

  return (
    <React.Fragment>

      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumb breadcrumb="Advance UI" breadcrumbItem="Nestable List" />

          <Row>
            <Col lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title mb-0">Nested Sortables List</h4>
                </Card.Header>

                <Card.Body>
                  <p className="text-muted">Use <code>nested-list nested-sortable</code> class to list-group class to set a nested list with sortable items.</p>

                  <div className="list-group col nested-list nested-sortable" ref={dragulaDecorator}>
                    {(nestableList1 || []).map((item: any, index: number) => (
                      <React.Fragment key={index}>
                        {!(item.set1) ? <ListGroup.Item className={item.class}>{item.title}</ListGroup.Item> :
                          <ListGroup.Item className={item.class}>{item.title}
                            <ListGroup className="nested-list nested-sortable">
                              {item.set1.map((item: any, key: any) => (
                                <React.Fragment key={key}>
                                  {!(item.set2) ? <ListGroup.Item className={item.class}>{item.title}</ListGroup.Item> :
                                    <ListGroup.Item className={item.class}>{item.title}
                                      <ListGroup className="nested-list nested-sortable">
                                        {item.set2.map((item: any, key: any) => (<ListGroup.Item className={item.class} key={key}>{item.title}</ListGroup.Item>))}
                                      </ListGroup>
                                    </ListGroup.Item>
                                  }
                                </React.Fragment>
                              ))}
                            </ListGroup>
                          </ListGroup.Item>}
                      </React.Fragment>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>


            <Col lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title mb-0">Nested Sortables List with Handle</h4>
                </Card.Header>

                <Card.Body>
                  <p className="text-muted">Use <code>nested-list nested-sortable-handle</code> class to list-group class to set a nested list with sortable items.</p>

                  <ListGroup className="col nested-list nested-sortable-handle">
                    <ListGroup.Item className="nested-1"><i className="ri-drag-move-fill align-bottom handle"></i>Item 1.1
                      <ListGroup className="nested-list nested-sortable-handle">
                        {(nestableList2 || []).map((item: any, key: any) => (
                          <React.Fragment key={key}>
                            {!(item.set1) ? <ListGroup.Item className={item.class}><i className="ri-drag-move-fill align-bottom handle"></i>{item.title}</ListGroup.Item> :
                              <ListGroup.Item className={item.class}><i className="ri-drag-move-fill align-bottom handle"></i>{item.title}
                                <ListGroup className="nested-list nested-sortable-handle">
                                  {item.set1.map((item: any, key: any) => (<ListGroup.Item className={item.class} key={key}><i className="ri-drag-move-fill align-bottom handle"></i>{item.title}</ListGroup.Item>))}
                                </ListGroup>
                              </ListGroup.Item>}
                          </React.Fragment>))}
                      </ListGroup>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>

          </Row>


          <Row>
            <Col lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title mb-0">Folder Structure Nested List</h4>
                </Card.Header>

                <Card.Body>
                  <p className="text-muted">Use <code>nested-list nested-sortable</code> class to list-group class to set a nested list with sortable items where icons are given within list-group-item.</p>

                  <ListGroup className="col nested-list nested-sortable">
                    <ListGroup.Item className="nested-1"> <i className="mdi mdi-folder fs-16 align-middle text-warning me-2"></i> assets
                      <ListGroup className="nested-list nested-sortable">
                        {(nestableList3 || []).map((item: any, key: any) => (
                          <React.Fragment key={key}>
                            {item.set1 ? <ListGroup.Item className={item.class}> <i className={"fs-16 align-middle text-" + item.iconClass + " me-2 " + item.icon}></i> {item.title}</ListGroup.Item>
                              : <ListGroup.Item className={item.class}> <i className={"fs-16 align-middle text-warning me-2 " + item.icon}></i> {item.title}
                                <ListGroup className="nested-list nested-sortable">
                                  {item.set2.map((item: any, key: any) => (<ListGroup.Item className={item.class} key={key}><i className={"fs-16 align-middle text-" + item.iconClass + " me-2 " + item.icon}></i> {item.title}</ListGroup.Item>))}
                                </ListGroup>
                              </ListGroup.Item>}
                          </React.Fragment>))}
                      </ListGroup>
                    </ListGroup.Item>
                  </ListGroup>

                </Card.Body>
              </Card>
            </Col>


            <Col lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title mb-0">Navigation Nested List</h4>
                </Card.Header>

                <Card.Body>
                  <p className="text-muted">Use <code>nested-list nested-sortable</code> class to list-group class to set a nested list with sortable items where the list is shown with navigation.</p>

                  <ListGroup className="nested-list nested-sortable">
                    {(nestableList4 || []).map((item: any, key: any) => (
                      <ListGroup.Item className="nested-1" key={key}> <i className={"fs-16 align-middle text-primary me-2 " + item.icon}></i> {item.title}
                        <ListGroup className="nested-list nested-sortable">
                          {item.set1.map((item: any, key: any) => (<ListGroup.Item className="nested-2" key={key}> {item.title} </ListGroup.Item>))}
                        </ListGroup>
                      </ListGroup.Item>))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>

          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title mb-0">Team Nested List</h4>
                </Card.Header>

                <Card.Body>
                  <p className="text-muted">Use <code>nested-list nested-sortable</code> class to list-group class to set a nested list with sortable items where images are attached within a list-group-item div element.</p>
                  <ListGroup className="nested-list nested-sortable">
                    <ListGroup.Item className="nested-1">
                      <div className="d-flex align-items-center">
                        <div className="avatar-xs flex-shrink-0 me-3">
                          <Image src={avatar1} alt="" className="img-fluid rounded-circle" />
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="fs-14 mb-0">Daryl Wolcott</h5>
                          <p className="text-muted mb-0">CEO</p>
                        </div>
                      </div>
                      <ListGroup className="nested-list nested-sortable">
                        <ListGroup.Item className="nested-2">
                          <div className="d-flex align-items-center">
                            <div className="avatar-xs flex-shrink-0 me-3">
                              <Image src={avatar2} alt="" className="img-fluid rounded-circle" />
                            </div>
                            <div className="flex-grow-1">
                              <h5 className="fs-14 mb-0">Jacob Stanfield</h5>
                              <p className="text-muted mb-0">Project Manager</p>
                            </div>
                          </div>
                          {(nestableList5 || []).map((item: any, key: any) => (
                            <React.Fragment key={key}>
                              <ListGroup className="nested-list nested-sortable" key={key}>
                                <ListGroup.Item className="nested-3">
                                  <div className="d-flex align-items-center">
                                    <div className="avatar-xs flex-shrink-0 me-3">
                                      <Image src={item.img} alt="" className="img-fluid rounded-circle" />
                                    </div>
                                    <div className="flex-grow-1">
                                      <h5 className="fs-14 mb-0">{item.name}</h5>
                                      <p className="text-muted mb-0">{item.designation}</p>
                                    </div>
                                  </div>
                                  <ListGroup className="nested-list nested-sortable">
                                    {item.set1.map((item: any, key: any) => (<ListGroup.Item className="nested-4" key={key}>
                                      <div className="d-flex align-items-center">
                                        <div className="avatar-xs flex-shrink-0 me-3">
                                          <div className="avatar-title rounded-circle">
                                            {item.img ? <Image src={item.img} alt="" className="img-fluid rounded-circle" /> : <i className="ri-user-2-fill"></i>}
                                          </div>
                                        </div>
                                        <div className="flex-grow-1">
                                          <h5 className="fs-14 mb-0">{item.name}</h5>
                                          <p className="text-muted mb-0">{item.designation}</p>
                                        </div>
                                      </div>
                                    </ListGroup.Item>))}
                                  </ListGroup>
                                </ListGroup.Item>
                              </ListGroup>
                            </React.Fragment>
                          ))}
                        </ListGroup.Item>
                      </ListGroup>
                    </ListGroup.Item>
                  </ListGroup>

                </Card.Body>
              </Card>
            </Col>

          </Row>

          {/* <Row>
                        <Uinestable1 />
                        <Uinestable2 />
                    </Row>

                    <Row>
                        <Uinestable3 />
                        <Uinestable4 />
                    </Row>

                    <Row>
                        <Uinestable5 />
                    </Row> */}

        </Container>
      </div >
    </React.Fragment >
  );
};

export default NestableList;

