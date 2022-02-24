import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PersonContent from './PersonContent';
import CustomPagination from './../Pagination/CustomPagination';


function PeopleContent({ name }) {
    const [people, setPeople] = useState([]);
    const [numberOfPages, setNumberOfPages] = useState();
    const [page, setPage] = useState(1);


    const fetchPeople = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU&page=${page}`)


        setPeople(data.results);
        setNumberOfPages(data.total_pages);

    }


    useEffect(() => {
        fetchPeople();
           // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])
    return (

        <div className="personCardWrapper">
            {people && people.map((p) => (
                <PersonContent name={p.name} profile_path={p.profile_path} id={p.id} popularity={p.popularity} known_for={p.known_for.map((k) =>  k.first_air_date)} />
            ))}
            {numberOfPages > 1 && (
                <CustomPagination setPage={setPage} numberOfPages={numberOfPages} />
            )}
        </div>

    )
}

export default PeopleContent
