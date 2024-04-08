import Image from "next/image";
import Link from "next/link";
import Slideshow from "./components/slideshow";

export default function Home() {
  return (
    <div className="w-full pt-5 pb-5 ">
      <div className="w-[1200px] mx-auto ">
        <Slideshow/>
        <div className="w-[1200px] h-[300px] mt-5 flex justify-between">
          <div className="w-[590px] h-[300px] relative">
            <Image src={"/images/banner/banner-home2.png"} width={590} height={300} alt="banner-home1"></Image>
            <p className="absolute top-[30%] left-5 w-[260px] h-[50px] text-zinc-800 text-[22px] font-bold font-['Poppins'] tracking-wide">Fresh fruit,vegetable on our product</p>
            <Link href={"/products"}><button className="absolute top-[70%] left-5 w-[140px] h-10 bg-amber-400 rounded-[50px] border-2 border-amber-400 justify-center items-center inline-flex text-white text-sm font-semibold font-['Poppins'] leading-[21px] tracking-wide">Shop now</button></Link>
          </div>
          <div className="w-[590px] h-[300px] relative">
            <Image src={"/images/banner/banner-home1.png"} width={590} height={300} alt="banner-home2"></Image>
            <p className="absolute top-[30%] left-5 w-[260px] h-[50px] text-zinc-800 text-[22px] font-bold font-['Poppins'] tracking-wide">Vegetable eggplant 100% fresh food</p>
            <Link href={"/products"}><button className="absolute top-[70%] left-5 w-[140px] h-10 bg-amber-400 rounded-[50px] border-2 border-amber-400 justify-center items-center inline-flex text-white text-sm font-semibold font-['Poppins'] leading-[21px] tracking-wide">Shop now</button></Link>
          </div>
          
        </div>
        <div className="w-full h-[250px] mt-10 bg-zinc-300 flex justify-between items-center">
          <div className="w-[170px] h-[130px] mx-[15px] mt-[5px] mb-10">
            <Image className="mx-auto mb-[30px] rounded-full" src={"/images/categorys/category1.jpg"} width={120} height={120} alt="cate1"></Image>
            <p className="w-[170px] h-[25px] text-center text-black text-base font-normal font-['Inria Serif']">Trái cây</p>
          </div>
          <div className="w-[170px] h-[130px] mx-[15px] mt-[5px] mb-10">
            <Image className="mx-auto mb-[30px] rounded-full" src={"/images/categorys/category1.jpg"} width={120} height={120} alt="cate1"></Image>
            <p className="w-[170px] h-[25px] text-center text-black text-base font-normal font-['Inria Serif']">Trái cây</p>
          </div>
          <div className="w-[170px] h-[130px] mx-[15px] mt-[5px] mb-10">
            <Image className="mx-auto mb-[30px] rounded-full" src={"/images/categorys/category1.jpg"} width={120} height={120} alt="cate1"></Image>
            <p className="w-[170px] h-[25px] text-center text-black text-base font-normal font-['Inria Serif']">Trái cây</p>
          </div>
          <div className="w-[170px] h-[130px] mx-[15px] mt-[5px] mb-10">
            <Image className="mx-auto mb-[30px] rounded-full" src={"/images/categorys/category1.jpg"} width={120} height={120} alt="cate1"></Image>
            <p className="w-[170px] h-[25px] text-center text-black text-base font-normal font-['Inria Serif']">Trái cây</p>
          </div>
          <div className="w-[170px] h-[130px] mx-[15px] mt-[5px] mb-10">
            <Image className="mx-auto mb-[30px] rounded-full" src={"/images/categorys/category1.jpg"} width={120} height={120} alt="cate1"></Image>
            <p className="w-[170px] h-[25px] text-center text-black text-base font-normal font-['Inria Serif']">Trái cây</p>
          </div>
          <div className="w-[170px] h-[130px] mx-[15px] mt-[5px] mb-10">
            <Image className="mx-auto mb-[30px] rounded-full" src={"/images/categorys/category1.jpg"} width={120} height={120} alt="cate1"></Image>
            <p className="w-[170px] h-[25px] text-center text-black text-base font-normal font-['Inria Serif']">Trái cây</p>
          </div>
        </div>
        
        <div className="w-[1200px] mt-10 pt-10 bg-white ">
          <div className="w-[1200px] h-[50px]">
            <p className="w-[440px] h-[50px] mx-auto text-center text-black text-[40px] font-bold font-['Inter']">Trending Product</p>
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
        <div className="w-[1200px] h-[340px] mt-[30px]">
          <Image src={"/images/banner/banner-home3.png"}width={1200} height={340} alt="banner"></Image>
        </div>
        <div className="w-[1200px] py-10 my-10">
          <div className="w-[1200px] h-[50px] mb-[40px]">
            <p className="w-[440px] h-[50px] mx-auto text-center text-black text-[40px] font-bold font-['Inter']">Recent News</p>
          </div>
          <div className="w-[1200px] mb-10 flex justify-between">
            <div className="w-[390px] border border-zinc-100">
              <div className="w-[388px] h-[270px] mx-auto">
                <Image src={"/images/blogs/blog1.png"} width={388} height={270} alt="blog"></Image>
              </div>
              <p className="w-[390px] h-[23px] pl-[10px] my-[15px] text-zinc-800 text-base font-semibold font-['Poppins'] tracking-wide">All time fresh every time healthy</p>
              <p className="w-[390px] pl-[10px] text-neutral-500 text-sm font-normal font-['Poppins'] leading-[30px] tracking-wide">Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. ...</p>
              <Link className="h-5 pl-[10px] text-zinc-800 font-semibold font-['Poppins'] tracking-wide inline-flex" href={"#"}>Read More<Image className="ml-2" src={"/images/blogs/icon-next.png"}width={14} height={12} alt="icon"></Image></Link>
            </div>
            <div className="w-[390px] border border-zinc-100">
              <div className="w-[388px] h-[270px] mx-auto">
                <Image src={"/images/blogs/blog1.png"} width={388} height={270} alt="blog"></Image>
              </div>
              <p className="w-[390px] h-[23px] pl-[10px] my-[15px] text-zinc-800 text-base font-semibold font-['Poppins'] tracking-wide">All time fresh every time healthy</p>
              <p className="w-[390px] pl-[10px] text-neutral-500 text-sm font-normal font-['Poppins'] leading-[30px] tracking-wide">Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. ...</p>
              <Link className="h-5 pl-[10px] text-zinc-800 font-semibold font-['Poppins'] tracking-wide inline-flex" href={"#"}>Read More<Image className="ml-2" src={"/images/blogs/icon-next.png"}width={14} height={12} alt="icon"></Image></Link>
            </div>
            <div className="w-[390px] border border-zinc-100">
              <div className="w-[388px] h-[270px] mx-auto">
                <Image src={"/images/blogs/blog1.png"} width={388} height={270} alt="blog"></Image>
              </div>
              <p className="w-[390px] h-[23px] pl-[10px] my-[15px] text-zinc-800 text-base font-semibold font-['Poppins'] tracking-wide">All time fresh every time healthy</p>
              <p className="w-[390px] pl-[10px] text-neutral-500 text-sm font-normal font-['Poppins'] leading-[30px] tracking-wide">Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. ...</p>
              <Link className="h-5 pl-[10px] text-zinc-800 font-semibold font-['Poppins'] tracking-wide inline-flex" href={"#"}>Read More<Image className="ml-2" src={"/images/blogs/icon-next.png"}width={14} height={12} alt="icon"></Image></Link>
            </div>
          </div>
          <div className="w-[1200px] h-9 mt-10 text-center">
            <button className="w-[150px] h-9 bg-amber-400 rounded-[5px] text-center text-white text-xs font-semibold font-['Inter']">Xem thêm</button>
          </div>
        </div>
        <div className="w-[1200px] h-[100px] mb-[80px] flex justify-between items-center">
          <Image src={"/images/banner/banner-home4.png"} width={127} height={98} alt="banner"></Image>
          <Image src={"/images/banner/banner-home5.png"} width={127} height={98} alt="banner"></Image>
          <Image src={"/images/banner/banner-home6.png"} width={127} height={98} alt="banner"></Image>
          <Image src={"/images/banner/banner-home7.png"} width={127} height={98} alt="banner"></Image>
          <Image src={"/images/banner/banner-home8.png"} width={127} height={98} alt="banner"></Image>
          <Image src={"/images/banner/banner-home9.png"} width={127} height={98} alt="banner"></Image>
        </div>
      </div>
    </div>
  );
}
