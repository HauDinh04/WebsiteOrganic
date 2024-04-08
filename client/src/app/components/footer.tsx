import Image from "next/image";
import Link from "next/link";
const Footer = () => {
    return (
        <div className="w-full">
            <div className="w-[1200px] py-[80px] px-[60px] bg-orange-50 mx-auto">
                <div className="w-[1080px] ">
                    <div className="w-[1080px] h-[100px] flex justify-between">
                        <div className="w-[210px] h-[100px] flex justify-between items-center">
                            <div className="w-[100px] h-[100px] rounded-[50px] border-2 border-amber-400 flex justify-center items-center">
                                <div className="w-20 h-20 bg-amber-400 rounded-[40px] flex justify-center items-center">
                                    <Image src={"/images/icons/icon-delivery.png"} width={30} height={30} alt="icon"></Image>
                                </div>
                            </div>
                            <p className="w-[100px] h-5 text-zinc-800 text-[15px] font-normal font-['Poppins'] tracking-wide">Free delivery</p>
                        </div>
                        <div className="w-[250px] h-[100px] flex justify-between items-center">
                            <div className="w-[100px] h-[100px] rounded-[50px] border-2 border-amber-400 flex justify-center items-center">
                                <div className="w-20 h-20 bg-amber-400 rounded-[40px] flex justify-center items-center">
                                    <Image src={"/images/icons/icon-cash.png"} width={30} height={30} alt="icon"></Image>
                                </div>
                            </div>
                            <p className="w-[140px] h-5 text-zinc-800 text-[15px] font-normal font-['Poppins'] tracking-wide">Cash on delivery</p>
                        </div>
                        <div className="w-[240px] h-[100px] flex justify-between items-center">
                            <div className="w-[100px] h-[100px] rounded-[50px] border-2 border-amber-400 flex justify-center items-center">
                                <div className="w-20 h-20 bg-amber-400 rounded-[40px] flex justify-center items-center">
                                    <Image src={"/images/icons/icon-return.png"} width={30} height={30} alt="icon"></Image>
                                </div>
                            </div>
                            <p className="w-[130px] h-5 text-zinc-800 text-[15px] font-normal font-['Poppins'] tracking-wide">30 days returns</p>
                        </div>
                        <div className="w-[230px] h-[100px] flex justify-between items-center">
                            <div className="w-[100px] h-[100px] rounded-[50px] border-2 border-amber-400 flex justify-center items-center">
                                <div className="w-20 h-20 bg-amber-400 rounded-[40px] flex justify-center items-center">
                                    <Image src={"/images/icons/icon-support.png"} width={30} height={30} alt="icon"></Image>
                                </div>
                            </div>
                            <p className="w-[120px] h-5 text-zinc-800 text-[15px] font-normal font-['Poppins'] tracking-wide">Online support</p>
                        </div>
                    </div>
                    <div className="w-[1050px] mx-auto mt-[35px] pt-[30px] border-t border-gray-200 border-opacity-95 flex justify-between">
                        <div className="w-[400px]">
                            <div className="w-[107px] h-[54px]">
                                <Image src={"/images/logo/logo-header.png"} width={107} height={54} alt="logo"></Image>
                            </div>
                            <p className="w-[400px] h-[60px] mt-[10px] text-neutral-500 text-sm font-normal font-['Poppins'] leading-[30px] tracking-wide">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="w-[280px] flex justify-between">
                            <div className="w-[30px] h-10">
                                <Image src={"/images/icons/icon-address.png"} width={31} height={40} alt="icon"></Image>
                            </div>
                            <div className="w-[238px] h-[75px]">
                                <p className="w-[70px] h-[23px] text-amber-400 text-base font-semibold font-['Poppins'] tracking-wide">Address</p>
                                <p className="w-[238px] text-neutral-500 text-sm font-normal font-['Poppins'] tracking-wide">38 block street arean licard hamonia road sydney, australia</p>
                            </div>
                        </div>
                        <div className="w-[205px] flex justify-between">
                            <div className="w-10 h-10">
                                <Image src={"/images/icons/icon-mail.png"} width={40} height={40} alt="icon"></Image>
                            </div>
                            <div className="w-[155px] h-[75px]">
                                <p className="w-[100px] h-[23px] text-amber-400 text-base font-semibold font-['Poppins'] tracking-wide">Get in touch</p>
                                <p className="w-[155px] text-neutral-500 text-sm font-normal font-['Poppins'] tracking-wide">0123456789</p>
                                <p className="w-[155px] text-neutral-500 text-sm font-normal font-['Poppins'] tracking-wide">support@demo.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[1080px] pt-[30px] mt-[25px] border-t border-gray-200 border-opacity-95 flex justify-between">
                        <div className="w-[130px]">
                            <p className="text-amber-400 text-base font-semibold font-['Poppins'] tracking-wide">Top categories</p>
                            <div className="w-[130px] mt-[10px]">
                                <p className="w-[290px] h-[35px] text-zinc-800 text-sm font-normal font-['Poppins'] tracking-wide"><Link href={"#"}>Fresh fruits</Link></p>
                                <p className="w-[290px] h-[35px] text-zinc-800 text-sm font-normal font-['Poppins'] tracking-wide"><Link href={"#"}>Organic wine</Link></p>
                                <p className="w-[290px] h-[35px] text-zinc-800 text-sm font-normal font-['Poppins'] tracking-wide"><Link href={"#"}>Organic juice</Link></p>
                                <p className="w-[290px] h-[35px] text-zinc-800 text-sm font-normal font-['Poppins'] tracking-wide"><Link href={"#"}>Dairy & chesse</Link></p>
                                <p className="w-[290px] h-[35px] text-zinc-800 text-sm font-normal font-['Poppins'] tracking-wide"><Link href={"#"}>Fresh meat</Link></p>
                            </div>
                        </div>
                        <div className="w-[130px]">
                            <p className="text-amber-400 text-base font-semibold font-['Poppins'] tracking-wide">Services</p>
                            <div className="w-[130px] mt-[10px]">
                                <p className="w-[290px] h-[35px] text-zinc-800 text-sm font-normal font-['Poppins'] tracking-wide"><Link href={"#"}>About vegist</Link></p>
                                <p className="w-[290px] h-[35px] text-zinc-800 text-sm font-normal font-['Poppins'] tracking-wide"><Link href={"#"}>Faq</Link></p>
                                <p className="w-[290px] h-[35px] text-zinc-800 text-sm font-normal font-['Poppins'] tracking-wide"><Link href={"#"}>Contact us</Link></p>
                                <p className="w-[290px] h-[35px] text-zinc-800 text-sm font-normal font-['Poppins'] tracking-wide"><Link href={"#"}>News</Link></p>
                                <p className="w-[290px] h-[35px] text-zinc-800 text-sm font-normal font-['Poppins'] tracking-wide"><Link href={"#"}>Store location</Link></p>
                            </div>
                        </div>
                        <div className="w-[130px]">
                            <p className="text-amber-400 text-base font-semibold font-['Poppins'] tracking-wide">Privacy & terms</p>
                            <div className="w-[130px] mt-[10px]">
                                <p className="w-[290px] h-[35px] text-zinc-800 text-sm font-normal font-['Poppins'] tracking-wide"><Link href={"#"}>Payment policy</Link></p>
                                <p className="w-[290px] h-[35px] text-zinc-800 text-sm font-normal font-['Poppins'] tracking-wide"><Link href={"#"}>Privacy policy</Link></p>
                                <p className="w-[290px] h-[35px] text-zinc-800 text-sm font-normal font-['Poppins'] tracking-wide"><Link href={"#"}>Return policy</Link></p>
                                <p className="w-[290px] h-[35px] text-zinc-800 text-sm font-normal font-['Poppins'] tracking-wide"><Link href={"#"}>Shipping policy</Link></p>
                                <p className="w-[290px] h-[35px] text-zinc-800 text-sm font-normal font-['Poppins'] tracking-wide"><Link href={"#"}>Terms & conditions</Link></p>
                            </div>
                        </div>
                        <div className="w-[130px]">
                            <p className="text-amber-400 text-base font-semibold font-['Poppins'] tracking-wide">Account</p>
                            <div className="w-[130px] mt-[10px]">
                                <p className="w-[290px] h-[35px] text-zinc-800 text-sm font-normal font-['Poppins'] tracking-wide"><Link href={"#"}>My account</Link></p>
                                <p className="w-[290px] h-[35px] text-zinc-800 text-sm font-normal font-['Poppins'] tracking-wide"><Link href={"#"}>My cart</Link></p>
                                <p className="w-[290px] h-[35px] text-zinc-800 text-sm font-normal font-['Poppins'] tracking-wide"><Link href={"#"}>Order history</Link></p>
                                <p className="w-[290px] h-[35px] text-zinc-800 text-sm font-normal font-['Poppins'] tracking-wide"><Link href={"#"}>My wishlist</Link></p>
                                <p className="w-[290px] h-[35px] text-zinc-800 text-sm font-normal font-['Poppins'] tracking-wide"><Link href={"#"}>My address</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[60px] px-[120px] bg-amber-400 flex items-center justify-between">
                <div className="w-[150px] h-[30px] flex justify-between items-center">
                    <div className="w-[30px h-[30px] py-2 px-2 bg-white rounded-[15px] ">
                        <Link href={"#"}><Image src={"/images/icons/icon-facebook.png"} width={12} height={12} alt="icon"></Image></Link>
                    </div>
                    <div className="w-[30px h-[30px] py-2 px-2 bg-white rounded-[15px] ">
                        <Link href={"#"}><Image src={"/images/icons/icon-twitter.png"} width={12} height={12} alt="icon"></Image></Link>
                    </div>
                    <div className="w-[30px h-[30px] py-2 px-2 bg-white rounded-[15px] ">
                        <Link href={"#"}><Image src={"/images/icons/icon-instagram.png"} width={12} height={12} alt="icon"></Image></Link>
                    </div>
                    <div className="w-[30px h-[30px] py-2 px-2 bg-white rounded-[15px] ">
                        <Link href={"#"}><Image src={"/images/icons/icon-youtube.png"} width={12} height={12} alt="icon"></Image></Link>
                    </div>
                </div>
                <div className="w-[230px] h-[24px] flex justify-between">
                    <Image src={"/images/payments/payment1.png"} width={38} height={24} alt="payment"></Image>
                    <Image src={"/images/payments/payment2.png"} width={38} height={24} alt="payment"></Image>
                    <Image src={"/images/payments/payment3.png"} width={38} height={24} alt="payment"></Image>
                    <Image src={"/images/payments/payment4.png"} width={38} height={24} alt="payment"></Image>
                    <Image src={"/images/payments/payment5.png"} width={38} height={24} alt="payment"></Image>

                </div>
            </div>
        </div>
    );
}

export default Footer;