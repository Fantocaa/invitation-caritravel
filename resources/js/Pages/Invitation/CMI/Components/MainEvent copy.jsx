import React, { useEffect } from "react";
import Countdown from "./Countdown";
import { Button } from "@/Components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePage } from "@inertiajs/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function MainEvent({ setPage }) {
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    const { inviteUser } = usePage().props;
    const MySwal = withReactContent(Swal);

    const confirmAttendance = (status) => {
        const csrfToken = document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content");

        fetch(
            `/api/cahayamercusuar/invitation/${inviteUser.invitation_link}/status`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": csrfToken,
                },
                body: JSON.stringify({ status }),
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                Swal.fire(
                    "Terima kasih!",
                    "Kehadiran Anda telah dikonfirmasi.",
                    "success"
                );
                setPage("thanks");
            })
            .catch((error) => {
                Swal.fire("Error!", `Request failed: ${error}`, "error");
            });
    };

    const openModal = () => {
        MySwal.fire({
            title: <p>Konfirmasi Kehadiran</p>,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Hadir",
            cancelButtonText: "Tidak Hadir",
        }).then((result) => {
            if (result.isConfirmed) {
                confirmAttendance("Hadir");
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                confirmAttendance("Tidak Hadir");
            }
        });
    };

    const checkStatusAndOpenLocation = () => {
        fetch(
            `/api/cahayamercusuar/invitation/${inviteUser.invitation_link}/confirmation`
        )
            .then((response) => response.json())
            .then((data) => {
                if (!data.status) {
                    MySwal.fire({
                        title: "Konfirmasi Kehadiran",
                        text: "Anda harus mengonfirmasi kehadiran terlebih dahulu.",
                        icon: "warning",
                        confirmButtonText: "Konfirmasi Kehadiran",
                    }).then(() => {
                        openModal();
                    });
                } else {
                    window.open(
                        "https://maps.app.goo.gl/cFNvAkooc2y1bW6w8",
                        "__blank"
                    );
                }
            })
            .catch((error) => {
                Swal.fire("Error!", `Request failed: ${error}`, "error");
            });
    };

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
                    <p
                        className="text-3xl md:text-5xl font-futura pt-4 2xl:pt-8"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        GRAND OPENING
                    </p>
                    <div className="-translate-y-4 md:-translate-y-5">
                        <img
                            src="/images/font/Font 1.png"
                            alt="cmi"
                            className="absolute h-20 md:h-32 inset-x-0 mx-auto"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        />
                    </div>
                    <p
                        className="pt-24 md:pt-32 text-xl 2xl:text-2xl"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        PT. CAHAYA MERCUSUAR INDONESIA
                    </p>
                    <img
                        src="/images/font/Font 3.png"
                        alt="date"
                        className="w-full h-28 2xl:h-40 object-contain mx-auto my-4 2xl:my-12 px-4 xl:px-0"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    />
                    <Countdown />
                    <div className="flex gap-4 justify-center">
                        <Button
                            className="bg-orange-400 text-slate-800 rounded-xl font-bold text-xl p-6 2xl:text-2xl 2xl:p-8"
                            onClick={checkStatusAndOpenLocation}
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            Lihat Lokasi
                        </Button>
                        <Button
                            className="bg-white text-slate-800 rounded-xl font-bold text-xl p-6 2xl:text-2xl 2xl:p-8"
                            onClick={openModal}
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            Konfirmasi Kehadiran
                        </Button>
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
