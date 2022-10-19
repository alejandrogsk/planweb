import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import HeadComponent from '../components/global/HeadComponent';
import Layout from '../components/global/Layout'
import Banner from '../components/Services/Banner';
import Hero from '../components/Services/Hero'
import Logos from '../components/Services/Logos';
import RequestNow from '../components/Services/RequestNow';
import PublicidadDigitalEs from '../content/es/publicidad-digital.json';


const publicidadDigital = ({data}) => {
    const {head, hero, banner, platforms, ppc, redes, email} = data;

  return (
    <div>
        <HeadComponent title={head.title} description={head.description} />
        <Layout>
            <Hero title={hero.title} content={hero.content} page={2} />
            <Banner banner={banner} />
            <Logos  logos={platforms}/>

            <section className="services-marketing px-6 md:px-12 lg:px-16 py-16 md:py-20 flex flex-col items-center	justify-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl	font-bold uppercase  text-center mb-16">{ppc.title}</h2>
                <p className="max-w-full md:max-w-3xl	mx-auto text-lg md:text-xl lg:text-2xl font-oswald font-bold uppercase text-center">{ppc.subtitle}</p>

                {/**Google */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center justify-items-center py-16">
                    <div className="">
                        {
                            ppc.list1.map((element, i) => (
                                <div className="first:mt-0 mt-6" key={i}>
                                <h3 className="uppercase text-2xl font-semibold">
                                    {element.title}
                                </h3>
                                <p className="text-lg lg:text-xl mt-3">
                                    {element.content}
                                </p>
                            </div>
                            ))
                        }
                    </div>
                    <div>
                        <Image
                        src={ppc.image.src}
                        alt={ppc.image.alt}
                        width={ppc.image.width}
                        height={ppc.image.height}
                        layout="intrinsic"
                        />
                    </div>

                    <div className="items-center	col-start-1 col-end-2 lg:col-end-3 grid grid-cols-1 lg:grid-cols-3 gap-8 content-center">
                    {
                        ppc.list2.map((element, i) => (
                            <div className="first:mt-0 mt-6" key={i}>
                            <h3 className="uppercase text-2xl font-semibold">
                                {element.title}
                            </h3>
                            <p className="text-lg lg:text-xl mt-3">
                                {element.content}
                            </p>
                        </div>
                        ))
                    }
                    </div>
                </div>

                <Link href="/contacto">
                        <a className="mt-8 text-xl text-center inline-block px-6 py-3 bg-primary text-black uppercase">Solicitar Ahora</a>
                    </Link>
            </section>

            {/**Social */}
            <section className="services-marketing px-6 md:px-12 lg:px-16 py-16 md:py-20 bg-gray-50 ">
                <h2 className="text-3xl md:text-4xl lg:text-5xl	font-bold uppercase  text-center mb-16">{redes.title}</h2>
                <p className="max-w-full md:max-w-3xl	mx-auto text-lg md:text-xl lg:text-2xl font-oswald font-bold uppercase text-center">{redes.subtitle}</p>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center justify-items-center py-16">
                    <div className="">
                        {
                            redes.list.map((element, i) => (
                                <div className="first:mt-0 mt-6" key={i}>
                                <h3 className="uppercase text-2xl font-semibold">
                                    {element.title}
                                </h3>
                                <p className="text-lg lg:text-xl mt-3">
                                    {element.content}
                                </p>
                            </div>
                            ))
                        }
                        <div className="w-full flex justify-start align-center mt-8">
                            <Link href="/contacto">
                                <a className="text-xl text-center inline-block px-6 py-3 bg-primary text-black uppercase">Solicitar Ahora</a>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Image
                        src={redes.image.src}
                        alt={redes.image.alt}
                        width={redes.image.width}
                        height={redes.image.height}
                        layout="intrinsic"
                        />
                    </div>

                   
                </div>
            </section>

            {/**Email */}
            <section className="services-marketing px-6 md:px-12 lg:px-16 py-16 md:py-20">
                <h2 className="text-3xl md:text-4xl lg:text-5xl	font-bold uppercase  text-center mb-16">{email.title}</h2>
                <p className="max-w-full md:max-w-3xl	mx-auto text-lg md:text-xl lg:text-2xl font-oswald font-bold uppercase text-center">{email.subtitle}</p>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center justify-items-center py-16">
                   
                    <div>
                        <Image
                        src={email.image.src}
                        alt={email.image.alt}
                        width={email.image.width}
                        height={email.image.height}
                        layout="intrinsic"
                        />
                    </div>
                    <div className="">
                        {
                            email.list.map((element, i) => (
                                <div className="first:mt-0 mt-6" key={i}>
                                <h3 className="uppercase text-2xl font-semibold">
                                    {element.title}
                                </h3>
                                <p className="text-lg lg:text-xl mt-3">
                                    {element.content}
                                </p>
                            </div>
                            ))
                        }
                        <Link href="/contacto">
                        <a className="mt-8 text-xl text-center inline-block px-6 py-3 bg-primary text-black uppercase">Solicitar Ahora</a>
                    </Link>
                    </div>
                   
                </div>

               
            </section>
        </Layout>

    </div>
  )
}

export async function getStaticProps(context) {
    const data = PublicidadDigitalEs;
  
    return {
      props: {
        data
      },
    }
  }

export default publicidadDigital