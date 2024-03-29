import Link from "next/link";
import normalizeText from "@/lib/normalizeText";
import SearchBar from "@/components/SearchBar";
import React from "react";
import { motion } from "framer-motion";

interface ClickableItemProps {
  name: string;
  link: string;
  selected: boolean;
}

interface SidebarProps {
  categories: any;
  selectedCategory: string | null;
  searchQuery: string | null;
}

const ClickableItem: React.FC<ClickableItemProps> = (
  props: ClickableItemProps,
) => {
  return (
    <div className="py-0.5">
      <motion.div
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.1 },
        }}
      >
        <Link href={props.link}>
          <p
            className={`${
              props.selected
                ? "text-purple-700"
                : "text-gray-600 hover:text-red-600"
            } cursor-pointer rounded-md text-2xl font-medium`}
            aria-current={props.selected ? "page" : undefined}
          >
            {props.name}
          </p>
        </Link>
      </motion.div>
    </div>
  );
};

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const _categories = Array.from(props.categories);

  return (
    <div>
      <div id="category-list" className="pb-8">
        <div className={"mb-8 pr-12"}>
          <SearchBar searchQuery={props.searchQuery} />
        </div>
        <p className="text-sm pb-2 text-gray-500">BROWSE BY CATEGORY</p>
        <ClickableItem
          key="all"
          name="All Templates"
          link="/"
          selected={props.selectedCategory === "all-templates"}
        />
        {_categories.map((category: any) => (
          <ClickableItem
            key={category.name}
            name={normalizeText(category.name)}
            link={`/categories/${category.name}`}
            selected={category.name === props.selectedCategory}
          />
        ))}
      </div>
      <div id="become-an-author">
        <p className="text-sm pb-2 text-gray-500">HAVE A TEMPLATE?</p>
        <ClickableItem
          name="Submit your own"
          link="/become-an-author"
          selected={false}
        />
      </div>
    </div>
  );
};

export default Sidebar;
