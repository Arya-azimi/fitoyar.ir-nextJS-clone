import { getCategoriesWithHierarchy } from "@/lib/queries";
import { buildCategoryTree } from "@/lib/utils";
import { HeaderUI } from "./header-ui";

export async function Header() {
  const flatCategories = await getCategoriesWithHierarchy();
  const categoryTree = buildCategoryTree(flatCategories);

  return <HeaderUI categoryTree={categoryTree} />;
}
