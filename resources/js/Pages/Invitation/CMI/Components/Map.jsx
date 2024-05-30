import { Button } from "@/Components/ui/button";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Map({ setPage }) {
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);
    return (
        <>
            <div className="bg-black bg-opacity-25 w-full h-[calc(100dvh)] absolute font-futura">
                <img
                    src="/images/BG CMI.jpg"
                    className="absolute h-[calc(100dvh)] w-full object-cover -z-50"
                />
            </div>
            <div className="max-w-screen-sm mx-auto bg-slate-950 h-full text-slate-50 text-center relative">
                <div className="pt-4 md:pt-8 absolute inset-x-0 px-4 md:px-8">
                    <div className="flex justify-between items-end">
                        <img
                            src="/images/logo/CMI Logo.png"
                            alt="cmi"
                            className="h-16 md:h-20 object-contain"
                            data-aos="fade-up"
                        />
                        <img
                            src="/images/logo/tako-logo.png"
                            alt="tako"
                            className="h-20"
                            data-aos="fade-up"
                        />
                    </div>
                    <div className="max-w-md mx-auto mb-8 pt-4 2xl:pt-8">
                        <h1
                            className="text-4xl pb-4 text-yellow-400"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Location
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="200">
                            Jl. Dharmahusada Indah Blok I Nomor Ruko 16 E,
                            RT.01, RW.09, Kec. Mulyorejo, Kel. Mulyorejo
                            Surabaya Kode pos : 60115
                        </p>
                    </div>
                    <div className="mb-8">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15830.895294804655!2d112.775186!3d-7.2722351!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb30a9dd6cd5%3A0xe15bff55a5fd0d70!2sCari%20Travel%20Indonesia!5e0!3m2!1sen!2sid!4v1716973151434!5m2!1sen!2sid"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="mx-auto px-2 w-full xl:max-w-lg h-40 xl:h-32 md:h-72 2xl:min-h-96"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        ></iframe>
                    </div>

                    <a
                        href="https://maps.app.goo.gl/cFNvAkooc2y1bW6w8"
                        target="__blank"
                    >
                        <Button
                            className="bg-orange-400 text-slate-800 rounded-xl font-bold text-xl p-6 2xl:text-2xl 2xl:p-8"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            See on Map
                        </Button>
                    </a>
                </div>

                <div>
                    <img
                        src="/images/BG CMI A5Artboard 2.jpg"
                        alt="bgcmi"
                        className="z-50 h-[calc(100dvh)] object-cover w-full"
                    />
                </div>
            </div>
        </>
    );
}
