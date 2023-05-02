import moment from "moment/moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaBookmark,
  FaRegEye,
  FaRegStar,
  FaSith,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const {
    _id,
    title,
    image_url,
    details,
    thumbnail_url,
    total_view,
    author,
    rating,
  } = news;
  return (
    <div>
      <Card className="my-4">
        <Card.Header>
          <div className="d-flex align-items-center">
            <Image style={{ height: "50px " }} src={author.img} roundedCircle />
            <div className="ms-2 flex-grow-1">
              <p className="my-0">{author?.name}</p>
              <p>
                <small>
                  {moment(author?.published_data).format("MM-D-yyyy")}
                </small>
              </p>
            </div>
            <div>
              <FaBookmark></FaBookmark> <FaSith></FaSith>
            </div>
          </div>
        </Card.Header>

        {/* card body  */}
        <Card.Body>
          <Card.Title>{title} </Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...
                <Link to={`/news/${_id}`}> Read More</Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex">
          <div className="flex-grow-1 ">
            <Rating
              placeholderRating={rating.number}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            />
            <small className="mx-1">{rating.number}</small>
          </div>
          <div>
            <FaRegEye />
            <FaRegEye />
            <span className="mx-1">{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
