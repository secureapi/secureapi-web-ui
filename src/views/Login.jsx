import React from 'react';
import queryString  from 'query-string';

import api from 'api';
import env from 'variables/env';

const Login = ({ match: { params }, location: { search } }) => {
  if(params.platform === 'github') {
    const { code } = queryString.parse(search);
    api.resources.exchangeAccessToken({
      platform: params.platform,
      accessToken: code 
    })
    return null
  }
  
  return (
    <div>
      <a href={`https://github.com/login/oauth/authorize?scope=user:email&client_id=${env.GITHUB_CLIENT_ID}`}>Login vi github</a>
    </div>
  )
}

export default Login