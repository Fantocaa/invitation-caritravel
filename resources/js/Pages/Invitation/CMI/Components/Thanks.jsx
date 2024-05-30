import React from "react";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Thanks({ setPage }) {
    const { inviteUser } = usePage().props;
    useEffect(() => {
        AOS.init({
            // disable: "phone",
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
                {/* <div className="pt-4 md:pt-8 absolute inset-x-0 px-4">
                    <div className="flex justify-between items-end">
                        <img
                            src="/images/logo/CMI Logo.png"
                            alt="cmi"
                            className="h-16 md:h-20 object-contain"
                            data-aos="fade-up"
                            // data-aos-delay="100"
                        />
                        <img
                            src="/images/logo/tako-logo.png"
                            alt="tako"
                            className="h-20"
                            data-aos="fade-up"
                            // data-aos-delay="100"
                        />
                    </div>
                    <img
                        src="/images/font/image 2.png"
                        alt="thanks"
                        className="mt-28 2xl:mt-20 pb-4 mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    />
                    <h1
                        className="text-xl font-futura 2xl:max-w-md mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        We Hope you can join us in celebrating this historical
                        event!. See ya on 19 June 2024
                    </h1>
                    <p className="my-8" data-aos="fade-up" data-aos-delay="300">
                        For {inviteUser.name}
                    </p>
                    <p data-aos="fade-up" data-aos-delay="400">
                        Best Regrads, <br />
                        <span className="font-bold">
                            PT. CAHAYA MERCUSUAR INDONESIA
                        </span>
                    </p>
                </div>
                <div className="py-8">
                    <img
                        src="/images/logo/cari-travel.svg"
                        alt="cmi"
                        className="w-full px-16 "
                        data-aos="fade-up"
                    />
                    <h1
                        className="text-xl pt-4"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        PT. CAHAYA MERCUSUAR INDONESIA
                    </h1>
                </div> */}

                <div className="pt-4 md:pt-8 absolute inset-x-0 px-4 md:px-8">
                    <div className="py-8">
                        <img
                            src="/images/logo/CMI Logo.png"
                            alt="cmi"
                            className="w-full px-16 h-40 object-contain"
                            data-aos="fade-up"
                        />
                        <h1
                            className="text-xl pt-4"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            PT. CAHAYA MERCUSUAR INDONESIA
                        </h1>
                    </div>
                    <div className="flex flex-col gap-4">
                        <a href="/" target="__blank">
                            <div
                                className="w-full bg-orange-400 text-white py-4 rounded-full text-xl flex gap-6 justify-center"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <img
                                    src="/images/icon/Subtract-1.svg"
                                    alt="1"
                                />
                                Instagram
                            </div>
                        </a>
                        <a href="/" target="__blank">
                            <div
                                className="w-full bg-orange-400 text-white py-4 rounded-full text-xl flex gap-6 justify-center"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <img src="/images/icon/Union.svg" alt="2" />
                                Facebook
                            </div>
                        </a>
                        <a href="" target="__blank">
                            <div
                                className="w-full bg-orange-400 text-white py-4 rounded-full text-xl flex gap-6 justify-center"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <img
                                    src="/images/icon/Subtract-2.svg"
                                    alt="3"
                                />
                                Whatsapp
                            </div>
                        </a>
                        <a href="" target="__blank">
                            <div
                                className="w-full bg-orange-400 text-white py-4 rounded-full text-xl flex gap-6 justify-center"
                                data-aos="fade-up"
                                data-aos-delay="500"
                            >
                                <img src="/images/icon/Subtract.svg" alt="4" />
                                Website Cahaya Mercusuar Indonesia
                            </div>
                        </a>
                    </div>
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
