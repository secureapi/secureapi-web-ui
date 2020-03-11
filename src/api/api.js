import axios from "axios";

import env from "variables/env";

export const apiInstance = axios.create({
  baseURL: env.API_URL
});
