const fetchApi = async (urlApi) => {
  const middleRes = await fetch(urlApi);
  const response = await middleRes.json();
  return response;
};

export { fetchApi };
