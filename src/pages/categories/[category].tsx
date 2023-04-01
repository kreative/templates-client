import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import fetchCategories from "@/lib/fetchCategories";
import fetchTemplates from "@/lib/fetchTemplates";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TemplateCard from "@/components/TemplateCard";
import normalizeText from "@/lib/normalizeText";

export default function CategoryPage(props: any): JSX.Element {
  const { data } = useQuery(["templates", props.category], async () => {
    return await fetchTemplates(props.category);
  });

  return (
    <div>
      <NextSeo
        title={`${normalizeText(
          props.category
        )} Obsidian Templates - Kreative Templates`}
        description={`${normalizeText(
          props.category
        )} templates for Obsidian - Markdown templates for Obsidian note taking application`}
        canonical="https://kreativetemplates.co/"
        openGraph={{
          type: "website",
          url: "https://kreativetemplates.co/",
          title: `${normalizeText(
            props.category
          )} Obsidian Templates - Kreative Templates`,
          description: `${normalizeText(
            props.category
          )} templates for Obsidian - Markdown templates for Obsidian note taking application`,
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
                  selectedCategory={props.category}
                />
              </div>
            </div>
            <div className="col-span-3">
              <div id="splash" className="pt-10 w-10/12">
                <h1 className="text-5xl font-bold text-black pb-6">
                  {normalizeText(props.category)}
                </h1>
                <p className="text-xl text-gray-500">
                  {props.categoryDescription}
                </p>
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
                      thumbnailUrl={template.thumbnailUrl}
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
  const { category } = context.params;
  const queryClient = new QueryClient();
  const categories = await fetchCategories();

  await queryClient.prefetchQuery(["templates", category], async () => {
    return await fetchTemplates(category);
  });

  // very basic and crappy search algorith to get the correct category description
  // at some point we should probably have the categories be alphabetical from the APi
  // and then use a binary search algo using the alphabet to make splits
  let description: string = "";

  for (let i = 0; i < categories.length; i++) {
    if (category == categories[i].name) {
      description = categories[i].description;
      break;
    }
  }

  return {
    props: {
      categories,
      category,
      categoryDescription: description,
      dehydratedState: dehydrate(queryClient),
    },
  };
}
