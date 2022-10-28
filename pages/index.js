import Image from "next/image";
import React from "react";
import HomeEs from "../content/es/home.json";
import Layout from "../components/global/Layout";
import HeadComponent from "../components/global/HeadComponent";
import Link from "next/link";
import CtaRegular from "../components/Services/CtaRegular";
const Home = ({ data }) => {
    const { heroContent, home_services, head } = data;
///home-ecommerce-desktop.png 694 531     home-hero-mobile-2.png 650 480
    return (
        <div>
            <HeadComponent title={head.title} description={head.description} />
            <Layout>
                <section className="home_hero overflow-x-hidden grid items-center grid-cols-1 md:grid-cols-2 gap-12 relative overflow-hidden min-h-screen 
                bg-primary bg-[url('/assets/test-hero-mobile.png')] md:bg-white bg-cover md:bg-none
                ">
                    <div className="px-4 md:px-0 md:pl-12  py-24 lg:py-36 relative">
                        <h1 className="text-white md:text-black text-3xl md:text-4xl lg:text-5xl	font-bold uppercase ">
                            {heroContent.title.first}
                            <br />
                            {heroContent.title.second}
                        </h1>
                        <p className="text-white md:text-black text-xl md:text-2xl pt-6 pb-12">
                            {heroContent.subtitle}
                        </p>
                        <div className="flex flex-col md:flex-row">
                            <Link href={heroContent.cta1.url}>
                                <a className="transition-all duration-200 shadow text-lg md:text-xl inline-block px-6 py-3 bg-white md:bg-primary text-black hover:bg-primary hover:md:bg-white uppercase text-center">
                                    {heroContent.cta1.title}
                                </a>
                            </Link>
                            <Link href={heroContent.cta2.url}>
                                <a className="transition-all duration-200 shadow text-lg md:text-xl inline-block  px-6 py-3 bg-black text-white uppercase text-center ml-0 md:ml-4 mt-4 md:mt-0 hover:bg-primary hover:text-black">
                                    {heroContent.cta2.title}
                                </a>
                            </Link>
                        </div>

                        <svg className="hidden absolute md:block top-12 right-0" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_372_37)">
<rect width="3" height="3" rx="1.5" fill="#FFF507"/>
<rect y="24" width="3" height="3" rx="1.5" fill="#FFF507"/>
<rect y="47" width="3" height="3" rx="1.5" fill="#FFF507"/>
<rect x="23" width="3" height="3" rx="1.5" fill="#FFF507"/>
<rect x="23" y="24" width="3" height="3" rx="1.5" fill="#FFF507"/>
<rect x="23" y="47" width="3" height="3" rx="1.5" fill="#FFF507"/>
<rect x="47" width="3" height="3" rx="1.5" fill="#FFF507"/>
<rect x="47" y="24" width="3" height="3" rx="1.5" fill="#FFF507"/>
<rect x="47" y="47" width="3" height="3" rx="1.5" fill="#FFF507"/>
</g>
<defs>
<clipPath id="clip0_372_37">
<rect width="50" height="50" fill="white"/>
</clipPath>
</defs>
</svg>

                    </div>
                    <div className="hidden relative md:block
                    h-full
                    w-full
                    ">
                        <Image
                            src="/assets/test-hero.png"
                            layout='fill'
                            objectFit='cover'
                            objectPosition="top"
                        />
                    </div>
                </section>
                
                <section className="home_service grid grid-cols-1 relative">
                    {home_services.map((service, i) => (
                        <div
                            key={i}
                            className={`home_service--${i} grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center justify-center
                                first:bg-custom-grey
                                last:bg-custom-grey
                                bg-white
                                px-6 md:px-12 lg:px-16
                                py-12 md:py-24 lg:py-36
                            `}
                        >
                            <div className="flex flex-col items-center md:items-start justify-center row-start-2 row-end-3 md:row-start-1 row-end-2	">
                                <h3 className="font-poppins uppercase mb-2">{service.hover_title}</h3>
                                <h2 className="text-center md:text-start text-3xl md:text-4xl lg:text-5xl	font-bold uppercase ">
                                    {service.title}
                                </h2>
                                <p className="text-center md:text-start text-xl md:text-2xl pt-4 pb-6">
                                    {service.subtitle}
                                </p>

                                <CtaRegular
                                    url={service.cta.url}
                                    title={service.cta.title}
                                />
                            </div>

                            <div>
                                <Image
                                    src={service.img.src}
                                    width={service.img.width}
                                    height={service.img.height}
                                    layout="intrinsic"
                                />
                            </div>

                            <span
                                className={`home_service--${i}-span bg-yellow-500`}
                            ></span>
                        </div>
                    ))}
                </section>
            </Layout>
        </div>
    );
};

export default Home;

export async function getStaticProps(context) {
  const data = HomeEs;
  return {
    props: {
      data
    }
  };
}
