import Image from "next/image";
import React from "react";
import HomeEs from "../content/es/home.json";
import Layout from "../components/global/Layout";
import HeadComponent from "../components/global/HeadComponent";
import CtaRegular from "../components/Services/CtaRegular";
import HeroHome from "../components/home/HeroHome";
import HomeLargeWithMethodology from "../components/home/HomeLargeWithMethodology";

const Home = ({ data }) => {
    const { heroContent, how_we_work, home_services, head } = data;
    return (
        <div>
            <HeadComponent title={head.title} description={head.description} />
            <Layout>

            {/**Este es el correcto */} 
            {/* <HeroHome  heroContent={heroContent}/> */}
           
            {/**Este es un hero section de prueba */}
            <HomeLargeWithMethodology how_we_work={how_we_work} />
                
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
