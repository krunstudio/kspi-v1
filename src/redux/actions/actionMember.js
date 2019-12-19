import * as types from '../types'
import axios from 'axios'
import {ipUrl} from '../../component/url'

export const handleAddMember = (
    federasi,
    sp,
    lembaga,
    puk,
    wilayah,
    name,
    jenis_kelamin,
    status_karyawan,
    status_pkb,
    alamat,
    hp_telp,
    email,
    foto
  ) => ({
    type: types.ADD_MEMBER,
    payload: axios({
      method: 'POST',
      url: `${ipUrl}/anggota`,
      // headers: {
      //   'Content-Type': 'application/json',
      //   // Authorization: `Bearer ${token}`,
      // },
      data: {
        federasi,
        sp,
        lembaga,
        puk,
        wilayah,
        name,
        jenis_kelamin,
        status_karyawan,
        status_pkb,
        alamat,
        hp_telp,
        email,
        foto,
      },
    }),
  });