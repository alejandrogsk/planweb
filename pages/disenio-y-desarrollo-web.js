import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeadComponent from "../components/global/HeadComponent";
import Layout from "../components/global/Layout";
import Banner from "../components/Services/Banner";
import Hero from "../components/Services/Hero";
import Logos from "../components/Services/Logos";
import WebEs from "../content/es/web.json";

const DiseñoYDesarrolloWeb = ({ data }) => {
    const { head, hero, banner, platforms, services, contact } = data;

    return (
        <div>
            <HeadComponent title={head.title} description={head.description} />
            <Layout>
                <Hero title={hero.title} content={hero.content} />
                <Banner banner={banner} />
                <Logos logos={platforms} />

                <section className="services-marketing px-6 md:px-12 lg:px-16 py-16 md:py-28">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl	font-bold uppercase  text-center mb-16">
                        {services.title}
                    </h2>
                    <p className="max-w-full md:max-w-3xl	mx-auto text-lg md:text-xl lg:text-2xl font-oswald font-bold uppercase text-center">
                        {services.subtitle}
                    </p>

                    <div className=" mt-16 col-start-1 col-end-2 lg:col-end-3 grid grid-cols-1 lg:grid-cols-3 gap-12 content-center ">
                        {
                        services.list.map((element, i) => (
                            <Link key={i} href="/contacto">
                            <div className="
                            flex flex-col justify-between rounded-xl  shadow-md hover:shadow-lg min-h-[80vh] py-8 px-4 transition-all duration-300 md:hover:-translate-y-1
                            bg-white
                            text-black
                            
                            cursor-pointer
                            ">
                               <div className="flex flex-col">
                                    <div className="mb-6">
                                        <Image 
                                            src={element.image.src}
                                            alt={element.image.alt}
                                            width={element.image.width} height={element.image.height}
                                        />
                                    </div>

                                <h3 className=" capitalize text-xl md:text-2xl lg:text-3xl font-semibold">
                                    {element.title}
                                </h3>
                                <p className="mt-5 mb-6  text-lg lg:text-xl">
                                    {element.subtitle}
                                </p>

                                <ul className="">
                                  {
                                    element.examples.map((example, i) =>(
                                      <li key={i} className="text-base lg:text-lg mt-3 font-poppins" >
                                    &#x2022; {example}
                                </li>
                                    ))
                                  }
                                </ul>
                               </div>
                                <span className="text-inherit flex items-center py-2 group z-10">
                                    <Link href={contact.url}>
                                        <a className="text-lg  md:text-xl text-2xl text-inherit underline uppercase font-regular">
                                            {contact.title}
                                        </a>
                                    </Link>
                                    <svg className="group-hover:translate-x-2 duration-300		 h-6 w-6 fill-inherit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <g fill="inherit" transform="translate(0, 0) scale(1, 1) ">
                                            <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                            </Link>
                        ))
                        }
                    </div>
                </section>
            </Layout>
        </div>
    );
};

export async function getStaticProps(context) {
    const data = WebEs;

    return {
        props: {
            data,
        },
    };
}

export default DiseñoYDesarrolloWeb;
