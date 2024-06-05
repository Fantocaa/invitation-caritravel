import { usePage } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Opening({ setPage }) {
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
                <div className="pt-4 md:pt-8 absolute inset-x-0 px-4 md:px-8">
                    <div className="flex justify-between items-end">
                        <img
                            src="/images/logo/CMI Logo.png"
                            alt="cmi"
                            className="h-12 md:h-20 object-contain"
                            data-aos="fade-up"
                        />
                        <img
                            src="/images/logo/tako-logo.png"
                            alt="tako"
                            className="h-16 md:h-20"
                            data-aos="fade-up"
                        />
                    </div>
                    <div className="pt-16">
                        {/* <p
                            className="text-xl md:text-2xl pb-4"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Dear
                        </p> */}
                        {/* <p
                            className="text-2xl md:text-4xl text-yellow-400 font-futura"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            {inviteUser.name}
                        </p> */}
                        <p
                            className="py-8 md:py-12 text-2xl"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            Your are Invited to the
                        </p>
                        <p
                            className="text-3xl md:text-5xl font-futura"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            GRAND OPENING
                        </p>
                        <div className="-translate-y-4 md:-translate-y-5">
                            <img
                                src="/images/font/Font 1.png"
                                alt="cmi"
                                className="absolute h-20 md:h-32 inset-x-0 mx-auto"
                                data-aos="fade-up"
                                data-aos-delay="500"
                            />
                        </div>
                        <p
                            className="pt-20 md:pt-32 pb-8 md:pb-8 text-xl font-bold"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            PT. CAHAYA MERCUSUAR INDONESIA
                        </p>
                        <Button
                            className="bg-orange-400 text-slate-800 rounded-xl font-bold text-xl p-7 2xl:text-2xl"
                            onClick={() => setPage("about")}
                            data-aos="fade-up"
                            data-aos-delay="700"
                        >
                            Open Invitation
                        </Button>
                    </div>
                </div>
                <div>
                    <img
                        src="/images/BG CMI A5Artboard 2.jpg"
                        alt="bgcmi"
                        className="-z-50 h-[calc(100dvh)] object-cover w-full"
                    />
                </div>
            </div>
        </>
    );
}
