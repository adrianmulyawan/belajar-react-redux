import React from 'react';
import NavbarComponent from '../components/NavbarComponent/navbar.component';

const HomePage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container mt-3">
        <h1 className='text-center'>
          Ini Halaman Home
        </h1>
      </div>
    </>
  );
}

export default HomePage;
