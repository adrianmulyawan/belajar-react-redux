import axios from 'axios';

// > Constant (Untuk di Oper ke Reducer)
export const GET_LIST_CONTACT = "GET_LIST_CONTACTS";

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
}