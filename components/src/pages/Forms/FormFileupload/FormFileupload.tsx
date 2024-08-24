import React, { useState } from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';


const FormFileupload = () => {
  document.title=" File Upload | Toner eCommerce + React Admin Template";


  const [selectedFiles, setselectedFiles] = useState([]);

  function handleAcceptedFiles(files: any) {
    files.map((file: any) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }

  function formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  return (
    <React.Fragment>
      <div className="page">
        <Breadcrumb breadcrumb="Forms" breadcrumbItem="File Upload" />

        <Row>
          <Col lg={12}>
            <Card>
              <Card.Header className="align-items-center d-flex">
                <h4 className="card-title mb-0">Dropzone</h4>
              </Card.Header>
              <Card.Body>
                <p className="text-muted">DropzoneJS is an open source library that provides drag’n’drop file uploads with image previews.</p>
                <Dropzone
                  onDrop={acceptedFiles => {
                    handleAcceptedFiles(acceptedFiles);
                  }}
                >
                  {({ getRootProps }) => (
                    <div className="dropzone dz-clickable text-center">
                      <div className="dz-message needsclick"
                        {...getRootProps()}
                      >
                        <div className="mb-3">
                          <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                        </div>
                        <h4>Drop files here or click to upload.</h4>
                      </div>
                    </div>
                  )}
                </Dropzone>
                <div className="list-unstyled mb-0" id="file-previews">
                  {selectedFiles.map((f: any, i: number) => {
                    return (
                      <Card
                        className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                        key={i + "-file"}
                      >
                        <div className="p-2">
                          <Row className="align-items-center">
                            <Col className="col-auto">
                              <img
                                data-dz-thumbnail=""
                                height="80"
                                className="avatar-sm rounded bg-light"
                                alt={f.name}
                                src={f.preview}
                              />
                            </Col>
                            <Col>
                              <Link
                                to="#"
                                className="text-muted font-weight-bold"
                              >
                                {f.name}
                              </Link>
                              <p className="mb-0">
                                <strong>{f.formattedSize}</strong>
                              </p>
                            </Col>
                          </Row>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default FormFileupload