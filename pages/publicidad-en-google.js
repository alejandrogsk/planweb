import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeadComponent from "../components/global/HeadComponent";
import Layout from "../components/global/Layout";
import Hero from "../components/NewServices/Hero";
import GoogleAdsEs from "../content/es/publicidad-en-google.json";
const publicidadEnGoogle = ({ data }) => {
    const { head, hero, middle, bottom } = data;
    return (
        <div>
            <HeadComponent title={head.title} description={head.description} />
            <Layout>
                <Hero title={hero.title} content={hero.content} />

                <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
                    <div
                        className="bg-primary flex h-full grid grid-cols-1 align-center justify-items-center
                    py-16 md:py-24 lg:py-36
                    px-6 md:px-12 lg:px-16
                    "
                    >
                        <div className="grid grid-cols-1 justify-items-center	items-center	">
                            <Image
                                height={middle.image.height}
                                width={middle.image.width}
                                alt={middle.image.alt}
                                src={middle.image.src}
                            />
                        </div>
                    </div>

                    <div
                        className="bg-custom-black grid grid-cols-1 justify-items-center	items-center	
                    py-16 md:py-24 lg:py-36
                    px-6 md:px-12 lg:px-16
                    "
                    >
                        <div className="flex flex-col items-center md:items-start">
                            <p className="text-white text-xl md:text-2xl lg:text-3xl	font-medium mb-4  ">
                                {middle.text1}
                            </p>
                            <p className="text-white text-xl md:text-2xl lg:text-3xl	font-medium mb-8">
                                {middle.text2}
                            </p>

                            <Link href={middle.cta.url} legacyBehavior>
                                <a class="flex items-center	 mt-12 md:mt-16 custom-btn-cta-black font-medium">
                                    <span>{middle.cta.title}</span>
                                    <svg
                                        width="13px"
                                        height="10px"
                                        viewBox="0 0 13 10"
                                    >
                                        <path d="M1,5 L11,5"></path>
                                        <polyline points="8 1 12 5 8 9"></polyline>
                                    </svg>
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>

                <section
                    className="grid grid-cols-1  py-16 md:py-24 lg:py-36
                    px-6 md:px-12 lg:px-16"
                >
                    <h2>{bottom.title}</h2>
                    <p>{bottom.subtitle}</p>

                    <div className="grid grid-cols-1 gap-36 custom_google_list  px-0 md:px-36">

                        {bottom.services.map((service, index) => (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-12 md:gap-16">
                                <div className="grid grid-cols-[max-content_1fr] items-center gap-y-4 md:gap-y-6 gap-x-2 md:gap-x-4">
                                    <span >
                                        <Image
                                            width={service.icon.width}
                                            height={service.icon.height}
                                            src={service.icon.src}
                                            alt={service.icon.alt}
                                        />
                                    </span>
                                    <h3 className="text-xl md:text-2xl ">
                                        {service.title}
                                    </h3>
                                    <p className="text-lg md:text-xl font-normal col-start-1 col-end-3">
                                        {service.content}
                                    </p>
                                </div>

                                <div >
                                    <Image
                                        height={service.image.height}
                                        width={service.image.width}
                                        alt={service.image.alt}
                                        src={service.image.src}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </Layout>
        </div>
    );
};

export default publicidadEnGoogle;

export async function getStaticProps(context) {
    const data = GoogleAdsEs;
    return {
        props: {
            data,
        },
    };
}
