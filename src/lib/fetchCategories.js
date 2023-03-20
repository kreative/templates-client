export default async function fetchCategories() {
  const res = await fetch("https://api.kreativetemplates.co/v1/categories");
  const payload = await res.json();
  return payload.data;
}
