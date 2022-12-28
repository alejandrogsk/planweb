import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import HeadComponent from '../components/global/HeadComponent'
import Layout from '../components/global/Layout'
import Hero from '../components/NewServices/Hero'
import EmailMarketingEs from '../content/es/emailMarketing.json';
const emailMarketing = ({data}) => {
  const {head, hero, middle,bottom} = data;
  return (
    <div>
    <HeadComponent title={head.title} description={head.description} />
    <Layout>
        <Hero title={hero.title} content={hero.content} />

        <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
                    <div
                        className="bg-primary flex h-full grid grid-cols-1 align-center justify-items-center
                    py-16 md:py-24 lg:py-36
                    px-6 md:px-12 lg:px-16
                    "
                    >

                        <div className="grid grid-cols-1 justify-items-center	items-center	">
                            <Image
                                height={middle.image1.height}
                                width={middle.image1.width}
                                alt={middle.image1.alt}
                                src={middle.image1.src}
                            />
                        </div>
                    </div>

                    <div className="bg-custom-black grid grid-cols-1 justify-items-center	items-center	
                    py-16 md:py-24 lg:py-36
                    px-6 md:px-12 lg:px-16
                    ">
                      
                      <Image
                                        height={middle.logo.height}
                                        width={middle.logo.width}
                                        alt={middle.logo.alt}
                                        src={middle.logo.src}
                                    />
                        <h2 className="mt-12 md:mt-20 mb-12 md:mb-16 text-center md:text-start text-3xl md:text-4xl lg:text-5xl	font-medium text-white ">{middle.title}</h2>
                        <Image
                                        height={middle.image2.height}
                                        width={middle.image2.width}
                                        alt={middle.image2.alt}
                                        src={middle.image2.src}
                                    />

                    </div>
                </section>

                <section className="grid grid-cols-1 justify-items-center	items-center	
                
                py-16 md:py-24 lg:py-36

px-6 md:px-12 lg:px-16">
  <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 md:mb-20">
  {
    bottom.services.map((service, i) => (
      <div key={i}>
        <h2 className="text-black text-xl md:text-2xl mt-4 mb-2">{service.title}</h2>
        <p className="text-black text-lg md:text-xl font-normal">{service.content}</p>
      </div>
    ))
  }
  </div>
  
  <Link href={bottom.cta.url} legacyBehavior>
                        <a class="flex justify-center items-center m-auto md:m-0 custom-btn-cta font-medium">
                            <span>{bottom.cta.title}</span>
                            <svg width="13px" height="10px" viewBox="0 0 13 10">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </a>
                    </Link>
</section>

    </Layout>    
    </div>
  )
}

export default emailMarketing

export async function getStaticProps(context) {
  const data = EmailMarketingEs;
  return {
      props: {
          data,
      },
  };
}