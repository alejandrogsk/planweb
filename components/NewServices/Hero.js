import React from 'react'

const Hero = ({title, content}) => {
  return (
    <section className="min-h-screen px-8 md:px-26 lg:px-48 pb-12 md:pb-28">
                    <h1 className="pt-32 lg:pt-40 mb-12 text-3xl md:text-4xl lg:text-5xl	font-medium">
                        {title.start}
                        <span className="underline-custom">
                            {title.end}
                        </span>
                    </h1>
                    {content.map((paragraph, i) => (
                        <p
                            className="mt-8 text-lg md:text-xl lg:text-2xl"
                            key={i}
                        >
                            {paragraph}
                        </p>
                    ))}
                </section>
  )
}

export default Hero