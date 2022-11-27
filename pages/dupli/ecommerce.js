import Image from "next/image";
import React from "react";
import HeadComponent from "../../components/global/HeadComponent";
import Layout from "../../components/global/Layout";
import EcommerceEs from "../../content/es/ecommerce.json";
import CtaRegular from "../../components/Services/CtaRegular";
import Banner from "../../components/Services/Banner";

const ecommerces = ({data}) => {
    const { head, hero, banner, platforms, services, payments, contact } = data;
    return (
      <div>
      <HeadComponent title={head.title} description={head.description} />
      <Layout>
            <section className="min-h-screen px-8 md:px-26 lg:px-48 relative ">
                <h1 className="pt-32 lg:pt-36 mb-12 text-3xl md:text-4xl lg:text-5xl	font-poppins font-normal ">
                    
                    Somos una agencia especializada en <span className="underline-custom font-poppins">Ecommerce</span>
                </h1>
                {hero.content.map((paragraph, i) => (
                    <p className="mt-8 text-lg md:text-xl lg:text-2xl font-light	" key={i}>
                        {paragraph}
                    </p>
                ))}
                
            </section>

            <Banner banner={banner.image1} />
          
            <section className="ecommerce_platforms bg-white px-6 md:px-12 lg:px-16 py-20 grid grid-cols-1 justify-items-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl	font-normal   text-center mb-16 text-black w-full md:w-10/12 lg:w-8/12 font-poppins">{platforms.title}</h2>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-3 justify-center align-center">
                {
                    platforms.list.map((platform, i) => (
                        <div key={i}>
                        <Image 
                            src={platform.image.src} alt={platform.image.alt}
                            width={platform.image.width} height={platform.image.height}
                            layout="intrinsic"
                        />
                        <p className="text-lg lg:text-xl font-light	 text-custom-black mt-6">{platform.content}</p>
                    </div>
                    ))
                }
                </div>
            </section>





            <section className="ecommerce_services px-6 md:px-12 lg:px-16 py-20">
                <h2 className="text-3xl md:text-4xl lg:text-5xl	font-normal font-poppins  text-center mb-16">{services.title}</h2>
                <div className="ecommerce_services-section grid grid-cols-1 gap-16">
                    {services.content.map((serviceList, i) => (
                        <div key={i} className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center justify-items-center ">
                            <div className="row-start-2 md:row-start-1 row-end-3 md:row-end-2">
                                {serviceList.list.map((element, i) => (

                                    <div className="first:mt-0 mt-6" key={i}>
                                        <h3 className=" text-2xl font-normal font-poppins">
                                            {element.title}
                                        </h3>
                                        <p className="text-lg lg:text-xl mt-3 font-light	">
                                            {element.subtitle}
                                        </p>
                                        
                                    </div>
                                ))}
                                <CtaRegular url={contact.url} title={contact.title}/>
                            </div>
                            <div className="image">
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
