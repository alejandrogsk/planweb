import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeLargeWithMethodology = ({how_we_work}) => {


  return (
    <>
    <section className="home-hero-large grid grid-cols-1 pt-32 pb-32 md:pb-60 px-6 md:px-12 lg:px-16 overflow-x-hidden">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase relative text-center md:text-start">Aumentá las <span className="underline-custom">ventas</span> de tu negocio <br className="hidden lg:block"/>a travéz de medios digitales</h1>
        <p className="text-black pt-6 pb-12 text-center md:text-start text-xl md:text-2xl">Somos una agencia digital ubicada en Crespo, Entre Ríos. <br className="hidden md:block" /> Nos dedicamos al diseño y desarrollo de sitios Web, Ecommerce y Publicidad Digital.</p>

        <div className="w-full flex flex-col md:flex-row flex-col-reverse">
           <Link href="/contacto">
           <a className="inline-block bg-primary px-6 py-4 uppercase text-lg md:text-xl hover:bg-[#181818] text-black hover:text-white text-center">Contactanos Ahora</a>
           </Link>
            <ul className="ml-0 md:ml-12 lg:ml-32 flex items-start items-center flex-col md:flex-row gap-4 mb-12 md:mb-0">
                <li className="text-xl md:text-3xl flex font-poppins items-center mr-0 md:mr-2 lg:mr-4">
                    <svg className="h-5 md:h-6 h-5 md:w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 2v9h9v2h-9v9h-2v-9h-9v-2h9v-9h2zm2-2h-6v9h-9v6h9v9h6v-9h9v-6h-9v-9z"/></svg>
                    Visitas
                </li>
                <li className="text-xl md:text-3xl flex font-poppins items-center mr-0 md:mr-2  lg:mr-4">
                    <svg className="h-5 md:h-6 h-5 md:w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 2v9h9v2h-9v9h-2v-9h-9v-2h9v-9h2zm2-2h-6v9h-9v6h9v9h6v-9h9v-6h-9v-9z"/></svg>
                    Clientes
                </li>
                <li className="text-xl md:text-3xl flex font-poppins items-center mr-0 md:mr-2 lg:mr-4">
                    <svg className="h-5 md:h-6 h-5 md:w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 2v9h9v2h-9v9h-2v-9h-9v-2h9v-9h2zm2-2h-6v9h-9v6h9v9h6v-9h9v-6h-9v-9z"/></svg>
                    Beneficios
                </li>
            </ul>
        </div>
    </section>
    
    <section className="px-[2.5%] md:px-[5%] grid grid-cols-1 bg-primary pb-12 md:pb-24">
        <div className="relative w-full -translate-y-[20px] md:-translate-y-[75px]">
            <Image
                height={463} width={1425}
                layout="intrinsic"
                alt="Nuestro Equipo"
                src={'/assets/team.png'}
            />
        </div>

        {/* <h2 class="text-white text-center md:text-start text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-8 mt-8 md:mt-4 lg:mt-0">{how_we_work.title}</h2>
        <div className="grid gap-6 md:gap-3 lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                how_we_work.list.map((method, i) =>(
<div className="relative py-6 px-4" key={i}>
                <span className="absolute top-0 left-0 text-5xl lg:text-7xl font-bold uppercase text-[#ffffff91] z-[1]">{method.number}</span>
                <h3 className="text-xl md:text-2xl uppercase font-semibold z-10 mt-3 md:mt-6 mb-2 relative">{method.title}</h3>
                <p className="text-lg md:text-xl">{method.content}</p>
            </div>
                ))
            }
            
            
        </div> */}


        {/**SVG */}
        <svg className="hidden absolute md:block bottom-32 max-w-[100px] right-8 rotate-[90deg]"  width="126" height="74" viewBox="0 0 126 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_531_95)">
<rect x="126" width="5" height="5" rx="2.5" transform="rotate(90 126 0)" fill="#323232"/>
<rect x="45" width="5" height="5" rx="2.5" transform="rotate(90 45 0)" fill="#323232"/>
<rect x="5" width="5" height="5" rx="2.5" transform="rotate(90 5 0)" fill="#323232"/>
<rect x="85" width="5" height="5" rx="2.5" transform="rotate(90 85 0)" fill="#323232"/>
<rect x="126" y="33" width="5" height="5" rx="2.5" transform="rotate(90 126 33)" fill="#323232"/>
<rect x="45" y="33" width="5" height="5" rx="2.5" transform="rotate(90 45 33)" fill="#323232"/>
<rect x="5" y="33" width="5" height="5" rx="2.5" transform="rotate(90 5 33)" fill="#323232"/>
<rect x="85" y="33" width="5" height="5" rx="2.5" transform="rotate(90 85 33)" fill="#323232"/>
<rect x="126" y="66" width="5" height="5" rx="2.5" transform="rotate(90 126 66)" fill="#323232"/>
<rect x="45" y="66" width="5" height="5" rx="2.5" transform="rotate(90 45 66)" fill="#323232"/>
<rect x="5" y="66" width="5" height="5" rx="2.5" transform="rotate(90 5 66)" fill="#323232"/>
<rect x="85" y="66" width="5" height="5" rx="2.5" transform="rotate(90 85 66)" fill="#323232"/>
</g>
<defs>
<clipPath id="clip0_531_95">
<rect width="74" height="126" fill="white" transform="translate(126) rotate(90)"/>
</clipPath>
</defs>
</svg>

    </section>
    
    </>
  )
}

export default HomeLargeWithMethodology