import * as types from '../types'

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  member: [],
};

export default function reducerMember(state = initialState, action) {
  // console.log(action.payload)
  switch (action.type) {
    case `${types.ADD_MEMBER}_PENDING`:
        return {
          ...state,
          isLoading : true
        };
  
      case `${types.ADD_MEMBER}_FULFILLED`:
        return {
          ...state,
          isLoading : false,
          isSuccess : true,
          member: action.payload.data
        };
  
      case `${types.ADD_MEMBER}_REJECTED`:
        return {
          ...state,
          isError:true
        }
    default:
      return state;

  }
}