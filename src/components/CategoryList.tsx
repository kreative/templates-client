import Link from "next/link";

const transformText = (text: string) => {
  const words = text.split("-");
  const transformedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return transformedWords.join(" ");
};

function CategoryItem({ name, selected }) {
  return (
    <div>
      <Link href={`/obsidian/categories/${name}`}>
        <p
          className={`${
            selected ? "text-black" : "text-gray-600 hover:text-gray-900"
          } cursor-pointer py-1 rounded-md text-lg font-medium`}
          aria-current={selected ? "page" : undefined}
        >
          {transformText(name)}
        </p>
      </Link>
    </div>
  );
}

export default function CategoryList({ categories, selectedCategory }) {
  const _categories = Array.from(categories);

  return (
    <div>
      <p className="text-xs pb-2 text-gray-500">BROWSE BY CATEGORY</p>
      {_categories.map((category: any) => (
        <CategoryItem
          key={category.name}
          name={category.name}
          selected={category.name === selectedCategory}
        />
      ))}
    </div>
  );
}
