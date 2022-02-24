import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { img_300, unavailable } from '../../config/config';
import './PersonBio.scss'
import PersonCast from './PersonCast';


const PersonBio = () => {
    const location = useLocation();
    const { id, name } = location.state;


    const [bio, setBio] = useState();
    const [movie, setMovie] = useState();

    const fetchBio = async () => {
        const { data } = await axios.get(`
    https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU
`);
        setBio(data);

    }

    const fetchMovieCredits = async () => {
        const { data } = await axios.get(`
        https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU`);

        setMovie(data);
     
    }

    useEffect(() => {
        fetchBio();
        fetchMovieCredits();
           // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="bio-wrapper">
            <div className="bio-top">
                <div className="bio-top__left">
                    <img className="person-photo" src={bio && bio.profile_path ? `${img_300}/${bio.profile_path}` : unavailable} alt="" />
                </div>
                <div className="bio-top__right">
                    <div className="person-name">{name}</div>
                    <div className="person-birthday">Дата рождения: {bio && bio.birthday}</div>
                    <div className="person-place_of_birth">Место рождения: {bio && bio.place_of_birth}</div>
                    <div className="person-cast">
                        <div className="person-cast__title">Фильмография:</div>
                        {movie && movie.cast.map((m) => (<PersonCast key={m.id} title={m.title} release_date={m.release_date} />))}
                    </div>

                </div>
            </div>
            <div className="bio-bottom">
                {bio && (<p className="bio-biography">{bio.biography}</p>)}
            </div>
        </div>
    )
}

export default PersonBio
