import Image from 'next/image'
import React from 'react'

/**
 * 
 * @param {array}
 * @returns React Component
 */
const Logos = ({logos}) => {
  return (
    <section className="common-service__logos px-8 md:px-0 flex flex-wrap items-center justify-center gap-4 md:gap-12 lg:gap-16 ">
        {
            logos.map((logo, i) => (
                <div key={i}>
                    <Image 
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        layout="intrinsic"
                    />
               </div>
            ))
        }
    </section>
  )
}

export default Logos