import Image from "next/image";
import React from "react";
import HeadComponent from "../components/global/HeadComponent";
import Layout from "../components/global/Layout";
import EcommerceEs from "../content/es/ecommerce.json";
import CtaRegular from "../components/Services/CtaRegular";


const ecommerces = ({data}) => {
    const { head, hero, banner, platforms, services, payments, contact } = data;
    return (
      <div>
      <HeadComponent title={head.title} description={head.description} />
      <Layout>
            <section className="min-h-screen px-8 md:px-26 lg:px-48 relative ">
                <h1 className="pt-32 lg:pt-36 mb-12 text-3xl md:text-4xl lg:text-5xl	font-bold uppercase">
                    {hero.title}
                </h1>
                {hero.content.map((paragraph, i) => (
                    <p className="mt-8 text-lg md:text-xl lg:text-2xl" key={i}>
                        {paragraph}
                    </p>
                ))}
                <span className="ecommerce_hero-span--1 bg-yellow-500"></span>
                <span className="ecommerce_hero-span--special bg-primary"></span>
            </section>
            <section className="mt-28 px-2 md:px-8 lg:px-12 flex flex-col items-center align-center justify-center relative">
                <Image
                    alt={banner.image1.alt}
                    src={banner.image1.src}
                    width={banner.image1.width}
                    height={banner.image1.height}
                    layout="intrinsic"
                />
                
            </section>


            <section className="ecommerce_services px-6 md:px-12 lg:px-16 py-16 md:py-26 lg:py-36">
                <h2 className="text-3xl md:text-4xl lg:text-5xl	font-bold uppercase  text-center mb-16">{services.title}</h2>
                <div className="ecommerce_services-section grid grid-cols-1 gap-16">
                    {services.content.map((serviceList, i) => (
                        <div key={i} className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center justify-items-center ">
                            <div className="row-start-2 md:row-start-1 row-end-3 md:row-end-2">
                                {serviceList.list.map((element, i) => (

                                    <div className="first:mt-0 mt-6" key={i}>
                                        <h3 className="uppercase text-2xl font-semibold">
                                            {element.title}
                                        </h3>
                                        <p className="text-lg lg:text-xl mt-3">
                                            {element.subtitle}
                                        </p>
                                        
                                    </div>
                                ))}
                                <CtaRegular url={contact.url} title={contact.title}/>
                            </div>
                            <div >
                                <Image
                                    alt={serviceList.image.alt}
                                    src={serviceList.image.src}
                                    width={serviceList.image.width}
                                    height={serviceList.image.height}
                                    layout="intrinsic"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                
            </section>
            
            <section className="py-8 md:py-12 lg:py-16 px-auto flex flex-wrap justify-around	">

                    {payments.map((element, index) => {
                        return (
                            <Image
                                key={index}
                                src={element.src}
                                alt={element.alt}
                                layout="intrinsic"
                                height={element.height}
                                width={element.width}
                            />
                        );
                    })}
            </section>

            <section className="ecommerce_platforms bg-black px-6 md:px-12 lg:px-16 py-36">
                <h2 className="text-3xl md:text-4xl lg:text-5xl	font-bold uppercase  text-center mb-16 text-white">{platforms.title}</h2>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-3 justify-center align-center">
                {
                    platforms.list.map((platform, i) => (
                        <div key={i}>
                        <Image 
                            src={platform.image.src} alt={platform.image.alt}
                            width={platform.image.width} height={platform.image.height}
                            layout="intrinsic"
                        />
                        <p className="text-lg lg:text-xl text-white mt-6">{platform.content}</p>
                    </div>
                    ))
                }
                </div>
            </section>
            </Layout>
        </div>
    );
};

export async function getStaticProps(context) {
    const data = EcommerceEs;

    return {
      props: {
        data
      }
    }
  }

export default ecommerces;
