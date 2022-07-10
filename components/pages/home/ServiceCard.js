import React from 'react'
import Link from "next/link";

import { motion } from 'framer-motion';

const ServiceCard = ({service}) => {


  return (
    <div
    
    className="home-service">
    <motion.img 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: "150px" }
      }}
    src={service.img.src} alt={service.img.alt} />

    <motion.div  className="home-service__card"
    
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
      transition={{ duration: .7 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: "100px" }
      }}
    >
        {/* <span>{service.top_title}</span> */}
        <img  src={service.icon.url} alt={service.icon.alt} />
        <h2>{service.title}</h2>
        <p>{service.content}</p>
        <Link href={service.cta.url}>
            <a className="btn-secondary">{service.cta.title}</a>
        </Link>
    </motion.div>
</div>
  )
}

export default ServiceCard