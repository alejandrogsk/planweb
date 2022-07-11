import React from 'react'
import {motion} from 'framer-motion';


//optional design is used in websites page for the gray BG
const ServiceCharacteristics = ({services, optonalDesign}) => {
  return (
    <section className={`services-section ${optonalDesign}`}>
    <motion.h2
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: "50px" }
      }}
    >
        {services.title}<span className="point-orange">.</span>
    </motion.h2>
    <div className="services-section__grid">
    {
        services.content.map((service, index)=> {
            return(
                <motion.div 
                initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: "50px" }
      }}
                key={index} className="services-section__grid-element"
                >
                    <div className="services-section__grid-element--icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#f84525" transform="translate(0, 0) scale(1, 1) "><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></g></svg>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </motion.div>
            )
        })
    }
    </div>
    </section>
  )
}

export default ServiceCharacteristics