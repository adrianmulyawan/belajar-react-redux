import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListContact } from '../../actions/contact.action';

const ListContactComponent = () => {
  const { 
    getListContactResult, 
    getListContactLoading, 
    getListContactError } = useSelector((state) => state.ContactReducer);
  const dispatch = useDispatch();

  let i = 0;
  useEffect(() => {
    if (i === 0) {
      console.info('1. useEffect is run');
      dispatch(getListContact());
      i++;
    }
  }, [i, dispatch]);

  return (
    <>
      <table className="table table-responsive table-bordered">
        <thead>
          <tr>
            <th scope="col" className='text-center'>No</th>
            <th scope="col" className='text-center'>Fullname</th>
            <th scope="col" className='text-center'>Phone</th>
            <th scope="col" className='text-center'>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Jika data dari API berhasil ditamp */}
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
                      <span className="badge rounded-pill bg-primary">Detail</span>
                      <span className="badge rounded-pill bg-info text-dark mx-1">Edit</span>
                      <span className="badge rounded-pill bg-danger">Delete</span>
                    </td>
                  </tr>
                )
              })
            )
          }
          {/* Data Masih Loading */}
          {
            getListContactLoading && (
              <tr>
                <td className='text-center' colSpan={4}>
                  <i>Loading Data...</i>
                </td>
              </tr>
            )
          }
          {/* Terjadi Error */}
          {
            getListContactError && (
              <tr>
                <td className='text-center' colSpan={4}>
                  <i>{ getListContactError ? getListContactError : 'Contact is Empty!' }</i>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  );
}

export default ListContactComponent;
