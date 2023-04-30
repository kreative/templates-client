const fetchSitemapUrls = async (API_URL) => {
  const res = await fetch(API_URL);
  const payload = await res.json();
  return payload.data;
};

export default fetchSitemapUrls;
