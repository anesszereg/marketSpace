import React from 'react'
import { Container } from 'react-bootstrap'
import Alignmentoptions from './Alignmentoptions';
import AutoCloseBehavior from './AutoCloseBehavior';
import DarkDropdowns from './DarkDropdowns';
import DropdownColorVariant from './DropdownColorVariant';
import DropdownMenuItemColor from './DropdownMenuItemColor';
import DropdownOptions from './DropdownOptions';
import DropdownSizing from './DropdownSizing';
import MenuContent from './MenuContent';
import SingleButtonDropdown from './SingleButtonDropdown';
import SplitButtonDropdown from './SplitButtonDropdown';

const DropDown = () => {
  return (
    <div className="page-content">
      <Container fluid>
        <SingleButtonDropdown />
        <DropdownColorVariant />
        <SplitButtonDropdown />
        <DropdownSizing />
        <DarkDropdowns />
        <Alignmentoptions />
        <DropdownOptions />
        <AutoCloseBehavior />
        <DropdownMenuItemColor />
        <MenuContent />
      </Container>
    </div>
  )
}

export default DropDown;