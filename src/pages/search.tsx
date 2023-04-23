import { NextSeo } from "next-seo";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TemplateCard from "@/components/TemplateCard";
import fetchSearchResults from "@/lib/fetchSearchResults";
import fetchCategories from "@/lib/fetchCategories";

export default function Search(props: any): JSX.Element {
  const { data } = useQuery(["search", props.query], async () => {
    return await fetchSearchResults(props.query);
  });

  return (
    <div>
      <NextSeo
        title={`Search results for ${props.query} - Kreative Templates`}
        description={`Search results for ${props.query} - Kreative Templates`}
        canonical="https://kreativetemplates.co/"
        openGraph={{
          type: "website",
          url: "https://kreativetemplates.co/",
          title: `Search results for ${props.query} - Kreative Templates`,
          description: `Search results for ${props.query} - Kreative Templates`,
        }}
      />
      <Navbar />
      <main>
        <div className="mx-auto max-w-7xl px-6 pt-2" aria-label="Top">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1">
              <div className="sticky top-0 pt-10">
                <Sidebar
                  categories={props.categories}
                  selectedCategory={null}
                  searchQuery={props.query}
                />
              </div>
            </div>
            <div className="col-span-3">
              <div id="splash" className="pt-10 w-10/12">
                <h1 className="text-5xl font-bold text-black pb-6">
                  Search results for &apos;&apos;{props.query}&apos;&apos;
                </h1>
              </div>
              {!data && <div>No templates found</div>}
              {data && data.length === 0 && <div>No templates found</div>}
              {data && data.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10">
                  {data.map((template: any) => (
                    <TemplateCard
                      key={template.id}
                      name={template.name}
                      tagline={template.tagline}
                      thumbnailCloudinaryId={template.thumbnailCloudinaryId}
                      authorName={template.author.displayName}
                      authorAvatar={template.author.avatarUrl}
                      price={template.price}
                      categoryName={template.category.name}
                      slug={template.slug}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const queryClient = new QueryClient();
  const decodedQuery = decodeURIComponent(context.query.q);
  const categories = await fetchCategories();

  await queryClient.prefetchQuery(["search", decodedQuery], async () => {
    return await fetchSearchResults(decodedQuery);
  });

  return {
    props: {
      categories,
      query: decodedQuery,
      dehydratedState: dehydrate(queryClient),
    },
  };
}
