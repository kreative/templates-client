import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { NextSeo } from "next-seo";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import fetchTemplate from "../../lib/fetchTemplate";
import normalizePrice from "../../lib/normalizePrice";
import DownloadBox from "../../components/DownloadBox";
import AuthorBox from "../../components/AuthorBox";
import Tag from "../../components/Tag";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";

export default function SingleTemplate(props: any): JSX.Element | undefined {
  const router = useRouter();
  const { slug } = router.query;
  const { data } = useQuery(["template", slug], async () => {
    const response = await fetchTemplate(slug);
    if (response.data === "notFound") router.push("/404");
    else return response;
  });

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dlazo25rt",
    },
  });

  const thumbnail = cld.image(data.thumbnailCloudinaryId);
  thumbnail.resize(fill().width(800).height(600).gravity(autoGravity()));

  return (
    <div>
      <NextSeo
        title={`${data.name} - Kreative Templates`}
        description={`${data.name} - ${data.tagline} - ${data.description}`}
        canonical={`https://kreativetemplates.co/templates/${data.slug}`}
        openGraph={{
          type: "website",
          url: `https://kreativetemplates.co/templates/${data.slug}`,
          title: `${data.name} - Kreative Templates`,
          description: `${data.name} - ${data.tagline} - ${data.description}`,
        }}
      />
      <Navbar />
      <main>
        <div className="mx-auto max-w-7xl px-6 pt-10" aria-label="Top">
          {data && (
            <div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <div className="sticky top-0 pt-10">
                    <h1 className="font-bold text-4xl pb-2">{data.name}</h1>
                    <p className="text-gray-700 text-xl">
                      {normalizePrice(data.price)}{" "}
                      <span className="text-gray-400">for</span>{" "}
                      <Link href="/">
                        <span className="underline">
                          {data.application.charAt(0).toUpperCase() +
                            data.application.slice(1)}
                        </span>
                      </Link>
                    </p>
                    <div className="pt-8">
                      <DownloadBox
                        templateId={data.id}
                        ip={props.ipAddress}
                        fileUrl={data.fileUrl}
                        fileName={data.name}
                      />
                    </div>
                    <div className="pt-8">
                      <h2 className="font-bold text-gray-700 text-xl pb-2 w-3/4">
                        {data.tagline}
                      </h2>
                      <p className="text-gray-700 text-lg">
                        {data.description}
                      </p>
                    </div>
                    <div className="pt-8">
                      <p className="text-md pb-4">CATEGORIES</p>
                      <Tag text={data.category.name} color="purple" />
                    </div>
                    <div className="pt-8">
                      <p className="text-md pb-4">REQUIRED PLUGINS</p>
                      {data.plugins.map((plugin: string) => (
                        <Tag key={plugin} text={plugin} color="pink" />
                      ))}
                    </div>
                    <div className="pt-8 pb-8">
                      <hr className="w-11/12 pb-8" />
                      <AuthorBox
                        displayName={data.author.displayName}
                        avatarUrl={data.author.avatarUrl}
                        bio={data.author.bio}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-2 pl-6">
                  <AdvancedImage
                    cldImg={thumbnail}
                    className={
                      "w-full h-auto rounded-xl border border-gray-300 mb-6"
                    }
                    alt={`${data.name} thumbnail image`}
                  />
                  {data.galleryImages.map((image: string) => (
                    <div key={image} className="col-span-1">
                      <Image
                        src={image}
                        alt={`${
                          data.name
                        } gallery image ${data.galleryImages.indexOf(image)}`}
                        className="w-full h-auto rounded-xl border border-gray-300 mb-6"
                        width={800}
                        height={600}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { slug } = context.params;
  const queryClient = new QueryClient();
  const ipAddress =
    context.req.headers["x-forwarded-for"] || context.req.socket.remoteAddress;

  await queryClient.prefetchQuery(["template", slug], async () => {
    const response = await fetchTemplate(slug);
    if (response.data === "notFound") throw new Error("404");
    else return response;
  });

  const queryResult = queryClient.getQueryData(["template", slug]);

  if (!queryResult) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      ipAddress,
    },
  };
}
