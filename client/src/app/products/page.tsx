import Image from "next/image"
import Link from "next/link";



const Products = () => {
    return (
        <div className="w-full pt-5 pb-10">
            <div className="w-[1440px] mx-auto rounded-xl relative">
              <Image className="mx-auto rounded-xl" src={"/images/banner/banner.png"} width={1440} height={176} alt="banner"></Image>
              <div className="absolute text-white top-8 left-[650px]"><Link className="mx-2.5" href={"/"}>Home</Link>/<Link className="mx-2.5" href={"/products"}>Shop</Link></div>
            </div>
            <div className="w-[1200px] mx-auto mt-10 flex justify-between">
              <div className="w-[300px]">
                <p className="text-zinc-800 text-base font-semibold font-['Poppins'] leading-none tracking-wide mb-[20px]">Filter</p>
                <p className="text-neutral-500 text-sm font-normal font-['Poppins'] tracking-wide">22 products</p>
                <div className="w-[300px] mt-[30px] py-[30px] border-t border-neutral-200">
                  <p className="text-zinc-800 text-base font-semibold font-['Poppins'] leading-none tracking-wide mb-[20px]">Price</p>
                  <div className="w-[300px] ">
                    <div className="w-[300px] flex justify-between items-center mb-[15px]">
                      <input className="w-[17px] h-[17px] bg-white border border-neutral-200" type="checkbox" name="" id="" />
                      <label className="w-[237px] text-neutral-500 font-normal font-['Poppins'] tracking-wide" htmlFor="">Từ 0đ - 50.000đ</label>
                      <p className="text-neutral-500 text-sm font-normal font-['Poppins'] tracking-wide">(19)</p>
                    </div>
                    <div className="w-[300px] flex justify-between items-center mb-[15px]">
                      <input className="w-[17px] h-[17px] bg-white border border-neutral-200" type="checkbox" name="" id="" />
                      <label className="w-[237px] text-neutral-500 font-normal font-['Poppins'] tracking-wide" htmlFor="">Từ 50.000đ - 100.000đ</label>
                      <p className="text-neutral-500 text-sm font-normal font-['Poppins'] tracking-wide">(19)</p>
                    </div>
                    <div className="w-[300px] flex justify-between items-center mb-[15px]">
                      <input className="w-[17px] h-[17px] bg-white border border-neutral-200" type="checkbox" name="" id="" />
                      <label className="w-[237px] text-neutral-500 font-normal font-['Poppins'] tracking-wide" htmlFor="">Từ 100.000đ - 250.000đ</label>
                      <p className="text-neutral-500 text-sm font-normal font-['Poppins'] tracking-wide">(19)</p>
                    </div>
                    <div className="w-[300px] flex justify-between items-center mb-[15px]">
                      <input className="w-[17px] h-[17px] bg-white border border-neutral-200" type="checkbox" name="" id="" />
                      <label className="w-[237px] text-neutral-500 font-normal font-['Poppins'] tracking-wide" htmlFor="">Từ 250.000đ - 500.000đ</label>
                      <p className="text-neutral-500 text-sm font-normal font-['Poppins'] tracking-wide">(19)</p>
                    </div>
                  </div>
                </div>
                <div className="w-[300px] mt-[30px] py-[30px] border-t border-neutral-200">
                  <p className="text-zinc-800 text-base font-semibold font-['Poppins'] leading-none tracking-wide mb-[20px]">Material</p>
                  <div className="w-[300px]">
                    <div className="w-[300px] flex justify-between items-center mb-[15px]">
                      <input className="w-[17px] h-[17px] bg-white border border-neutral-200" type="radio" name="" id="" />
                      <label className="w-[237px] text-neutral-500 font-normal font-['Poppins'] tracking-wide" htmlFor="">Import</label>
                      <p className="text-neutral-500 text-sm font-normal font-['Poppins'] tracking-wide">(19)</p>
                    </div>
                    <div className="w-[300px] flex justify-between items-center mb-[15px]">
                      <input className="w-[17px] h-[17px] bg-white border border-neutral-200" type="radio" name="" id="" />
                      <label className="w-[237px] text-neutral-500 font-normal font-['Poppins'] tracking-wide" htmlFor="">Domestic</label>
                      <p className="text-neutral-500 text-sm font-normal font-['Poppins'] tracking-wide">(19)</p>
                    </div>
                  </div>
                </div>
                <div className="w-[300px] mt-[30px] py-[30px] border-t border-neutral-200">
                  <p className="text-zinc-800 text-base font-semibold font-['Poppins'] leading-none tracking-wide mb-[20px]">Categories</p>
                  <div className="w-[300px]">
                    <div className="w-[300px] flex justify-between items-center mb-[15px]">
                      <input className="w-[17px] h-[17px] bg-white border border-neutral-200" type="radio" name="" id="" />
                      <label className="w-[237px] text-neutral-500 font-normal font-['Poppins'] tracking-wide" htmlFor="">Vegetable</label>
                      <p className="text-neutral-500 text-sm font-normal font-['Poppins'] tracking-wide">(19)</p>
                    </div>
                    <div className="w-[300px] flex justify-between items-center mb-[15px]">
                      <input className="w-[17px] h-[17px] bg-white border border-neutral-200" type="radio" name="" id="" />
                      <label className="w-[237px] text-neutral-500 font-normal font-['Poppins'] tracking-wide" htmlFor="">Fruits</label>
                      <p className="text-neutral-500 text-sm font-normal font-['Poppins'] tracking-wide">(19)</p>
                    </div>
                    <div className="w-[300px] flex justify-between items-center mb-[15px]">
                      <input className="w-[17px] h-[17px] bg-white border border-neutral-200" type="radio" name="" id="" />
                      <label className="w-[237px] text-neutral-500 font-normal font-['Poppins'] tracking-wide" htmlFor="">Meat</label>
                      <p className="text-neutral-500 text-sm font-normal font-['Poppins'] tracking-wide">(19)</p>
                    </div>
                    <div className="w-[300px] flex justify-between items-center mb-[15px]">
                      <input className="w-[17px] h-[17px] bg-white border border-neutral-200" type="radio" name="" id="" />
                      <label className="w-[237px] text-neutral-500 font-normal font-['Poppins'] tracking-wide" htmlFor="">Fish</label>
                      <p className="text-neutral-500 text-sm font-normal font-['Poppins'] tracking-wide">(19)</p>
                    </div>
                  </div>
                </div>
                <div className="w-[300px] mt-[30px] py-[30px] border-t border-neutral-200">
                  <p className="text-zinc-800 text-base font-semibold font-['Poppins'] leading-none tracking-wide mb-[20px]">Availability</p>
                  <div className="w-[300px]">
                    <div className="w-[300px] flex justify-between items-center mb-[15px]">
                      <input className="w-[17px] h-[17px] bg-white border border-neutral-200" type="radio" name="" id="" />
                      <label className="w-[237px] text-neutral-500 font-normal font-['Poppins'] tracking-wide" htmlFor="">In stock</label>
                      <p className="text-neutral-500 text-sm font-normal font-['Poppins'] tracking-wide">(19)</p>
                    </div>
                    <div className="w-[300px] flex justify-between items-center mb-[15px]">
                      <input className="w-[17px] h-[17px] bg-white border border-neutral-200" type="radio" name="" id="" />
                      <label className="w-[237px] text-neutral-500 font-normal font-['Poppins'] tracking-wide" htmlFor="">Sold out</label>
                      <p className="text-neutral-500 text-sm font-normal font-['Poppins'] tracking-wide">(19)</p>
                    </div>
                  </div>
                </div>
                <div className="w-[300px] h-[343px]">
                  <Image src={"/images/banner/banner-shop2.png"} width={300} height={343} alt="banner-shop"></Image>
                </div>
              </div>
              <div className="w-[860px]">
                <Image src={"/images/banner/banner-shop1.png"} width={860} height={249} alt="banner-shop"></Image>
                <div className="w-[860px] h-[52px] my-[30px] border-b border-neutral-200 flex justify-end">
                  <p className="text-zinc-800 font-semibold font-['Poppins'] leading-[14px] tracking-wide">Sort by: <select className="w-[200px] h-[21px] text-neutral-500 font-normal font-['Poppins'] tracking-wide" name="" id="">
                                <option value="">Nothing</option>
                                <option value="">Popularity</option>
                                <option value="">Latest</option>
                                <option value="">Oldest</option>
                              </select>
                  </p>
                </div>
                <div className="w-[860px] flex flex-wrap justify-between">
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
                <div className="w-[860px] flex items-center justify-center">
                  <ul className="flex">
                    <button className="w-[30px] h-[30px] mx-[5px] rotate-180"><Image src={"/images/icons/icon-next.png"} width={30} height={30} alt="icon"></Image></button>
                    <li className="w-[30px] h-[30px] mx-[5px] bg-amber-400 text-white rounded-[3px] shadow justify-center items-center inline-flex cursor-pointer">1</li>
                    <li className="w-[30px] h-[30px] mx-[5px] bg-white rounded-[3px] shadow justify-center items-center inline-flex cursor-pointer">2</li>
                    <button className="w-[30px] h-[30px] mx-[5px]"><Image src={"/images/icons/icon-next.png"} width={30} height={30} alt="icon"></Image></button>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      );
}
 
export default Products;
