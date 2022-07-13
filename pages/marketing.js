import React from 'react'
import Layout from '../components/global/Layout';
import MarketingES from '../content/es/marketing.json';
import ServiceHero from '../components/pages/sections/ServiceHero';
import BlackDescription from '../components/pages/sections/BlackDescription';
import MktGoogle from '../components/pages/marketing/MktGoogle';
import MktFacebook from '../components/pages/marketing/MktFacebook';
import MktAnalitycs from '../components/pages/marketing/MktAnalitycs';
import MktEmail from '../components/pages/marketing/MktEmail';
import HeadComponent from '../components/global/HeadComponent';



const marketing = () => {
    const { head, hero, description, google_ads, google_analitycs, social_ads, email_marketing } = MarketingES;


  return (
    <div>
      <HeadComponent title={head.title} description={head.description} />
        <Layout> 
            <ServiceHero  hero={hero}/>
            <BlackDescription description={description} />
            <MktGoogle google_ads={google_ads}/>
            <MktAnalitycs google_analitycs={google_analitycs} />
            <MktFacebook social_ads={social_ads} />
            <MktEmail email_marketing={email_marketing} />
            


            


            

        </Layout>
    </div>
  )
}

export default marketing