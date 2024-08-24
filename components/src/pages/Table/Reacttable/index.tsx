import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { DefaultTable, PaginationTable, SearchTable, SortingTable, LoadingStateTable, HiddenColumns } from './ReactTable'

const ReactTable = () => {
  document.title = " React Tables | Toner eCommerce + React Admin Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Header>
                  <h5 className="card-title mb-0">Default Tables</h5>
                </Card.Header>
                <Card.Body>
                  <DefaultTable />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Header>
                  <h5 className="card-title mb-0">Pagination</h5>
                </Card.Header>
                <Card.Body>
                  <PaginationTable />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Header>
                  <h5 className="card-title mb-0">Search</h5>
                </Card.Header>
                <Card.Body>
                  <SearchTable />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Header>
                  <h5 className="card-title mb-0">Sorting</h5>
                </Card.Header>
                <Card.Body>
                  <SortingTable />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Header>
                  <h5 className="card-title mb-0">Loading State</h5>
                </Card.Header>
                <Card.Body>
                  <LoadingStateTable />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Header>
                  <h5 className="card-title mb-0">Hidden Columns</h5>
                </Card.Header>
                <Card.Body>
                  <HiddenColumns />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default ReactTable;