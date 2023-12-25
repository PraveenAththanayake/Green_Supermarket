import Dropzone from "../../components/Dropzone";
import AdminButton from "../../components/buttons/AdminButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CategoriesList } from "../../constants/CategoriesList";
import { addProduct } from "../../services/api/fetchProduct";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const schema = yup.object().shape({
    productName: yup.string().required("Product Name is required!"),
    stock: yup.string().required("Stock Limit is required!"),
    tags: yup.string().required("Tags is required!"),
    brand: yup.string().required("Brand is required!"),
    description: yup.string().required("Description is required!"),
    mainImage: yup.mixed().required("Main Image is required!"),
    otherImages: yup.mixed(),
    price: yup.string().required("Price (LKR) is required!"),
    mfg: yup.date(),
    type: yup.string().required("Type is required!"),
    discountPrice: yup.string(),
    category: yup.string().required("Category is required!"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  interface FormData {
    productName: string;
    tags: string;
    brand: string;
    description: string;
    mainImage: File[];
    otherImages: File[];
    type: string;
    stock: string;
    price: string;
    discountPrice: string;
    category: string;
    life: number;
    mfg: Date;
  }

  const navigator = useNavigate();

  const onSubmit = async (data: FormData) => {
    console.log("Form Submitted:", data);

    const { mainImage, otherImages, ...restData } = data;

    const mainImagePaths = mainImage.map((file) => URL.createObjectURL(file));
    const otherImagePaths = otherImages.map((file) =>
      URL.createObjectURL(file)
    );

    const updatedData = {
      ...restData,
      mainImage: mainImagePaths[0], // Use only the first image for the main image
      otherImages: otherImagePaths,
      mfg: data.mfg.toISOString(), // Convert the Date to ISO string
    };

    console.log(updatedData);

    addProduct(updatedData).then((res) => {
      console.log(res.data);
      navigator("/admin");
    });
  };

  const handleCancel = () => {
    reset();
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
                  Tags(This tag help you in search result)
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
                  <p className="text-xs italic text-red">
                    {errors.brand?.message}
                  </p>
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
                <label htmlFor="mainImage" className="flex flex-col">
                  <span className="my-4">Main Image</span>
                  <Dropzone
                    onFilesSelected={(files) => setValue("mainImage", files)}
                    maxFiles={1}
                  />
                  <p className="text-xs italic text-red">
                    {errors.mainImage?.message}
                  </p>
                </label>

                <label htmlFor="otherImages" className="flex flex-col">
                  <span className="my-4">Other Images</span>
                  <Dropzone
                    onFilesSelected={(files) => setValue("otherImages", files)}
                    maxFiles={3}
                  />
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
              <label htmlFor="MFG" className="adminLabel">
                MFG
                <input
                  type="datetime-local"
                  className="adminInput"
                  {...register("mfg")}
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
                Discount Price (If have)
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
              {/* <label htmlFor="unit" className="adminLabel">
                Unit
                <input
                  type="text"
                  className="adminInput"
                  {...register("unit")}
                />
                <p className="text-xs italic text-red">
                  {errors.unit?.message}
                </p>
              </label>
              <label htmlFor="status" className="adminLabel">
                Status
                <input
                  type="text"
                  className="adminInput"
                  {...register("status")}
                />
                <p className="text-xs italic text-red">
                  {errors.status?.message}
                </p>
              </label> */}
            </div>
          </div>
          <div className="flex flex-row gap-8 my-[42px] pb-4 text-white">
            <AdminButton type="submit" name="Save" className="bg-customGreen" />
            <AdminButton name="Cancel" className="bg-red" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
