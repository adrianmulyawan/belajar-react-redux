import axios from 'axios';

export const GET_LIST_CONTACT = "GET_LIST_CONTACT";

export const getListContact = () => {
  console.info('2. Run in contact action');
  return async (dispatch) => {
    // > Loading Data From API (Ketika data masih loading)
    dispatch({
      type: GET_LIST_CONTACT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // > Get Data From API
    // => Data Berhasil Dijalankan
    try {
      // > Ambil Data Dari API
      const response = await axios.get('http://localhost:3004/contacts');
      console.info(response.data, '3. => Data Dari API');

      dispatch({
        type: GET_LIST_CONTACT,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false
        },
      });
    } 
    // => Data Gagal Dijalankan
    catch (error) {
      console.info(error.message, '3. => Sepertinya Ada Error');

      dispatch({
        type: GET_LIST_CONTACT,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message
        },
      });
    }
  };
};