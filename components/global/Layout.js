import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

const menues = {
    es: {
        cta: {
            title: "Contactanos Ahora",
            link: "/contacto",
        },
        menu: [
            { title: "Inicio", link: "/", child: false },
            { title: "Ecommerce", link: "/ecommerce", child: false },
            { title: "Marketing", link: "/publicidad-digital", child: true, childrens: [
                { title: "Publicidad En Redes", link: "/publicidad-en-redes-sociales" },
                { title: "Google Ads", link: "/publicidad-en-google" },
                { title: "Email Marketing", link: "/email-marketing" }
                ]
            },
            { title: "Sitios Web", link: "/disenio-y-desarrollo-web", child: false },
            { title: "Contacto", link: "/contacto", child: false },
        ],
    },
    en: {
        cta: {
            title: "Contact us now",
            link: "/contact",
        },
        menu: [
            { title: "Home", link: "/", child:false },
            //{ title: "Design", link: "/identidad-visual" },
            { title: "Ecommerce", link: "/ecommerce", child:false },
            { title: "Websites", link: "/websites", child:false },
            { title: "Marketing", link: "/marketing", child:false },
        ],
    },
};
const Layout = ({ children }) => {
    const menu = menues.es;
    return (
        <>
            <Navigation menu={menu.menu} cta={menu.cta} />
            <main className="max-w-[1540px] mx-auto">
            {children}
            </main>
            <Footer menu={menu.menu} />
        </>
    );
};

export default Layout;
