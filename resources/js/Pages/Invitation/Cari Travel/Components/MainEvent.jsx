import React from "react";
import Countdown from "./Countdown";
import { Button } from "@/Components/ui/button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MainEvent({ setPage }) {
    useEffect(() => {
        AOS.init({
            // disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <>
            <div className="relative w-full h-[calc(100dvh)] font-futura">
                <img
                    src="/images/BG Caritravel.jpg"
                    className="absolute inset-0 h-full w-full object-cover -z-50"
                    alt="background"
                />

                <div className="w-full h-full 2xl:container pt-8 px-8">
                    <div className="max-w-screen-sm w-full h-full md:h-full mx-auto bg-white p-4 md:p-12 text-gray-800 text-center">
                        <div className="flex justify-between items-center pt-4 pb-4">
                            <img
                                src="/images/logo/cari-travel.svg"
                                alt="cmi"
                                className="h-10 md:h-12 object-contain"
                                data-aos="fade-up"
                            />
                            <img
                                src="/images/logo/tako-logo.png"
                                alt="tako"
                                className="h-16 md:h-20"
                                data-aos="fade-up"
                            />
                        </div>
                        <div className="pt-6 translate-y-2">
                            <img
                                src="/images/font/Font 2.png"
                                alt="cmi"
                                className="absolute h-12 md:h-20 inset-x-0 mx-auto z-50"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            />
                        </div>
                        <p
                            className="text-5xl md:text-7xl font-medium md:font-bold text-pink-600 -tracking-wider pt-10 md:pt-0"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            NEW OFFICE
                        </p>
                        <p
                            className="pt-4 md:pt-16 text-xl"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            PT. CARI TRAVEL INDONESIA
                        </p>
                        {/* <p className="text-sm md:text-2xl py-8">Save the Date</p> */}
                        {/* <img
                            src="/images/font/Font 3.png"
                            alt="date"
                            className="w-full h-40 object-contain mx-auto my-8 2xl:my-12 px-4 xl:px-0"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        /> */}
                        <Countdown />
                        <Button
                            className="bg-yellow-400 text-slate-800 rounded-xl text-xl p-7 2xl:text-2xl mb-16"
                            onClick={() => setPage("products")}
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            See Location
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
