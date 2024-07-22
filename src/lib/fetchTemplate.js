export default async function fetchTemplate(slug) {
  const res = await fetch(
    `https://templates-api.kreativeusa.com/v1/templates/${slug}`,
  );
  const payload = await res.json();

  if (payload.error || !payload.data) return { data: "notFound" };

  return payload.data;
}
