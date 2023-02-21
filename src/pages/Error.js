import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='error-page section'>
        <div className='error-container'>
            <h1>Sorry! This page doesn't exist.</h1>
            <Link to='/' className='btn btn-primary'>
                Home
            </Link>
        </div>
      <h2>error page</h2>
    </section>
  );
}

export default Error;