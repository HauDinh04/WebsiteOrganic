import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full pt-5 pb-5 bg-zinc-100">
      <div className="w-[1200px] mx-auto ">
        <Image src={"/images/slideshow/slideshow.png"} width={1200} height={300} alt="slideshow"></Image>
        <div className="w-[1200px] h-[180px] mt-5 bg-white flex">
          <div className="w-[170px] h-[130px] mx-[15px] mt-[5px] mb-10">
            <Image className="mx-auto mb-[5px]" src={"/images/categorys/category1.jpg"} width={100} height={100} alt="cate1"></Image>
            <p className="w-[170px] h-[25px] text-center text-black text-base font-normal font-['Inria Serif']">Trái cây</p>
          </div>
          <div className="w-[170px] h-[130px] mx-[15px] mt-[5px] mb-10">
            <Image className="mx-auto mb-[5px]" src={"/images/categorys/category1.jpg"} width={100} height={100} alt="cate1"></Image>
            <p className="w-[170px] h-[25px] text-center text-black text-base font-normal font-['Inria Serif']">Trái cây</p>
          </div>
          <div className="w-[170px] h-[130px] mx-[15px] mt-[5px] mb-10">
            <Image className="mx-auto mb-[5px]" src={"/images/categorys/category1.jpg"} width={100} height={100} alt="cate1"></Image>
            <p className="w-[170px] h-[25px] text-center text-black text-base font-normal font-['Inria Serif']">Trái cây</p>
          </div>
          <div className="w-[170px] h-[130px] mx-[15px] mt-[5px] mb-10">
            <Image className="mx-auto mb-[5px]" src={"/images/categorys/category1.jpg"} width={100} height={100} alt="cate1"></Image>
            <p className="w-[170px] h-[25px] text-center text-black text-base font-normal font-['Inria Serif']">Trái cây</p>
          </div>
          <div className="w-[170px] h-[130px] mx-[15px] mt-[5px] mb-10">
            <Image className="mx-auto mb-[5px]" src={"/images/categorys/category1.jpg"} width={100} height={100} alt="cate1"></Image>
            <p className="w-[170px] h-[25px] text-center text-black text-base font-normal font-['Inria Serif']">Trái cây</p>
          </div>
          <div className="w-[170px] h-[130px] mx-[15px] mt-[5px] mb-10">
            <Image className="mx-auto mb-[5px]" src={"/images/categorys/category1.jpg"} width={100} height={100} alt="cate1"></Image>
            <p className="w-[170px] h-[25px] text-center text-black text-base font-normal font-['Inria Serif']">Trái cây</p>
          </div>
        </div>
        <div className="w-[1200px] h-[350px] mt-5 flex justify-between">
          <Image src={"/images/banner/banner-home1.png"} width={590} height={350} alt="banner-home1"></Image>
          <Image src={"/images/banner/banner-home2.png"} width={590} height={350} alt="banner-home2"></Image>
        </div>
        <div className="w-[1200px] h-[490px] mt-5 pt-10 bg-white ">
          <div className="w-[1200px] h-[50px]">
            <p className="w-[440px] h-[50px] mx-auto text-center text-black text-[40px] font-bold font-['Inter']">Sản phẩm bán chạy</p>
          </div>
          <div className="w-[1200px] h-[360px] flex">
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
      </div>
    </div>
  );
}
