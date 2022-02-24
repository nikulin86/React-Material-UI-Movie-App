import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Container from '@mui/material/Container';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Search from './Pages/Search/Search';
import Series from './Pages/Series/Series';
import Person from './components/Person/Person';
import Content from './components/Content/Content';
import PersonBio from './components/Person/PersonBio';
import PersonContent from './components/Person/PersonContent';
import Footer from './components/Footer/Footer';


function App() {


  return (
  

          <>
      <Header />
      <div className="app">
        <Container maxWidth="xxl">
          <Routes>
            <Route exact path="/React-Material-UI-Movie-App" element={<Trending />}  />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
            <Route path="/content" element={<Content />} />
            <Route path="/person" element={<Person/>} />
            <Route path="/bio" element={<PersonBio />} />
            <Route  element={<PersonContent />} />
          </Routes>
        </Container>
      </div>
      <Footer/>
    </>


  );
}

export default App;
