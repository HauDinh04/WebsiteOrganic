import Link from "next/link";
const Signin = () => {
  return (
    <div className=" w-[720px] flex mx-auto h-[420px] mt-[50px] shadow shadow-xl">
      <div className="w-[300px] h-full bg-[#65B741] relative justify-center ">
        <div className="text-[24px] text-center  text-white  absolute top-[80px] left-[56px] font-semibold">
          Welcome Back!
        </div>

        <div className="text-[12px] text-center  text-white  absolute top-[127px] left-[110px] font-medium">
          No account ?
        </div>

        <div className="text-[12px] text-center  text-white  absolute top-[148px] left-[75px] font-medium">
          Click below to sign up.
        </div>
        <Link href={"/register"}>
          <div className="  text-white  leading-[50px] w-[150px] absolute top-[215px] left-[75px] text-center border border-white h-[50px] rounded-[50px] ">
            SIGN UP
          </div>
        </Link>
      </div>
      <div className="w-[420px] h-full relative justify-center">
        <Link href={"/"}>
          <div className="text-[10px] text-center  text-[#65B741]  absolute top-[20px] right-[21px] ">
            Trở về trang chủ
          </div>
        </Link>
        <div className="text-[24px] text-center  text-[#65B741]  absolute top-[80px] left-[177px] font-semibold">
          Login
        </div>
        <form action="" className="absolute left-[60px]">
          <input
            type="text"
            placeholder="Email ..."
            className="w-[300px] h-[40px] leading-[40px] border border-[#65B741] rounded-[10px] pl-[15px] absolute top-[164px]"
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Password ..."
            className="w-[300px] h-[40px] leading-[40px] border border-[#65B741] rounded-[10px]  pl-[15px] absolute top-[231px] "
          />
        </form>
        <div className="text-[12px] text-center  text-[#65B741]  absolute top-[280px] right-[60px] ">
          Forgot password?
        </div>
        <button className="text-white w-[150px] h-[50px] rounded-[50px] shadow bg-[#65B741] absolute bottom-[54px] left-[135px]">
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default Signin;
