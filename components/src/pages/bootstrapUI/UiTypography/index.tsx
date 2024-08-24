import React from 'react'
import { Container } from 'react-bootstrap'
import BlockquoteBackground from './BlockquoteBackground'
import BlockquoteBorder from './BlockquoteBorder'
import Blockquotes from './Blockquotes'
import Clearfix from './Clearfix'
import Description from './Description'
import FontDisplay from './FontDisplay'
import InlineUnstyled from './InlineUnstyled'
import TextTransformDecoration from './TextTransformDecoration'
import TruncationVisibility from './TruncationVisibility'
import WeightLineheight from './WeightLineheight'
import WrappingandOverflow from './WrappingandOverflow'

const Typography = () => {
  return (
    <div className="page-content">
        <Container fluid>
            <FontDisplay />
            <Blockquotes />
            <BlockquoteBackground />
            <BlockquoteBorder />
            <InlineUnstyled />
            <Description />
            <WrappingandOverflow />
            <WeightLineheight />
            <TextTransformDecoration />
            <TruncationVisibility />
            <Clearfix />
        </Container>
    </div>
  )
}

export default Typography;