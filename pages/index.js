import Image from "next/image";
import React from "react";
import HomeEs from "../content/es/home.json";
import Layout from "../components/global/Layout";
import HeadComponent from "../components/global/HeadComponent";
import Link from "next/link";
import CtaRegular from "../components/Services/CtaRegular";

        {/* <ul className="mb-12 block md:hidden">
            <li><a className="uppercase font-semibold text-xl">&#10003; Sitios Web</a></li>
            <li className="mt-2"><a className="uppercase font-semibold text-xl">&#10003; Tiendas Online</a></li>
            <li className="mt-2"><a className="uppercase font-semibold text-xl">&#10003; Publicidad En Online</a></li>
        </ul> */}
const Home = ({ data }) => {
    const { heroContent, home_services, head } = data;
    return (
        <div>
            <HeadComponent title={head.title} description={head.description} />
            <Layout>

           <section className="home_hero overflow-x-hidden grid items-center grid-cols-1 md:grid-cols-2 gap-12 relative overflow-hidden min-h-screen 
bg-white 
">
    <div className="px-4 md:px-0 md:pl-12  pt-8 pb-12  md:py-24 lg:py-36 relative col-start-1 col-end-2
    row-start-2 row-end-3 md:row-start-1 md:row-end-2
    ">


        <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold uppercase 
        grid grid-cols-[min-content_min-content_1fr] gap-x-[1rem]
        ">
        <div>SOLUCIONES</div> 
        <div className="relative"><span className="relative z-10">DIGITALES</span><span className="bg-primary  h-3 lg:h-4 absolute  left-0 bottom-[2px] w-full "></span></div>
        <br /> 
        <div className="col-start-1 col-end-4">AL ALCANCE DE TU EMPRESA</div></h1>


        <p className="text-black text-xl md:text-2xl pt-6 pb-12">
            {heroContent.subtitle}
        </p>



        <div className="flex flex-col md:flex-row">
            <Link href={heroContent.cta1.url}>
                <a className="transition-all duration-200 shadow text-lg md:text-xl block px-6 py-3 bg-primary text-black hover:bg-white hover:md:bg-white uppercase text-center">
                    {heroContent.cta1.title}
                </a>
            </Link>
            <Link href={heroContent.cta2.url}>
                <a className="transition-all duration-200 shadow text-lg md:text-xl block  px-6 py-3 bg-black text-white uppercase text-center ml-0 md:ml-4 mt-4 md:mt-0 hover:bg-primary hover:text-black">
                    {heroContent.cta2.title}
                </a>
            </Link>
        </div>

        <svg className="hidden absolute md:block top-12 right-0" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_372_37)">
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
    <div className="relative hidden md:grid justify-center	 items-center 
    col-start-1 md:col-start-2 col-end-2 md:col-end-3
    pt-24 md:pt-auto pl-4 md:pl-0 pr-2 md:pr-4  md:px-auto
    ">
        <Image src="/assets/h-h-d.png" layout="intrinsic"
            width="550" 
            height="462.67" 
            alt="Agencia especializada en ecommerce crespo"
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
                                <span className="font-poppins uppercase mb-2">{service.hover_title}</span>
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
                                    alt={service.img.alt}
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
