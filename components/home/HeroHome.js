import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroHome = ({heroContent}) => {
  return (
    <>
    <section className="
    overflow-x-hidden
    grid md:hidden grid-col-1 
    items-center
    px-4
    py-32
    ">
        <h1 className="inline-block text-black text-4xl font-bold uppercase text-center">
        SOLUCIONES 
        <div className="relative inline-block mx-2"><span className="relative z-10">DIGITALES</span><span className="bg-primary  h-3 lg:h-4 absolute  left-0 bottom-[2px] w-full "></span></div>
        
        AL ALCANCE DE TU EMPRESA</h1>
        <div className="relative grid justify-center	 items-center 
    
      
    ">
        <Image src="/assets/hero-image-woman@4x.png" 
            layout="intrinsic"
            width="590.61" 
            height="500" 
            alt="Agencia especializada en ecommerce crespo"
        />
    </div>
        <p className="text-black text-xl text-center my-12">
            {heroContent.subtitle}
        </p>

        <div className="flex flex-col md:flex-row">
            <Link href={heroContent.cta1.url}>
                <a className="transition-all duration-200 shadow text-lg md:text-xl block px-6 py-3 bg-primary text-black hover:bg-white hover:md:bg-white uppercase text-center">
                    {heroContent.cta1.title}
                </a>
            </Link>
            <Link href={heroContent.cta2.url}>
                <a className="transition-all duration-200 shadow text-lg md:text-xl block  px-6 py-3 bg-black text-white uppercase text-center ml-0 md:ml-4 mt-4 md:mt-0 hover:bg-primary hover:text-black">
                    {heroContent.cta2.title}
                </a>
            </Link>
        </div>
    </section>
    <section className="home_hero overflow-x-hidden hidden md:grid items-center grid-cols-1 md:grid-cols-2 gap-12 relative overflow-hidden min-h-screen 
bg-white 
">
    <div className="px-4 md:px-0 md:pl-12  pt-8 pb-12  md:py-24 lg:py-36 relative col-start-1 col-end-2
    row-start-2 row-end-3 md:row-start-1 md:row-end-2
    ">


        <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold uppercase 
        grid grid-cols-[min-content_min-content_1fr] gap-x-[1rem]
        ">
        <div>SOLUCIONES</div> 
        <div className="relative"><span className="relative z-10">DIGITALES</span><span className="bg-primary  h-3 lg:h-4 absolute  left-0 bottom-[2px] w-full "></span></div>
        <br /> 
        <div className="col-start-1 col-end-4">AL ALCANCE DE TU EMPRESA</div></h1>


        <p className="text-black text-xl md:text-2xl pt-6 pb-12">
            {heroContent.subtitle}
        </p>



        <div className="flex flex-col md:flex-row">
            <Link href={heroContent.cta1.url}>
                <a className="transition-all duration-200 shadow text-lg md:text-xl block px-6 py-3 bg-primary text-black hover:bg-white hover:md:bg-white uppercase text-center">
                    {heroContent.cta1.title}
                </a>
            </Link>
            <Link href={heroContent.cta2.url}>
                <a className="transition-all duration-200 shadow text-lg md:text-xl block  px-6 py-3 bg-black text-white uppercase text-center ml-0 md:ml-4 mt-4 md:mt-0 hover:bg-primary hover:text-black">
                    {heroContent.cta2.title}
                </a>
            </Link>
        </div>

     
<svg className="hidden absolute md:block top-24 -right-32"  width="126" height="74" viewBox="0 0 126 74" fill="none" xmlns="http://www.w3.org/2000/svg">
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

    </div>
    <div className="relative grid justify-center	 items-center 
    
    pt-24 md:pt-auto px-auto
    ">
        <Image src="/assets/hero-image-woman@4x.png" 
            layout="intrinsic"
            width="590.61" 
            height="500" 
            alt="Agencia especializada en ecommerce crespo"
        />
    </div>
</section>
            </>
  )
}

export default HeroHome