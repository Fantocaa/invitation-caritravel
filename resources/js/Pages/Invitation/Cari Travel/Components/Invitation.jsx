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

        fetch(`/api/caritravel/invitation/status`, {
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
            Swal.fire("Error!", "Please fill in all the fields.", "error");
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
                                className="h-10 md:h-20 object-contain"
                                data-aos="fade-up"
                            />
                            <img
                                src="/images/logo/tako-logo.png"
                                alt="tako"
                                className="h-16 md:h-20"
                                data-aos="fade-up"
                            />
                        </div>
                        <p
                            className="text-2xl max-w-72 md:max-w-md mx-auto pt-8 pb-4"
                            data-aos="fade-up"
                        >
                            Isi terlebih dahulu form dibawah ini
                        </p>
                        <div className="py-4 flex flex-col gap-4 px-4">
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
                            className="bg-yellow-400 text-slate-800 rounded-xl text-xl p-7 2xl:text-2xl mb-16"
                            onClick={openModal}
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            Konfirmasi Kehadiran
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
