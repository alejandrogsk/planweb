import Link from 'next/link';
import React from 'react'
import Layout from '../components/global/Layout';
import MarketingES from '../content/es/marketing.json';

const marketing = () => {
    const { hero, description, google_ads, google_analitycs, social_ads, email_marketing } = MarketingES;


  return (
    <div>
        <Layout>
        <section className="service-hero">
                <div>
                    <h1>{hero.title}<span className="point-orange">.</span></h1>
                    <h2>{hero.subtitle}</h2>
                    <div>
                    {
                        hero.content.map((paragraph, index)=> <p key={index}>{paragraph}</p>)
                    }
                    </div>
                </div>
            </section>

            <section className="black-section">
                <div className="black-section__img">
                    <img src={description.img.src} alt={description.img.alt} />
                </div>
                <div className="black-section__content">
                    <div className="black-section__content-verified">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#f84525" transform="translate(0, 0) scale(1, 1) "><path d="M23,12l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,12l2.44,2.79l-0.34,3.7 l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,12z M10.09,16.72l-3.8-3.81l1.48-1.48l2.32,2.33 l5.85-5.87l1.48,1.48L10.09,16.72z"/></g></svg>
                        <h3>{description.top_title}</h3>
                    </div>
                    <h2>{description.title}</h2>
                    {
                        description.content.map((paragraph, index)=> <p key={index}>{paragraph}</p>)
                    }
                    <Link href={description.cta.url}>
                        <a>{description.cta.title}</a>
                    </Link>
                </div>
            </section>

            <section className="marketing-grid">
                <div className="marketing-grid__content">
                    <h2>{google_ads.title}<span className="point-orange">.</span></h2>
                    {
                        google_ads.content.map((paragraph, index)=> <p key={index}>{paragraph}</p>)
                    }
                </div>
                <div className="marketing-grid__img">
                    <img src={google_ads.img.src} alt={google_ads.img.alt} />
                </div>
                
                {
                    google_ads.list.map((element,index)=>{
                        return(
                            <div className="marketing-grid__card-google" key={index}>
                                <div className="marketing-grid__card-google-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#f84525" transform="translate(0, 0) scale(1, 1) "><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></g></svg>
                                </div>
                                <h3>{element.title}</h3>
                                <p>{element.description}</p>
                            </div>
                        )
                    })
                }
            </section>

            <section className="marketing-grid marketing-grid__orange">
                
                
                <div className="marketing-grid__content ">
                    <h2>{google_analitycs.title}.</h2>
                    {
                        google_analitycs.content.map((paragraph, index)=> <p key={index}>{paragraph}</p>)
                    }
                </div>
                <div className="marketing-grid__img  marketing-grid__img-full">
                    <img src={google_analitycs.img.src} alt={google_analitycs.img.alt} />
                </div>
                
            </section>


            <section className="marketing-grid marketing-grid">
                <div className="marketing-grid__img">
                    <img src={social_ads.img.src} alt={social_ads.img.alt} />
                </div>
                
                <div className="marketing-grid__content">
                    <h2>{social_ads.title}<span className="point-orange">.</span></h2>
                    {
                        social_ads.content.map((paragraph, index)=> <p key={index}>{paragraph}</p>)
                    }
                </div>
                
                
                {
                    social_ads.list.map((element,index)=>{
                        return (
                            <div className="marketing-grid__card-social" key={index}>
                                <h3>{element.title}<span className="point-orange">.</span></h3>
                                <p>{element.description}</p>
                            </div>
                        )
                    })
                }

            </section>


            <section className="marketing-grid marketing-grid__black">
                
                
                <div className="marketing-grid__content">
                    <h2>{email_marketing.title}.</h2>
                    {
                        email_marketing.content.map((paragraph, index)=> <p key={index}>{paragraph}</p>)
                    }
                </div>
                <div className="marketing-grid__img  marketing-grid__img-full">
                    <img src={email_marketing.img.src} alt={email_marketing.img.alt} />
                </div>
                
                {
                    email_marketing.list.map((element,index)=>{
                        return (
                            <div className="marketing-grid__card-google" key={index}>
                                <div className="services-section__grid-element--icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#f84525" transform="translate(0, 0) scale(1, 1) "><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></g></svg>
                                </div>
                                <h3>{element.title}.</h3>
                                <p>{element.description}</p>
                            </div>
                        )
                    })
                }

            </section>

        </Layout>
    </div>
  )
}

export default marketing