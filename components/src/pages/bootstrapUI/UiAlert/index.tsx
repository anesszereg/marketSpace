import React from 'react'
import { Container } from 'react-bootstrap'
import AdditionalContentAlerts from './AdditionalContentAlerts'
import BorderlessAlerts from './BorderlessAlerts'
import DefaultAlerts from './DefaultAlerts'
import DismissingAlerts from './DismissingAlerts'
import LabelIconAlerts from './LabelIconAlerts'
import LabelIconArrowAlerts from './LabelIconArrowAlerts'
import LeftBorderAlerts from './LeftBorderAlerts'
import LinkColorAlerts from './LinkColorAlerts'
import LiveAlert from './LiveAlert'
import ModernAlerts from './ModernAlerts'
import OutlineAlerts from './OutlineAlerts'
import RoundedLabelIconAlerts from './RoundedLabelIconAlerts'
import SolidAlerts from './SolidAlerts'
import TopBorderwithOutlineAlerts from './TopBorderwithOutlineAlerts'


const Alert = () => {
  return (
    <div className="page-content">
        <Container fluid>
            <DefaultAlerts />
            <BorderlessAlerts />
            <DismissingAlerts />
            <LinkColorAlerts />
            <LiveAlert />
            <OutlineAlerts />
            <LeftBorderAlerts />
            <ModernAlerts />
            <LabelIconAlerts />
            <AdditionalContentAlerts />
            <TopBorderwithOutlineAlerts/>
            <LabelIconArrowAlerts />
            <RoundedLabelIconAlerts />
            <SolidAlerts />
        </Container>
    </div>
  )
}

export default Alert;