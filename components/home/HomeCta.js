import Link from "next/link";
import React from "react";

const HomeCta = () => {
    return (
        <div className=" bg-primary">
            <section className="grid grid-cols-1 content-center	justify-items-center px-6 md:px-12 lg:px-16  py-16 md:py-24 lg:py-36 xxl:mx-auto max-w-[1540px] xxl:px-0">
                <h2 className="text-center md:text-start text-3xl md:text-4xl lg:text-5xl	font-medium ">
                    ¡Queremos conocer tu proyecto!
                </h2>
                <p className="text-center text-xl md:text-2xl pt-6 pb-10 max-w-100 md:max-w-[80%] lg:max-w-[70%]">
                    No dudes en contactarnos con cualquier pregunta o inquietud
                    que puedas tener. Nos encantaría hablar sobre tu proyecto
                    con más detalle.
                </p>
                <Link href="/contacto" legacyBehavior>
                    <a className="flex justify-center items-center m-auto md:m-0 custom-btn-cta-white font-medium">
                        <span>Consulta Gratuitá</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </a>
                </Link>
            </section>
        </div>
    );
};

export default HomeCta;
