
import Layout from "../components/global/Layout";
import HomerES from "../content/es/home.json";
import Hero from "../components/pages/home/Hero";
import Services from "../components/pages/home/Services";
import HeadComponent from "../components/global/HeadComponent";

export default function Home() {
    const { head, hero, services, blog } = HomerES;

    return (
        <div>
            {/* {Debo crear un componente aparte para el head} */}
            <HeadComponent title={head.title} description={head.description} />

            <Layout>
                <Hero hero={hero} />

                <Services services={services} />
            </Layout>
        </div>
    );
}
