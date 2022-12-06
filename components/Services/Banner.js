import Image from "next/image";
import React from "react";

const Banner = ({ banner }) => { 
    let { src } = banner;
    console.log(`SRC: ${src}`)
    return (
        <section style={{backgroundImage:`url(${src})`}} className={`
        my-28 px-2 md:px-8 lg:px-12
        h-[50vh] md:h-[70vh] 
        w-full
        bg-cover
        bg-no-repeat
        bg-local md:bg-fixed
        bg-center
        `}>
           
        </section>
    );
};

export default Banner;
