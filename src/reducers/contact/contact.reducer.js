// Menyimpan store, atau state yang berhubungan dengan data contact
import { GET_LIST_CONTACT } from "../../actions/contact.action";

const initialState = {
  getListContactResult: false,
  getListContactLoading: false,
  getListContactError: false,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {  
    // => actionnya berdasarkan dari file ./src/actions/contact.action.js
    // => Jadi jika actionnya != case GET_LIST_CONTACT
    // => Maka case ini tidak akan dibaca
    case GET_LIST_CONTACT:
      console.info(action.payload, '4. Masuk ke Reducer!');
      
      return {
        ...state,
        getListContactResult: action.payload.data,
        getListContactLoading: action.payload.loading,
        getListContactError: action.payload.errorMessage
      }
    default:
      return state;
  };
};

export default contactReducer;