import Image from "next/image";

const About = () => {
    return (
        <div className="max-w-[1200px] relative">
            <div className="block w-[1200px] h-[100px]">
                <h1 className="absolute z-[1] top-[25px] left-[45%] text-white">Home / About us</h1>
                <Image className="absolute z-0"
                    src={"/images/breadcrumb.png"}
                    alt=""
                    width={1200}
                    height={100}
                />
            </div>
            <div className="">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="
                    text-3xl
                    font-semibold
                    text-center">
                        What we do?
                    </h1>
                    <p className="
                    w-[754px]
                    text-center">
                                Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                                five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <Image
                                src={"/images/cat9.png"}
                                alt=""
                                width={210}
                                height={210}
                            />
                        </div>
                        <div className="flex flex-col justify-between items-center" >
                            <p className="text-gray-600 text-base leading-[2.3rem] text-start mt-[10px]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <p className="text-gray-600 text-base leading-[2.3rem] text-start mt-[10px]">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. the point of using lorem Ipsum is that it has a
                                more-or-less normal distribution of letters, as opposed to using
                            </p>
                            <p className="text-gray-600 text-base leading-[2.3rem] text-start mt-[10px]">
                                Content here, content here&apos;, making it look like readable english. many desktop publishing packages and web page editors now use lorem Ipsum as their default model text,
                                and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy.
                            </p>
                            <p className="text-gray-600 text-base leading-[2.3rem] text-start mt-[10px]">
                                Contrary to popular belief, lorem Ipsum is not simply random text. It has roots in a piece of classical latin literature from 45 BC, making it over 2000 years old. richard
                                mcclintock, a latin professor at hampden-sydney college in virginia, looked up one of the more obscure latin words, consectetur, from a lorem Ipsum passage, and going through
                            </p>
                            <p className="text-gray-600 text-base leading-[2.3rem] text-start mt-[10px]">
                                College in virginia, looked up one of the more obscure latin words, consectetur, from a lorem Ipsum passage, and going through the cites of the word in classical literature,
                                discovered the undoubtable source. lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &apos;de finibus bonorum et malorum&apos; (the extremes of good and evil) by cicero, written in
                            </p>
                            <p className="text-gray-600 text-base leading-[2.3rem] text-start mt-[10px]">
                                The standard chunk of lorem Ipsum used since the 1500s is reproduced below for those interested. sections 1.10.32 and 1.10.33 from &quot;de finibus bonorum et malorum&quot; by
                        cicero are also reproduced in their
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;