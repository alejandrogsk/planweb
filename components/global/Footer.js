
import Link from 'next/link'
import React from 'react'

const Footer = ({menu}) => {



  return (
    <footer className="footer">
        <ul className="footer__menu">
            {
                menu.map((element, index)=> (
                    <Link key={index} href={element.link}><a>{element.title}</a></Link>
                ))
            }
        </ul>

        <Link href="/">
            <img className="footer__logo" src="/logo-mobile.png" alt="Smooth design logo mobile" />
        </Link>



        <span className="footer__copy">Copiryght PLANWEB | 2022.</span>
    </footer>
  )
}

export default Footer