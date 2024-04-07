import Image from "next/image";
import Link from "next/link";
import Tab from "@/app/components/tab_detail";

const Detail = () => {
  return (
    <div className="w-full pt-5 pb-10">
      <div className="w-[1440px] mx-auto rounded-xl relative">
        <Image className="mx-auto rounded-xl" src={"/images/banner/banner.png"} width={1440} height={176} alt="banner"></Image>
        <div className="absolute text-white top-8 left-[650px]"><Link className="mx-2.5" href={"/"}>Home</Link>/<Link className="mx-2.5" href={"/products"}>Shop</Link></div>
      </div>
      <div className="w-[1200px] mx-auto pt-[50px]">
        <div className="w-[1200px] flex justify-between">
            <Image className="w-[420px] h-[580px] rounded-[10px] border border-zinc-200 mx-[10px]" src={"/images/products/product3.png"} width={420} height={580} alt="product"></Image>
            <div className="w-[420px]">
              <p className="w-[420px] h-[50px] pb-5 mb-2.5 text-zinc-800 text-lg font-semibold font-['Poppins'] tracking-wide border-b border-gray-200">Fresh mussel (500g)</p>
              <p className="text-zinc-800 text-base font-semibold font-['Poppins'] tracking-wide my-[15px]">SKU: <span className="text-neutral-500 font-normal font-['Poppins'] leading-[14px] tracking-wide">123456</span></p>
              <p className="w-[420px] h-6 mb-2.5 text-zinc-800 text-base font-semibold font-['Poppins'] tracking-wide">Availability: <span className="text-neutral-500 text-sm font-normal font-['Poppins'] tracking-wide">41 in stock</span></p>
              <p className="w-[420px] h-5 mb-2.5 text-zinc-800 text-sm font-semibold font-['Poppins'] tracking-wide">3,35 $<span className="ml-[15px] text-neutral-500 text-sm font-normal font-['Poppins'] line-through tracking-wide">3,35 $</span></p>
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
              <div className="w-[200px] h-[40px] my-[30px] flex justify-between ">
                <p className="text-zinc-800 text-base font-medium font-['Poppins'] tracking-wide pt-2">Quantity:</p>
                <div className="w-[112px] h-[40px] flex items-center justify-center border border-black border-opacity-10">
                  <button className="w-[30px] h-[38px] flex-col justify-center items-center inline-flex"><span className="w-[14px] h-[33px] text-center text-zinc-800 text-2xl font-normal font-['Poppins']">-</span></button>
                  <input className="w-[50px] h-[21px] pb-px justify-center items-center inline-flex text-center text-black text-sm font-normal font-['Poppins']" type="number" id="number-input" min={"1"} defaultValue={"1"} aria-describedby="helper-text-explanation" required/>
                  <button className="w-[30px] h-[38px] flex-col justify-center items-center inline-flex"><span className="w-[14px] h-[33px] text-center text-zinc-800 text-2xl font-normal font-['Poppins']">+</span></button>
                </div>
              </div>
              <div className="w-[210] h-[45px] flex justify-between">
                <button className="w-[200px] h-[45px] rounded-[50px] bg-amber-400 justify-center items-center inline-flex text-center text-white text-sm font-normal font-['Poppins']"> Thêm giỏ hàng</button>
                <button className="w-[200px] h-[45px] rounded-[50px] bg-zinc-800 justify-center items-center inline-flex text-center text-white text-sm font-normal font-['Poppins']"> Mua Ngay</button>
              </div>
              <div className="w-[80px] h-5 flex justify-between my-[15px]">
                <Image src={"/images/icons/icon-heart.png"} width={20} height={18} alt="icon"></Image>
                <p className="h-5 text-center text-zinc-800 text-sm font-medium font-['Poppins']">Wishlist</p>
              </div>
              <div className="w-[240px] h-[24px] flex justify-between">
                <Image src={"/images/payment1.png"} width={40} height={24} alt="payments"></Image>
                <Image src={"/images/payment2.png"} width={40} height={24} alt="payments"></Image>
                <Image src={"/images/payment3.png"} width={40} height={24} alt="payments"></Image>
                <Image src={"/images/payment4.png"} width={40} height={24} alt="payments"></Image>
                <Image src={"/images/payment5.png"} width={40} height={24} alt="payments"></Image>
              </div>
            </div>
          <div className="w-[300px]">
              <div className="w-[300px] h-[225px] mb-[15px] px-[15px] py-[15px] bg-stone-50">
                <div className="w-[60px] h-[60px] mx-auto bg-white rounded-full px-[17px] py-[17px]">
                  <Image src={"/images/icons/icon-detail1.png"} width={26} height={26} alt="icon"></Image>
                </div>
                <p className="w-[270px] h-[23px] my-[15px] text-center text-zinc-800 text-base font-semibold font-['Poppins'] uppercase tracking-wide">DELIVERY INFO</p>
                <p className="w-[270px] h-[90px] text-center text-neutral-500 font-normal font-['Poppins'] leading-[30px] tracking-wide">From then, delivery is generally within 2-10 days, depending on your location.</p>
              </div>
              <div className="w-[300px] h-[225px] mb-[15px] px-[15px] py-[15px] bg-stone-50">
                <div className="w-[60px] h-[60px] mx-auto bg-white rounded-full px-[17px] py-[17px]">
                  <Image src={"/images/icons/icon-detail2.png"} width={26} height={26} alt="icon"></Image>
                </div>
                <p className="w-[270px] h-[23px] text-center text-zinc-800 text-base font-semibold font-['Poppins'] uppercase tracking-wide">30 DAYS RETURNS</p>
                <p className="w-[270px] h-[90px] text-center text-neutral-500 font-normal font-['Poppins'] leading-[30px] tracking-wide">Not the right fit? No worries. We arrange pick up and a full refund within 7 days including the delivery fee.</p>
              </div>
              <div className="w-[300px] h-[225px] mb-[15px] px-[15px] py-[15px] bg-stone-50">
                <div className="w-[60px] h-[60px] mx-auto bg-white rounded-full px-[17px] py-[17px]">
                  <Image src={"/images/icons/icon-detail3.png"} width={26} height={26} alt="icon"></Image>
                </div>
                <p className="w-[270px] h-[23px] my-[15px] text-center text-zinc-800 text-base font-semibold font-['Poppins'] uppercase tracking-wide">10 YEAR WARRANTY</p>
                <p className="w-[270px] h-[90px] text-center text-neutral-500 font-normal font-['Poppins'] leading-[30px] tracking-wide">Quality comes first and our products are designed to last.</p>
              </div>
          </div>
        </div>
        {/* Test */}
          <Tab/>
        {/* Review */}
        {/* <div>
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
        </div> */}
        {/* Review */}
        <div className="w-[1200px] mt-10 pt-10 bg-white ">
          <div className="w-[1200px] h-[50px]">
            <p className="w-[440px] h-[50px] mx-auto text-center text-black text-[40px] font-bold font-['Inter']">Related Product</p>
          </div>
          <div className="w-[1200px] h-[360px] mt-[40px] flex justify-between">
            <div className="w-[232px] pb-[30px] relative">
              <Image className="mb-[10px]" src={"/images/products/product2.png"} width={232} height={276} alt="products"></Image>
              <p className="w-[232px] text-center text-black font-bold font-['Inter'] absolute top-[220px]">Bông cải</p>
              <div className="w-[232px] flex justify-around items-center">
                <div>
                  <p className="w-[80px] h-[20px] text-black font-semibold font-['Inter']">38.000 đ</p>
                  <p className="w-[80px] h-[20px] text-black text-opacity-50 text-[12px] font-semibold font-['Inter'] line-through">38.000 đ</p>
                  <Image src={"/images/icons/icon-heart.png"} width={20} height={20} alt="icon-heart"></Image>
                </div>
                <button className="w-[80px] h-9 bg-lime-600 rounded-[5px] text-center text-xs text-white font-semibold font-['Inter']">Mua Ngay</button>
              </div>
            </div>
            <div className="w-[232px] pb-[30px] relative">
              <Image className="mb-[10px]" src={"/images/products/product2.png"} width={232} height={276} alt="products"></Image>
              <p className="w-[232px] text-center text-black font-bold font-['Inter'] absolute top-[220px]">Bông cải</p>
              <div className="w-[232px] flex justify-around items-center">
                <div>
                  <p className="w-[80px] h-[20px] text-black font-semibold font-['Inter']">38.000 đ</p>
                  <p className="w-[80px] h-[20px] text-black text-opacity-50 text-[12px] font-semibold font-['Inter'] line-through">38.000 đ</p>
                  <Image src={"/images/icons/icon-heart.png"} width={20} height={20} alt="icon-heart"></Image>
                </div>
                <button className="w-[80px] h-9 bg-lime-600 rounded-[5px] text-center text-xs text-white font-semibold font-['Inter']">Mua Ngay</button>
              </div>
            </div>
            <div className="w-[232px] pb-[30px] relative">
              <Image className="mb-[10px]" src={"/images/products/product2.png"} width={232} height={276} alt="products"></Image>
              <p className="w-[232px] text-center text-black font-bold font-['Inter'] absolute top-[220px]">Bông cải</p>
              <div className="w-[232px] flex justify-around items-center">
                <div>
                  <p className="w-[80px] h-[20px] text-black font-semibold font-['Inter']">38.000 đ</p>
                  <p className="w-[80px] h-[20px] text-black text-opacity-50 text-[12px] font-semibold font-['Inter'] line-through">38.000 đ</p>
                  <Image src={"/images/icons/icon-heart.png"} width={20} height={20} alt="icon-heart"></Image>
                </div>
                <button className="w-[80px] h-9 bg-lime-600 rounded-[5px] text-center text-xs text-white font-semibold font-['Inter']">Mua Ngay</button>
              </div>
            </div>
            <div className="w-[232px] pb-[30px] relative">
              <Image className="mb-[10px]" src={"/images/products/product2.png"} width={232} height={276} alt="products"></Image>
              <p className="w-[232px] text-center text-black font-bold font-['Inter'] absolute top-[220px]">Bông cải</p>
              <div className="w-[232px] flex justify-around items-center">
                <div>
                  <p className="w-[80px] h-[20px] text-black font-semibold font-['Inter']">38.000 đ</p>
                  <p className="w-[80px] h-[20px] text-black text-opacity-50 text-[12px] font-semibold font-['Inter'] line-through">38.000 đ</p>
                  <Image src={"/images/icons/icon-heart.png"} width={20} height={20} alt="icon-heart"></Image>
                </div>
                <button className="w-[80px] h-9 bg-lime-600 rounded-[5px] text-center text-xs text-white font-semibold font-['Inter']">Mua Ngay</button>
              </div>
            </div>
            <div className="w-[232px] pb-[30px] relative">
              <Image className="mb-[10px]" src={"/images/products/product2.png"} width={232} height={276} alt="products"></Image>
              <p className="w-[232px] text-center text-black font-bold font-['Inter'] absolute top-[220px]">Bông cải</p>
              <div className="w-[232px] flex justify-around items-center">
                <div>
                  <p className="w-[80px] h-[20px] text-black font-semibold font-['Inter']">38.000 đ</p>
                  <p className="w-[80px] h-[20px] text-black text-opacity-50 text-[12px] font-semibold font-['Inter'] line-through">38.000 đ</p>
                  <Image src={"/images/icons/icon-heart.png"} width={20} height={20} alt="icon-heart"></Image>
                </div>
                <button className="w-[80px] h-9 bg-lime-600 rounded-[5px] text-center text-xs text-white font-semibold font-['Inter']">Mua Ngay</button>
              </div>
            </div>
          </div>
          <div className="w-[1200px] h-9 mt-10 text-center">
            <button className="w-[150px] h-9 bg-amber-400 rounded-[5px] text-center text-white text-xs font-semibold font-['Inter']">Xem thêm</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;



