import React from 'react'
import { Container } from 'react-bootstrap'
import ContentStep from './ContentStep'
import Custom from './Custom'
import DefaultBgcolor from './DefaultBgcolor'
import GradientAnimated from './GradientAnimated'
import HeightStriped from './HeightStriped'
import LabelBars from './LabelBars'

const Progress = () => {
  return (
    <div className="page-content">
        <Container fluid>
            <DefaultBgcolor />
            <LabelBars />
            <HeightStriped />
            <GradientAnimated />
            <Custom />
            <ContentStep />
        </Container>
    </div>
  )
}

export default Progress;