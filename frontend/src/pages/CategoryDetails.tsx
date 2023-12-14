import React from "react";
import { useParams } from "react-router-dom";
import { CategoriesList } from "../constants/CategoriesList";

const CategoryDetails = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  if (!categoryId) {
    return <div>Invalid category ID</div>;
  }

  const category = CategoriesList.find(
    (category) => category.id === categoryId
  );
  console.log(category); // Log the category to the console

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div>
      <h2>{category.name} Details</h2>
      {/* Display category details here */}
    </div>
  );
};

export default CategoryDetails;
