import Head from 'next/head';
import React from 'react'
import Layout from '../components/global/Layout';
import WebsitesES from '../content/es/websites.json'
import ServiceHero from '../components/pages/sections/ServiceHero';
import BlackDescription from '../components/pages/sections/BlackDescription';
const websites = () => {

    const { hero,description,services,websites} = WebsitesES;

  return (
    <div>
        <Head>

        </Head>

        <Layout>
           <ServiceHero hero={hero} />
           <BlackDescription description={description} />

            <section className="services-section websites-services-section">
                <h2>{services.title}<span className="point-orange">.</span></h2>
                <div className="services-section__grid">
                {
                    services.content.map((service, index)=> {
                        return(
                            <div key={index} className="services-section__grid-element">
                                <div className="services-section__grid-element--icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#f84525" transform="translate(0, 0) scale(1, 1) "><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></g></svg>
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        )
                    })
                }
                </div>
            </section>

            <section className="services-section websites-section">
                <h2>{websites.title}<span className="point-orange">.</span></h2>
                <div className="services-section__grid">
                {
                    websites.content.map((service, index)=> {
                        return(
                            <div key={index} className="services-section__grid-element websites-section__elements">
                                <div className="services-section__grid-element--icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#f84525" transform="translate(0, 0) scale(1, 1) "><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></g></svg>
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        )
                    })
                }
                </div>
            </section>

        </Layout>
    </div>
  )
}

export default websites