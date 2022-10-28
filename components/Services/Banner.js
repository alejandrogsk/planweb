import Image from "next/image";
import React from "react";

const Banner = ({ banner, card = null }) => {
    return (
        <section className="common-service__banner my-28 px-2 md:px-8 lg:px-12 flex flex-col items-center align-center justify-center relative">
            <Image
                alt={banner.alt}
                src={banner.src}
                width={banner.width}
                height={banner.height}
                layout="intrinsic"
            />
            {card && (
                <div className="ecommerce_banner-card">
                    <Image
                        alt={card.alt}
                        src={card.src}
                        width={card.width}
                        height={card.height}
                        layout="intrinsic"
                    />
                </div>
            )}
        </section>
    );
};

export default Banner;
