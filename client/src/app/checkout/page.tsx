// import { useState } from 'react';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";
const Checkout = () => {
  // const [addressCount, setAddressCount] = useState(1);

  // const handleAddAddress = () => {
  //   setAddressCount(addressCount + 1);
  // };

  return (
    <div className="max-w-[1440px]">
      <section className="w-[660px] float-left pr-2 border-r-2">
        <div className="">
          <h1 className="font-['Roboto'] font-[600] text-2xl not-italic m-[10px]">
            Contact
          </h1>
          <input
            className="w-[585px] h-[60px] pl-[15px] text-green-500 text-base border-2 border-gray-400 rounded focus:border-green-500 focus:outline-none"
            type="text"
            placeholder="Email or mobie phone number"
          />
          <div className="mt-[10px] flex items-center">
            <input
              type="checkbox"
              className="w-[20px] mr-[10px] h-[20px]"
              name=""
              id=""
            />
            <label className="text-base" htmlFor="">
              {" "}
              Email me with news and offers
            </label>
          </div>
        </div>
        <div className="">
          <h1 className="font-['Roboto'] font-[600] text-2xl not-italic m-[10px]">
            Delivery
          </h1>
          <div>
            <input
              type="text"
              placeholder="First name"
              className="pl-[15px] h-[40px] w-[285px] border-2 pt-[16px] pb-[16px] mr-[14px]  text-base rounded  border-gray-400 text-green-500 focus:border-green-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last name"
              className="pl-[15px] h-[40px] w-[285px] border-2 pt-[16px] pb-[16px] text-base  rounded border-gray-400 text-green-500 focus:border-green-500 focus:outline-none"
            />
          </div>
          {/* {[...Array(addressCount)].map((_, index) => ( */}
          <input
            type="text"
            placeholder="Address ${index + 1}"
            className="w-[584px] h-[40px] border-2 pl-[15px] pt-[16px] pb-[16px] mt-[20px] text-base  rounded border-gray-400 text-green-500 focus:border-green-500 focus:outline-none"
          />
          {/* ))}  
           onClick={handleAddAddress}
          */}
          <button className="text-green-500 text-base mt-[15px]">
            + Add apartment, suite, etc
          </button>
        </div>
        <div className="mt-[10px]">
          <input
            type="text"
            placeholder="Postal Code"
            className="pl-[15px] h-[40px] w-[285px] border-2 pt-[16px] mr-[14px] pb-[16px] text-base  rounded border-gray-400 text-green-500 focus:border-green-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="City"
            className="pl-[15px] h-[40px] w-[285px] border-2 pt-[16px] pb-[16px] text-base  rounded border-gray-400 text-green-500 focus:border-green-500 focus:outline-none"
          />
          <div className="mt-[10px] flex items-center">
            <input
              type="checkbox"
              className="w-[20px] h-[20px] mr-[10px]"
              name=""
              id=""
            />
            <label className="text-base" htmlFor="">
              {" "}
              Save this information for next time
            </label>
          </div>
        </div>
        <div className="mt-[20px]">
          <h1 className="font-['Roboto'] font-[600] text-2xl not-italic m-[10px]">
            Shipping method
          </h1>
          <form action="">
            <div className="flex items-center">
              <input
                type="radio"
                className="w-[20px] h-[20px] mr-[10px]"
                name="Shipping"
                id=""
              />
              <label className="text-base" htmlFor="">
                {" "}
                Standard Shipping&nbsp;&nbsp;&nbsp;14$
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                className="w-[20px] h-[20px] mr-[10px]"
                name="Shipping"
                id=""
              />
              <label className="text-base" htmlFor="">
                {" "}
                Express Shipping&nbsp;&nbsp;&nbsp;20$
              </label>
            </div>
          </form>
        </div>
        <div className="mt-[32px]">
          <h1 className="font-['Roboto'] text-3xl m-[10px] not-italic font-[600]">
            Payment
          </h1>
          <p>All transactions are secure and encrypted.</p>
          <div className="">
            <div className="w-[584px] border-2 focus-visible/draft:border-green-600 rounded p-2">
              <input
                id="draft"
                className="peer/draft w-[20px] h-[20px] peer-checked/draft:focus:border-green-700 focus:outline-none bg-slate-300"
                type="radio"
                name="payment"
              />
              <label
                htmlFor="draft"
                className="peer-checked/draft:text-green-500 pl-[10px] text-2xl font-[400]"
              >
                Credit Card
              </label>
              <KeyboardArrowDownIcon className="peer-checked/draft:text-green-500 rotate-180 peer-checked/draft:rotate-0 float-right text-[4  0px]" />
              <div className="hidden peer-checked/draft:block max-w-[660px] overflow-hidden ">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Card number"
                  className="pl-[10px] h-[40px] w-[584px] border-2 border-gray-300 focus:border-green-500 text-green-500 focus:outline-none rounded"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Name on card"
                  className="pl-[10px] h-[40px] w-[584px] border-2 border-gray-300 focus:border-green-500 focus:outline-none text-green-500 mt-[15px]"
                />
                <div className="mt-[20px]">
                  <input
                    type="month"
                    className="pl-[15px] w-[285px] h-[40px] border-2 border-gray-300 focus:border-green-500 focus:outline-none rounded mr-[15px]"
                    placeholder="Expiration date (MM/YY)"
                  />
                  <input
                    type="number"
                    min={100}
                    max={999}
                    className="pl-[15px] w-[285px] h-[40px] border-2 border-gray-300 focus:border-green-500 focus:outline-none rounded"
                    placeholder="Security code"
                  />
                </div>
                <input
                  type="checkbox"
                  name=""
                  id="checkbox"
                  className="peer/checkbox"
                />
                <label
                  htmlFor="checkbox"
                  className="peer-checked/checkbox:text-green-500"
                >
                  {" "}
                  Save this information for next time
                </label>
              </div>
            </div>
            <div className="w-[585px] mt-[10px] border-2 border-gray-300 p-[10px]">
              <input
                id="published"
                className="peer/published  w-[20px] h-[20px]"
                type="radio"
                name="payment"
              />
              <label
                htmlFor="published"
                className="peer-checked/published:text-green-500 pl-[10px] text-2xl font-[400]"
              >
                Cash on Delivery (COD)
              </label>
            </div>
          </div>
        </div>
        <button className="w-[585px] h-[58px] bg-orange-500 text-white text-2xl pt-[12px] pb-[12px] mt-[20px] rounded">
          Pay Now
        </button>
      </section>
      <aside className=" w-[530px] float-right">
        <div className="flex justify-between items-center ">
          <div className="flex items-center">
            <Image
              src={"/images/cat9.png"}
              alt=""
              width={100}
              height={100}
              className="border-2 border-gray-300 mr-[10px]"
            />
            <div>
              <h3>asdk;alsd;</h3>
              <p>123012 $</p>
            </div>
          </div>
          <h1>$ 18231</h1>
        </div>
        <div className="w-[580px] flex justify-between mt-[10px]">
          <input
            type="text"
            placeholder="Discount code"
            className="pl-[10px] h-[45px] w-[340px] border-2 border-gray-300 focus:border-green-500 focus:outline-none "
          />
          <button
            type="submit"
            className="bg-gray-300 p-[12px] rounded ml-[10px]"
            disabled
          >
            {" "}
            Apply
          </button>
        </div>
        <div className="mt-[10px]">
          <div className=" w-[580px] flex justify-between">
            <h2 className="text-xl font-semibold">
              Subtotal:
            </h2>
            <h2 className="text-xl">
              $&nbsp;&nbsp;&nbsp;123123
            </h2>
          </div>
          <div className="w-[580px] flex justify-between">
            <h2 className="text-xl">
              Shipping
            </h2>
            <h2>
              $&nbsp;&nbsp;&nbsp;123123
            </h2>
          </div>
          <div className="w-[580px] flex justify-between">
            <h2 className="text-xl">
              Discount
            </h2>
            <h2>
              - $&nbsp;&nbsp;&nbsp;123123
            </h2>
          </div>
          <div className="w-[580px] flex justify-between">
            <h2 className="text-xl font-semibold">
              Total
            </h2>
            <h2 className="text-xl font-semibold">
              $&nbsp;&nbsp;&nbsp;123123
            </h2>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Checkout;
