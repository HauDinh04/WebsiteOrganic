"use client"
import React, {useState} from "react";
import Image from "next/image";
const Slideshow = () => {
    const slides = [
        { url: 'https://s3-alpha-sig.figma.com/img/e6dc/f5d4/b0a5792f4efc3a70bd15beb148b64039?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hcwYqTQ6zGN1zabKh8t4naWGVbHOmsTDPJe786C12DtxWaLu6OTE5mktHtaGdGFF39Y0U6enRvI985mK31~esUKFE1TCf7nPF1YFYs75M6JgFGK-1AkkZkFtZZoytPD6RYSAa6UW6lFsefeTgjJyg48imXiepBvLJ~IAZhoDd0TxGGu9W2mr1jGmdlFmotGyW3D4YmQ5cM0KjQdbXeqJCpucIA5CGWHgvub4ywwfpJlq0fkwCzr0XUUqMakkiwUtSYpdHlSDMtU6Ri2baGDDypsmSx0V4whjBSIfbmf5Zxv6oyZIEyx-hK3TD2O60ahBSz~JqabJFFxGtbNlCcssIw__' },
        { url: 'https://s3-alpha-sig.figma.com/img/75be/cd69/5c041507ab3a7f6dc1b7d9087e79c529?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GPaz1mxJwf3JEaIPbM3ZJsMRwjTuaZlMfXqbBfLlSm9PKeZCmJEmxMDwY4snbpEmUBmXnoRBCIQ7oI1M3CyHh1ZlTF0fUesuXk4WXlUxVM81qDWp~In5g6PIeuh5zJsVVGOLfC4DEuL5S0vW6KoPZwUmeZdQHIdJOJHwEK-NJYmWiMFTEox0XBSYSqF4fo4jJtiRu0DgKvkX8qWx-jvF5CrVe-50K~lvnTRWVaJ4wztEbG20W17vcsnSbXIUefXmziIDxn8siwop3WUxAw40eYRigwUW7YRfobXI1frlBnAsqsvEswlLboWLrL82Buz2JL6jWb~N9tLXnhxVaPiIcA__' },
        { url: 'https://s3-alpha-sig.figma.com/img/e6dc/f5d4/b0a5792f4efc3a70bd15beb148b64039?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hcwYqTQ6zGN1zabKh8t4naWGVbHOmsTDPJe786C12DtxWaLu6OTE5mktHtaGdGFF39Y0U6enRvI985mK31~esUKFE1TCf7nPF1YFYs75M6JgFGK-1AkkZkFtZZoytPD6RYSAa6UW6lFsefeTgjJyg48imXiepBvLJ~IAZhoDd0TxGGu9W2mr1jGmdlFmotGyW3D4YmQ5cM0KjQdbXeqJCpucIA5CGWHgvub4ywwfpJlq0fkwCzr0XUUqMakkiwUtSYpdHlSDMtU6Ri2baGDDypsmSx0V4whjBSIfbmf5Zxv6oyZIEyx-hK3TD2O60ahBSz~JqabJFFxGtbNlCcssIw__' },  
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    return (
        <div className="w-[1200px] h-[400px] relative">
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full bg-cover bg-center">
            </div>
            <div className="w-[38px] h-[38px] rounded-full bg-amber-400 absolute top-[50%] left-5 flex justify-center items-center" onClick={prevSlide}>
                <Image src={"/images/slideshow/icon-prev.png"} width={23} height={23} alt="icon"></Image>
            </div>
            <div className="w-[38px] h-[38px] rounded-full bg-amber-400 absolute top-[50%] right-5 flex justify-center items-center" onClick={nextSlide}>
                <Image src={"/images/slideshow/icon-next.png"} width={23} height={23} alt="icon"></Image>
            </div>
        </div>
    );
}
export default Slideshow;