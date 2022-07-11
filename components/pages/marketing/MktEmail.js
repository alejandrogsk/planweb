import React from 'react'
import { motion } from "framer-motion";
const MktEmail = ({email_marketing}) => {
  return (
    <section className="marketing-grid marketing-grid__black">
                
                
    <div className="marketing-grid__content">
        <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: "50px" },
        }}
        >{email_marketing.title}<span className="point-orange">.</span></motion.h2>
        {
            email_marketing.content.map((paragraph, index)=>( 
            <motion.p
            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: "50px" },
                            }} 
            key={index}>{paragraph}</motion.p>
            ))
        }
    </div>
    <div className="marketing-grid__img  marketing-grid__img-full">
        <motion.img
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: "50px" },
        }}
        src={email_marketing.img.src} alt={email_marketing.img.alt} />
    </div>
    
    {
        email_marketing.list.map((element,index)=>{
            return (
                <motion.div
                initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: "50px" },
                            }} 
                className="marketing-grid__card-google" key={index}>
                    <div className="services-section__grid-element--icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#f84525" transform="translate(0, 0) scale(1, 1) "><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></g></svg>
                    </div>
                    <h3>{element.title}.</h3>
                    <p>{element.description}</p>
                </motion.div>
            )
        })
    }

</section>
  )
}

export default MktEmail