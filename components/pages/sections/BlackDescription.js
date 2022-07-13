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

                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3147 5.83244C13.0967 6.05569 12.9746 6.35537 12.9746 6.66744C12.9746 6.97951 13.0967 7.2792 13.3147 7.50244L25.4972 19.9999L13.3147 32.4949C13.0967 32.7182 12.9746 33.0179 12.9746 33.3299C12.9746 33.642 13.0967 33.9417 13.3147 34.1649C13.4207 34.2738 13.5475 34.3603 13.6874 34.4194C13.8274 34.4785 13.9778 34.5089 14.1297 34.5089C14.2817 34.5089 14.4321 34.4785 14.572 34.4194C14.712 34.3603 14.8388 34.2738 14.9447 34.1649L27.8997 20.8724C28.1273 20.639 28.2546 20.3259 28.2546 19.9999C28.2546 19.674 28.1273 19.3609 27.8997 19.1274L14.9447 5.83494C14.8388 5.72608 14.712 5.63956 14.572 5.58048C14.4321 5.5214 14.2817 5.49097 14.1297 5.49097C13.9778 5.49097 13.8274 5.5214 13.6874 5.58048C13.5475 5.63956 13.4207 5.72608 13.3147 5.83494V5.83244Z" fill="#F84525"/>
</svg>
                    </motion.a>
                </Link>
            </div>
        </section>
    );
};

export default BlackDescription;
