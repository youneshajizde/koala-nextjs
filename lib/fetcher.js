const fetcher = async () => {
  const response = await fetch(
    "http://localhost:1337/api/properties?/pagination[page]=1&pagination[pageSize]=8"
  );
  const data = await response.json();
  return data;
};

export default fetcher;
