import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroHome = ({heroContent}) => {
  return (
<section className="home-hero-large grid grid-cols-1 pt-32 pb-32 md:pb-60 px-6 md:px-12 lg:px-16 overflow-x-hidden">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium	 relative text-center md:text-start">
                    Aumentá las <span className="underline-custom">ventas</span>{" "}
                    de tu negocio <br className="hidden lg:inline" />a travéz de{" "}
                    <span className="underline-custom  hidden smph:inline">
                        canales digitales
                    </span>
                    <span className="underline-custom inline smph:hidden ">
                        canales
                    </span>{" "}
                    <span className="underline-custom  inline smph:hidden ">
                        digitales
                    </span>
                </h1>

                <p className="text-black pt-6 pb-12 text-center md:text-start text-xl md:text-2xl w-full md:max-w-[80%] lg:max-w-[75%]">
                    Somos una agencia digital ubicada en Crespo, Entre Ríos.
                    Nuestras soluciones incluyen diseño y desarrollo de sitios
                    web, tiendas online y campañas de publicidad digital.
                </p>

                <div className="w-full flex flex-col md:flex-row flex-col-reverse">
                    <Link href="/contacto" legacyBehavior>
                        <a className="flex justify-center items-center m-auto md:m-0 custom-btn-cta font-medium">
                            <span>Contactanos Ahora</span>
                            <svg width="13px" height="10px" viewBox="0 0 13 10">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </a>
                    </Link>
                </div>
            </section>
  )
}

export default HeroHome