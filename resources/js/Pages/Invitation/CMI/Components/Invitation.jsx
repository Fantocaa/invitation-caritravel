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
            `/api/cahayamercusuar/invitation/${inviteUser.invitation_link}/status`,
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
                        className="text-2xl max-w-md mx-auto pt-24 pb-8"
                        data-aos="fade-up"
                    >
                        Klik Tombol Dibawah ini untuk Konfirmasi Kehadiran
                    </p>
                    <Button
                        className="bg-orange-400 text-slate-800 rounded-xl font-bold text-xl p-6 2xl:text-2xl 2xl:p-8"
                        onClick={openModal}
                        data-aos="fade-up"
                        data-aos-delay="100"
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
