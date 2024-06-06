import React from "react";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/Components/ui/button";

export default function Thanks({ setPage }) {
    const { inviteUser } = usePage().props;
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);
    return (
        <div className="relative w-full h-[calc(100dvh)] font-futura">
            <img
                src="/images/BG Caritravel.jpg"
                className="absolute inset-0 h-full w-full object-cover -z-50"
                alt="background"
            />

            <div className="w-full h-full 2xl:container pt-8 px-8">
                <div className="max-w-screen-sm w-full h-full md:h-full mx-auto bg-white p-4 md:p-12 text-gray-800 text-center">
                    {/* <div className="flex justify-between items-center pt-4 pb-4">
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
                    </div> */}
                    {/* <img
                        src="/images/font/image 2.png"
                        alt="thanks"
                        className="mt-4 2xl:mt-20 pb-4 mx-auto h-40"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    />
                    <h1
                        className="text-base font-futura 2xl:max-w-md mx-auto"
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
                            PT. CARITRAVEL INDONESIA
                        </span>
                    </p> */}

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
                            PT. CARITRAVEL INDONESIA
                        </h1>
                    </div>
                    <div className="flex flex-col gap-4">
                        <a
                            href="https://www.instagram.com/cari_travel?igsh=bGF2Nm5qNnJ2dXFz"
                            target="__blank"
                        >
                            <div
                                className="w-full bg-pink-500 text-white py-4 rounded-full text-xl flex gap-6 justify-center"
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
                        <a
                            href="https://www.facebook.com/profile.php?id=61559844646899"
                            target="__blank"
                        >
                            <div
                                className="w-full bg-pink-500 text-white py-4 rounded-full text-xl flex gap-6 justify-center"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <img src="/images/icon/Union.svg" alt="2" />
                                Facebook
                            </div>
                        </a>
                        <a
                            href="https://api.whatsapp.com/send?phone=62818504346"
                            target="__blank"
                        >
                            <div
                                className="w-full bg-pink-500 text-white py-4 rounded-full text-xl flex gap-6 justify-center"
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
                        <a href="https://caritravel.com" target="__blank">
                            <div
                                className="w-full bg-pink-500 text-white py-4 rounded-full text-xl flex gap-6 justify-center"
                                data-aos="fade-up"
                                data-aos-delay="500"
                            >
                                <img src="/images/icon/Subtract.svg" alt="4" />
                                Website CariTravel
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
