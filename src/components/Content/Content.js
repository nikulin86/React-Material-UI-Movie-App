import React from 'react';
import Button from '@mui/material/Button';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
    img_300,
    unavailable
} from '../../config/config';
import "./Content.scss";
import Carousel from '../Carousel/Carousel';
import { useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import ContentAbout from './ContentAbout';



function Content() {
    const location = useLocation();
    const { id, title, poster, date, media_type, overview } = location.state;
    const [content, setContent] = useState();
    const [video, setVideo] = useState();



    const fetchData = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU`);

        setContent(data)


    }
    const fetchVideo = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU`);

        setVideo(data.results[0]?.key)
    }

    useEffect(() => {
        fetchVideo();
        fetchData();
        window.scroll(0, 0)
           // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container maxWidth="xl">
            <>


                <div className="wrapper-content__top">
                    <div className="conten-left">
                        <img className="content-left__img" src={poster ? `${img_300}/${poster}` : unavailable} alt="" />
                    </div>
                    <div className="content-right">
                        <div className="content-right__wrapper">
                            <h1 className="content-right__title">{title}</h1>
                            {content && (<div className="content-right__subtitle">{content.tagline}</div>)}
                            {content && (content.production_countries.map((c) => (<h2 key={c.id}className="content-right__country">Страна: {c.name}</h2>)))}
                            {content && (content.genres.map((g) => (<h3 key={g.id}className="content-right__genres">Жанр: {g.name}</h3>)))}
                            <h3 className="content-right__date">Дата выхода: {date}</h3>
                            <p className="content-right__description">{overview}</p>
                        </div>
                    </div>
                </div>
                <div className="about">
                    {content && (
                        <ContentAbout
                            id={id}
                            homepage={content.homepage}
                            poster_path={content.poster_path}
                            budget={content.budget}
                            production_companies={content.production_companies}
                            revenue={content.revenue}
                            runtime={content.runtime}
                            vote_average={content.vote_average}
                            vote_count={content.vote_count}
                        />
                    )}
                </div>
                <div className="wrapper-content__bottom">
                    <div className="carousel">

                        <Carousel media_type={media_type} id={id} />
                    </div>
                    <div className="button-wrapper">
                        <Button
                            className="content-button"
                            variant="contained"
                            startIcon={<YouTubeIcon />}
                            color="secondary"
                            target="__blank"
                            href={`https://www.youtube.com/watch?v=${video}`}
                        >
                            Посмотреть трейлер
                        </Button>
                    </div>
                </div>
            </>
        </Container>

    );
}



export default Content;

