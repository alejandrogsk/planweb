import Link from "next/link";
import React from "react";

const BtnBlack = ({ url, title, customStyles = "" }) => {
    return (
        <Link href={url} legacyBehavior>
            <a
                className={` inline-flex justify-start items-center m-auto md:m-0  mt-8 md:mt-12 custom-btn-cta-black font-medium
                                ${customStyles}
                                `}
            >
                <span>{title}</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </a>
        </Link>
    );
};

export default BtnBlack;
