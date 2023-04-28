// Menyimpan store, atau state yang berhubungan dengan data contact
import { GET_LIST_CONTACT, ADD_NEW_CONTACT } from "../../actions/contact.action";

const initialState = {
  // > SHOW ALL CONTACT
  getListContactResult: false,
  getListContactLoading: false,
  getListContactError: false,
  // > ADD NEW CONTACT
  addContactResult: false,
  addContactLoading: false,
  addContactError: false,
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
    case ADD_NEW_CONTACT:
      console.info(action.payload, '4. Masuk ke Reducer!');

      return {
        ...state,
        addContactResult: action.payload.data,
        addContactLoading: action.payload.loading,
        addContactError: action.payload.errorMessage
      }
    default:
      return state;
  };
};

export default contactReducer;