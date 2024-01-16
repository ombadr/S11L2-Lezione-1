import React from 'react';
import { Link } from 'react-router-dom';

const Error401 = () => {
  return (
    <div className='text-center'>
      <h2>Devi essere loggato per visualizzare il carrello</h2>
      <Link className='btn btn-primary' to='/'>
        Torna alla home
      </Link>
    </div>
  );
};

export default Error401;
