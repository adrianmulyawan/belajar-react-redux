import React, { useEffect } from 'react';
import { getListContacts } from '../../actions/contact.action';
import { useDispatch, useSelector } from 'react-redux';

const TableContactComponent = () => {
  // > Ngambil state dari reducer
  // => state.contactReducer didapat dari file ./src/reducers/contact/contact.reducer.js
  const { 
    getListContactResult,
    getListContactLoading,
    getListContactError,
  } = useSelector((state) => state.contactReducer);

  // > useDispatch
  const dispatch = useDispatch();

  let i = 0;
  useEffect(() => {
    if (i === 0) {
      console.info('1. useEffect Berjalan');
      // > Get List Contact
      dispatch(getListContacts());
      i++;
    }
  }, [dispatch, i]);

  return (
    <>
      <table className="table table-responsive table-bordered">
        <thead>
          <tr>
            <th scope="col" className='text-center'>No</th>
            <th scope="col" className='text-center'>Fullname</th>
            <th scope="col" className='text-center'>Phone Number</th>
            <th scope="col" className='text-center'>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Pending */}
          {
            getListContactLoading && (
              <tr>
                <td className='text-center' colSpan={ 4 }>
                  <i>Data Loading...</i>
                </td>
              </tr>
            )
          }
          {/* Resolve */}
          {
            getListContactResult && (
              getListContactResult.map((contact, index) => {
                return (
                  <tr key={ contact.id }>
                    <th scope="row" className='text-center'>
                      { index += 1 }
                    </th>
                    <td className='text-center'>
                      { contact.name }
                    </td>
                    <td className='text-center'>
                      { contact.phoneNumber }
                    </td>
                    <td className='text-center'>
                      <a href='/' className="badge rounded-pill bg-primary">Detail</a>
                      <a href='/' className="badge rounded-pill bg-success mx-2">Edit</a>
                      <a href='/' className="badge rounded-pill bg-danger">Delete</a>
                    </td>
                  </tr>
                )
              })
            )
          }
          {/* Failed */}
          {
            getListContactError && (
              <tr>
                <td className='text-center' colSpan={ 4 }>
                  <i>{ getListContactError ? getListContactError : 'Contact is Empty...' }</i>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  );
}

export default TableContactComponent;
