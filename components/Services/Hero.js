import React from "react";

/**
 * @param {string, string[]}
 * @returns React Component
*/

const Hero = ({title, content}) => {
    return (
        <section className="common-service__hero min-h-screen px-8 md:px-26 lg:px-48 relative ">
            <h1 className="pt-24 md:pt-32 lg:pt-40 mb-12 text-3xl md:text-4xl lg:text-5xl	font-bold uppercase">
                {title}
            </h1>
            {content.map((paragraph, i) => (
                <p className="mt-8 text-lg md:text-xl lg:text-2xl" key={i}>
                    {paragraph}
                </p>
            ))}
            <span className="ecommerce_hero-span--1 bg-yellow-500"></span>
        </section>
    );
};

export default Hero;
