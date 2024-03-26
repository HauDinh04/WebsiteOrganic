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
            <div className="w-60 h-[360px] pt-[10px]">
              <Image src={"/images/products/product1.png"} width={240} height={240} alt="product"></Image>
              <p className="w-[60px] h-5 mt-[10px] mx-auto text-black text-base font-normal font-['Inter']">Bắp cải</p>
              <p className="w-[60px] h-5 mx-auto mt-[10px] text-lime-600 text-base font-bold font-['Inika']">65,000 <span className="underline">đ</span></p>
              <div className="w-[110px] h-[30px] mx-auto mt-[10px]"><button className="w-[110px] h-[30px]  bg-lime-600 rounded-[5px] shadow text-center text-neutral-100 text-xs font-normal font-['Poppins']">Thêm giỏ hàng</button></div>
            </div>
            <div className="w-60 h-[360px] pt-[10px]">
              <Image src={"/images/products/product1.png"} width={240} height={240} alt="product"></Image>
              <p className="w-[60px] h-5 mt-[10px] mx-auto text-black text-base font-normal font-['Inter']">Bắp cải</p>
              <p className="w-[60px] h-5 mx-auto mt-[10px] text-lime-600 text-base font-bold font-['Inika']">65,000 <span className="underline">đ</span></p>
              <div className="w-[110px] h-[30px] mx-auto mt-[10px]"><button className="w-[110px] h-[30px]  bg-lime-600 rounded-[5px] shadow text-center text-neutral-100 text-xs font-normal font-['Poppins']">Thêm giỏ hàng</button></div>
            </div>
            <div className="w-60 h-[360px] pt-[10px]">
              <Image src={"/images/products/product1.png"} width={240} height={240} alt="product"></Image>
              <p className="w-[60px] h-5 mt-[10px] mx-auto text-black text-base font-normal font-['Inter']">Bắp cải</p>
              <p className="w-[60px] h-5 mx-auto mt-[10px] text-lime-600 text-base font-bold font-['Inika']">65,000 <span className="underline">đ</span></p>
              <div className="w-[110px] h-[30px] mx-auto mt-[10px]"><button className="w-[110px] h-[30px]  bg-lime-600 rounded-[5px] shadow text-center text-neutral-100 text-xs font-normal font-['Poppins']">Thêm giỏ hàng</button></div>
            </div>
            <div className="w-60 h-[360px] pt-[10px]">
              <Image src={"/images/products/product1.png"} width={240} height={240} alt="product"></Image>
              <p className="w-[60px] h-5 mt-[10px] mx-auto text-black text-base font-normal font-['Inter']">Bắp cải</p>
              <p className="w-[60px] h-5 mx-auto mt-[10px] text-lime-600 text-base font-bold font-['Inika']">65,000 <span className="underline">đ</span></p>
              <div className="w-[110px] h-[30px] mx-auto mt-[10px]"><button className="w-[110px] h-[30px]  bg-lime-600 rounded-[5px] shadow text-center text-neutral-100 text-xs font-normal font-['Poppins']">Thêm giỏ hàng</button></div>
            </div>
            <div className="w-60 h-[360px] pt-[10px]">
              <Image src={"/images/products/product1.png"} width={240} height={240} alt="product"></Image>
              <p className="w-[60px] h-5 mt-[10px] mx-auto text-black text-base font-normal font-['Inter']">Bắp cải</p>
              <p className="w-[60px] h-5 mx-auto mt-[10px] text-lime-600 text-base font-bold font-['Inika']">65,000 <span className="underline">đ</span></p>
              <div className="w-[110px] h-[30px] mx-auto mt-[10px]"><button className="w-[110px] h-[30px]  bg-lime-600 rounded-[5px] shadow text-center text-neutral-100 text-xs font-normal font-['Poppins']">Thêm giỏ hàng</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
