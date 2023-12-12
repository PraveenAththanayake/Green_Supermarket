import Dropzone from "../../components/Dropzone";
import { FaPlusSquare } from "react-icons/fa";
import AdminButton from "../../components/buttons/AdminButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const AddProduct = () => {
  const schema = yup.object().shape({
    productName: yup.string().required("Product Name is required!"),
    slug: yup.string().required("Slug is required!"),
    tags: yup.string().required("Tags is required!"),
    brand: yup.string().required("Brand is required!"),
    description: yup.string().required("Description is required!"),
    mainImage: yup.string().required("Main Image is required!"),
    otherImages: yup.string().required("Other Images are required!"),
    type: yup.string().required("Type is required!"),
    stockLimit: yup.string().required("Stock Limit is required!"),
    measurement: yup.string().required("Measurement is required!"),
    priceLKR: yup.string().required("Price (LKR) is required!"),
    stock: yup.string().required("Stock is required!"),
    unit: yup.string().required("Unit is required!"),
    status: yup.string().required("Status is required!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    console.log(data);
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
                <label htmlFor="Product Name" className="adminLabel">
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
                <label htmlFor="Slug" className="adminLabel">
                  Slug
                  <input
                    type="text"
                    className="adminInput"
                    {...register("slug")}
                  />
                  <p className="text-xs italic text-red">
                    {errors.slug?.message}
                  </p>
                </label>
                <label htmlFor="Tags" className="adminLabel">
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
                <label htmlFor="Brand" className="adminLabel">
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
              <label htmlFor="Description" className="mt-4 adminLabel">
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
                <label htmlFor="Main Image" className="flex flex-col">
                  <span className="my-4">Main Image</span>
                  <Dropzone maxFiles={1} {...register("mainImage")} />
                  <p className="text-xs italic text-red">
                    {errors.mainImage?.message}
                  </p>
                </label>

                <label htmlFor="Other Images" className="flex flex-col">
                  <span className="my-4">Other Images</span>
                  <Dropzone maxFiles={3} {...register("otherImages")} />
                  <p className="text-xs italic text-red">
                    {errors.otherImages?.message}
                  </p>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1029px] h-[549px] bg-lightGray mt-8 p-8">
          <h2 className="text-4xl font-semibold leading-6 mb-[34px]">
            Product Variant
          </h2>
          <div className="text-base font-normal leading-[18px] text-gray">
            <div className="grid grid-cols-2 gap-x-[53px]">
              <label htmlFor="Type" className="adminLabel">
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
              <label htmlFor="Stock Limit" className="adminLabel">
                Stock Limit
                <input
                  type="text"
                  className="adminInput"
                  {...register("stockLimit")}
                />
                <p className="text-xs italic text-red">
                  {errors.stockLimit?.message}
                </p>
              </label>
            </div>
            <div className="w-[963px] h-[232px] border border-gray/20 mt-4 rounded-[5px] grid grid-cols-3 grid-rows-2 gap-x-[71px] gap-y-4 py-4 px-[19px]">
              <label htmlFor="Measurement" className="adminLabel">
                Measurement
                <input
                  type="text"
                  className="adminInput w-[261px]"
                  {...register("measurement")}
                />
                <p className="text-xs italic text-red">
                  {errors.measurement?.message}
                </p>
              </label>
              <label htmlFor="Price (LKR)" className="adminLabel">
                Price (LKR)
                <input
                  type="text"
                  className="adminInput w-[261px]"
                  {...register("priceLKR")}
                />
                <p className="text-xs italic text-red">
                  {errors.priceLKR?.message}
                </p>
              </label>
              <label htmlFor="Price (LKR)" className="adminLabel">
                Price (LKR)
                <input
                  type="text"
                  className="adminInput w-[261px]"
                  {...register("priceLKR")}
                />
                <p className="text-xs italic text-red">
                  {errors.priceLKR?.message}
                </p>
              </label>
              <label htmlFor="Stock" className="adminLabel">
                Stock
                <input
                  type="text"
                  className="adminInput w-[261px]"
                  {...register("stock")}
                />
                <p className="text-xs italic text-red">
                  {errors.stock?.message}
                </p>
              </label>
              <label htmlFor="Unit" className="adminLabel">
                Unit
                <input
                  type="text"
                  className="adminInput w-[261px]"
                  {...register("unit")}
                />
                <p className="text-xs italic text-red">
                  {errors.unit?.message}
                </p>
              </label>
              <label htmlFor="Status" className="adminLabel">
                Status
                <input
                  type="text"
                  className="adminInput w-[261px]"
                  {...register("status")}
                />
                <p className="text-xs italic text-red">
                  {errors.status?.message}
                </p>
              </label>
            </div>
          </div>
          <div className="flex flex-row-reverse w-full mt-[65px] mb-8">
            <button className="w-[241px] h-[47px] bg-customGreen rounded-md text-white text-4xl font-semibold leading-6 flexCenter gap-[18px]">
              <FaPlusSquare />
              Add Variant
            </button>
          </div>
          <div className="flex flex-row gap-8 my-[42px] pb-4">
            <AdminButton name="Save" className="bg-customGreen" />
            <AdminButton name="Cancel" className="bg-red" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
