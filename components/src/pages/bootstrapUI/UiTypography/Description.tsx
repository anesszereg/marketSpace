import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { DescriptionListExample } from './UiTypographyCode';

const Description = () => {
  return (
    <React.Fragment>
      <Row>
        <Col xl={12}>
          <Card>
            <Card.Header>
              <h4 className="card-title mb-0">Description List Alignment</h4>
            </Card.Header>

            <Card.Body>
              <p className="text-muted">Align terms and descriptions
                horizontally by using our grid system’s predefined classes (or semantic
                mixins). For longer terms, you can optionally add a <code>.text-truncate</code> class to
                truncate the text with an ellipsis.</p>

              <div>
                <dl className="row mb-0">
                  <dt className="col-sm-3">Description lists</dt>
                  <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

                  <dt className="col-sm-3">Euismod</dt>
                  <dd className="col-sm-9">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                  <dd className="col-sm-9 offset-sm-3">Donec id elit non mi porta gravida at eget metus.</dd>

                  <dt className="col-sm-3">Malesuada porta</dt>
                  <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

                  <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
                  <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

                  <dt className="col-sm-3">Nesting</dt>
                  <dd className="col-sm-9 mb-0">
                    <dl className="row mb-0">
                      <dt className="col-sm-4">Nested definition list</dt>
                      <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
                    </dl>
                  </dd>
                </dl>
              </div>
            </Card.Body>
            <Card.Body className="bg-light border-bottom border-top bg-opacity-25">
              <h5 className="fs-12 text-muted mb-0">Code Preview</h5>
            </Card.Body>
            <Card.Body>
              <pre className="language-markup" style={{ height: "240px" }}>
                <DescriptionListExample />
              </pre>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Description;