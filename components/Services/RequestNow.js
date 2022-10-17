import Link from 'next/link'
import React from 'react'

const RequestNow = () => {
  return (
    <div className="w-full flex justify-center align-center mt-8">
      <Link href="/contacto">
        <a className="text-xl text-center inline-block px-6 py-3 bg-primary text-black uppercase">Solicitar Ahora</a>
                
        </Link>
    </div>
  )
}

export default RequestNow