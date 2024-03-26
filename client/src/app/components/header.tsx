import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <div className="w-full bg-zinc-100">
            <Image className="mx-auto" src={"/images/banner/banner-header.png"} width={1200} height={70} alt="banner-header"></Image>
            <div className="w-[1200px] h-[100px] mx-auto flex justify-between pg-zinc-100">
                <Image src={"/images/logo/logo-header.png"} width={145} height={100} alt="logo"></Image>
                <div className="w-[910px] h-[100px] flex items-center">
                    <ul className="flex text-center text-gray-500 text-base font-normal font-['Poppins'] mx-auto">
                        <li className="w-[78px] h-[55px] py-4"><Link href={"/"}>Home</Link></li>
                        <li className="w-[78px] h-[55px] py-4"><Link href={"/products"}>Shop</Link></li>
                        <li className="w-[103px] h-[55px] py-4"><Link href={"/foryou"}>For You</Link></li>
                        <li className="w-[78px] h-[55px] py-4"><Link href={"/news"}>Blog</Link></li>
                    </ul>
                </div>
                <div className="w-[145px] h-[100px] flex items-center justify-end">
                    <div className="w-[132px] h-[70px] flex justify-between items-center">
                        <div className="w-11 h-11 rounded-full border border-orange-400 flex justify-center items-center">
                            <Image src={"/images/icons/icon-search.png"} width={20} height={20} alt="icon-search"></Image>
                        </div>
                        <div className="w-[25px] h-8 relative">
                            <Image src={"/images/icons/icon-cart.png"} width={25} height={32} alt="icon-cart"></Image>
                            <div className="w-[20px] h-[20px] rounded-full bg-orange-400 absolute top-[-10px] left-3">
                                <span className="w-2 h-[9px] text-center text-black text-xs font-medium font-['Poppins'] absolute top-0.5 left-1.5">1</span>
                            </div>
                        </div>
                        <div className="w-[25px] h-8">
                            <Image src={"/images/icons/icon-user.png"} width={25} height={32} alt="icon-user"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;