import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const menues = {
    es: {
        cta: {
            title: "Contactanos Ahora",
            link: "/contact",
        },
        menu: [
            { title: "Inicio", link: "/" },
            //{ title: "Diseño", link: "/identidad-visual" },
            { title: "Ecommerce", link: "/ecommerce" },
            { title: "Websites", link: "/websites" },
            { title: "Marketing", link: "/marketing" },
        ],
    },
    en: {
        cta: {
            title: "Contact us now",
            link: "/contact",
        },
        menu: [
            { title: "Home", link: "/" },
            //{ title: "Design", link: "/identidad-visual" },
            { title: "Ecommerce", link: "/ecommerce" },
            { title: "Websites", link: "/websites" },
            { title: "Marketing", link: "/marketing" },
        ],
    },
};
const Layout = ({ children }) => {
    const menu = menues.es;
    const router = useRouter()
    return (
        <>
            <Navigation menu={menu.menu} cta={menu.cta} />
            <AnimatePresence>
                <motion.main
                className="main-global"
                    key={router.route}
                    initial="pageInitial"
                    animate="pageAnimate"
                    
                    variants={{
                        pageInitial: {
                            opacity: 0,
                        },
                        pageAnimate: {
                            opacity: 1,
                        },
                        pageExit: {
                            opacity:0
                        }
                    }}
                    transition={{ 
                        duration: .5,
                        type: "tween",
                        
                    }}

                    
                >
                    {children}
                </motion.main>
            </AnimatePresence>
            <Footer menu={menu.menu} />
        </>
    );
};

export default Layout;
