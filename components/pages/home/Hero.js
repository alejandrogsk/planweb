import Link from "next/link";
import React from "react";
import {motion} from 'framer-motion';
const Hero = ({ hero }) => {
    return (
        <section className="home-hero">
            <div className="home-container">
                <motion.h1 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: "100px" }
                  }}
                >
                    <motion.span
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                      transition={{ duration: 1.2 }}
                      variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: "100px" }
                      }}
                    >
                        {hero.title[1]} 
                    </motion.span>
                    <br />
                    <motion.span 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                      transition={{ duration: 1.4 }}
                      variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: "100px" }
                      }}
                    className="orange-text">{hero.title[2]}.</motion.span>
                </motion.h1>
                <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                  transition={{ duration: 1.6 }}
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
                      transition={{ duration: 1.6 }}
                      variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: "50px" }
                      }}
                    >{hero.cta.title}</motion.a>
                </Link>
            </div>
            <svg
                width="220"
                height="220"
                viewBox="0 0 220 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_981_84)">
                    <rect x="7" width="5" height="5" rx="2.5" fill="#F84525" />
                    <rect
                        x="107"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect x="27" width="5" height="5" rx="2.5" fill="#F84525" />
                    <rect
                        x="127"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect x="47" width="5" height="5" rx="2.5" fill="#F84525" />
                    <rect
                        x="147"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect x="67" width="5" height="5" rx="2.5" fill="#F84525" />
                    <rect
                        x="167"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect x="87" width="5" height="5" rx="2.5" fill="#F84525" />
                    <rect
                        x="187"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="207"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="7"
                        y="24"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="107"
                        y="24"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="27"
                        y="24"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="127"
                        y="24"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="47"
                        y="24"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="147"
                        y="24"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="67"
                        y="24"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="167"
                        y="24"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="87"
                        y="24"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="187"
                        y="24"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="207"
                        y="24"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="7"
                        y="48"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="107"
                        y="48"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="27"
                        y="48"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="127"
                        y="48"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="47"
                        y="48"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="147"
                        y="48"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="67"
                        y="48"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="167"
                        y="48"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="87"
                        y="48"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="187"
                        y="48"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="207"
                        y="48"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="7"
                        y="72"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="107"
                        y="72"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="27"
                        y="72"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="127"
                        y="72"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="47"
                        y="72"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="147"
                        y="72"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="67"
                        y="72"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="167"
                        y="72"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="87"
                        y="72"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="187"
                        y="72"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="207"
                        y="72"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="7"
                        y="92"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="107"
                        y="92"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="27"
                        y="92"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="127"
                        y="92"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="47"
                        y="92"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="147"
                        y="92"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="67"
                        y="92"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="167"
                        y="92"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="87"
                        y="92"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="187"
                        y="92"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="207"
                        y="92"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="7"
                        y="116"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="107"
                        y="116"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="27"
                        y="116"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="127"
                        y="116"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="47"
                        y="116"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="147"
                        y="116"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="67"
                        y="116"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="167"
                        y="116"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="87"
                        y="116"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="187"
                        y="116"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="207"
                        y="116"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="7"
                        y="140"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="107"
                        y="140"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="27"
                        y="140"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="127"
                        y="140"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="47"
                        y="140"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="147"
                        y="140"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="67"
                        y="140"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="167"
                        y="140"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="87"
                        y="140"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="187"
                        y="140"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="207"
                        y="140"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="7"
                        y="164"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="107"
                        y="164"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="27"
                        y="164"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="127"
                        y="164"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="47"
                        y="164"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="147"
                        y="164"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="67"
                        y="164"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="167"
                        y="164"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="87"
                        y="164"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="187"
                        y="164"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="207"
                        y="164"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="9"
                        y="184"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="109"
                        y="184"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="29"
                        y="184"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="129"
                        y="184"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="49"
                        y="184"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="149"
                        y="184"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="69"
                        y="184"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="169"
                        y="184"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="89"
                        y="184"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="189"
                        y="184"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="209"
                        y="184"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="9"
                        y="208"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="109"
                        y="208"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="29"
                        y="208"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="129"
                        y="208"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="49"
                        y="208"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="149"
                        y="208"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="69"
                        y="208"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="169"
                        y="208"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="89"
                        y="208"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="189"
                        y="208"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                    <rect
                        x="209"
                        y="208"
                        width="5"
                        height="5"
                        rx="2.5"
                        fill="#F84525"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_981_84">
                        <rect width="220" height="220" rx="110" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </section>
    );
};

export default Hero;
