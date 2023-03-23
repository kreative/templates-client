import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import fetchTemplate from "../../lib/fetchTemplate";

export default function SingleTemplate(props: any): JSX.Element {
  const router = useRouter();
  const { slug } = router.query;
  const { data } = useQuery(["template", slug], () => {
    return fetchTemplate(slug);
  });

  return (
    <div>
      <Head>
        <title>{data.name} - Kreative Templates</title>
        <meta
          name="description"
          content={`${data.name} - ${data.tagline} - ${data.description}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <div className="mx-auto max-w-7xl px-6 pt-10" aria-label="Top">
          {!data && <div>No template found</div>}
          {data && <div>{data.name}</div>}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { slug } = context.params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["template", slug], () => {
    return fetchTemplate(slug);
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
