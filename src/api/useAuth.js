const AUTH_TOKEN = 'AUTH_TOKEN';


const appendAuthTokenToRequest = (config) => {
  const authToken = localStorage.getItem(AUTH_TOKEN);

  if (authToken) {
    config.headers = {
      ...config.headers,
      'X-Auth-Token': localStorage.getItem(AUTH_TOKEN),
    };
  }

  return config;
};

const useAuth = (instance) => {
  instance.interceptors.request.use(appendAuthTokenToRequest);
};

export default useAuth;