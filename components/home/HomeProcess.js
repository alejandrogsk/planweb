import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeProcess = ({how_we_work}) => {
  return (
    <section className="px-[2.5%] md:px-[5%] grid grid-cols-1 bg-custom-black pb-12 md:pb-0">
                <div className="relative w-full -translate-y-[20px] md:-translate-y-[75px]">
                    <Image
                        height={463}
                        width={1425}
                        alt="Estudio digital crespo entre ríos"
                        src={"/assets/team.png"}
                    />
                </div>
                <div className="grid items-center ">
                    <h2 className="mt-16 d:text-start text-3xl md:text-4xl lg:text-5xl	font-medium text-white">
                        {how_we_work.title}
                    </h2>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-8 md:mt-12">
                        {
                            how_we_work.list.map((method,i) =>(
                                <div key={i}>
                                    <h3 className="text-white text-xl md:text-2xl mt-4 mb-6">
                                {method.title}
                            </h3>
                            <p className="text-white text-lg md:text-xl font-normal	">
                                {method.content}
                            </p>
                                </div>
                            ))
                        }
                    </div>

               
                    <hr className="bg-white my-16 h-[2px]" />

                    <div class="pb-64 flex flex-col items-start">
                        {
                        <p className="text-white text-lg md:text-xl max-w-full md:max-w-[50%] font-normal	">
                            {how_we_work.cta.content}
                        </p>
                        }
                        <Link href={how_we_work.cta.src} legacyBehavior>
                        <a class="flex items-center	 mt-12 md:mt-16 custom-btn-cta-black font-medium">
                            <span>{how_we_work.cta.text}</span>
                            <svg width="13px" height="10px" viewBox="0 0 13 10">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </a>
                        </Link>
                    </div>
                </div>
    </section>
  )
}

export default HomeProcess