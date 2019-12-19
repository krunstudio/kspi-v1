import * as types from '../types'

const initialState = {
  isError:false,
  provinsi: [],
};

export default function reducerProvinsi(state = initialState, action) {
  console.log(action.payload)
  switch (action.type) {
    case `${types.GET_PROVINSI}_PENDING`:
        return {
          ...state,
        };
  
      case `${types.GET_PROVINSI}_FULFILLED`:
        return {
          ...state,
          provinsi: action.payload.data
        };
  
      case `${types.GET_PROVINSI}_REJECTED`:
        return {
          ...state,
          isError:true
        }
    default:
      return state;

  }
}