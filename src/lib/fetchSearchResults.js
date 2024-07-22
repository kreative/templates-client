export default async function fetchSearchResults(searchTerm) {
  const url = `https://templates-api.kreativeusa.com/v1/templates/search/all?q=${searchTerm}`;

  const res = await fetch(url);
  const payload = await res.json();
  return payload.data;
}
