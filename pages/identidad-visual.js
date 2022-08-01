import React from 'react'
import Layout from '../components/global/Layout'
import DesignES from '../content/es/design.json';

import ServiceHero from '../components/pages/sections/ServiceHero';
import BlackDescription from '../components/pages/sections/BlackDescription';
import ServiceCharacteristics from '../components/pages/sections/ServiceCharacteristics';

import HeadComponent from "../components/global/HeadComponent";
const identidadVisual = ({data}) => {

    const { head, hero, description, services } = data;
  return (
    <div>
        <HeadComponent title={head.title} description={head.description} />

        <Layout>
            <ServiceHero hero={hero} />
            <BlackDescription description={description} />
            <ServiceCharacteristics services={services}/>
        </Layout>

    </div>
  )
}

export default identidadVisual

export async function getStaticProps(context) {
  const data = DesignES;

  return {
    props: {
      data
    },
  }
}