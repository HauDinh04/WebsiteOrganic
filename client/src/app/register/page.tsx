import Link from "next/link";

const RegisTer = () => {
  return (
    <div className="h-[420px] w-[720px] flex mx-auto mt-[60px] shadow shadow-xl">
      <div className="w-[400px] h-full relative">
        <div className="absolute top-[32px] left-[154px] text-[#65B741] text-center font-medium text-2xl ">
          Sign Up
        </div>
        <div className="absolute top-[81px] left-[50px]">
          <form action="">
            <input
              type="text"
              className="w-[300px] h-[40px]  leading-[40px] border border-[#65B741] text-xs pl-[15px] rounded-[10px] outline-none"
              placeholder="Name ..."
            />
            <input
              type="text"
              className="w-[300px] h-[40px]  leading-[40px] border border-[#65B741] mt-[15px] text-xs  pl-[15px] rounded-[10px]  outline-none"
              placeholder="Number Phone ..."
            />
            <input
              type="text"
              className="w-[300px] h-[40px]  leading-[40px] border border-[#65B741] mt-[15px] text-xs  pl-[15px] rounded-[10px]  outline-none"
              placeholder="Email ..."
            />
            <input
              type="text"
              className="w-[300px] h-[40px]  leading-[40px] border border-[#65B741] mt-[15px] text-xs  pl-[15px] rounded-[10px]  outline-none"
              placeholder="Password ..."
            />
            <input
              type="text"
              className="w-[300px] h-[40px]  leading-[40px] border border-[#65B741] mt-[15px] text-xs  pl-[15px] rounded-[10px]  outline-none"
              placeholder="Confirm Password ..."
            />
          </form>
          <div className=" relative ">
            <button className="text-white w-[150px] h-[50px] rounded-[50px] bg-[#65B741]  absolute top-[12px] left-[70px]  outline-none">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
      <div className="w-[320px] h-full bg-[#65B741] relative">
        <Link href={"/"}>
          <div className="absolute right-[35px] top-[26px] text-[10px] text-white">
            - Trở về trang chủ
          </div>
        </Link>
        <div className=" text-white absolute top-[79px] left-[72px] text-2xl font-semibold ">
          Hi New Friend !
        </div>
        <div className="absolute left-[80px] top-[123px] text-[10px] text-white text-xs">
          Already have an account ?
        </div>
        <div className="absolute left-[110px] top-[144px] text-[10px] text-white text-xs">
          Click below to login.
        </div>
        <Link href={"/login"}>
          <div className="w-[150px] h-[50px] rounded-[50px] border border-white leading-[50px] text-center absolute top-[195px] left-[85px] text-white">
            LOGIN
          </div>
        </Link>

        <div className="absolute top-[265px] left-[151px] text-white">Or</div>
        <Link href={"/"}>
          <div className="absolute w-[280px] h-[40px] text-center rounded-[10px] text-[#65B741] bg-white top-[305px] left-[20px] leading-[40px] text-[12px]">
            Login with Google
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RegisTer;
