import { Button } from "@/Components/ui/button";
import { usePage } from "@inertiajs/react";
import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Input } from "@/Components/ui/input";

export default function Invitation({ setPage }) {
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    const MySwal = withReactContent(Swal);

    const confirmAttendance = (status) => {
        const name = document.querySelector('input[name="name"]').value;
        const guestCount = document.querySelector(
            'input[name="guest_count"]'
        ).value;

        if (!name || !guestCount) {
            Swal.fire("Error!", "Isi kolom terlebih dahulu.", "error");
            return;
        }

        const csrfToken = document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content");

        fetch(`/api/cahayamercusuar/invitation/status`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken,
            },
            body: JSON.stringify({ name, guest_count: guestCount, status }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                Swal.fire(
                    "Thank you!",
                    "Your attendance has been confirmed.",
                    "success"
                );
                setPage("products");
            })
            .catch((error) => {
                Swal.fire("Error!", `Request failed: ${error}`, "error");
            });
    };

    const openModal = () => {
        const name = document.querySelector('input[name="name"]').value;
        const guestCount = document.querySelector(
            'input[name="guest_count"]'
        ).value;

        if (!name || !guestCount) {
            Swal.fire("Error!", "Isi kolom terlebih dahulu.", "error");
            return;
        }

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
    return (
        <div>
            <div className="bg-black bg-opacity-25 w-full h-screen absolute font-futura">
                <img
                    src="/images/BG CMI.jpg"
                    className="absolute h-screen w-full object-cover -z-50"
                />
            </div>
            <div className="max-w-screen-sm mx-auto bg-slate-950 h-screen text-slate-50 text-center relative">
                <div className="pt-4 md:pt-8 absolute inset-x-0 px-4">
                    <div className="flex justify-between items-end">
                        <img
                            src="/images/logo/CMI Logo.png"
                            alt="cmi"
                            className="h-16 md:h-20 object-contain"
                        />
                        <img
                            src="/images/logo/tako-logo.png"
                            alt="tako"
                            className="h-20"
                        />
                    </div>
                    <p
                        className="text-2xl max-w-72 md:max-w-md mx-auto pt-8 pb-4"
                        data-aos="fade-up"
                    >
                        Isi terlebih dahulu form dibawah ini
                    </p>
                    <div className="py-4 flex flex-col gap-4 px-4 md:px-8 text-gray-800">
                        <Input
                            type="text"
                            name="name"
                            placeholder="Nama Tamu Hadir"
                            className="rounded-xl"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        />
                        <Input
                            type="number"
                            name="guest_count"
                            placeholder="Jumlah Tamu Hadir"
                            className="rounded-xl"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        />
                    </div>
                    <Button
                        className="bg-orange-400 text-slate-800 rounded-xl text-xl p-7 2xl:text-2xl mb-16"
                        onClick={openModal}
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        Konfirmasi Kehadiran
                    </Button>
                </div>
                <div>
                    <img
                        src="/images/BG CMI A5Artboard 2.jpg"
                        alt="bgcmi"
                        className="z-50 h-screen object-cover w-full"
                    />
                </div>
            </div>
        </div>
    );
}
