import Image from "next/image";
import Link from "next/link";
const Footer = () => {
    return (
        <div className="w-full h-[520px] pt-[86px] bg-gray-600">
            <div className="w-[1200px] h-24 mx-auto mb-5 pb-5 flex">
                <div className="w-40 h-[96px]">
                    <Image src={"/images/logo/logo-footer.png"} width={160} height={70} alt="logo"></Image>
                    <span className="w-40 h-[26px] text-orange-400 text-base font-normal font-['Inter']">Fresh products</span>
                </div>
                <div className="w-[830px] h-24 flex justify-center items-center relative">
                    <input className="w-[636px] h-[56px] bg-white rounded-full pl-6" type="text" placeholder="Your Email" />
                    <button className="w-40 h-14 rounded-full bg-lime-600 absolute top-5 right-[96.5px] text-center text-white text-base font-bold font-['Inter']">Subscriber Now</button>
                </div>
                <div className="w-[210px] h-24 flex justify-end">
                    <div className="w-[200px] h-24 flex justify-between items-center">
                        <div className="w-11 h-11 rounded-full border border-orange-400 flex justify-center items-center">
                            <Image src={"/images/icons/icon-twitter.png"} width={25} height={25} alt="icon-twitter"></Image>
                        </div>
                        <div className="w-11 h-11 rounded-full border border-orange-400 flex justify-center items-center">
                            <Image src={"/images/icons/icon-facebook.png"} width={25} height={25} alt="icon-facebook"></Image>
                        </div>
                        <div className="w-11 h-11 rounded-full border border-orange-400 flex justify-center items-center">
                            <Image src={"/images/icons/icon-youtube.png"} width={25} height={25} alt="icon-youtube"></Image>
                        </div>
                        <div className="w-11 h-11 rounded-full border border-orange-400 flex justify-center items-center">
                            <Image src={"/images/icons/icon-instagram.png"} width={25} height={25} alt="icon-instagram"></Image>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[1200px] h-[250px] mx-auto mt-5 pt-5 border-t border-orange-400">
                <div className="w-[1190px] mx-auto flex justify-between">
                    <div className="w-[290px]">
                        <p className="w-[290px] h-[30px] mb-[10px] text-white text-2xl font-bold font-['Inter']">Why People Like us!</p>
                        <span className="w-[290px] h-40 text-gray-500 text-base font-bold font-['Inter'] leading-[30px]">Typesetting, remaining essentially unchanged. It was popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</span>
                    </div>
                    <div className="w-[290px]">
                        <p className="w-[290px] h-[30px] text-white text-2xl font-bold font-['Inter']">Shop Info</p>
                        <div className="w-[290px] h-[210px] mt-[10px]">
                            <p className="w-[290px] h-[35px] text-gray-500 text-base font-bold font-['Inter']"><Link href={"#"}>About us</Link></p>
                            <p className="w-[290px] h-[35px] text-gray-500 text-base font-bold font-['Inter']"><Link href={"#"}>Contact us</Link></p>
                            <p className="w-[290px] h-[35px] text-gray-500 text-base font-bold font-['Inter']"><Link href={"#"}>Privacy Policy</Link></p>
                            <p className="w-[290px] h-[35px] text-gray-500 text-base font-bold font-['Inter']"><Link href={"#"}>Terms & Condition</Link></p>
                            <p className="w-[290px] h-[35px] text-gray-500 text-base font-bold font-['Inter']"><Link href={"#"}>Return Policy</Link></p>
                            <p className="w-[290px] h-[35px] text-gray-500 text-base font-bold font-['Inter']"><Link href={"#"}>FAQs & Help</Link></p>
                        </div>
                    </div>
                    <div className="w-[290px]">
                        <p className="w-[290px] h-[30px] text-white text-2xl font-bold font-['Inter']">Account</p>
                        <div className="w-[290px] h-[210px] mt-[10px]">
                            <p className="w-[290px] h-[35px] text-gray-500 text-base font-bold font-['Inter']"><Link href={"#"}>My Account</Link></p>
                            <p className="w-[290px] h-[35px] text-gray-500 text-base font-bold font-['Inter']"><Link href={"#"}>Shop details</Link></p>
                            <p className="w-[290px] h-[35px] text-gray-500 text-base font-bold font-['Inter']"><Link href={"#"}>Privacy Policy</Link></p>
                            <p className="w-[290px] h-[35px] text-gray-500 text-base font-bold font-['Inter']"><Link href={"#"}>Terms & Condition</Link></p>
                            <p className="w-[290px] h-[35px] text-gray-500 text-base font-bold font-['Inter']"><Link href={"#"}>Order History</Link></p>
                            <p className="w-[290px] h-[35px] text-gray-500 text-base font-bold font-['Inter']"><Link href={"#"}>International Orders</Link></p>
                        </div>
                    </div>
                    <div className="w-[290px]">
                        <p className="w-[290px] h-[30px] text-white text-2xl font-bold font-['Inter']">Contact</p>
                        <div className="w-[290px] h-[210px] mt-[10px]">
                            <p className="w-[290px] h-[35px] text-gray-500 text-base font-bold font-['Inter']"><Link href={"#"}>Address: 1429 Netus Rd, NY 48247</Link></p>
                            <p className="w-[290px] h-[35px] text-gray-500 text-base font-bold font-['Inter']"><Link href={"#"}>Email: Example@gmail.com</Link></p>
                            <p className="w-[290px] h-[35px] text-gray-500 text-base font-bold font-['Inter']"><Link href={"#"}>Phone: +0123 4567 8910</Link></p>
                            <p className="w-[290px] h-[35px] text-gray-500 text-base font-bold font-['Inter']"><Link href={"#"}>Payment Accepted</Link></p>
                            <Image src={"/images/payment.png"} width={236} height={30} alt="payment"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;