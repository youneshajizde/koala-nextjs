const bannerFetcher = async () => {
  const response = await fetch("http://localhost:1337/api/banners?populate=*");

  const data = await response.json();
  return data;
};

export default bannerFetcher;
