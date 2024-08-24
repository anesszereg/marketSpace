import React from 'react'
import { Container } from 'react-bootstrap'
import Breadcrumbs from './Breadcrumb';
import Paginations from './Paginations';
import Popovers from './Popovers';
import Spinners from './Spinners';
import Tooltips from './Tooltips';

const General = () => {
  return (
    <div className="page-content">
      <Container fluid>
        <Popovers />
        <Tooltips />  
        <Breadcrumbs/>
        <Paginations />
        <Spinners />
      </Container>
    </div>
  )
}

export default General;