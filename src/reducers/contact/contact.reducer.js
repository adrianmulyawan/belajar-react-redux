// Digunakan untuk menyimpan yang berhubungan dengan contact
import { GET_LIST_CONTACT } from "../../actions/contact.action";

const initialState = {
  getListContactResult: false,
  getListContactLoading: false,
  getListContactError: false,
};

const contact = (state = initialState, action) => {
  switch(action.type) {
    case GET_LIST_CONTACT:
      console.info(action, '=> 4. Reducer is calling');
      return {
        ...state,
        getListContactResult: action.payload.data,
        getListContactLoading: action.payload.loading,
        getListContactError: action.payload.errorMessage
      }
    default:
      return state
  };
};

export default contact;