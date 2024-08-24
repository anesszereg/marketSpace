import React from 'react'
import { Container } from 'react-bootstrap'
import Datatable from './Datatable'

const Datatables = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Datatable />
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Datatables