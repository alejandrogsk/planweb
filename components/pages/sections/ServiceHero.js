import React from 'react'
import {motion} from 'framer-motion'
const ServiceHero = ({hero}) => {
  return (
    <section className="service-hero">
                <div>
                    <motion.h1
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        variants={{
                          visible: { opacity: 1, y: 0 },
                          hidden: { opacity: 0, y: "100px" }
                        }}
                    >{hero.title}<span className="point-orange">.</span></motion.h1>
                    <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                      transition={{ duration: 1.2 }}
                      variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: "100px" }
                      }}
                    >{hero.subtitle}</motion.h2>
                    <div>
                    {
                        hero.content.map((paragraph, index)=> {
                          let duration = index+1*2;
                          return(
                            <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                          transition={{ duration: `1.${duration}`}}
                          variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: "100px" }
                          }}
                        key={index}>
                          {paragraph}
                        </motion.p>
                          )
                        })
                    }
                    </div>
                </div>

                <svg width="186" height="77" viewBox="0 0 186 77" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="100" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="20" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="120" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="40" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="140" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="60" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="160" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="80" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="180" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect y="24" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="100" y="24" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="20" y="24" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="120" y="24" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="40" y="24" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="140" y="24" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="60" y="24" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="160" y="24" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="80" y="24" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="180" y="24" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect y="48" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="100" y="48" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="20" y="48" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="120" y="48" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="40" y="48" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="140" y="48" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="60" y="48" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="160" y="48" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="80" y="48" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="180" y="48" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect y="72" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="100" y="72" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="20" y="72" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="120" y="72" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="40" y="72" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="140" y="72" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="60" y="72" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="160" y="72" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="80" y="72" width="5" height="5" rx="2.5" fill="#F84525"/>
<rect x="180" y="72" width="5" height="5" rx="2.5" fill="#F84525"/>
</svg>

            </section>
  )
}

export default ServiceHero