import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { createTheme, Tab, Tabs } from '@material-ui/core';
import { ThemeProvider } from '@emotion/react';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination'



const Search = () => {

    const [type, setType] = useState(0);
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [content, setContent] = useState();
    const [numOfPages, setNumOfPages] = useState();

    const darkTheme = createTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#fff'
            },
        },
    });

    const fetchSearch = async () => {
        const { data } = await axios.get(`
        https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU&query=${searchText}&page=${page}&include_adult=false`);

        setContent(data.results);
        setNumOfPages(data.total_pages);

    };

    useEffect(() => {
        window.scroll(0,0);
        fetchSearch();
           // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type, page])


    return (
        <div>
            <span className="pageTitle">Поиск</span>

            <ThemeProvider theme={darkTheme}>
                <div style={{ display: 'flex', margin: '15px 0'}}>
                    <TextField
                        label="Поиск"
                        style={{ flex: 1 }}
                        className="serchbox"
                        variant="filled"
                    onChange={(e) => setSearchText(e.target.value)}
                    />
                    <Button variant="contained" 
                    style={{ marginLeft: 10 }}
                    onClick={fetchSearch}
                    onTap={fetchSearch}>
                        <SearchIcon />
                    </Button>
                </div>

                <Tabs  value={type}
                 indicatorColor="primary"
                  textColor="primary"
                  onChange={(event, newValue) => {
                      setType(newValue); 
                      setPage(1);
                      }}
                      style={{ paddingBottom: 5 }}>
                        <Tab style={{ width: "50%"}} label="Поиск фильмов"/>
                        <Tab style={{ width: "50%"}} label="Поиск сериалов"/>
                </Tabs>
            </ThemeProvider >
            <div className="trending">
                {content && content.map((c) => (
                    <SingleContent key={c.key} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type={type ? "tv" : "movie"} vote_average={c.vote_average}/>
                ))}
               {searchText && 
               !content && 
               (type ? <h2>Не нашлось сериалов</h2> : <h2>Не нашлось фильмов</h2>)}
            </div>
            {numOfPages > 1 && (
            <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
            )}
        </div >
    )
}

export default Search
