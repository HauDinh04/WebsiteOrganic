import Image from "next/image";
import PlaceIcon from "@mui/icons-material/Place";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const Category = () => {
  return (
    <div
      className="
    grid
    justify-center
    items-center
    "
    >
      <div className="relative">
        <h1
          className="
        text-white 
        text-6xl
        font-bold
        absolute
        ml-10
        top-10
        left-1/3
        z-10
        "
        >
          Category
        </h1>
        <Image
          src={"/images/banner/banner-detail.png"}
          alt=""
          width={1200}
          height={100}
        ></Image>
      </div>
      <section
        className="
      mt-3
      flex
      justify-center
      flex-col
      items-center  "
      >
        <div
          className="
          bg-red-900 
          h-40 
          w-7/12
          "
        >
          <div
            className="
            mt-3
            ml-3
            "
          >
            <h1
              className="
              text-white
              text-3xl
              "
            >
              <PlaceIcon
                className="
                text-green-500
                text-4xl
                "
              />
              Địa chỉ thanh toán
            </h1>
            <div
              className="
              ml-10
              "
            >
              <h2>Name, SĐT:19001567</h2>
              <p>áạldjaskdsjlaslkjdalsjdald</p>
            </div>
          </div>
          <div
            className="
              mr-auto
              ml-auto
              "
          >
            <h2
              className="
              text-center 
              text-xl
              text-white
              mt-5 
              "
            >
              <AddCircleOutlineIcon
                className="
              text-green-500 
              text-3xl
              text-center
              "
              />
              Thêm địa chỉ thanh toán mới
            </h2>
          </div>
        </div>
        <div
          className="
          w-7/12
          flex
          items-center
          justify-between
          p-2"
        >
          <Image
            src={"/images/products/product1.png"}
            alt=""
            width={100}
            height={100}
          ></Image>
          <p>name</p>
          <p>quantity</p>
          <p>12345678</p>
        </div>
        <div
          className="
        w-7/12
        bg-cyan-200
        "
        >
          <div
            className="
            flex
            justify-between"
          >
            <div
              className="
          ml-5
          mt-5
          "
            >
              <div>
                <input type="radio" name="" id="" className="" />
                <label
                  className="
            ml-4 
            text-xl
            text-cyan-500"
                  htmlFor=""
                >
                  : akjsdlakjd
                </label>
              </div>
              <p
                className="
            text-cyan-500 
            text-base 
            ml-8
            "
              >
                á;ldka;lkda;alksd;adkalksdjakljdaklj
              </p>
            </div>
            <h1 className="
            mt-5
            mr-5   
            text-2xl 
            text-cyan-500"> 23456 VND</h1>
          </div>
          <div
            className="
            flex
            justify-between
            "
          >
            <div
              className="
          ml-5
          mt-5
          "
            >
              <div>
                <input type="radio" name="" id="" className="" />
                <label
                  className="
            ml-4 
            text-xl
            text-cyan-500"
                  htmlFor=""
                >
                  : akjsdlakjd
                </label>
              </div>
              <p
                className="
            text-cyan-500 
            text-base 
            ml-8
            "
              >
                á;ldka;lkda;alksd;adkalksdjakljdaklj
              </p>
            </div>
            <h1 className="
            mt-5
            mr-5   
            text-2xl 
            text-cyan-500"> 23456 VND</h1>
          </div>
          <div
            className="
            flex
            justify-between"
          >
            <div
              className="
          ml-5
          mt-5
          "
            >
              <div>
                <input type="radio" name="" id="" className="" />
                <label
                  className="
            ml-4 
            text-xl
            text-cyan-500"
                  htmlFor=""
                >
                  : akjsdlakjd
                </label>
              </div>
              <p
                className="
            text-cyan-500 
            text-base 
            ml-8
            "
              >
                á;ldka;lkda;alksd;adkalksdjakljdaklj
              </p>
            </div>
            <h1 className="
            mt-5
            mr-5   
            text-2xl 
            text-cyan-500"> 23456 VND</h1>
          </div>
        </div>
        <div className="
        w-7/12
        ">
          <div className="
          flex
          justify-between
          text-xl
          m-5"> 
            
            <h1>gsdkjsashsda :</h1>
            <p>12345656</p>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
