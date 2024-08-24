import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Breadcrumb from 'Common/BreadCrumb';
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
// import './google-map.scss';



const mapStyles = {
  width: '100%',
  height: '100%',
};

const LoadingContainer = () => <div>Loading...</div>
const GoogleMap = (props: any) => {

  document.title = " Google Maps | Toner eCommerce + React Admin Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb breadcrumb="Maps" breadcrumbItem="Google Maps" />
          <Row>
            <Col lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title mb-0">Markers</h4>
                </Card.Header>

                <Card.Body>
                  <div id="gmaps-markers" className="gmaps" style={{ position: "relative" }}>
                    <Map
                      google={props.google}
                      zoom={8}
                      style={mapStyles}
                      initialCenter={{ lat: 34.134117, lng: -118.321495 }}
                    >
                      <Marker position={{ lat: 48.00, lng: -122.00 }} />
                      <Marker position={{ lat: 34.134117, lng: -118.321495 }} />
                      <Marker position={{ lat: 32.995049, lng: -111.536324 }} />
                      <Marker position={{ lat: 37.383064, lng: -109.071236 }} />
                      <Marker position={{ lat: 39.877586, lng: -79.640617 }} />
                    </Map>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title mb-0">Overlays</h4>
                </Card.Header>

                <Card.Body>
                  <div id="gmaps-overlay" className="gmaps" style={{ position: "relative" }}>
                    <Map
                      google={props.google}
                      zoom={8}
                      style={mapStyles}
                      initialCenter={{ lat: 54.5260, lng: 15.2551 }}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title mb-0">Street View Panoramas</h4>
                </Card.Header>

                <Card.Body>
                  <div id="panorama" className="gmaps-panaroma" style={{ position: "relative" }}>
                    <Map
                      google={props.google}
                      zoom={8}
                      style={mapStyles}
                      initialCenter={{ lat: 8.7832, lng: 34.5085 }}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <Card.Header>
                  <h4 className="card-title mb-0">Map Types</h4>
                </Card.Header>

                <Card.Body>
                  <div className="card-body">
                    <div id="gmaps-types" className="gmaps" style={{ position: "relative" }}>
                      <Map
                        google={props.google}
                        zoom={8}
                        style={mapStyles}
                        initialCenter={{ lat: 19.0760, lng: 72.8777 }}
                      />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container >
      </div >
    </React.Fragment >
  )
}

export default (
  GoogleApiWrapper({
      apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
      LoadingContainer: LoadingContainer,
      v: "3",
  })(GoogleMap)
)



