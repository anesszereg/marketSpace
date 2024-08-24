import React from 'react'
import { Container } from 'react-bootstrap';
import RatingRtr from './Ratings';

const Ratings = () => {
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <RatingRtr />
            </Container>
        </div>
    </React.Fragment>
  )
}

export default Ratings;