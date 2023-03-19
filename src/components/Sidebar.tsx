import Link from "next/link";

const transformText = (text: string) => {
  const words = text.split("-");
  const transformedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return transformedWords.join(" ");
};

function ClickableItem({ name, link, selected }) {
  return (
    <div className="py-0.5">
      <Link href={link}>
        <p
          className={`${
            selected ? "text-black" : "text-gray-600 hover:text-gray-900"
          } cursor-pointer rounded-md text-2xl font-medium`}
          aria-current={selected ? "page" : undefined}
        >
          {name}
        </p>
      </Link>
    </div>
  );
}

export default function Sidebar({ categories, selectedCategory }) {
  const _categories = Array.from(categories);

  return (
    <div>
      <div id="category-list" className="pb-8">
        <p className="text-sm pb-2 text-gray-500">BROWSE BY CATEGORY</p>
        <ClickableItem
          key="all"
          name="All Templates"
          link='/obsidian'
          selected={selectedCategory === null}
        />
        {_categories.map((category: any) => (
          <ClickableItem
            key={category.name}
            name={transformText(category.name)}
            link={`/obsidian/categories/${category.name}`}
            selected={category.name === selectedCategory}
          />
        ))}
      </div>
      <div id="become-an-author">
        <p className="text-sm pb-2 text-gray-500">HAVE A TEMPLATE?</p>
        <ClickableItem name="Submit your own" link='/become-an-author' selected={null} />
      </div>
    </div>
  );
}
