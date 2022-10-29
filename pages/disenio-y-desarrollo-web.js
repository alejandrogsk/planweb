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
                            flex flex-col justify-between rounded-xl  shadow-md hover:shadow-2xl  py-8 px-4 
                            transition-all duration-300
                            bg-white
                            text-black
                            cursor-pointer
                            ">
                               <div className="flex flex-col items-center">
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
                                <p className="mt-5 mb-6 text-center	 text-lg lg:text-xl">
                                    {element.subtitle}
                                </p>

                                <ul className="flex flex-col items-center w-full">
                                  {
                                    element.examples.map((example, i) =>(
                                      <li key={i} className="text-center text-base lg:text-lg mt-3 font-poppins border-b-2 last:border-b-0 py-2 w-full" >
                                    <svg className="inline-block" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.2709 18.75C10.128 18.7496 9.98682 18.7197 9.85601 18.6624C9.72519 18.6051 9.60757 18.5214 9.51044 18.4167L4.44795 13.0313C4.2587 12.8296 4.15733 12.561 4.16612 12.2846C4.17491 12.0082 4.29315 11.7466 4.49482 11.5573C4.6965 11.3681 4.96509 11.2667 5.24151 11.2755C5.51793 11.2843 5.77954 11.4025 5.96878 11.6042L10.2604 16.1771L19.0209 6.59378C19.1098 6.48307 19.2204 6.39171 19.3459 6.3253C19.4714 6.2589 19.6091 6.21884 19.7506 6.20761C19.8922 6.19638 20.0345 6.2142 20.1689 6.25998C20.3033 6.30576 20.4269 6.37853 20.5322 6.47383C20.6374 6.56912 20.7221 6.68493 20.781 6.81414C20.8398 6.94334 20.8717 7.08322 20.8745 7.22517C20.8774 7.36713 20.8511 7.50817 20.7975 7.63962C20.7438 7.77108 20.6639 7.89018 20.5625 7.98961L11.0417 18.4063C10.9455 18.5129 10.8283 18.5985 10.6974 18.6576C10.5666 18.7168 10.4249 18.7482 10.2813 18.75H10.2709Z" fill="#FFF507"/>
</svg> {example}
                                </li>
                                    ))
                                  }
                                </ul>
                               </div>
                                <span className="group text-black bg-primary hover:bg-custom-black w-full flex py-3 justify-center py-2 group z-10 mt-8 shadow hover:shadow-lg transition-all duration-200">
                                    <Link href={contact.url}>
                                        <a className="transition-all duration-200 group-hover:text-white text-lg  md:text-xl text-2xl text-inherit uppercase font-regular">
                                            {contact.title}
                                        </a>
                                    </Link>
                                    <svg className="transition-all duration-200 group-hover:translate-x-2 duration-300	fill-custom-black group-hover:fill-white	 h-6 w-6 fill-inherit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
