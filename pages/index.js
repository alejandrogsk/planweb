import React from "react";
import HomeEs from "../content/es/home.json";
import Layout from "../components/global/Layout";
import HeadComponent from "../components/global/HeadComponent";
import HeroHome from "../components/home/HeroHome";
import dynamic from "next/dynamic";
const LazyProcess = dynamic(() => import("../components/home/HomeProcess"));
const LazyServices = dynamic(() => import("../components/home/HomeServices"));
const LazyCta = dynamic(() => import("../components/home/HomeCta"));
const Home = ({ data }) => {
    const { how_we_work, home_services, head } = data;
    return (
        <div>
            <HeadComponent title={head.title} description={head.description} />
            <Layout>
                <HeroHome />
                <LazyProcess how_we_work={how_we_work} />
                <LazyServices home_services={home_services} />
                <LazyCta />
            </Layout>
        </div>
    );
};

export default Home;

export async function getStaticProps(context) {
    const data = HomeEs;
    return {
        props: {
            data,
        },
    };
}
