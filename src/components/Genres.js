import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Chip } from '@mui/material'

const Genres = ({
    setGenres,
    setSelectedGenres,
    genres,
    selectedGenres,
    setPage,
    type
}) => {

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    }

    const handleRemove = (genre) => {
        setSelectedGenres(
            selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
    }

    const fetchGenres = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU`);

        setGenres(data.genres);
    };

  

    useEffect(() => {
        fetchGenres();
        return () => {
            setGenres({});
        };
           // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div style={{ padding: "6px 0" }}>
            {selectedGenres && selectedGenres.map((genre) => (
                <Chip
                    label={genre.name}
                    style={{ margin: 6 }}
                    clickable
                    size='small'
                    key={genre.id}
                    color="primary"
                    onDelete={() => handleRemove(genre)}
                />
            ))}
            {genres && genres.map((genre) => (
                <Chip
                    label={genre.name}
                    style={{ margin: 6 }}
                    clickable
                    size='small'
                    key={genre.id}
                    onClick={() => handleAdd(genre)}
                />
            ))}

        </div>
    )
}

export default Genres
