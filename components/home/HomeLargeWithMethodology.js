import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeLargeWithMethodology = ({how_we_work}) => {


  return (
    <>
    <section className="home-hero-large grid grid-cols-1 pt-32 pb-32 md:pb-60 px-6 md:px-12 lg:px-16 overflow-x-hidden">


        <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold uppercase relative text-center md:text-start">
            Aumentá las <span className="underline-custom">ventas</span> de tu negocio <br className="hidden lg:inline"/>a travéz de <span className="underline-custom  hidden smph:inline">canales digitales</span>
            <span className="underline-custom inline smph:hidden ">canales</span> <span className="underline-custom  inline smph:hidden ">digitales</span>
        </h1>
        
        
        
        <p className="text-black pt-6 pb-12 text-center md:text-start text-xl md:text-2xl w-full md:max-w-[80%] lg:max-w-[75%]">Somos una agencia digital ubicada en Crespo, Entre Ríos. Nuestras soluciones incluyen diseño y desarrollo de sitios web, tiendas online y campañas de publicidad digital.</p>

        <div className="w-full flex flex-col md:flex-row flex-col-reverse">
           <Link href="/contacto" legacyBehavior>
                <a className="inline-block bg-primary px-6 py-4 uppercase text-lg md:text-xl hover:bg-[#181818] text-black hover:text-white text-center">Contactanos Ahora</a>
           </Link>
            
        </div>
    </section>
    
    <section className="px-[2.5%] md:px-[5%] grid grid-cols-1 bg-[#181818] pb-12 md:pb-0">
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