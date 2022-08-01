
import React from 'react'
import Layout from '../components/global/Layout'
import EcommerceMobile from '../components/pages/ecommerce/EcommerceMobile';
import EcommercePlatforms from '../components/pages/ecommerce/EcommercePlatforms';
import BlackDescription from '../components/pages/sections/BlackDescription';
import ServiceCharacteristics from '../components/pages/sections/ServiceCharacteristics';
import ServiceHero from '../components/pages/sections/ServiceHero';
import EcommerceES from '../content/es/ecommerce.json';
import HeadComponent from "../components/global/HeadComponent";
import EcommercePayments from '../components/pages/ecommerce/EcommercePayments';
const ecommerce = ({data}) => {
  const { head, hero, description, services, mobile, payment, platforms } = data;

  return (
    <div>
        <HeadComponent title={head.title} description={head.description} />
        <Layout>
            <ServiceHero hero={hero}/>
            <BlackDescription description={description} />
            <ServiceCharacteristics services={services} />
            


            <EcommerceMobile mobile={mobile} />

            <EcommercePayments payment={payment} />

           <EcommercePlatforms platforms={platforms} />
        </Layout>
    </div>
  )
}

export default ecommerce


export async function getStaticProps(context) {
  const data = EcommerceES;

  return {
    props: {
      data
    },
  }
}