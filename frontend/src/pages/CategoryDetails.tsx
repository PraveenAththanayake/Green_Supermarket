import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { CategoriesList } from "../constants/CategoriesList";

const CategoryDetails = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  const category = useMemo(
    () => CategoriesList.find((category) => category.id === categoryId),
    [categoryId]
  );

  if (!categoryId) {
    return <div>Invalid category ID</div>;
  }

  if (!category) {
    return <div>Category not found</div>;
  }

  console.log(category); // Log the category to the console

  return (
    <div>
      <h2>{category.name} Details</h2>
      {/* Display category details here */}
    </div>
  );
};

export default CategoryDetails;
