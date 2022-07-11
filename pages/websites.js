import Head from "next/head";
import React from "react";
import Layout from "../components/global/Layout";
import WebsitesES from "../content/es/websites.json";
import ServiceHero from "../components/pages/sections/ServiceHero";
import BlackDescription from "../components/pages/sections/BlackDescription";
import ServiceCharacteristics from "../components/pages/sections/ServiceCharacteristics";
import ServiceSquares from "../components/pages/sections/ServiceSquares";

const websites = () => {
    const { hero, description, services, websites } = WebsitesES;

    return (
        <div>
            <Head></Head>

            <Layout>
                <ServiceHero hero={hero} />
                <BlackDescription description={description} />
                <ServiceCharacteristics
                    services={services}
                    optonalDesign={"websites-services-section"}
                />
                <ServiceSquares elements={websites} />
            </Layout>
        </div>
    );
};

export default websites;
