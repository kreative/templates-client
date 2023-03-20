// this function fetches the templates for the 'Recently Added' page which is the index page
// for this reason we will take the first 30 templates from the API to display here and will not be using
// any sort of infinite scroll or pagination, that is why we can hardcode the limit and the page
// since we don't have a crazy large amount of templates, we don't need to worry about infinite scroll just yet
export default async function fetchTemplates(category = null) {
  const url = `https://api.kreativetemplates.co/v1/templates?limit=30&page=1&selection=limited${
      category ? `&category=${category}` : ""
    }`;

  const res = await fetch(url);
  const payload = await res.json();
  return payload.data.templates;
}
