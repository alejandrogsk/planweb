
import React from 'react'
import Layout from '../components/global/Layout';
import MarketingES from '../content/es/marketing.json';
import ServiceHero from '../components/pages/sections/ServiceHero';
import BlackDescription from '../components/pages/sections/BlackDescription';
const marketing = () => {
    const { hero, description, google_ads, google_analitycs, social_ads, email_marketing } = MarketingES;


  return (
    <div>
        <Layout>

            <ServiceHero  hero={hero}/>
            <BlackDescription description={description} />


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
                    <h2>{email_marketing.title}<span className="point-orange">.</span></h2>
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