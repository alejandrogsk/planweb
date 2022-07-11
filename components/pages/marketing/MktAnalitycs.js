import React from 'react'
import { motion } from "framer-motion";
const MktAnalitycs = ({google_analitycs}) => {
  return (
    <section className="marketing-grid marketing-grid__orange">
                
                
                <div className="marketing-grid__content ">
                    <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: "50px" },
                    }}
                    >{google_analitycs.title}.</motion.h2>
                    {
                        google_analitycs.content.map((paragraph, index)=> (
                            <motion.p initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: "50px" },
                            }} key={index}>{paragraph}</motion.p>
                        ))
                    }
                </div>
                <div className="marketing-grid__img  marketing-grid__img-full">
                    <motion.img initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: "50px" },
                    }} src={google_analitycs.img.src} alt={google_analitycs.img.alt} />
                </div>
                
            </section>
  )
}

export default MktAnalitycs