import React from 'react';

const TableContactComponent = () => {
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
          <tr>
            <th scope="row" className='text-center'>1</th>
            <td className='text-center'>Mark</td>
            <td className='text-center'>Otto</td>
            <td className='text-center'>
              <span class="badge rounded-pill bg-primary">Detail</span>
              <span class="badge rounded-pill bg-success mx-2">Edit</span>
              <span class="badge rounded-pill bg-danger">Delete</span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default TableContactComponent;
