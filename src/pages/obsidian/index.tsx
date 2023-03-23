import Head from "next/head";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import fetchCategories from "@/lib/fetchCategories";
import fetchTemplates from "@/lib/fetchTemplates";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TemplateCard from "@/components/TemplateCard";

export default function Home(props: any): JSX.Element {
  const { data } = useQuery(["templates"], () => {
    return fetchTemplates();
  });

  return (
    <div>
      <Head>
        <title>Obsidian Templates - Kreative Templates</title>
        <meta
          name="description"
          content="Obsidian templates - Markdown templates for Obsidian note taking application"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <div className="mx-auto max-w-7xl px-6 pt-10" aria-label="Top">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1">
              <Sidebar categories={props.categories} selectedCategory={null} />
            </div>
            <div className="col-span-3">
              <div id="splash" className="pt-5 w-10/12">
                <h1 className="text-5xl font-bold text-black pb-6">
                  Obsidian templates
                </h1>
                <p className="text-lg text-gray-500">
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

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  const categories = await fetchCategories();

  await queryClient.prefetchQuery(["templates"], () => {
    return fetchTemplates();
  });

  return {
    props: {
      categories,
      dehydratedState: dehydrate(queryClient),
    },
  };
}
