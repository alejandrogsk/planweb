import Link from 'next/link'
import React from 'react'

const CtaRegular = ({url, title}) => {
  return (
    <div className="w-full flex justify-center md:justify-start align-center mt-8">
        <Link href={url} legacyBehavior>
            <a className="text-xl text-center inline-block px-10 md:px-6 py-3 bg-primary hover:bg-custom-black text-black hover:text-white transition-all duration-200  uppercase font-normal">{title}</a>
        </Link>
    </div>
  )
}

export default CtaRegular