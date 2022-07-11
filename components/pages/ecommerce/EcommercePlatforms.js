import React from "react";
import { motion } from "framer-motion";
const EcommercePlatforms = ({ platforms }) => {
    return (
        <section className="ecommerce-platforms">
            <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: "100px" },
                }}
            >
                {platforms.title}
                <span className="point-orange">.</span>
            </motion.h2>

            <div className="ecommerce-platforms__grid">
                {platforms.list.map((platform, index) => {
                    let durationMs = index * 2;

                    return (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: `1.${durationMs}` }}
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: "100px" },
                            }}
                            key={index}
                        >
                            <img
                                src={platform.img.src}
                                alt={platform.img.alt}
                            />
                            <p>{platform.content}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default EcommercePlatforms;
