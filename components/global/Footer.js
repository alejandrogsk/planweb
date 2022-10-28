
import Link from 'next/link'
import React from 'react'

const Footer = ({menu}) => {



  return (
    <footer className="bg-custom-black grid items-center	 gap-4 md:gap-8  grid-cols-1 md:grid-cols-2 grid-rows-3 md:grid-rows-2 py:12 md:py-20 px-6 md:px-12 lg:px-16">
        <ul className="flex flex-col items-center md:flex-row col-start-1 col-end-2 md:col-start-2 md:col-end-3 row-start-2 row-end-3 md:row-start-1 row-end-2 justify-self-center md:justify-self-end	flex">
            {
                menu.map((element, index)=> (
                    <Link key={index} href={element.link} >
                        <a className="text-white text-base uppercase font-medium first:ml-0 ml-0 md:ml-4 first:mt-0 mt-4 md:mt-0">{element.title}</a>
                    </Link>
                ))
            }
        </ul>

        <Link href="/">
            <a className="text-white col-start-1 col-end-2 md:col-end-2 row-start-1 row-end-2 justify-self-center md:justify-self-start	 cursor-pointer font-poppins font-semibold text-xl md:text-2xl lg:text-3xl text-center">PlanWeb</a>
        </Link>



        <span className="text-white text-base row-start-3 md:row-start-2 row-end-4 md:row-end-3 col-start-1 md:col-start-2 col-end-2 md:col-end-3 justify-self-center md:justify-self-end	">Copiryght PlanWeb | 2022.</span>
    </footer>
  )
}

export default Footer