import * as types from '../types'

const initialState = {
  isError:false,
  puk: [],
};

export default function reducerPuk(state = initialState, action) {
  console.log(action.payload)
  switch (action.type) {
    case `${types.GET_PUK}_PENDING`:
        return {
          ...state,
        };
  
      case `${types.GET_PUK}_FULFILLED`:
        return {
          ...state,
          puk: action.payload.data
        };
  
      case `${types.GET_PUK}_REJECTED`:
        return {
          ...state,
          isError:true
        }
    default:
      return state;

  }
}