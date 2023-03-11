import { QueryClient, useQuery, dehydrate } from "@tanstack/react-query";

const fetchCategories = async () => {
  const response = await fetch(
    "https://api.kreativetemplates.co/v1/categories"
  );
  return response.json();
};

const transformText = (text: string) => {
  const words = text.split("-");
  const transformedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return transformedWords.join(" ");
};

export default function CategoryList(): JSX.Element {
  const { data, isLoading, isSuccess, error } = useQuery(
    ["categories"],
    fetchCategories
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isSuccess) {
    return (
      <div>
        <p className="text-xs pb-2 text-gray-500">BROWSE BY CATEGORY</p>
        {data.data.map((category) => (
          <div key={category.name}>
            <p className="text-lg py-1 text-gray-600 font-medium">
              {transformText(category.name)}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.fetchQuery(["categories"], () => fetchCategories());

  return {
    props: {
      // dehydrate query cache
      dehydratedState: dehydrate(queryClient),
    },
  };
};
