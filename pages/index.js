import Image from 'next/image';
import React from 'react';
import HomeEs from "../content/es/home.json";
import Layout from "../components/global/Layout";
import HeadComponent from "../components/global/HeadComponent";
const Home = ({data}) => {
  const {heroContent, home_services, head} = data

  return (
    <div>
      <HeadComponent title={head.title} description={head.description} />
      <Layout>
      <section className="home_hero overflow-x-hidden grid items-center grid-cols-1 md:grid-cols-2 gap-12 relative px-6 md:px-12 lg:px-16 min-h-screen">
            <div className="pt-16">
                <h1 className="text-3xl md:text-4xl lg:text-5xl	font-bold uppercase ">{heroContent.title.first}<br/>
                {heroContent.title.second}</h1>
                <p className="text-xl md:text-2xl pt-6 pb-12">{heroContent.subtitle}</p>
                <div className="flex flex-col md:flex-row">
                    <a className="text-lg md:text-xl inline-block px-6 py-3 bg-white md:bg-primary text-black uppercase text-center">{heroContent.cta1.title}</a>
                    <a className="text-lg md:text-xl inline-block  px-6 py-3 bg-black text-white uppercase text-center ml-0 md:ml-4 mt-4 md:mt-0">{heroContent.cta2.title}</a>
                </div>
            </div>
            <div>
              <Image src="/assets/hero-image.png" layout="intrinsic" width="600" height="420" />
            </div>

            <span className="home_hero-square1 bg-yellow-400"></span>
            <span className="home_hero-square2 bg-primary"></span>
        </section>


        <section className="home_service grid grid-cols-1 px-6 md:px-12 lg:px-16 pt-36 pb-16 gap-y-36 relative">
          {
            home_services.map((service, i)=> (
              <div  key={i} className={`home_service--${i} grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center	`}>
                <div className="flex flex-col items-start justify-center">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl	font-bold uppercase ">{service.title}</h2>
                  <p className="text-xl md:text-2xl pt-3 pb-6">{service.subtitle}</p>
                  <a className="text-xl text-center inline-block px-6 py-3 bg-primary text-black uppercase">{service.cta.title}</a>
                </div>
                <div> 
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
