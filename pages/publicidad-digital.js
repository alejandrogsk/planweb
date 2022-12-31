import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeadComponent from "../components/global/HeadComponent";
import Layout from "../components/global/Layout";
import Banner from "../components/Services/Banner";
import Hero from "../components/Services/Hero";
import Logos from "../components/Services/Logos";
import PublicidadDigitalEs from "../content/es/publicidad-digital.json";
import BtnYellow from "../components/Buttons/BtnYellow";
import BtnBlack from "../components/Buttons/BtnBlack";

const publicidadDigital = ({ data }) => {
    const { head, hero, banner, platforms, google_ads, redes, email, contact } =
        data;

    return (
        <div>
            <HeadComponent title={head.title} description={head.description} />
            <Layout>
                <Hero title={hero.title} content={hero.content} page={2} />
                <Banner banner={banner} />
                <Logos logos={platforms} />
                <section className="services-marketing px-6 md:px-12 lg:px-16 py-20 flex flex-col items-center	justify-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl	font-medium  text-center mb-8 mt-12 md:mb-16 md:mt-16">
                        {google_ads.title}
                    </h2>
                    <p className="max-w-full md:max-w-3xl	mx-auto text-lg md:text-xl lg:text-2xl  font-normal  text-center">
                        {google_ads.subtitle}
                    </p>

                    <div className="grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-16">
                        {google_ads.list.map((service, i) => (
                            <div
                                key={i}
                                className="grid grid-cols-[auto,1fr] items-center gap-2"
                            >
                                <div>
                                    <Image
                                        src={service.image.src}
                                        alt={service.image.alt}
                                        height={40}
                                        width={45}
                                        layout="intrinsic"
                                    />
                                </div>
                                <h3 className="text-xl md:text-2xl font-medium ">
                                    {service.title}
                                </h3>
                                <p className="text-lg lg:text-xl col-start-1 lg:col-start-2 col-end-3">
                                    {service.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    <h4 className="my-4 md:my-6 lg:my-8 max-w-full md:max-w-5xl	mx-auto text-lg md:text-xl lg:text-2xl font-normal text-center">
                        {google_ads.under}
                    </h4>

                    <BtnYellow url={contact.url} title={contact.title} />
                </section>

                {/**Social */}

                <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
                    <div
                        className="bg-primary flex items-center	justify-center	 h-full
                    py-16 md:py-24 lg:py-36
                    px-6 md:px-12 lg:px-16
                    overflow-x-hidden
                    "
                    >
                        <div className="min-h-[400px] translate-x-[-5px]  md:translate-x-[-35px] translate-y-[-10px] md:translate-y-[-80px] lg:translate-y-[-175px]">
                            <Image
                                height={607}
                                width={300}
                                alt={redes.image1.alt}
                                src={redes.image1.src}
                            />
                        </div>
                        <div className="translate-y-[30px] md:translate-y-[175px] translate-x-[5px] md:translate-x-[40px]">
                            <Image
                                height={607}
                                width={300}
                                alt={redes.image2.alt}
                                src={redes.image2.src}
                            />
                        </div>
                    </div>

                    <div
                        className="bg-custom-black
                    py-16 md:py-24 lg:py-36
                    px-6 md:px-12 lg:px-16
                    "
                    >
                        <div className=" w-full flex justify-between">
                            {redes.logos.map((logo, i) => (
                                <div key={i} className="mx-2 md:mx-0">
                                    <Image
                                        height={logo.height}
                                        width={logo.width}
                                        alt={logo.alt}
                                        src={logo.src}
                                    />
                                </div>
                            ))}
                        </div>

                        <h2 className="mt-12 md:mt-20  text-start text-3xl md:text-4xl lg:text-5xl	font-medium text-white ">
                            {redes.title}
                        </h2>
                        <p className="my-12 md:my-16 text-white text-lg md:text-xl lg:text-2xl  font-normal">
                            {redes.subtitle}
                        </p>

                        <div>
                        {redes.services.map((element, i) => (
                            <div
                                key={i}
                                className="grid grid-cols-[auto,1fr] items-center gap-2
                                first:mt-0 mt-8
                                "
                            >
                                <div>
                                    <Image
                                        src={element.icon.src}
                                        alt={element.icon.alt}
                                        height={30}
                                        width={30}
                                    />
                                </div>
                                <h3 className="text-white text-xl md:text-2xl font-medium ">
                                    {element.title}
                                </h3>
                                <p className="text-white text-lg lg:text-xl col-start-1 lg:col-start-2 col-end-3">
                                    {element.content}
                                </p>
                            </div>
                        ))}
                        </div>

                        <BtnBlack url={contact.url} title={contact.title} />
                    </div>
                </section>



                <section className="services-marketing px-6 md:px-12 lg:px-16 py-20">
                    <div className="grid content-center justify-items-center 
                    grid-cols-1 lg:grid-cols-2 grid-rows-[max-content_max-content_max-content] lg:grid-rows-2
                    gap-16 lg:gap-4
                    ">
                        
                            <h2 className="text-2xl md:text-3xl lg:text-4xl	font-medium  
                            col-start-1 col-end-2
                            row-start-1 row-end-2
                            ">
                                {email.title}
                            </h2>
                            <div className="col-start-1 col-end-2 row-start-3 lg:row-start-2 row-end-4 lg:row-end-3">
                            <p className="text-lg md:text-xl lg:text-2xl  font-normal">
                                {email.subtitle1}
                            </p>
                            <p className="text-lg md:text-xl lg:text-2xl  font-normal mt-4">
                                {email.subtitle2}
                            </p>
                            </div>
                            
                        <div className="
                        flex justify-center	items-center
                        col-start-1 lg:col-start-2 col-end-2 lg:col-end-3 row-start-2 lg:row-start-1 row-end-3">
                            <Image
                                src="/assets/marketing/email-flow.png"
                                width={559}
                                height={509}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center justify-items-center py-16">
                        <div className="p-0 pr-0 md:p-2 md:pr-3 lg:p-4 lg:pr-5 mt-8 md:mt-0">
                            <div>
                                <Image
                                    src="/assets/marketing/emailing.png"
                                    width={556}
                                    height={645}
                                />
                            </div>
                        </div>
                        <div
                            className="
                    flex flex-col justify-center items-center md:items-start
                    "
                        >
                            <h2 className="text-2xl lg:text-3xl	font-medium  mt-8 lg:mt-0">
                                ¿Como te ayudamos?
                            </h2>
                            {email.list.map((element, i) => (
                                <div
                                    key={i}
                                    className="grid grid-cols-[auto,1fr] items-center gap-2  first:mt-0 mt-6"
                                >
                                    <div>
                                        <span className="text-black text-xl md:text-2xl block h-10 w-10 bg-primary rounded-full flex justify-center items-center">
                                            {i + 1}
                                        </span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-medium ">
                                        {element.title}
                                    </h3>
                                    <p className="text-lg lg:text-xl col-start-1 lg:col-start-2 col-end-3">
                                        {element.content}
                                    </p>
                                </div>
                            ))}
                            <BtnYellow
                                url={contact.url}
                                title={contact.title}
                            />
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    );
};

export async function getStaticProps(context) {
    const data = PublicidadDigitalEs;

    return {
        props: {
            data,
        },
    };
}

export default publicidadDigital;
