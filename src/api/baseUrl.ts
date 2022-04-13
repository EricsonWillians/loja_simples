const getBaseUrl = (): string => {
  let baseUrl: string = process.env
    .REACT_APP_FAKE_STORE_API_BASE_URL_DEV as string;
  if (process.env.REACT_APP_BUILD_ENV === "production") {
    baseUrl = process.env.REACT_APP_FAKE_STORE_API_BASE_URL_PROD as string;
  }
  return baseUrl;
};

export default getBaseUrl;
