import React from "react";
import Layout from "../components/global/Layout";
import ContactES from "../content/es/contact.json";
import ContactForm from "../components/contact/ContactForm";
import HeadComponent from "../components/global/HeadComponent";
const Contact = () => {
    const { head, title, content, form_fields } = ContactES;


    return (
        <div>
            <HeadComponent title={head.title} description={head.description} />
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

