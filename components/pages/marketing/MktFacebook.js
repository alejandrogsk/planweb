import React from 'react'
import { motion } from "framer-motion";
const MktFacebook = ({social_ads}) => {
  return (
    <section className="marketing-grid marketing-grid">
                <div className="marketing-grid__img">
                    <motion.img  
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: "50px" },
                    }}
                    src={social_ads.img.src} alt={social_ads.img.alt} />
                </div>
                
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
                    >{social_ads.title}<span className="point-orange">.</span></motion.h2>
                    {
                        social_ads.content.map((paragraph, index)=> (
                        <motion.p initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: "50px" },
                        }}key={index}>{paragraph}</motion.p>
                        ))
                    }
                </div>
                
                
                {
                    // social_ads.list.map((element,index)=>{
                    //     return (
                    //         <motion.div 
                    //         initial="hidden"
                    //         whileInView="visible"
                    //         viewport={{ once: true }}
                    //         transition={{ duration: 1 }}
                    //         variants={{
                    //             visible: { opacity: 1, y: 0 },
                    //             hidden: { opacity: 0, y: "50px" },
                    //         }}
                    //         className="marketing-grid__card-social" key={index}>
                    //             <h3>{element.title}<span className="point-orange">.</span></h3>
                    //             <p>{element.description}</p>
                    //         </motion.div>
                    //     )
                    // })
                }

            </section>
  )
}

export default MktFacebook