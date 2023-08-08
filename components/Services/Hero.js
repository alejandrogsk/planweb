import React from "react";

/**
 * @param {string, string[], page}
 * @returns React Component
*/
// the page prop only changes the postition of the background square
const Hero = ({title, content, page=1}) => {
    return (
        <section className="common-service__hero min-h-screen px-8 md:px-26 lg:px-48 relative flex flex-col justify-center
                
        max-w-[1540px] xxl:px-0 xxl:mx-auto ">
            <h1 className="pt-32 lg:pt-40 mb-12 text-3xl md:text-4xl lg:text-5xl	font-medium">
                {title}
            </h1>
            {content.map((paragraph, i) => (
                <p className="mt-8 text-lg md:text-xl lg:text-2xl" key={i}>
                    {paragraph}
                </p>
            ))}
            <span className={`ecommerce_hero-span--${page} bg-primary`}></span>
        </section>
    );
};

export default Hero;
