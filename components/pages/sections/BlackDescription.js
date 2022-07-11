import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const BlackDescription = ({ description }) => {
    return (
        <section className="black-section">
            <div className="black-section__img">
                <motion.img
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: "100px" },
                    }}
                    src={description.img.src}
                    alt={description.img.alt}
                />
            </div>
            <div className="black-section__content">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: "100px" },
                    }}
                    className="black-section__content-verified"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            fill="#f84525"
                            transform="translate(0, 0) scale(1, 1) "
                        >
                            <path d="M23,12l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,12l2.44,2.79l-0.34,3.7 l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,12z M10.09,16.72l-3.8-3.81l1.48-1.48l2.32,2.33 l5.85-5.87l1.48,1.48L10.09,16.72z" />
                        </g>
                    </svg>
                    <h3>{description.top_title}</h3>
                </motion.div>
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: "100px" },
                    }}
                >
                    {description.title}
                </motion.h2>
                {description.content.map((paragraph, index) => {
                    return (
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: "100px" },
                            }}
                            key={index}
                        >
                            {paragraph}
                        </motion.p>
                    );
                })}
                <Link href={description.cta.url}>
                    <motion.a
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: "50px" },
                        }}
                    >
                        {description.cta.title}
                    </motion.a>
                </Link>
            </div>
        </section>
    );
};

export default BlackDescription;
