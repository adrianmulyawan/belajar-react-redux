import React from 'react';
import NavbarComponent from '../../components/NavbarComponent/navbar.component';
import TableContactComponent from '../../components/TableContactComponent/tableContact.component';

const ContactPage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container mt-3">
        <h1>Contact Page</h1>
        <hr />
        <TableContactComponent />
      </div>

    </>
  );
}

export default ContactPage;
