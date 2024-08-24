import React from 'react';
import { Container } from 'react-bootstrap';
import FormFileupload from './FormFileupload'

const FileUpload = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <FormFileupload/>
            </Container>
        </div>
    </React.Fragment>
  )
}

export default FileUpload;