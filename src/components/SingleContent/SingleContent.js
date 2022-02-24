import React from 'react';
import './SingleContent.scss';
import { img_300, unavailable } from '../../config/config';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';

const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
    overview }) => {



    return (
        <div>
            <Link to="/content" state={{ title, id, poster, date, media_type, vote_average, overview}} >
                <div className="media" >
                    <Badge  badgeContent={vote_average} color={vote_average > 7 ? "primary" : "secondary"} />
                    <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
                    <b className="title">{title}</b>
                    <span className="subTitle">{media_type === "tv" ? "Сериал" : "Фильм"}</span>
                    <span className="date">{date}</span>
                </div>
            </Link>

        </div>




    )
}

export default SingleContent
