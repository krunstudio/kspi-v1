//combine all reducer
import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import RootNavigator from '../../navigators/RootNavigator'
import reducerMember from '../reducers/reducerMember'
import reducerProvinsi from '../reducers/reducerProvinsi'
import reducerPuk from '../reducers/reducerPuk'


const reducerRouter = createNavigationReducer(RootNavigator);

const appReducer = combineReducers({
  router: reducerRouter,
  addMember : reducerMember,
  provinsi  : reducerProvinsi,
  puk       : reducerPuk
})


export default appReducer