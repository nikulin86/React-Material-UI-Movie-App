import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios';
import './Carousel.scss'
import CarouselItem from './CarouselItem';






const Carousel = ({ media_type, id }) => {

  const [credits, setCredits] = useState();


  
  const fetchCredits = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU`);

    setCredits(data.cast);
  }



  useEffect(() => {
    fetchCredits();
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  const items = credits && credits.map((c) => (
    <CarouselItem id={c.id}  name={c.name} profile_path={c.profile_path}/>
  ));


  const responsive = {
    550: {
      items: 2,
    },
    700: {
      items: 3,
    },
    900: {
      items: 4,
    },
    1300: {
      items: 6,
    },
  };



  return (

      <AliceCarousel
        autoPlay
        stagePadding
        paddingRight
        autoHeight
        responsive={responsive}
        infinite
        autoPlayInterval={2000}
        disableButtonsControls
        mouseTracking
        items={items} />

  );
}

export default Carousel;