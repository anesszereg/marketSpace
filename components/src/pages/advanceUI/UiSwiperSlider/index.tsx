import React from 'react'
import { Container } from 'react-bootstrap'
import Breakpoints from './Breakpoints'
import CoverflowSwiper from './CoverflowSwiper'
import DefaultNavigationPagination from './DefaultNavigationPagination'
import Effect from './Effect'
import FractionCustomProgress from './FractionCustomProgress'
import Swipers from './Swiper'

const SwiperSlider = () => {
  return (
    <div className="page-content">
        <Container fluid>
            <DefaultNavigationPagination />
            <FractionCustomProgress />
            <Swipers />
            <Effect />
            <CoverflowSwiper />
            <Breakpoints />
        </Container>
    </div>
  )
}

export default SwiperSlider;