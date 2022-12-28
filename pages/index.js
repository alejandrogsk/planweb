import Image from "next/image";
import React from "react";
import HomeEs from "../content/es/home.json";
import Layout from "../components/global/Layout";
import HeadComponent from "../components/global/HeadComponent";
import CtaRegular from "../components/Services/CtaRegular";
import HeroHome from "../components/home/HeroHome";
import Link from "next/link";
import HomeProcess from "../components/home/HomeProcess";
import HomeServices from "../components/home/HomeServices";

const Home = ({ data }) => {
    const { heroContent, how_we_work, home_services, head } = data;
    return (
        <div>
            <HeadComponent title={head.title} description={head.description} />
            <Layout>
<HeroHome />
<HomeProcess how_we_work={how_we_work} />
<HomeServices home_services={home_services} />


                {/**CTA */}
                <section className="grid grid-cols-1 content-center	justify-items-center bg-primary px-6 md:px-12 lg:px-16  py-16 md:py-24 lg:py-36">
                    <h2 className="text-center md:text-start text-3xl md:text-4xl lg:text-5xl	font-medium ">¡Queremos conocer tu proyecto!</h2>
                    <p className="text-center text-xl md:text-2xl pt-6 pb-10 max-w-100 md:max-w-[80%] lg:max-w-[70%]">No dudes en contactarnos con cualquier pregunta o inquietud que puedas tener. Nos encantaría hablar sobre tu proyecto con más detalle.</p>
                    <Link href="/contacto" legacyBehavior>
                        <a class="flex justify-center items-center m-auto md:m-0 custom-btn-cta-white font-medium">
  <span>Consulta Gratuitá</span>
  <svg width="13px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</a>
                   
                    </Link>
                    
                </section>
            </Layout>
        </div>
    );
};

export default Home;

export async function getStaticProps(context) {
  const data = HomeEs;
  return {
    props: {
      data
    }
  };
}
