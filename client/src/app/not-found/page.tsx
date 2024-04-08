import Image from 'next/image';

const Notfound = () => {
    return (
        <div className="max-w-[1440px] ">
            <div className=" relative block w-[1200px] h-[100px]">
                <h1 className="absolute z-[1] top-[25px] left-[45%] text-white">Home / 404 Not Found</h1>
                <Image className="absolute z-0"
                    src={"/images/breadcrumb.png"}
                    alt=""
                    width={1400}
                    height={100}
                />
            </div>
            <div className="flex w-[1200px] h-[500px]  justify-evenly flex-col items-center">
                <div>
                    <div className="flex justify-center">
                        <p className="text-5xl font-[650] ml-[15px] text-orange-500">4</p>
                        <p className="text-5xl font-[650] ml-[15px] text-black">0</p>
                        <p className="text-5xl font-[650] ml-[15px] text-orange-500">4</p>
                    </div>
                    <div className="flex justify-center mt-[20px]">
                        <h1 className="text-7xl ml-[20px] font-[540] text-orange-500">Page</h1>
                        <h1 className="text-7xl ml-[20px] font-[540] text-black">not</h1>
                        <h1 className="text-7xl ml-[20px] font-[540] text-orange-500">be</h1>
                        <h1 className="text-7xl ml-[20px] font-[540] text-black">found</h1>
                    </div>
                </div>

                <p>Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarity unavailable.</p>
                <a className="bg-orange-500 p-[12px] text-[24px] text-white rounded-[50px] w-[300px] h-[58px] text-center" href="">Go to home page</a>
            </div>
        </div>
    );
}
export default Notfound;