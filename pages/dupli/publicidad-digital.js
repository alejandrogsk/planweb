import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import HeadComponent from '../../components/global/HeadComponent';
import Layout from '../../components/global/Layout'
import Banner from '../../components/Services/Banner';
import Hero from '../../components/Services/Hero'
import Logos from '../../components/Services/Logos';
import PublicidadDigitalEs from '../../content/es/publicidad-digital.json';

function ContactButton({contactData}){
    const {url, title} = contactData;
    return(
        <div className="w-full flex justify-center md:justify-start align-center mt-8">
                            <Link href={url} legacyBehavior>
                                <a className="text-xl text-center inline-block px-6 py-3 bg-primary hover:bg-black text-black hover:text-white transition-all duration-200  capitalize font-poppins font-normal">{title}</a>
                            </Link>
                        </div>
    )
}
const publicidadDigital = ({data}) => {
    const {head, hero, banner, platforms, google_ads, redes, email, contact} = data;

  return (
    <div>
        <HeadComponent title={head.title} description={head.description} />
        <Layout>
            <Hero title={hero.title} content={hero.content} page={2} />
            <Banner banner={banner} />
            <Logos  logos={platforms}/>
            <section className="services-marketing px-6 md:px-12 lg:px-16 py-20 flex flex-col items-center	justify-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl	font-normal  text-center mb-8 mt-12 md:mb-16 md:mt-16 font-poppins">{google_ads.title}</h2>
                <p className="max-w-full md:max-w-3xl	mx-auto text-lg md:text-xl lg:text-2xl font-normal text-center font-light">{google_ads.subtitle}</p>
                
                <div className="grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-16">
                    {
                        google_ads.list.map((service, i) => (
                            <div key={i} className="grid grid-cols-[auto,1fr] items-center gap-2">
                                <div >
                                    <Image 
                                        src={service.image.src} 
                                        alt={service.image.alt} 
                                        height={40} width={45} 
                                        layout="intrinsic"
                                    />
                                </div>
                                <h3 className="text-xl md:text-2xl font-normal font-poppins ">{service.title}</h3>
                                <p className="text-lg lg:text-xl col-start-1 lg:col-start-2 col-end-3 font-light">{service.content}</p>
                            </div>
                        ))
                    }            
                </div>

    
                <h4 className="my-4 md:my-6 lg:my-8 max-w-full md:max-w-5xl	mx-auto text-lg md:text-xl lg:text-2xl font-poppins font-normal text-center">{google_ads.under}</h4>

                <Link href={contact.url} legacyBehavior>
                    <a className="mt-8 text-xl text-center block px-6 py-3 bg-primary hover:bg-black text-black hover:text-white transition-all duration-200 capitalize font-poppins font-normal">{contact.title}</a>
                </Link>

            </section>
           
            {/**Social */}
            <section className="services-marketing px-6 md:px-12 lg:px-16 py-20 bg-gray-50 ">
                <h2 className="text-3xl md:text-4xl lg:text-5xl	font-normal font-poppins  text-center mb-8 mt-12 md:mb-16 md:mt-16">{redes.title}</h2>
                <p className="max-w-full md:max-w-3xl	mx-auto text-lg md:text-xl lg:text-2xl font-oswald font-normal font-poppins text-center">{redes.subtitle}</p>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center justify-items-center py-16">
                    <div className="grid items-start grid-cols-1 gap-12 my-16">
                        {
                            redes.list.map((element, i) => (
                    
                                <div key={i} className="grid grid-cols-[auto,1fr] items-center gap-2">
                                <div>
                                    <Image 
                                        src={element.image.src} 
                                        alt={element.image.alt} 
                                        height={40} width={45} 
                                        layout="intrinsic"
                                    />
                                </div>
                                <h3 className="text-xl md:text-2xl font-normal  font-poppins">{element.title}</h3>
                                <p className="text-lg lg:text-xl col-start-1 lg:col-start-2 col-end-3">{element.content}</p>
                            </div>
                            ))
                        }
                        <ContactButton contactData={contact} />
                    </div>
                    <div className="p-0 pl-0 md:p-2 md:pl-3 lg:p-4 lg:pl-5">
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
            <section className="services-marketing px-6 md:px-12 lg:px-16 py-20">
                <h2 className="text-3xl md:text-4xl lg:text-5xl	font-normal  text-center mb-8 mt-12 md:mb-16 md:mt-16 font-poppins">{email.title}</h2>
                <p className="max-w-full md:max-w-3xl	mx-auto text-lg md:text-xl lg:text-2xl font-poppins font-normal  text-center">{email.subtitle}</p>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center justify-items-center py-16">
                   
                    <div  className="p-0 pr-0 md:p-2 md:pr-3 lg:p-4 lg:pr-5 mt-8 md:mt-0">
                        <Image
                        src={email.image.src}
                        alt={email.image.alt}
                        width={email.image.width}
                        height={email.image.height}
                        layout="intrinsic"
                        />
                    </div>
                    <div className="grid items-start grid-cols-1 gap-12 my-16">
                        {
                            email.list.map((element, i) => (
                                <div key={i} className="grid grid-cols-[auto,1fr] items-center gap-2">
                                <div >
                                    <Image 
                                        src={element.image.src} 
                                        alt={element.image.alt} 
                                        height={40} width={45} 
                                        layout="intrinsic"
                                    />
                                </div>
                                <h3 className="text-xl md:text-2xl font-normal   font-poppins">{element.title}</h3>
                                <p className="text-lg lg:text-xl col-start-1 lg:col-start-2 col-end-3">{element.content}</p>
                            </div>
                            ))
                        }
                        <ContactButton contactData={contact} />
                    
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