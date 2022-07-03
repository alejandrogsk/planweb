
import React from 'react'
import Footer from './Footer';
import Navigation from './Navigation'
const menues = {
    es: {
        cta: {
            title:"Contactanos Ahora",
            link:"/contact"
        },
        menu: [
            { title: "Inicio", link: "/" },
            { title: "Diseño", link: "/identidad-visual" },
            { title: "Ecommerce", link: "/ecommerce" },
            { title: "Websites", link: "/websites" },
            { title: "Marketing", link: "/marketing" },
        ]
    },
    en: {
        cta: {
            title:"Contact us now",
            link:"/contact"
        },
        menu: [
            { title: "Home", link: "/" },
            { title: "Design", link: "/identidad-visual" },
            { title: "Ecommerce", link: "/ecommerce" },
            { title: "Websites", link: "/websites" },
            { title: "Marketing", link: "/marketing" },
        ]
    }
    
}
const Layout = ({ children }) => {

 const menu = menues.es;
  return (
    <>
        <Navigation menu={menu.menu} cta={menu.cta} />
            <main>
                {children}
            </main>
        <Footer menu={menu.menu} />
    </>
  )
}

export default Layout