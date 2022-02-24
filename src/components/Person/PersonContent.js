import React from 'react';
import { img_300, unavailable } from '../../config/config';
import './PersonContent.scss';
import { Link } from 'react-router-dom';


function PersonContent({ name, profile_path, id, popularity }) {




    return (
        <Link  to="/bio" state={{id, name, profile_path}}>
            <div className="personCard">
                <img className="poster" src={profile_path ? `${img_300}/${profile_path}` : unavailable} alt={name} />
                <div className="person-name">{name}</div>
                <div className="person-popularity">Рейтинг {popularity}</div>
            </div>
        </Link>
    )
}

export default PersonContent
