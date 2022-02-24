import React from 'react';
import { img_185 } from '../../config/config';
import { noPicture } from '../../config/config';
import './Carousel.scss';
import { Link } from 'react-router-dom';
import './CarouselItem.scss'

const handleDragStart = (e) => e.preventDefault();


function CarouselItem({ id, name, profile_path }) {

  return (
    <div className="carousel-wrapper">
      <Link to="/bio" state={{ id, name, profile_path }}>
        <div className="carouselItem">
          <img
            src={profile_path ? `${img_185}/${profile_path}` : noPicture}
            alt={name}
            className="carouselItem__img"
            onDragStart={handleDragStart}
          />
          <b className="carouselItem__txt">{name}</b>
        </div>
      </Link>
    </div>


  )
}

export default CarouselItem;
