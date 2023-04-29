import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact, getListContacts, editContact } from '../../actions/contact.action';

const FormAddContactComponent = () => {
  const [formContact, setFormContact] = useState({
    name: '',
    phoneNumber: ''
  });
  const [id, setId] = useState('');
  // const [id, setId] = useState('');
  // const [name, setName] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');

  const { 
    addContactResult,
    detailContactResult,
    updateContactResult
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

    // Cek dulu ini mau update / add
    if (id) {
      console.info(id, formContact.name, formContact.phoneNumber, '=> data neh');
      dispatch(editContact({
        id: id,
        name: formContact.name,
        phoneNumber: formContact.phoneNumber
      }));
    } 
    // add contact
    else {
      // Proses simpan kedalam db
      dispatch(addNewContact(formContact));
    }
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

  // > useEffect Untuk update data
  useEffect(() => {
    // > update formnya (menampilkan detail)
    if (detailContactResult) {
      // setName(detailContactResult.name);
      // setPhoneNumber(detailContactResult.phoneNumber);
      setFormContact({
        name: detailContactResult.name,
        phoneNumber: detailContactResult.phoneNumber
      })
      setId(detailContactResult.id);
    }
  }, [detailContactResult, dispatch]);

  // > useEffect untuk memperbaharui data ketika berhasil di update
  useEffect(() => {
    // > kita update tabelnya
    if (updateContactResult) {
      console.info('5. Update datanya!')
      // => update disini
      dispatch(getListContacts());
      // Reset form
      setFormContact({
        name: '',
        phoneNumber: ''
      });
      setId('');
    }
  }, [updateContactResult, dispatch]);

  return (
    <>
      <h4 className='mb-3'>
        { id ? 'Edit Contact' : 'Tambah Data Kontak' }
      </h4>
      <div className="card p-2 mb-2">
      <form onSubmit={ handleSubmit }>
        {/* <input type="hidden" name="id" value={ formContact.id || '' } /> */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Fullname</label>
          <input type="text" className="form-control" id="name" name='name' onChange={ setForm } value={ formContact.name } placeholder='Fullname' required />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input type="text" className="form-control" id="phoneNumber" name='phoneNumber' onChange={ setForm } value={ formContact.phoneNumber } placeholder='Phone Number' required />
        </div>
        <button type="submit" className="btn btn-primary">Simpan Data</button>
      </form>
      </div>
    </>
  );
}

export default FormAddContactComponent;
