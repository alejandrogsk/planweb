import React from 'react'
import { motion } from "framer-motion";
const EcommerceMobile = ({mobile}) => {
  return (
    <section className="ecommerce-mobile">

                <motion.div
                
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 transition={{ duration: 1 }}
                 variants={{
                     visible: { opacity: 1, x: 0 },
                     hidden: { opacity: 0, x: "-200px" },
                 }}
                 className="ecommerce-mobile__content"
                >
                  <h2>{mobile.title}</h2>
                  <p>{mobile.subtitle}</p>
                </motion.div>
                <motion.div
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 transition={{ duration: 1 }}
                 variants={{
                     visible: { opacity: 1, y: 0 },
                     hidden: { opacity: 0, y: "200px" },
                 }}
                className="ecommerce-mobile__img">
                  <img src={mobile.img.src} alt={mobile.img.alt} />
                </motion.div>
                <motion.div        
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 transition={{ duration: 1 }}
                 variants={{
                     visible: { opacity: 1, x: 0 },
                     hidden: { opacity: 0, x: "200px" },
                 }}
                 className="ecommerce-mobile__content">
                  <h3>{mobile.title_two}</h3>
                  <p>{mobile.subtitle_two}</p>
                </motion.div>


            </section>
  )
}

export default EcommerceMobile