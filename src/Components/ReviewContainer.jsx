import { useEffect } from "react";
import { MdOutlineStar } from "react-icons/md";

const ReviewContainer = ({ reviews }) => {
  let stars = [];
  return (
    <div className="list-group">
      {reviews?.map((item) => {
        let stars = [];
        for (let i = 1; i < item.rating; i++) {
          stars[i] = i;
        }
        return (
          <a
            key={item.reviewerEmail}
            href="#"
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between">
              <h6 className="mb-1">{item.reviewerName}</h6>
              <small>
                <span className="badge bg-success">
                  {stars.map((rate) => (
                    <MdOutlineStar key={rate} className="rating-icon" />
                  ))}
                  <MdOutlineStar className="rating-icon" />
                </span>
              </small>
            </div>
            <p className="mb-1">Comments - {item.comment}</p>
            {/* <small>And some small print.</small> */}
          </a>
        );
      })}
    </div>
  );
};

export default ReviewContainer;

{
  /* <a
        href="#"
        className="list-group-item list-group-item-action"
        aria-current="true"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small>And some small print.</small>
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small className="text-muted">3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small className="text-muted">And some muted small print.</small>
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small className="text-muted">3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small className="text-muted">And some muted small print.</small>
      </a> */
}
