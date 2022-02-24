import * as React from 'react';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import TheatersIcon from '@mui/icons-material/Theaters';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { NavLink } from 'react-router-dom';
import './Nav.scss'



const Navigation = () => {


    return (
        <div>
            <div className="navWrapper">
                <div className="nav">
                    <NavLink to="/React-Material-UI-Movie-App" className="nav-link">
                    <div className="nav-icon"><LocalFireDepartmentIcon fontSize="large"/></div>
                    <span>Тренды</span></NavLink>
                </div>
                <div className="nav">
                    <NavLink to="/movies" className="nav-link">   
                    <div className="nav-icon"> <TheatersIcon fontSize="large"/></div>
                    <span>Фильмы</span>   </NavLink>
                </div>
                <div className="nav">
                    <NavLink to="/series" className="nav-link"> 
                    <div className="nav-icon"><LiveTvIcon fontSize="large"/></div>  
                    <span> Сериалы</span></NavLink>
                </div>
                <div className="nav">
                    <NavLink to="/person" className="nav-link">
                    <div className="nav-icon"><StarBorderIcon fontSize="large"/></div>
                    <span> Популярные люди </span></NavLink>
                </div>
                <div className="nav">
                    <NavLink to="/search" className="nav-link"> 
                    <div className="nav-icon">   <SearchIcon fontSize="large"/></div>
                    <span>Поиск</span> </NavLink>
                </div>
            </div>

        </div>

    );
}

export default Navigation;