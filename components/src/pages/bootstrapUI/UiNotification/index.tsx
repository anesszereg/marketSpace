import React from 'react'
import { Container } from 'react-bootstrap';
import BootstrapToasts from './BootstrapToasts';
import BorderedwithIcon from './BorderedwithIcon';
import Placement from './Placement';
import ToastifyJS from './ToastifyJS';

const Notifications = () => {

  return (
    <div className="page-content">
        <Container fluid>
            <BootstrapToasts />
            <Placement />
            <BorderedwithIcon />
            <ToastifyJS />
        </Container>
    </div>
  )
}

export default Notifications;