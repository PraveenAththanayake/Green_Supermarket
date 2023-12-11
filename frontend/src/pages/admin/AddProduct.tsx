import Dropzone from "../../components/Dropzone";

const AddProduct = () => {
  return (
    <div>
      <h1 className="admin-Headers">Add Product</h1>
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
          <form>
            <div className="grid grid-cols-2 grid-rows-2 gap-x-[53px] gap-y-4">
              <label htmlFor="Product Name" className="adminLabel">
                Product Name
                <input type="text" className="adminInput" />
              </label>
              <label htmlFor="Slug" className="adminLabel">
                Slug
                <input type="text" className="adminInput" />
              </label>
              <label htmlFor="Tags" className="adminLabel">
                Tags(This tag help you in search result)
                <input type="text" className="adminInput" />
              </label>
              <label htmlFor="Brand" className="adminLabel">
                Brand
                <input type="text" className="adminInput" />
              </label>
            </div>
            <label htmlFor="Description" className="mt-4 adminLabel">
              Description
              <textarea className="w-[963px] h-[162px] resize-none border border-gray/20 rounded-md p-2 mt-4 text-black"></textarea>
            </label>
            <div className="flex flex-row justify-between">
              <label htmlFor="Main Image" className="flex flex-col">
                <span className="my-4">Main Image</span>
                <Dropzone maxFiles={1} />
              </label>

              <label htmlFor="Other Images" className="flex flex-col">
                <span className="my-4">Other Images</span>
                <Dropzone maxFiles={3} />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
