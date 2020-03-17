import { createAction } from '@reduxjs/toolkit'

export default {
  setToken: createAction('@user/SET_TOKEN'),
  clearUser: createAction('@user/CLEAR_USER'),
  setUserProfile: createAction('@user/SET_USER_PROFILE'),
}