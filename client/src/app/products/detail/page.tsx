import Image from "next/image";

const Detail = () => {
  return (
    <div className="w-full bg-zinc-100 pt-5 pb-10">
      <Image className="mx-auto rounded-xl relative" src={"/images/banner/banner-detail.png"} width={1440} height={176} alt="banner-detail"></Image>
      <p className="w-[1440px] h-12 mx-auto text-center text-white text-[40px] font-black font-['Inter'] absolute top-[240px] left-[80px]">Shop Detail</p>
      <div className="w-[1200px] mx-auto pt-[50px]">
        <div className="w-[1200px] flex">
          <div className="w-[900px] flex flex-wrap">
            <Image className="w-[430px] h-[430px] rounded-[10px] border border-zinc-200 mx-[10px]" src={"/images/products/product2.jpg"} width={430} height={430} alt="product"></Image>
            <div className="w-[450px]">
              <p className="w-[450px] h-[30px] mb-2.5 text-gray-600 text-2xl font-extrabold font-['Inter']">Brocoli</p>
              <p className="w-[450px] h-6 mb-2.5 text-gray-500 text-base font-normal font-['Inter']">Category: Vegetables</p>
              <p className="w-[450px] h-[30px] mb-2.5 text-gray-600 text-2xl font-bold font-['Inika']">3,35 $</p>
              <div className="flex flex-col">
                <div className="overflow-x-auto">
                  <div className="inline-block min-w-full">
                    <div className="overflow-hidden">
                      <table className="min-w-full">
                        <tbody>
                          <tr className="bg-white border-b">
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              Weight
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              1 kg
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              Calo
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              ???
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              Fat
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              ???
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              Fiber
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              ???
                            </td>
                          </tr>
                          <tr className="bg-white border-b">
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              Other
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              ???
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[100px] h-[30px] my-[10px] flex justify-between">
                <button className="w-[30px] h-[30px] flex justify-center items-center bg-white rounded-full"><Image src={"/images/icons/icon-minus.png"} width={24} height={24} alt="minus"></Image></button>
                <input className="w-[34px] h-[30px] text-center text-gray-500 text-xl font-semibold font-['Inter']" type="number" data-input-counter aria-describedby="helper-text-explanation" min={1} />
                <button className="w-[30px] h-[30px] flex justify-center items-center bg-white rounded-full"><Image src={"/images/icons/icon-plus.png"} width={24} height={24} alt="plus"></Image></button>
              </div>
              <button className="w-40 h-10 rounded-[50px] border border-orange-400 text-lime-600 text-sm font-bold font-['Inter'] flex items-center"><Image className="mx-[10px]" src={"/images/icons/icon-cart.png"} width={16} height={16} alt="cart"></Image> Thêm giỏ hàng</button>
            </div>
            <div className="w-[900px] my-5 ">
              <div className="w-[900] h-10 border-b border-zinc-200">
                <p className="w-[120px] h-10 text-center text-gray-600 text-base font-medium font-['Inter']">Description</p>
              </div>
              <span className="w-[890px] text-gray-500 text-base font-normal font-['Inter']">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </span>
            </div>
            <div className="w-[900px] my-5">
              <div className="w-[900] h-10 border-b border-zinc-200">
                <p className="w-[120px] h-10 text-center text-gray-600 text-2xl font-bold font-['Inter']">Reviews</p>
              </div>
              <textarea id="review" rows={6} className="block p-2.5 w-[890px] text-sm border-none border-b border-gray-500 bg-zinc-100 focus:bg-white" placeholder="Your Review *"></textarea>
              <button className="w-40 h-10 rounded-[50px] border border-orange-400 text-lime-600 text-sm font-bold font-['Inter'] flex items-center justify-center mt-[10px] ml-[730px]">Post Review</button>
            </div>
            <div className="w-[900px] mt-5">
              <div className="w-[900px] h-10 border-b border-zinc-200">
                <p className="w-[120px] h-10 text-center text-gray-600 text-base font-medium font-['Inter']">Reviews</p>
              </div>
              <div className="w-[900px] my-[15px] pl-[10px] bg-white rounded-[10px]">
                <div className=" flex justify justify-between">
                  <div className="flex gap-2">
                    <span className="text-black text-base font-normal font-['Inter']">Jess Hopkins</span>
                  </div>
                  <div className="flex p-1 gap-1 text-orange-300">
                  </div>
                </div>
                <span className="text-gray-500 text-base font-normal font-['Inter']">
                  Gorgeous design! Even more responsive than the previous version. A pleasure to use!
                </span>
              </div>
              <div className="w-[900px] my-[15px] pl-[10px] bg-white rounded-[10px]">
                <div className=" flex justify justify-between">
                  <div className="flex gap-2">
                    <span className="text-black text-base font-normal font-['Inter']">Jess Hopkins</span>
                  </div>
                </div>
                <span className="text-gray-500 text-base font-normal font-['Inter']">
                  Gorgeous design! Even more responsive than the previous version. A pleasure to use!
                </span>
              </div>
              <div className="w-[900px] my-[15px] pl-[10px] bg-white rounded-[10px]">
                <div className=" flex justify justify-between">
                  <div className="flex gap-2">
                    <span className="text-black text-base font-normal font-['Inter']">Jess Hopkins</span>
                  </div>
                  <div className="flex p-1 gap-1 text-orange-300">
                  </div>
                </div>
                <span className="text-gray-500 text-base font-normal font-['Inter']">
                  Gorgeous design! Even more responsive than the previous version. A pleasure to use!
                </span>
              </div>
            </div>
          </div>
          <div className="w-[290px]">
            <div className="w-[280px] mx-auto">
              <h1 className="w-[280px] h-[30px] mb-2.5 text-gray-600 text-2xl font-bold font-['Inter']">Categories</h1>
              <div className="w-[280px]">
                <div className="w-[280px] h-10 flex">
                  <p className="w-[230px] h-10 text-lime-600 flex items-center text-base font-medium font-['Inter']">Category</p>
                  <p className="w-[50px] h-10 text-center flex items-center text-gray-500 text-base font-normal font-['Inter']">(1)</p>
                </div>
                <div className="w-[280px] h-10 flex">
                  <p className="w-[230px] h-10 text-lime-600 flex items-center text-base font-medium font-['Inter']">Category</p>
                  <p className="w-[50px] h-10 text-center flex items-center text-gray-500 text-base font-normal font-['Inter']">(1)</p>
                </div>
                <div className="w-[280px] h-10 flex">
                  <p className="w-[230px] h-10 text-lime-600 flex items-center text-base font-medium font-['Inter']">Category</p>
                  <p className="w-[50px] h-10 text-center flex items-center text-gray-500 text-base font-normal font-['Inter']">(1)</p>
                </div>
                <div className="w-[280px] h-10 flex">
                  <p className="w-[230px] h-10 text-lime-600 flex items-center text-base font-medium font-['Inter']">Category</p>
                  <p className="w-[50px] h-10 text-center flex items-center text-gray-500 text-base font-normal font-['Inter']">(1)</p>
                </div>
                <div className="w-[280px] h-10 flex">
                  <p className="w-[230px] h-10 text-lime-600 flex items-center text-base font-medium font-['Inter']">Category</p>
                  <p className="w-[50px] h-10 text-center flex items-center text-gray-500 text-base font-normal font-['Inter']">(1)</p>
                </div>
                <div className="w-[280px] h-10 flex">
                  <p className="w-[230px] h-10 text-lime-600 flex items-center text-base font-medium font-['Inter']">Category</p>
                  <p className="w-[50px] h-10 text-center flex items-center text-gray-500 text-base font-normal font-['Inter']">(1)</p>
                </div>
              </div>
            </div>
            <div className="w-[280px] mt-5 mx-auto">
              <h1 className="w-[280px] h-[30px] mb-2.5 text-gray-600 text-2xl font-bold font-['Inter']">Featured Products</h1>
              <div className="w-[280px]">
                <div className="w-[280px] h-[94px] flex">
                  <Image src={"/images/products/product2.jpg"} width={100} height={94} alt="product"></Image>
                  <div className="w-[170px] h-[94px]">
                    <p className="w-[170px] h-5 mb-[7px] text-gray-600 text-base font-semibold font-['Inter']">Brocoli</p>
                    <p className="w-[170px] h-[30px] mb-[7px] text-gray-600 text-2xl font-bold font-['Inika']">3,35 $</p>
                    <p className="w-[170px] h-[30px] text-red-500 text-2xl font-bold font-['Inika'] line-through">4,11 $</p>
                  </div>
                </div>
                <div className="w-[280px] h-[94px] flex">
                  <Image src={"/images/products/product2.jpg"} width={100} height={94} alt="product"></Image>
                  <div className="w-[170px] h-[94px]">
                    <p className="w-[170px] h-5 mb-[7px] text-gray-600 text-base font-semibold font-['Inter']">Brocoli</p>
                    <p className="w-[170px] h-[30px] mb-[7px] text-gray-600 text-2xl font-bold font-['Inika']">3,35 $</p>
                    <p className="w-[170px] h-[30px] text-red-500 text-2xl font-bold font-['Inika'] line-through">4,11 $</p>
                  </div>
                </div>
                <div className="w-[280px] h-[94px] flex">
                  <Image src={"/images/products/product2.jpg"} width={100} height={94} alt="product"></Image>
                  <div className="w-[170px] h-[94px]">
                    <p className="w-[170px] h-5 mb-[7px] text-gray-600 text-base font-semibold font-['Inter']">Brocoli</p>
                    <p className="w-[170px] h-[30px] mb-[7px] text-gray-600 text-2xl font-bold font-['Inika']">3,35 $</p>
                    <p className="w-[170px] h-[30px] text-red-500 text-2xl font-bold font-['Inika'] line-through">4,11 $</p>
                  </div>
                </div>
                <div className="w-[280px] h-[94px] flex">
                  <Image src={"/images/products/product2.jpg"} width={100} height={94} alt="product"></Image>
                  <div className="w-[170px] h-[94px]">
                    <p className="w-[170px] h-5 mb-[7px] text-gray-600 text-base font-semibold font-['Inter']">Brocoli</p>
                    <p className="w-[170px] h-[30px] mb-[7px] text-gray-600 text-2xl font-bold font-['Inika']">3,35 $</p>
                    <p className="w-[170px] h-[30px] text-red-500 text-2xl font-bold font-['Inika'] line-through">4,11 $</p>
                  </div>
                </div>
                <div className="w-[280px] h-[94px] flex">
                  <Image src={"/images/products/product2.jpg"} width={100} height={94} alt="product"></Image>
                  <div className="w-[170px] h-[94px]">
                    <p className="w-[170px] h-5 mb-[7px] text-gray-600 text-base font-semibold font-['Inter']">Brocoli</p>
                    <p className="w-[170px] h-[30px] mb-[7px] text-gray-600 text-2xl font-bold font-['Inika']">3,35 $</p>
                    <p className="w-[170px] h-[30px] text-red-500 text-2xl font-bold font-['Inika'] line-through">4,11 $</p>
                  </div>
                </div>
                <button className="w-40 h-10 rounded-[50px] border border-orange-400 text-lime-600 text-sm font-bold font-['Inter'] flex items-center justify-center mt-10 mx-auto">View More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1200px] h-[490px] mt-10 pt-10 bg-white ">
          <div className="w-[1200px] h-[50px]">
            <p className="w-[440px] h-[50px] mx-auto text-center text-black text-[40px] font-bold font-['Inter']">Sản phẩm cùng loại</p>
          </div>
          <div className="w-[1200px] h-[360px] flex">
            <div className="w-60 h-[360px] pt-[10px]">
              <Image src={"/images/products/product1.png"} width={240} height={240} alt="product"></Image>
              <p className="w-[60px] h-5 mt-[10px] mx-auto text-black text-base font-normal font-['Inter']">Bắp cải</p>
              <p className="w-[60px] h-5 mx-auto mt-[10px] text-lime-600 text-base font-bold font-['Inika']">65,000 <span className="underline">đ</span></p>
              <div className="w-[110px] h-[30px] mx-auto mt-[10px]"><button className="w-[110px] h-[30px]  bg-lime-600 rounded-[5px] shadow text-center text-neutral-100 font-normal font-['Poppins']">Thêm giỏ hàng</button></div>
            </div>
            <div className="w-60 h-[360px] pt-[10px]">
              <Image src={"/images/products/product1.png"} width={240} height={240} alt="product"></Image>
              <p className="w-[60px] h-5 mt-[10px] mx-auto text-black text-base font-normal font-['Inter']">Bắp cải</p>
              <p className="w-[60px] h-5 mx-auto mt-[10px] text-lime-600 text-base font-bold font-['Inika']">65,000 <span className="underline">đ</span></p>
              <div className="w-[110px] h-[30px] mx-auto mt-[10px]"><button className="w-[110px] h-[30px]  bg-lime-600 rounded-[5px] shadow text-center text-neutral-100 font-normal font-['Poppins']">Thêm giỏ hàng</button></div>
            </div>
            <div className="w-60 h-[360px] pt-[10px]">
              <Image src={"/images/products/product1.png"} width={240} height={240} alt="product"></Image>
              <p className="w-[60px] h-5 mt-[10px] mx-auto text-black text-base font-normal font-['Inter']">Bắp cải</p>
              <p className="w-[60px] h-5 mx-auto mt-[10px] text-lime-600 text-base font-bold font-['Inika']">65,000 <span className="underline">đ</span></p>
              <div className="w-[110px] h-[30px] mx-auto mt-[10px]"><button className="w-[110px] h-[30px]  bg-lime-600 rounded-[5px] shadow text-center text-neutral-100 font-normal font-['Poppins']">Thêm giỏ hàng</button></div>
            </div>
            <div className="w-60 h-[360px] pt-[10px]">
              <Image src={"/images/products/product1.png"} width={240} height={240} alt="product"></Image>
              <p className="w-[60px] h-5 mt-[10px] mx-auto text-black text-base font-normal font-['Inter']">Bắp cải</p>
              <p className="w-[60px] h-5 mx-auto mt-[10px] text-lime-600 text-base font-bold font-['Inika']">65,000 <span className="underline">đ</span></p>
              <div className="w-[110px] h-[30px] mx-auto mt-[10px]"><button className="w-[110px] h-[30px]  bg-lime-600 rounded-[5px] shadow text-center text-neutral-100 font-normal font-['Poppins']">Thêm giỏ hàng</button></div>
            </div>
            <div className="w-60 h-[360px] pt-[10px]">
              <Image src={"/images/products/product1.png"} width={240} height={240} alt="product"></Image>
              <p className="w-[60px] h-5 mt-[10px] mx-auto text-black text-base font-normal font-['Inter']">Bắp cải</p>
              <p className="w-[60px] h-5 mx-auto mt-[10px] text-lime-600 text-base font-bold font-['Inika']">65,000 <span className="underline">đ</span></p>
              <div className="w-[110px] h-[30px] mx-auto mt-[10px]"><button className="w-[110px] h-[30px]  bg-lime-600 rounded-[5px] shadow text-center text-neutral-100 font-normal font-['Poppins']">Thêm giỏ hàng</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;

