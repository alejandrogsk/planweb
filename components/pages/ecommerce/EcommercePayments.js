import React from "react";
import { motion } from "framer-motion";
const EcommercePayments = ({ payment }) => {
    return (
        <section className="ecommerce-payments">
            <h2>
                {payment.title}
                <span className="point-orange">.</span>
            </h2>
            <div className="ecommerce-payments__grid">
                {payment.sistems.map((element, index) => {
                    let durationMs = index + 3;
                    return (
                        <motion.img
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: `1.${durationMs}` }}
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: "50px" },
                            }}
                            key={index}
                            src={element.src}
                            alt={element.alt}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default EcommercePayments;
