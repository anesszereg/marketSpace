import React from 'react';
import { Container } from 'react-bootstrap';
import AvatarGroup from './AvatarGroup';
import AvatarWithContent from './AvatarWithContent';
import Figures from './Figures';
import ImageRoundedThumbnail from './ImageRoundedThumbnail';
import ImageSizes from './ImageSizes';


const Images = () => {
    return (
        <div className="page-content">
            <Container fluid>
                <ImageRoundedThumbnail />
                <ImageSizes />
                <AvatarWithContent />
                <AvatarGroup />
                <Figures />
            </Container>
        </div>
    )
}
export default Images;