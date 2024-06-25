const getProductById = async (id) => {
  const response = await fetch(
    `http://localhost:1337/api/properties/${id}?populate=*`
  );
  const data = await response.json();
  return data;
};

export default getProductById;
