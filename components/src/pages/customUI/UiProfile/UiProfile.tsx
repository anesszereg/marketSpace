import React from 'react';
import { Card, Col, Row, Image } from 'react-bootstrap';
import CountUp from 'react-countup';

// import Images
import avatar1 from "assets/images/users/avatar-1.jpg";
import img4 from "assets/images/small/img-4.jpg";

const UiProfile = () => {
  return (
    <React.Fragment>
      <Row>
        <Col xl={3} md={6}>
          <Card>
            <Card.Body>
              <Image src={img4} alt="" className="w-100 rounded object-cover" height="120" />

              <div className="text-center">
                <div className="mt-n4">
                  <Image src={avatar1} alt="" className="avatar-md img-thumbnail rounded-circle p-1 bg-card-custom mt-n2" />
                </div>
                <div className="mt-4 border-bottom border-bottom-dashed">
                  <h5 className="fs-17">Edward Diana</h5>
                  <p className="mb-3 text-muted">Marketing Expert</p>
                </div>
                <div className="mt-3">
                  <Row>
                    <div className="col-4">
                      <div>
                        <h5><span className="counter-value" data-target="40"><CountUp end={254} /></span></h5>
                        <p className="text-muted mb-0">Posts</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div>
                        <h5><span className="counter-value" data-target="40"><CountUp end={12} suffix="k" /></span></h5>
                        <p className="text-muted mb-0">Followers</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div>
                        <h5><span className="counter-value" data-target="40"><CountUp end={3501} /></span></h5>
                        <p className="text-muted mb-0">Follwing</p>
                      </div>
                    </div>
                  </Row>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3} md={6}>
          <Card>
            <Card.Body>
              <div className="w-100 rounded object-cover bg-secondary" style={{ height: "120px" }}></div>

              <div className="text-center">
                <div className="mt-n4">
                  <Image src={avatar1} alt="" className="avatar-md img-thumbnail rounded-circle p-1 bg-card-custom mt-n2" />
                </div>
                <div className="mt-4 border-bottom border-bottom-dashed">
                  <h5 className="fs-17">Edward Diana</h5>
                  <p className="mb-3 text-muted">Marketing Expert</p>
                </div>
                <div className="mt-3">
                  <Row>
                    <div className="col-4">
                      <div>
                        <h5><span className="counter-value" data-target="40"><CountUp end={254} /></span></h5>
                        <p className="text-muted mb-0">Posts</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div>
                        <h5><span className="counter-value" data-target="40"><CountUp end={12} /></span>k</h5>
                        <p className="text-muted mb-0">Followers</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div>
                        <h5><span className="counter-value" data-target="40"><CountUp end={3501} /></span></h5>
                        <p className="text-muted mb-0">Follwing</p>
                      </div>
                    </div>
                  </Row>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3} md={6}>
          <Card>
            <Card.Body>
              <div className="w-100 rounded object-cover bg-success-subtle" style={{ height: "120px" }}></div>

              <div className="text-center">
                <div className="mt-n4">
                  <Image src={avatar1} alt="" className="avatar-md img-thumbnail rounded-circle p-1 bg-card-custom mt-n2" />
                </div>
                <div className="mt-4 border-bottom border-bottom-dashed">
                  <h5 className="fs-17">Edward Diana</h5>
                  <p className="mb-3 text-muted">Marketing Expert</p>
                </div>
                <div className="mt-3">
                  <Row>
                    <div className="col-4">
                      <div>
                        <h5><span className="counter-value" data-target="40"><CountUp end={254} /></span></h5>
                        <p className="text-muted mb-0">Posts</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div>
                        <h5><span className="counter-value" data-target="40"><CountUp end={12} /></span>k</h5>
                        <p className="text-muted mb-0">Followers</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div>
                        <h5><span className="counter-value" data-target="40"><CountUp end={3501} /></span></h5>
                        <p className="text-muted mb-0">Follwing</p>
                      </div>
                    </div>
                  </Row>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3} md={6}>
          <Card className="border-danger border-opacity-25">
            <Card.Body>
              <div className="w-100 rounded object-cover bg-danger-subtle" style={{ height: "120px" }}></div>

              <div className="text-center">
                <div className="mt-n4">
                  <Image src={avatar1} alt="" className="avatar-md img-thumbnail rounded-circle p-1 bg-card-custom mt-n2" />
                </div>
                <div className="mt-4 border-bottom border-bottom-dashed border-danger border-opacity-25">
                  <h5 className="fs-17">Edward Diana</h5>
                  <p className="mb-3 text-muted">@edward_diana</p>
                </div>
                <div className="mt-3">
                  <Row>
                    <div className="col-4">
                      <div>
                        <h5><span className="counter-value" data-target="40"><CountUp end={254} /></span></h5>
                        <p className="text-muted mb-0">Posts</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div>
                        <h5><span className="counter-value" data-target="40"><CountUp end={12} /></span>k</h5>
                        <p className="text-muted mb-0">Followers</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div>
                        <h5><span className="counter-value" data-target="40"><CountUp end={3501} /></span></h5>
                        <p className="text-muted mb-0">Follwing</p>
                      </div>
                    </div>
                  </Row>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default UiProfile;