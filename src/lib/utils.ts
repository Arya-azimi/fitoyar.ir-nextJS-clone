import { Category } from "@/domain/types";

export function buildCategoryTree(categories: Category[]): Category[] {
  const categoryMap: { [key: string]: Category } = {};
  const categoryTree: Category[] = [];

  categories.forEach((category) => {
    categoryMap[category._id] = { ...category, children: [] };
  });

  categories.forEach((category) => {
    if (category.parent) {
      const parent = categoryMap[category.parent._id];
      if (parent) {
        parent.children?.push(categoryMap[category._id]);
      }
    } else {
      categoryTree.push(categoryMap[category._id]);
    }
  });

  return categoryTree;
}
