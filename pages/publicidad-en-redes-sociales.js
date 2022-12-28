import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeadComponent from "../components/global/HeadComponent";
import Layout from "../components/global/Layout";
import PublicidadEnRedesEs from "../content/es/publicidadEnRedes.json";
import Hero from "../components/NewServices/Hero";
const publicidadEnRedesSociales = ({ data }) => {
    const { head, hero, middle,bottom } = data;
    return (
        <div>
            <HeadComponent title={head.title} description={head.description} />
            <Layout>
                <Hero title={hero.title} content={hero.content} />
                
                <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
                    <div
                        className="bg-primary flex h-full
                    py-16 md:py-24 lg:py-36
                    px-6 md:px-12 lg:px-16
                    "
                    >
                        <div clasName="translate-x-[-5px]  md:translate-x-[-35px] translate-y-[-30px] md:translate-y-[-75px]">
                            <Image
                                height={middle.image1.height}
                                width={middle.image1.width}
                                alt={middle.image1.alt}
                                src={middle.image1.src}
                            />
                        </div>
                        <div className="translate-y-[30px] md:translate-y-[75px] translate-x-[5px] md:translate-x-[35px]">
                            <Image
                                height={middle.image2.height}
                                width={middle.image2.width}
                                alt={middle.image2.alt}
                                src={middle.image2.src}
                            />
                        </div>
                    </div>

                    <div className="bg-custom-black
                    py-16 md:py-24 lg:py-36

                    px-6 md:px-12 lg:px-16
                    ">
                        <div className=" w-full flex justify-around">
                            {middle.logos.map((logo, i) => (
                                <div key={i} className="m-1 md:m-0">
                                    <Image
                                        height={logo.height}
                                        width={logo.width}
                                        alt={logo.alt}
                                        src={logo.src}
                                    />
                                </div>
                            ))}
                        </div>

                        <h2 className="mt-12 md:mt-20 mb-12 md:mb-16 d:text-start text-3xl md:text-4xl lg:text-5xl	font-medium text-white ">{middle.title}</h2>

                        {
                            middle.services.map((service, i) =>(
                                <div key={i} className="w-full mb-12 last:mb-0">
                                    <h3 className="text-white text-xl md:text-2xl mt-4 mb-2">{service.title}</h3>
                                    <p className="text-white text-lg md:text-xl font-normal">{service.content}</p>
                                </div>
                            ))
                        }

                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 content-center items-center	
                
                py-16 md:py-24 lg:py-36

px-6 md:px-12 lg:px-16">
                    <div>
                    <Image
                                        height={bottom.image.height}
                                        width={bottom.image.width}
                                        alt={bottom.image.alt}
                                        src={bottom.image.src}
                                    />
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <p className="text-xl md:text-2xl lg:text-3xl	font-medium mb-4  ">{bottom.text1}</p>
                        <p className="text-xl md:text-2xl lg:text-3xl	font-medium mb-8">{bottom.text2}</p>
                        <Link href={bottom.cta.url} legacyBehavior>
                        <a class="flex justify-center items-center m-auto md:m-0 custom-btn-cta font-medium">
                            <span>{bottom.cta.title}</span>
                            <svg width="13px" height="10px" viewBox="0 0 13 10">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </a>
                    </Link>
                    </div>
                </section>
            </Layout>
        </div>
    );
};

export default publicidadEnRedesSociales;

export async function getStaticProps(context) {
    const data = PublicidadEnRedesEs;
    return {
        props: {
            data,
        },
    };
}
