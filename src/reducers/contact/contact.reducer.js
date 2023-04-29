// Menyimpan store, atau state yang berhubungan dengan data contact
import { 
  GET_LIST_CONTACT, 
  ADD_NEW_CONTACT, 
  DELETE_CONTACT,
  DETAIL_CONTACT
} from "../../actions/contact.action";

const initialState = {
  // > SHOW ALL CONTACT
  getListContactResult: false,
  getListContactLoading: false,
  getListContactError: false,
  // > ADD NEW CONTACT
  addContactResult: false,
  addContactLoading: false,
  addContactError: false,
  // > DELETE CONTACT
  deleteContactResult: false,
  deleteContactLoading: false,
  deleteContactError: false,
  // > DETAIL CONTACT
  detailContactResult: false,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {  
    // => actionnya berdasarkan dari file ./src/actions/contact.action.js
    // => Jadi jika actionnya != case GET_LIST_CONTACT
    // => Maka case ini tidak akan dibaca
    case GET_LIST_CONTACT:
      console.info(action.payload, '4. Masuk ke Reducer Tampilkan Kontak!');

      return {
        ...state,
        getListContactResult: action.payload.data,
        getListContactLoading: action.payload.loading,
        getListContactError: action.payload.errorMessage
      }
    case ADD_NEW_CONTACT:
      console.info(action.payload, '4. Masuk ke Reducer Tambah Kontak!');

      return {
        ...state,
        addContactResult: action.payload.data,
        addContactLoading: action.payload.loading,
        addContactError: action.payload.errorMessage
      }
    case DELETE_CONTACT:
      console.info(action.payload, '4. Masuk ke Reducer Hapus Kontak!');

      return {
        ...state,
        deleteContactResult: action.payload.data,
        deleteContactLoading: action.payload.loading,
        deleteContactError: action.payload.errorMessage
      };
    case DETAIL_CONTACT:
      console.info(action.payload, '4. Masuk ke Reducer Detail kontak!');
      
      return {
        ...state,
        detailContactResult: action.payload.data,
      };
    default:
      return state;
  };
};

export default contactReducer;