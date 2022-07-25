import Link from "next/link";
import React from "react";
import {motion} from 'framer-motion';

const motionVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: "100px" },

}

const Hero = ({ hero }) => {
    return (
        <section className="home-hero">
            <div className="home-container">
                <motion.h1 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  variants={motionVariant}
                >
                    <motion.span
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      variants={motionVariant}
                    >
                        {hero.title[1]} 
                    </motion.span>
                    <br />
                    <motion.span 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                      transition={{ duration: 1}}
                      variants={motionVariant}
                    className="orange-text">{hero.title[2]}.</motion.span>
                </motion.h1>
                <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: "100px" }
                  }}
                >{hero.sutitle}</motion.p>
                <Link href={hero.cta.url}>
                    <motion.a
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: "50px" }
                      }}
                    >
                        {hero.cta.title}
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13.3147 5.83244C13.0967 6.05569 12.9746 6.35537 12.9746 6.66744C12.9746 6.97951 13.0967 7.2792 13.3147 7.50244L25.4972 19.9999L13.3147 32.4949C13.0967 32.7182 12.9746 33.0179 12.9746 33.3299C12.9746 33.642 13.0967 33.9417 13.3147 34.1649C13.4207 34.2738 13.5475 34.3603 13.6874 34.4194C13.8274 34.4785 13.9778 34.5089 14.1297 34.5089C14.2817 34.5089 14.4321 34.4785 14.572 34.4194C14.712 34.3603 14.8388 34.2738 14.9447 34.1649L27.8997 20.8724C28.1273 20.639 28.2546 20.3259 28.2546 19.9999C28.2546 19.674 28.1273 19.3609 27.8997 19.1274L14.9447 5.83494C14.8388 5.72608 14.712 5.63956 14.572 5.58048C14.4321 5.5214 14.2817 5.49097 14.1297 5.49097C13.9778 5.49097 13.8274 5.5214 13.6874 5.58048C13.5475 5.63956 13.4207 5.72608 13.3147 5.83494V5.83244Z"
                                fill="#F84525"
                            />
                        </svg>
                    </motion.a>
                </Link>
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
    );
};

export default Hero;
