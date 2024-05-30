import { Button } from "@/Components/ui/button";
import { usePage } from "@inertiajs/react";
import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Invitation({ setPage }) {
    useEffect(() => {
        AOS.init({
            // disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    const { inviteUser } = usePage().props;

    const MySwal = withReactContent(Swal);

    const confirmAttendance = (status) => {
        // Mendapatkan token CSRF dari meta tag
        const csrfToken = document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content");

        fetch(
            `/api/caritravel/invitation/${inviteUser.invitation_link}/status`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": csrfToken,
                },
                body: JSON.stringify({ status }), // status akan berisi "Hadir" atau "Tidak Hadir"
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                // Tampilkan pesan sukses menggunakan Swal atau pesan lainnya
                Swal.fire(
                    "Terima kasih!",
                    "Kehadiran Anda telah dikonfirmasi.",
                    "success"
                );

                // Kemudian arahkan pengguna ke halaman yang sesuai
                setPage("thanks");
            })
            .catch((error) => {
                // Tampilkan pesan error menggunakan Swal atau pesan lainnya
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
                            className="text-2xl max-w-md mx-auto pt-8 pb-8"
                            data-aos="fade-up"
                        >
                            Klik Tombol Dibawah ini untuk Konfirmasi Kehadiran
                        </p>
                        <Button
                            className="bg-yellow-400 text-slate-800 rounded-xl text-xl p-7 2xl:text-2xl mb-16"
                            onClick={openModal}
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Konfirmasi Kehadiran
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
