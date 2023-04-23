export default async function fetchSearchResults(searchTerm) {
  const url = `https://api.kreativetemplates.co/v1/templates/search/all?q=${searchTerm}`;

  const res = await fetch(url);
  const payload = await res.json();
  return payload.data;
}
