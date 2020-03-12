import { apiInstance } from './api';

export default {
  exchangeAccessToken: ({ platform, accessToken }) => apiInstance.request({
    method: 'POST',
    url: `/users/social/${platform}/`,
    data: {
      access_token: accessToken
    }
  }),
}