import React from 'react';
import './PersonCast.scss';


function PersonCast({ title, release_date }) {
  return <div>
    <ul>
      <li>{title}</li>
    </ul>
  </div>;
}

export default PersonCast;
