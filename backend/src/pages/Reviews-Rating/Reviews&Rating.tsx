import React from 'react'
import { Card } from 'react-bootstrap';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const ReviewsRating = ({reviews} : any) => {
  return (
    <React.Fragment>
        <ResponsiveMasonry className="row" data-masonry='{"percentPosition": true }' columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}>
            <Masonry className="col-xxl-3 col-lg-4 col-md-6">
            {(reviews || []).map((item : any, key : number) => (
                    <Card className='me-3' key={key}>
                        <Card.Body>
                            <img src={item.img} alt="" className="avatar-sm rounded" />
                            <h5 className="mb-2 mt-3">{item.name}</h5>
                            <div className="text-warning mb-3">
                                <i className="ri-star-s-fill"></i>
                                <i className="ri-star-s-fill"></i>
                                <i className="ri-star-s-fill"></i>
                                <i className="ri-star-s-fill"></i>
                                <i className="ri-star-s-fill"></i>
                            </div>
                            <p className="mb-0 text-muted fs-15">{item.subTitle}</p>
                        </Card.Body>
                    </Card>
            ))}
            </Masonry>
            {/* </Masonry> */}
        </ResponsiveMasonry>
    </React.Fragment>
  )
}

export default ReviewsRating;
