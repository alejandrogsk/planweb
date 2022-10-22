import Link from 'next/link'
import React from 'react'

const CtaRegular = ({url, title}) => {
  return (
    <div className="w-full flex justify-center md:justify-start align-center mt-8">
        <Link href={url}>
            <a className="text-xl text-center inline-block px-12 md:px-8 py-3 bg-primary hover:bg-black text-black hover:text-white transition-all duration-200  uppercase">{title}</a>
        </Link>
    </div>
  )
}

export default CtaRegular