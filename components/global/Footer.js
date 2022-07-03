
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

        <img className="footer__logo" src="/logo-mobile.png" alt="Smooth design logo mobile" />



        <span className="footer__copy">Copiryght Smooth Design | 2022.</span>
    </footer>
  )
}

export default Footer