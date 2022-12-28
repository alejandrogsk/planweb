import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeServices = ({ home_services }) => {
    let ecommerce = home_services[0];
    let marketing = home_services[1];
    let websites = home_services[2];
    return (
        <>
            {/* Ecommerce Service Section */}
            <section
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center justify-center bg-custom-grey
        px-6 md:px-12 lg:px-16
        py-16 md:py-24 lg:py-36
        "
            >
                <div className="flex flex-col items-center lg:items-start justify-center row-start-2 row-end-3 lg:row-start-1 row-end-2	">
                    <span className="uppercase mb-2
                    pt-[100px] md:pt-0
                    ">
                        {ecommerce.hover_title}
                    </span>
                    <h2 className="text-center lg:text-start text-3xl md:text-4xl lg:text-5xl	font-medium ">
                        {ecommerce.title}
                    </h2>
                    <p className="text-center lg:text-start text-xl md:text-2xl pt-4 pb-6">
                        {ecommerce.subtitle}
                    </p>
                    <Link href={ecommerce.cta.url} legacyBehavior>
                        <a class="flex justify-center items-center m-auto md:m-0 custom-btn-cta font-medium">
                            <span>{ecommerce.cta.title}</span>
                            <svg width="13px" height="10px" viewBox="0 0 13 10">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </a>
                    </Link>
                </div>

                <div className="flex">
                    <div clasName="translate-x-[-5px]  md:translate-x-[-25px]  translate-y-[-30px] md:translate-y-[-70px]">
                    <Image
                        alt={ecommerce.img.alt}
                        src={ecommerce.img.src}
                        width={ecommerce.img.width}
                        height={ecommerce.img.height}
                    />
                    </div>

                    <div className="translate-y-[30px] md:translate-y-[70px] translate-x-[5px] md:translate-x-[25px]">
                        <Image
                            alt={ecommerce.img2.alt}
                            src={ecommerce.img2.src}
                            width={ecommerce.img2.width}
                            height={ecommerce.img2.height}
                        />
                    </div>
                </div>
            </section>


            {/* Marketing Service Section */}
            <section
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center justify-center bg-custom-grey
        px-6 md:px-12 lg:px-16
        py-16 md:py-24 lg:py-36
        "
            >

<div className="p-0  md:p-8 lg:p-16">
                    <Image
                        alt={marketing.img.alt}
                        src={marketing.img.src}
                        width={marketing.img.width}
                        height={marketing.img.height}
                    />
                </div>

                <div className="flex flex-col items-center lg:items-start justify-center ">
                    <span className="uppercase mb-2
                    ">
                        {marketing.hover_title}
                    </span>
                    <h2 className="text-center lg:text-start text-3xl md:text-4xl lg:text-5xl	font-medium ">
                        {marketing.title}
                    </h2>
                    <p className="text-center lg:text-start text-xl md:text-2xl pt-4 pb-6">
                        {marketing.subtitle}
                    </p>

                    <ul className="flex flex-col items-center md:items-start">
                        <li className="uppercase hover:underline cursor-pointer flex">
                            <Image
                                height={18}
                                width={18}
                                src="/assets/home/check-mark-black-outline-svgrepo-com.svg"
                            />

                            <a className="ml-2 text-center lg:text-start text-xl md:text-2xl ">
                            Publicidad en redes

                            </a>
                            </li>

                            <li className="uppercase hover:underline cursor-pointer flex mt-4">
                            <Image
                                height={18}
                                width={18}
                                src="/assets/home/check-mark-black-outline-svgrepo-com.svg"
                            />

                            <a className="ml-2 text-center lg:text-start text-xl md:text-2xl ">
                            Publicidad en google

                            </a>
                            </li>

                            <li className="uppercase hover:underline cursor-pointer flex mt-4">
                            <Image
                                height={18}
                                width={18}
                                src="/assets/home/check-mark-black-outline-svgrepo-com.svg"
                            />

                            <a className="ml-2 text-center lg:text-start text-xl md:text-2xl ">
                            Email Marketing

                            </a>
                            </li>
                     </ul>

    
                </div>

                
            </section>

            {/* Web Dev Service Section */}
            <section
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center justify-center bg-custom-grey
        px-6 md:px-12 lg:px-16
        py-16 md:py-24 lg:py-36
        "
            >
                <div className="flex flex-col items-center lg:items-start justify-center row-start-2 row-end-3 lg:row-start-1 row-end-2	">
                    <span className="uppercase mb-2
                    ">
                        {websites.hover_title}
                    </span>
                    <h2 className="text-center lg:text-start text-3xl md:text-4xl lg:text-5xl	font-medium ">
                        {websites.title}
                    </h2>
                    <p className="text-center lg:text-start text-xl md:text-2xl pt-4 pb-6">
                        {websites.subtitle}
                    </p>
                    <Link href={websites.cta.url} legacyBehavior>
                        <a class="flex justify-center items-center m-auto md:m-0 custom-btn-cta font-medium">
                            <span>{websites.cta.title}</span>
                            <svg width="13px" height="10px" viewBox="0 0 13 10">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </a>
                    </Link>
                </div>

                <div>
                    <Image
                        alt={websites.img.alt}
                        src={websites.img.src}
                        width={websites.img.width}
                        height={websites.img.height}
                    />

                </div>
            </section>
        </>
    );
};

export default HomeServices;
