import * as types from '../types'
import axios from 'axios'
import {ipUrl} from '../../component/url'

export const handleGetProvinsi = () => ({
  type: types.GET_PROVINSI,
  payload: axios.get('http://dev.farizdotid.com/api/daerahindonesia/provinsi')
}
);

export const handleGetPuk= () => ({
  type: types.GET_PUK,
  payload: axios.get('https://api.backendless.com/4EF0CD97-940D-4349-FFA6-11F1C3A6D100/CD2E49B0-559F-4AD5-8CDB-C52AF703C682/data/puk')
}
);