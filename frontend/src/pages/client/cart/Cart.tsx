import ClientLayout from "../ClientLayout";
import ShoppingCart from "../../../components/cart/ShoppingCart";
import AdminButton from "../../../components/buttons/AdminButton";

const Cart = () => {
  return (
    <ClientLayout>
      <div className=" mx-40 mb-[410px] ">
        <div className="items-center text-6xl font-semibold flexCenter">
          <h1>Shopping Cart</h1>
        </div>
        <div className="flex flex-row gap-5 ">
          <div className="pt-20 ">
            <div className=" w-[769px] h-[365px] border border-gray2">
              <div className=" flex flex-row justify-between w-[767px]  items-center">
                <div className=" flex flex-row w-[769px] h-[50px] bg-lightGray items-center text-base font-medium text-gray ">
                  <div>
                    <p className=" ml-[89px]">Products</p>
                  </div>
                  <div>
                    <p className=" ml-[220px]">Price</p>
                  </div>
                  <div>
                    <p className=" ml-[106px]">Quantity</p>
                  </div>
                  <div>
                    <p className=" ml-[94px]">Total</p>
                  </div>
                </div>
              </div>
              <ShoppingCart />
              <hr className=" w-[725px] ml-[21px] mt-[15px]  border-gray2" />
              <ShoppingCart />
              <hr className=" w-[725px] ml-[21px] mt-[30px]  border-gray2" />
              <ShoppingCart />
            </div>
            <div className=" flex flex-row justify-between pt-[55px] text-lg">
              <div className="borde flex flex-row justify center items-center pt-[11px]">
                <AdminButton
                  name="Continue Shopping "
                  className="items-center justify-center text-lg font-normal bg-lightGray hover:scale-105"
                />
              </div>
              <div>
                <div className="borde flex flex-row justify center items-center pt-[24px]">
                  <AdminButton
                    name="Clear all items"
                    className="  bg-white justify-center items-center font-normal text-lg text-customGreen w-[100px] h-5 underline hover:text-xl"
                  />
                </div>
              </div>
              <div className="borde flex flex-row justify center items-center pt-[11px]">
                <AdminButton
                  name="Update Cart"
                  className="items-center justify-center text-lg font-normal bg-lightGray hover:scale-105"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="pt-20 ">
              <div className=" w-[332px] h-[194px] border border-gray2 bg-lightGray">
                <div className="flex flex-row justify-between">
                  <p className=" mt-[12px] ml-[18px] text-base font-normal text-gray">
                    Sub Total
                  </p>
                  <p className="mt-[12px] ml-[18px] mr-[18px] text-base font-normal">
                    LKR 1549.00
                  </p>
                </div>
                <div className="w-[296px] ml-[18px] mt-[10px]  ">
                  <hr className="border-gray2" />
                </div>
                <div className="ml-[18px] mt-[28px] ">
                  <p className="text-base font-normal text-gray ">Shipping</p>
                  <p className="text-sm font-light">FREE SHIPPING</p>
                  <div className="flex flex-row">
                    <p className="text-base font-normal text-gray ">
                      Estimate for
                    </p>
                    <p className="text-base font-normal ml-[12px] ">
                      User Address
                    </p>
                  </div>
                </div>
                <div className="w-[296px] ml-[18px] mt-[10px]  ">
                  <hr className="border-gray2" />
                </div>
                <div className=" ml-[12px] mt-[14px] flex flex-row justify-between">
                  <p className="text-base font-medium">TOTAL</p>
                  <p className="text-base font-normal text-customGreen mr-[18px] ">
                    LKR 1549.00
                  </p>
                </div>
              </div>
            </div>

            <div className="borde flex flex-row justify center items-center pt-[11px] ">
              <AdminButton
                name="Proceed to Checkout"
                className="items-center justify-center w-full text-lg font-normal text-white bg-customGreen hover:bg-white hover:text-customGreen hover:border hover:border-Gray"
              />
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default Cart;
