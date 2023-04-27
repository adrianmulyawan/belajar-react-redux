import React from 'react';
import NavbarComponent from '../../components/NavbarComponent/navbar.component';
import ListContactComponent from '../../components/ListContactComponent/listContact.component';

const ContactPage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container mt-3">
        <h1>Contact Page</h1>
        <hr />
        <ListContactComponent />
      </div>
    </>
  );
}

export default ContactPage;
