import { Category, CategoryInfo } from "@/lib/types";
import { categories } from "@/lib/translations";
import { cn } from "@/lib/utils";

interface CategoryTabsProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export function CategoryTabs({ selectedCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2 mb-3">
        {categories.map((category: CategoryInfo) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              "px-4 py-2 rounded-lg border border-gray-200 font-medium transition-all hover:shadow-md",
              selectedCategory === category.id
                ? "bg-primary text-white dark:bg-primary dark:text-white"
                : "bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:border-gray-600"
            )}
          >
            {category.emoji} {category.label}
          </button>
        ))}
      </div>
      <p className="text-sm text-muted-foreground text-center">
        카테고리에 따라 번역 톤이 달라져요. 애매하면 '❓ 애매한 멘트'를 선택해주세요.
      </p>
    </div>
  );
}
