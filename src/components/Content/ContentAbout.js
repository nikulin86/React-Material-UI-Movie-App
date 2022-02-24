import React from 'react';
import { img_92 } from '../../config/config';
import "./ContentAbout.scss"

function ContentAbout({ overview, homepage, poster_path, budget, production_companies, revenue, runtime, vote_count, vote_average }) {
  return <div className="content-about">
    <div className="content-about__budget">Бюджет картины: {budget} $</div>
    <div className="content-about__revenue">Сборы: {revenue} $</div>
    <div className="content-about__time">Время: {runtime} мин</div>
    <div className="companies-wrapper">
      <div className="content-about__companies">{production_companies.map((p) => (<div key={p.id}className="company">Студия {p.name}</div>))}</div>
      <div className="content-about__img">{production_companies.map((p) => (<img key={p.id} src={p.logo_path && `${img_92}/${p.logo_path}`} alt="" />))}</div>
    </div>
    <div className="content-about__web">Официальный веб-сайт: <a href={homepage} target="_blank" rel="noreferrer">{homepage}</a></div>
  </div>
}

export default ContentAbout;
