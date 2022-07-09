
import React from "react";
import ServiceCard from "./ServiceCard";

const Services = ({ services }) => {
    return (
        <section className="home-services">
            {services.list.map((service, i) => (
                <ServiceCard key={i} service={service} />
            ))}
        </section>
    );
};


export default Services;
