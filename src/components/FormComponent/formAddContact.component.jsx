import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact, getListContacts } from '../../actions/contact.action';

const FormAddContactComponent = () => {
  const [formContact, setFormContact] = useState({
    id: '',
    name: '',
    phoneNumber: ''
  });

  const { 
    addContactResult
  } = useSelector((state) => state.contactReducer);

  const dispatch = useDispatch();

  const setForm = (event) => {
    setFormContact({
      ...formContact,
      id: new Date().getTime(),
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.info(formContact, '=> data dari form');

    // Proses simpan kedalam db
    dispatch(addNewContact(formContact));
  };

  // > Cek dengan useEffect
  // => apakah pada state addContactResult di ./src/reducer/contact/contact.reducer.js sudah tidak bernilai false
  useEffect(() => {
    // > kita update tabelnya
    if (addContactResult) {
      console.info('5. Update datanya!')
      // => update disini
      dispatch(getListContacts());
      // Reset form
      setFormContact({
        id: '',
        name: '',
        phoneNumber: ''
      });
    }
  }, [addContactResult, dispatch]);

  return (
    <>
      <div className="card p-2 mb-2">
      <form onSubmit={ handleSubmit }>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Fullname</label>
          <input type="text" className="form-control" id="name" name='name' onChange={ setForm } placeholder='Fullname' required />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input type="text" className="form-control" id="phoneNumber" name='phoneNumber' onChange={ setForm } placeholder='Phone Number' required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    </>
  );
}

export default FormAddContactComponent;
