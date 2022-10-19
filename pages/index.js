import Image from 'next/image';
import React from 'react';
import HomeEs from "../content/es/home.json";
import Layout from "../components/global/Layout";
import HeadComponent from "../components/global/HeadComponent";
import Link from 'next/link';
const Home = ({data}) => {
  const {heroContent, home_services, head} = data

  return (
    <div>
      <HeadComponent title={head.title} description={head.description} />
      <Layout>
      <section className="home_hero overflow-x-hidden grid items-center grid-cols-1 md:grid-cols-2 gap-12 relative px-6 md:px-12 lg:px-16 overflow-hidden py-16 md:py-24 lg:py-36">
            <div className="pt-0 md:pt-20 row-start-2 row-end-3 md:row-start-1 md:row-end-2 ">
                <h1 className="text-3xl md:text-4xl lg:text-5xl	font-bold uppercase ">{heroContent.title.first}<br/>
                {heroContent.title.second}</h1>
                <p className="text-xl md:text-2xl pt-6 pb-12">{heroContent.subtitle}</p>
                <div className="flex flex-col md:flex-row">
                  <Link href={heroContent.cta1.url}>
                  <a className="transition-all duration-200 shadow text-lg md:text-xl inline-block px-6 py-3 bg-white md:bg-primary text-black hover:bg-primary hover:md:bg-white uppercase text-center">{heroContent.cta1.title}</a>
                  </Link>
                  <Link href={heroContent.cta2.url}>
                  <a className="transition-all duration-200 shadow text-lg md:text-xl inline-block  px-6 py-3 bg-black text-white uppercase text-center ml-0 md:ml-4 mt-4 md:mt-0 hover:bg-primary hover:text-black">{heroContent.cta2.title}</a>
                  </Link>
                   </div>
            </div>
            <div className="hidden md:block pt-16 md:pt-0 col-start-1 md:col-start-2 col-end-2 md:col-end-3 justify-self-center	">
              <Image src="/assets/hero-image.png" layout="intrinsic" width="600" height="420" />
              
            </div>
            <div className="block md:hidden pt-16 md:pt-0 col-start-1 md:col-start-2 col-end-2 md:col-end-3 justify-self-center	"> 
                  <Image src="/assets/home-hero-mobile.png" width={400} height={400} layout="intrinsic" />
                </div>
            <span className="home_hero-square1 bg-yellow-700"></span>
            <span className="home_hero-square2 bg-primary"></span>
        </section>


        <section className="home_service grid grid-cols-1 px-6 md:px-12 lg:px-16 pt-24 lg:pt-36 pb-16 gap-y-36 relative">
          {
            home_services.map((service, i)=> (
              <div  key={i} className={`home_service--${i} grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center justify-center		`}>
                <div className="flex flex-col items-start justify-center">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl	font-bold uppercase ">{service.title}</h2>
                  <p className="text-xl md:text-2xl pt-3 pb-6">{service.subtitle}</p>
                  <Link href={service.cta.url}>
                    <a className="shadow transition-all duration-200 text-xl text-center inline-block px-6 py-3 bg-primary hover:bg-black text-black hover:text-white uppercase">{service.cta.title}</a>
                  </Link>
                </div>
                
                <div > 
                  <Image src={service.img.src} width={service.img.width} height={service.img.height} layout="intrinsic" />
                </div>
                
              

                <span className={`home_service--${i}-span bg-yellow-500`}></span>
              </div>
            ))
          }
        </section>
      </Layout>
    </div>
  )
}

export default Home

export async function getStaticProps(context) {
    const data = HomeEs;

    return {
      props: {
        data
      },
    }
  }
