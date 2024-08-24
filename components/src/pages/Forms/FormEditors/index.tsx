import React from 'react'
import { Container } from 'react-bootstrap'
import FormEditors from './FormEditors'

const EditorForm = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <FormEditors />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default EditorForm