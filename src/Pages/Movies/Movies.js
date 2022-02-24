import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CustomPagination from '../../components/Pagination/CustomPagination';
import SingleContent from '../../components/SingleContent/SingleContent';
import './Movies.scss'
import Genres from '../../components/Genres';
import useGenre from './../../hooks/useGenre';



const Movies = () => {

    const [content, setContent] = useState([]);
    const [numberOfPages, setNumberOfPages] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const [page, setPage] = useState(1);
    const genreforURL = useGenre(selectedGenres);

    const fetchMovies = async () => {
        const { data } = await axios.get(`
      https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);

        setContent(data.results);
        setNumberOfPages(data.total_pages);

    };


    useEffect(() => {
        fetchMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, genreforURL]);

    return (
        <div>
            <span className="pageTitle">Фильмы</span>
            <Genres
                setGenres={setGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                selectedGenres={selectedGenres}
                setPage={setPage}
                type="movie" />
            <div className="movies">

                {content && content.map((c) => (
                    <SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type="movie" vote_average={c.vote_average} overview={c.overview} />
                  
                ))}

            </div>

            {numberOfPages > 1 && (
                <CustomPagination setPage={setPage} numberOfPages={numberOfPages} />
            )}
        </div >
    )
}

export default Movies
