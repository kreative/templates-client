import { NextSeo } from "next-seo";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import fetchCategories from "@/lib/fetchCategories";
import fetchTemplates from "@/lib/fetchTemplates";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TemplateCard from "@/components/TemplateCard";

export default function Home(props: any): JSX.Element {
  const { data } = useQuery(["templates"], async () => {
    return await fetchTemplates();
  });

  return (
    <div>
      <NextSeo
        title="Obsidian Templates - Kreative Templates"
        description="Obsidian templates - Markdown templates for Obsidian note taking application"
        canonical="https://kreativetemplates.co/"
        openGraph={{
          type: "website",
          url: "https://kreativetemplates.co/",
          title: "Obsidian Templates - Kreative Templates",
          description:
            "Obsidian templates - Markdown templates for Obsidian note taking application",
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
                />
              </div>
            </div>
            <div className="col-span-3">
              <div id="splash" className="pt-10 w-10/12">
                <h1 className="text-5xl font-bold text-black pb-6">
                  Obsidian templates
                </h1>
                <p className="text-xl text-gray-500">
                  Obsidian is a powerful knowledge management tool that lets you
                  create and organize various types of content using markdown
                  files. Boost your workflow with our pre-designed templates.
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

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  const categories = await fetchCategories();

  await queryClient.prefetchQuery(["templates"], async () => {
    return await fetchTemplates();
  });

  return {
    props: {
      categories,
      dehydratedState: dehydrate(queryClient),
    },
  };
}
