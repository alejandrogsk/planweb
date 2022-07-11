import React from "react";
import Layout from "../components/global/Layout";
import Head from "next/head";
import ContactES from "../content/es/contact.json";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
    const { title, content, form_fields } = ContactES;


    return (
        <div>
            <Head>
                <title>Agencia en crespo entre ríos.</title>
                <meta
                    name="description"
                    content="Agencia de desarrollo web en crespo entre rios."
                />
            </Head>
            <Layout>
                <section className="contact">

                    <div className="contact__img">
                        <img  src="/goodvibes.jpg" />
                    </div>

                    <div className="contact__content">
                        <h1>
                            {title}
                            <span className="point-orange">.</span>
                        </h1>
                        <p>{content}</p>
                    <ContactForm form_fields={form_fields} />
                    </div>

                </section>
            </Layout>
        </div>
    );
};

export default Contact;

