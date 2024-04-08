import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <div className="w-full">
            <div className="w-full h-[45px] py-[15px] bg-amber-400 border-b border-black border-opacity-10 justify-center items-center inline-flex">
                <div className="w-[255px] h-[15px] text-center"><span className="text-white text-sm font-semibold font-['Poppins'] leading-[14px] tracking-wide">Free shipping</span><span className="text-white text-sm font-normal font-['Poppins'] leading-[14px] tracking-wide"> orders from all item</span></div>
            </div>
            <div className="w-[1200px] h-[136px] mx-auto ">
                <div className="w-[1170px] h-[54px] mx-auto flex justify-between items-center">
                    <Image src={"/images/logo/logo-header.png"} width={107} height={54} alt="logo"></Image>
                    <div className="w-[263px] h-[37] flex justify-between">
                        <div className="w-[126px] h-[30px] flex justify-between">
                            <Image src={"/images/icons/icon-user2.png"} width={30} height={30} alt="icon"></Image>
                            <div className="w-[96px] h-[37px] ml-[5px]">
                                <p className="w-[70px] h-[19px] text-zinc-800 text-[13px] font-semibold font-['Poppins'] uppercase tracking-wide">Account</p>
                                <p className="w-[96px] h-[18px] text-zinc-800 text-[11px] font-normal font-['Poppins'] tracking-wide">
                                    <Link className="w-[44px] h-[17px] mr-[5px] pb-px border-r border-stone-300 justify-start items-center inline-flex" href={"/register"}>Register</Link>
                                    <Link href={"/login"}>Login</Link> 
                                </p>
                            </div>
                        </div>
                        <div className="w-[40px] h-[30px] relative">
                            <Image src={"/images/icons/icon-heart.png"} width={30} height={30} alt="icon"></Image>
                            <div className="w-[20px] h-[20px] rounded-full bg-orange-400 absolute top-[-5px] left-4">
                                <span className="w-2 h-[9px] text-center text-black text-xs font-medium font-['Poppins'] absolute top-0.5 left-1.5">1</span>
                            </div>
                        </div>
                        <div className="w-[40px] h-[30px] relative">
                            <Image src={"/images/icons/icon-cart2.png"} width={30} height={30} alt="icon"></Image>
                            <div className="w-[20px] h-[20px] rounded-full bg-orange-400 absolute top-[-5px] left-4">
                                <span className="w-2 h-[9px] text-center text-black text-xs font-medium font-['Poppins'] absolute top-0.5 left-1.5">1</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[1170px] h-[51px] mt-[15px] flex items-center justify-between">
                    <ul className="flex text-center text-gray-500 text-base font-normal font-['Poppins']">
                        <li className="w-[78px] h-[55px] py-4 border-r border-zinc-950 border-opacity-10"><Link href={"/"}>Home</Link></li>
                        <li className="w-[78px] h-[55px] py-4 border-r border-zinc-950 border-opacity-10"><Link href={"/products"}>Shop</Link></li>
                        <li className="w-[78px] h-[55px] py-4 border-r border-zinc-950 border-opacity-10"><Link href={"/news"}>Blog</Link></li>
                        <li className="w-[103px] h-[55px] py-4 "><Link href={"/foryou"}>For You</Link>
                        <div className="w-[30px] h-[18px] relative bg-red-800 rounded-sm top-[-40px] left-16">
                            <div className="w-1.5 h-[5px] left-0 top-[16px] absolute border-r-4 border-t-4 border-red-800"></div>
                            <div className="w-[22.63px] h-2.5 left-[4px] top-[3.50px] absolute text-white text-[10px] font-semibold font-['Poppins'] leading-[10px] tracking-wide">HOT</div>
                        </div>
                        </li>
                    </ul>
                    <div className="w-[130px] h-[40px] flex items-center">
                        <div className="w-[30px] h-[30px]">
                            <Image src={"/images/icons/icon-contact.png"} width={30} height={30} alt="icon"></Image>
                        </div>
                        <div className="w-[100px] h-[40px] ml-[5px]">
                            <p className="w-[100px] h-[19px] text-zinc-800 text-sm font-semibold font-['Poppins'] tracking-wide">Hotline:</p>
                            <p className="w-[100px] h-[18px] text-zinc-800 text-[11px] font-normal font-['Poppins'] tracking-wide">0123 456 789</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;