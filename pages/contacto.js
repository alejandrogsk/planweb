import React from "react";
import ContactForm from "../components/contact/ContactForm";
import ContactEs from "../content/es/contact.json";

import Layout from "../components/global/Layout";
import HeadComponent from "../components/global/HeadComponent";
const Contacto = ({ data }) => {
    const { head, title, content, form_fields } = data;

    return (
        <div>
            <HeadComponent title={head.title} description={head.description} />
            <Layout>
                <section className="common-service__hero min-h-screen px-8 md:px-26 lg:px-48 relative ">
                    <h1 className="text-center pt-32 lg:pt-40 mb-12 text-2xl md:text-4xl lg:text-5xl	font-semibold uppercase">
                        {title}
                    </h1>

                    <p className="text-center mt-8 text-lg md:text-xl lg:text-2xl">
                        {content}
                    </p>

                    <ContactForm form_fields={form_fields} />

                    <span className="contact-square-1 bg-yellow-900"></span>
                    {/*<span className="contact-square-2 bg-yellow-700"></span> */}
                </section>
            </Layout>
        </div>
    );
};

export default Contacto;

export async function getStaticProps(context) {
    const data = ContactEs;

    return {
        props: {
            data,
        },
    };
}
