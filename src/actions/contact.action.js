import axios from 'axios';

// > Constant (Untuk di Oper ke Reducer)
export const GET_LIST_CONTACT = "GET_LIST_CONTACTS";
export const ADD_NEW_CONTACT = "ADD_NEW_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const DETAIL_CONTACT = "DETAIL_CONTACT";
// export const EDIT_CONTACT = "EDIT_CONTACT";

// > Method Handle Seluruh Data Kontak (Get All Data Contacts)
export const getListContacts = () => {
  // > dispatch: digunakan untuk mengubah state didalam store
  // => selain itu dispatch juga digunakan sebagai penghubung antara 'view' dan 'action', serta dengan 'reducer'
  console.info('2. Masuk kedalam action menampilkan seluruh data kontak');
  return async (dispatch) => {

    // > dispatch untuk handle data dirender (loading)
    dispatch({
      type: GET_LIST_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // > Jika data berhasil didapatkan
    try {
      const response = await axios.get('http://localhost:3004/contacts');
      console.info(response.data, '3. Data didapatkan');

      dispatch({
        type: GET_LIST_CONTACT,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    } 
    // > Jika data gagal didapatkan
    catch (error) {
      console.info(error.message, '3. Data tidak didapatkan');

      dispatch({
        type: GET_LIST_CONTACT,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  }
};

// > Method Tambah Kontak Baru
export const addNewContact = (data) => {
  return async (dispatch) => {
    // > dispatch untuk handle data dirender (loading)
    dispatch({
      type: ADD_NEW_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // > Jika data berhasil ditambahkan
    try {
      const response = await axios.post('http://localhost:3004/contacts', data);
      console.info(response.data, '3. Berhasil Tambah Data');
      
      dispatch({
        type: ADD_NEW_CONTACT,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false
        },
      });
    } 
    // > Jika data gagal ditambahkan
    catch (error) {
      console.info(error.message, '3. Data tidak didapatkan');

      dispatch({
        type: ADD_NEW_CONTACT,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
};

export const deleteContact = (id) => {
  console.info('2. Masuk Kedalam Method Delete Contact!');

  return async (dispatch) => {
    // > Kondisi ketika loading
    dispatch({
      type: DELETE_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // > Kondisi Berhasil Hapus Data
    try {
      const response = await axios.delete(`http://localhost:3004/contacts/${id}`);
      console.info(response.data, '3. Data berhasil dihapus!');

      dispatch({
        type: DELETE_CONTACT,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    } 
    // > Kondisi Gagal Hapus Data
    catch (error) {
      console.info(error.message, '3. Gagal Hapus Data');

      dispatch({
        type: DELETE_CONTACT,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    }
  };
};

// > Method Detail Kontak
export const detailContact = (data) => {
  console.info('2. Masuk kedalam action detail contact');
  console.info(data, '3. Data detail contact (dari action)');
  return (dispatch) => {
    dispatch({
      type: DETAIL_CONTACT,
      payload: {
        data: data,
      },
    });
  };
};