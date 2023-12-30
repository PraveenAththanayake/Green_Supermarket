// import Dropzone from "../../components/Dropzone";
import AdminButton from "../../components/buttons/AdminButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CategoriesList } from "../../constants/CategoriesList";
import { addProduct } from "../../services/api/fetchProduct";
import { TextField } from "@mui/material";
import { ProductData } from "../../types";

const AddProduct = () => {
  const schema = yup.object().shape({
    productName: yup.string().required("Product Name is required!"),
    stock: yup.number().required("Stock Limit is required!"),
    tags: yup.string().required("Tags is required!"),
    brand: yup.string(),
    description: yup.string().required("Description is required!"),
    mainImage: yup.string().required("Main Image is required!"), // Assuming mainImage is a URL
    otherImages: yup.string(), // Assuming otherImages is an array of URLs
    price: yup.string().required("Price (LKR) is required!"),
    mfg: yup.date(),
    type: yup.string().required("Type is required!"),
    discountPrice: yup.string(),
    category: yup.string().required("Category is required!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: ProductData) => {
    try {
      const response = await addProduct(data);
      console.log(response);

      // Optionally, you can navigate to another page after successful submission
      // navigator("/path/to/redirect");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="admin-Headers">Add Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[1029px] max-h-max bg-lightGray mt-11 p-8">
          <h2 className="text-4xl font-semibold leading-6 mb-[34px]">
            Billing Details
          </h2>
          <div className="text-base font-normal leading-[18px] text-gray">
            <span>Require fields</span>
            <div className="flex items-center my-7">
              <div className="flex-1 h-0 border-t border-gray/20"></div>
              <div className="mx-[26px] text-center">ADD PRODUCT FORM</div>
              <div className="flex-1 h-0 border-t border-gray/20"></div>
            </div>

            <div>
              <div className="grid grid-cols-2 grid-rows-2 gap-x-[53px] gap-y-4">
                <label htmlFor="productName" className="adminLabel">
                  Product Name
                  <input
                    type="text"
                    className="adminInput"
                    {...register("productName")}
                  />
                  <p className="text-xs italic text-red">
                    {errors.productName?.message}
                  </p>
                </label>
                <label htmlFor="stock" className="adminLabel">
                  Stock
                  <input
                    type="text"
                    className="adminInput"
                    {...register("stock")}
                  />
                  <p className="text-xs italic text-red">
                    {errors.stock?.message}
                  </p>
                </label>
                <label htmlFor="tags" className="adminLabel">
                  Tags(This tag helps you in search results)
                  <input
                    type="text"
                    className="adminInput"
                    {...register("tags")}
                  />
                  <p className="text-xs italic text-red">
                    {errors.tags?.message}
                  </p>
                </label>
                <label htmlFor="brand" className="adminLabel">
                  Brand
                  <input
                    type="text"
                    className="adminInput"
                    {...register("brand")}
                  />
                </label>
              </div>
              <label htmlFor="description" className="mt-4 adminLabel">
                Description
                <textarea
                  className="w-[963px] h-[162px] resize-none border border-gray/20 rounded-md p-2 mt-4 text-black"
                  {...register("description")}
                ></textarea>
                <p className="text-xs italic text-red">
                  {errors.description?.message}
                </p>
              </label>
              <div className="flex flex-row justify-between">
                <label htmlFor="mainImage" className="flex flex-col mt-2">
                  <TextField
                    {...register("mainImage")}
                    type="text"
                    label="Main Image"
                    variant="outlined"
                    className="w-[90vw] md:w-[45vw] lg:w-[30vw]"
                  />
                  <p className="text-xs italic text-red">
                    {errors.mainImage?.message}
                  </p>
                </label>

                <label htmlFor="otherImages" className="flex flex-col mt-2">
                  {/* Use an array input for otherImages */}
                  <TextField
                    {...register("otherImages")}
                    type="text"
                    label="Other Images (Comma-separated URLs)"
                    variant="outlined"
                    className="w-[90vw] md:w-[45vw] lg:w-[30vw]"
                  />
                  <p className="text-xs italic text-red">
                    {errors.otherImages?.message}
                  </p>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1029px] max-h-max bg-lightGray mt-8 p-8">
          <h2 className="text-4xl font-semibold leading-6 mb-[34px]">
            Product Variant
          </h2>
          <div className="text-base font-normal leading-[18px] text-gray">
            <div className="grid grid-cols-2 gap-x-[53px]">
              <label htmlFor="price" className="adminLabel">
                Price
                <input
                  type="text"
                  className="adminInput"
                  {...register("price")}
                  min={1}
                />
              </label>
            </div>
            <div className="w-[963px] border border-gray/20 mt-4 rounded-[5px] grid grid-cols-3 gap-x-[71px] gap-y-4 py-4 px-[19px]">
              <label htmlFor="type" className="adminLabel">
                Type
                <input
                  type="text"
                  className="adminInput"
                  {...register("type")}
                />
                <p className="text-xs italic text-red">
                  {errors.type?.message}
                </p>
              </label>
              <label htmlFor="discountPrice" className="adminLabel">
                Discount Price (If available)
                <input
                  type="text"
                  className="adminInput"
                  {...register("discountPrice")}
                />
              </label>
              <label htmlFor="category" className="adminLabel">
                Category
                <select
                  id="category"
                  {...register("category")}
                  className="adminInput"
                >
                  {CategoriesList.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <p className="text-xs italic text-red">
                  {errors.category?.message}
                </p>
              </label>
              {/* Add more form fields as needed */}
            </div>
          </div>
          <div className="flex flex-row gap-8 my-[42px] pb-4 text-white">
            <AdminButton type="submit" name="Save" className="bg-customGreen" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
