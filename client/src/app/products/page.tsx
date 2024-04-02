import Image from "next/image"
import { Slider } from "@/components/ui/slider"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
const Products = () => {
    return (
        <div className="w-full bg-zinc-100 pt-5 pb-10">
            <Image className="mx-auto rounded-xl relative" src={"/images/banner/banner-detail.png"} width={1440} height={176} alt="banner-detail"></Image>
            <p className="w-[1440px] h-12 mx-auto text-center text-white text-[40px] font-black font-['Inter'] absolute top-[240px] ">Shop</p>
            <div className="w-[1200px] mx-auto pt-[50px]">
                <div className="w-[1200px] h-[110px] flex justify-between">
                  <div className="w-[310px] h-[60px] flex items-center">
                    <input className="w-[260px] h-[60px] rounded-tl-[10px] rounded-bl-[10px] pl-[15px]" type="text" placeholder="Product name" />
                    <button className="w-[50px] h-[60px] bg-zinc-300 rounded-tr-[10px] rounded-br-[10px]"><Image className="mx-auto" src={"/images/icons/icon-search.png"} width={20} height={20} alt="icon-search"></Image></button>
                  </div>
                  <div className="w-[306px] h-[60px] bg-zinc-300 rounded-[10px] flex items-center justify-around">
                    <p className="w-[120px] h-[30px] text-gray-500 text-base font-medium font-['Inter']">Default Sorting:</p>
                      <select className="" id="">
                        <option value="1">Nothing</option>
                        <option value="2">Popularity</option>
                        <option value="3">Latest</option>
                        <option value="4">Oldest</option>
                      </select>
                  </div>                    
                </div>
                <div className="w-[1200px] flex justify-between">
                  <div className="w-[300px]">
                    <div className="w-[300px] h-[100px]">
                      <p className="w-[300px] h-[30px] text-gray-600 text-2xl font-medium mb-2.5">Price</p>
                      <div className="w-[300px] h-2.5 mb-2.5">
                      <Slider defaultValue={[33]} max={100} step={1} />
                      </div>
                      <p className="w-2.5 h-6 text-gray-500 text-base font-medium font-['Inter']">0</p>
                    </div>
                    <div className="w-[300px]">
                      <p className="w-[300px] h-[30px] text-gray-600 text-2xl font-medium mb-2.5">Category</p>
                      <div className="w-[300px]">
                        <div className="w-[300px] h-6 mb-[5px] flex items-center">
                          <input className="w-6 h-6" type="checkbox" name="" id="" />
                          <label className="w-[60px] h-6 text-gray-600 text-base font-medium font-['Inter'] ml-[14px]" htmlFor="">cate1</label>
                        </div>
                        <div className="w-[300px] h-6 mb-[5px] flex items-center">
                          <input className="w-6 h-6" type="checkbox" name="" id="" />
                          <label className="w-[60px] h-6 text-gray-600 text-base font-medium font-['Inter'] ml-[14px]" htmlFor="">cate2</label>
                        </div>
                        <div className="w-[300px] h-6 mb-[5px] flex items-center">
                          <input className="w-6 h-6" type="checkbox" name="" id="" />
                          <label className="w-[60px] h-6 text-gray-600 text-base font-medium font-['Inter'] ml-[14px]" htmlFor="">cate3</label>
                        </div>
                        <div className="w-[300px] h-6 mb-[5px] flex items-center">
                          <input className="w-6 h-6" type="checkbox" name="" id="" />
                          <label className="w-[60px] h-6 text-gray-600 text-base font-medium font-['Inter'] ml-[14px]" htmlFor="">cate4</label>
                        </div>
                        <div className="w-[300px] h-6 mb-[5px] flex items-center">
                          <input className="w-6 h-6" type="checkbox" name="" id="" />
                          <label className="w-[60px] h-6 text-gray-600 text-base font-medium font-['Inter'] ml-[14px]" htmlFor="">cate5</label>
                        </div>
                        <div className="w-[300px] h-6 mb-[5px] flex items-center">
                          <input className="w-6 h-6" type="checkbox" name="" id="" />
                          <label className="w-[60px] h-6 text-gray-600 text-base font-medium font-['Inter'] ml-[14px]" htmlFor="">cate6</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[900] px-[50px] flex justify-between flex-wrap">
                    <div className="w-60 h-[360px] mb-10 relative">
                      <Image src={"/images/products/product2.png"} width={240} height={276} alt="product"></Image>
                      <p className="h-[20px] text-center text-black text-base font-bold font-['Inter'] absolute bottom-[100px] left-[80px]">Rau Súp Lơ</p>
                      <div className="h-[84px] flex items-center justify-around">
                        <p className="w-[82px] h-[21px] text-center text-black text-sm font-semibold font-['Inter']">38.000 vnđ</p>
                        <button className="w-[83px] h-9 bg-lime-600 rounded-[5px] text-center text-white text-xs font-semibold font-['Inter']">Mua Ngay</button>
                      </div>
                    </div>
                    <div className="w-60 h-[360px] mb-10 relative">
                      <Image src={"/images/products/product2.png"} width={240} height={276} alt="product"></Image>
                      <p className="h-[20px] text-center text-black text-base font-bold font-['Inter'] absolute bottom-[100px] left-[80px]">Rau Súp Lơ</p>
                      <div className="h-[84px] flex items-center justify-around">
                        <p className="w-[82px] h-[21px] text-center text-black text-sm font-semibold font-['Inter']">38.000 vnđ</p>
                        <button className="w-[83px] h-9 bg-lime-600 rounded-[5px] text-center text-white text-xs font-semibold font-['Inter']">Mua Ngay</button>
                      </div>
                    </div>
                    <div className="w-60 h-[360px] mb-10 relative">
                      <Image src={"/images/products/product2.png"} width={240} height={276} alt="product"></Image>
                      <p className="h-[20px] text-center text-black text-base font-bold font-['Inter'] absolute bottom-[100px] left-[80px]">Rau Súp Lơ</p>
                      <div className="h-[84px] flex items-center justify-around">
                        <p className="w-[82px] h-[21px] text-center text-black text-sm font-semibold font-['Inter']">38.000 vnđ</p>
                        <button className="w-[83px] h-9 bg-lime-600 rounded-[5px] text-center text-white text-xs font-semibold font-['Inter']">Mua Ngay</button>
                      </div>
                    </div>
                    <div className="w-60 h-[360px] mb-10 relative">
                      <Image src={"/images/products/product2.png"} width={240} height={276} alt="product"></Image>
                      <p className="h-[20px] text-center text-black text-base font-bold font-['Inter'] absolute bottom-[100px] left-[80px]">Rau Súp Lơ</p>
                      <div className="h-[84px] flex items-center justify-around">
                        <p className="w-[82px] h-[21px] text-center text-black text-sm font-semibold font-['Inter']">38.000 vnđ</p>
                        <button className="w-[83px] h-9 bg-lime-600 rounded-[5px] text-center text-white text-xs font-semibold font-['Inter']">Mua Ngay</button>
                      </div>
                    </div>
                    <div className="w-60 h-[360px] mb-10 relative">
                      <Image src={"/images/products/product2.png"} width={240} height={276} alt="product"></Image>
                      <p className="h-[20px] text-center text-black text-base font-bold font-['Inter'] absolute bottom-[100px] left-[80px]">Rau Súp Lơ</p>
                      <div className="h-[84px] flex items-center justify-around">
                        <p className="w-[82px] h-[21px] text-center text-black text-sm font-semibold font-['Inter']">38.000 vnđ</p>
                        <button className="w-[83px] h-9 bg-lime-600 rounded-[5px] text-center text-white text-xs font-semibold font-['Inter']">Mua Ngay</button>
                      </div>
                    </div>
                    <div className="w-60 h-[360px] mb-10 relative">
                      <Image src={"/images/products/product2.png"} width={240} height={276} alt="product"></Image>
                      <p className="h-[20px] text-center text-black text-base font-bold font-['Inter'] absolute bottom-[100px] left-[80px]">Rau Súp Lơ</p>
                      <div className="h-[84px] flex items-center justify-around">
                        <p className="w-[82px] h-[21px] text-center text-black text-sm font-semibold font-['Inter']">38.000 vnđ</p>
                        <button className="w-[83px] h-9 bg-lime-600 rounded-[5px] text-center text-white text-xs font-semibold font-['Inter']">Mua Ngay</button>
                      </div>
                    </div>
                    <div className="w-60 h-[360px] mb-10 relative">
                      <Image src={"/images/products/product2.png"} width={240} height={276} alt="product"></Image>
                      <p className="h-[20px] text-center text-black text-base font-bold font-['Inter'] absolute bottom-[100px] left-[80px]">Rau Súp Lơ</p>
                      <div className="h-[84px] flex items-center justify-around">
                        <p className="w-[82px] h-[21px] text-center text-black text-sm font-semibold font-['Inter']">38.000 vnđ</p>
                        <button className="w-[83px] h-9 bg-lime-600 rounded-[5px] text-center text-white text-xs font-semibold font-['Inter']">Mua Ngay</button>
                      </div>
                    </div>
                    <div className="w-60 h-[360px] mb-10 relative">
                      <Image src={"/images/products/product2.png"} width={240} height={276} alt="product"></Image>
                      <p className="h-[20px] text-center text-black text-base font-bold font-['Inter'] absolute bottom-[100px] left-[80px]">Rau Súp Lơ</p>
                      <div className="h-[84px] flex items-center justify-around">
                        <p className="w-[82px] h-[21px] text-center text-black text-sm font-semibold font-['Inter']">38.000 vnđ</p>
                        <button className="w-[83px] h-9 bg-lime-600 rounded-[5px] text-center text-white text-xs font-semibold font-['Inter']">Mua Ngay</button>
                      </div>
                    </div>
                    <div className="w-60 h-[360px] mb-10 relative">
                      <Image src={"/images/products/product2.png"} width={240} height={276} alt="product"></Image>
                      <p className="h-[20px] text-center text-black text-base font-bold font-['Inter'] absolute bottom-[100px] left-[80px]">Rau Súp Lơ</p>
                      <div className="h-[84px] flex items-center justify-around">
                        <p className="w-[82px] h-[21px] text-center text-black text-sm font-semibold font-['Inter']">38.000 vnđ</p>
                        <button className="w-[83px] h-9 bg-lime-600 rounded-[5px] text-center text-white text-xs font-semibold font-['Inter']">Mua Ngay</button>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="w-[500px] ml-[740px]">
              <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
                  </div>
            </div>    
        </div>
      );
}
 
export default Products;
