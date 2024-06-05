import React from "react";
import { Button } from "@/Components/ui/button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePage } from "@inertiajs/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Countdown from "@/Pages/Invitation/Cari Travel/Components/Countdown";

export default function MainEvent({ setPage }) {
    useEffect(() => {
        AOS.init({
            // disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    // const { inviteUser } = usePage().props;

    // const MySwal = withReactContent(Swal);

    // const confirmAttendance = (status) => {
    //     // Mendapatkan token CSRF dari meta tag
    //     const csrfToken = document
    //         .querySelector('meta[name="csrf-token"]')
    //         .getAttribute("content");

    //     fetch(
    //         `/api/cahayamercusuar/invitation/${inviteUser.invitation_link}/status`,
    //         {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "X-CSRF-TOKEN": csrfToken,
    //             },
    //             body: JSON.stringify({ status }), // status akan berisi "Hadir" atau "Tidak Hadir"
    //         }
    //     )
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error(response.statusText);
    //             }
    //             return response.json();
    //         })
    //         .then((data) => {
    //             // Tampilkan pesan sukses menggunakan Swal atau pesan lainnya
    //             Swal.fire(
    //                 "Terima kasih!",
    //                 "Kehadiran Anda telah dikonfirmasi.",
    //                 "success"
    //             );

    //             // Kemudian arahkan pengguna ke halaman yang sesuai
    //             setPage("thanks");
    //         })
    //         .catch((error) => {
    //             // Tampilkan pesan error menggunakan Swal atau pesan lainnya
    //             Swal.fire("Error!", `Request failed: ${error}`, "error");
    //         });
    // };

    // const openModal = () => {
    //     MySwal.fire({
    //         title: <p>Konfirmasi Kehadiran</p>,
    //         icon: "question",
    //         showCancelButton: true,
    //         confirmButtonText: "Hadir",
    //         cancelButtonText: "Tidak Hadir",
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             confirmAttendance("Hadir");
    //         } else if (result.dismiss === Swal.DismissReason.cancel) {
    //             confirmAttendance("Tidak Hadir");
    //         }
    //     });
    // };

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
                        {/* <Button
                            className="bg-yellow-400 text-slate-800 rounded-xl text-xl p-7 2xl:text-2xl mb-16"
                            onClick={() => setPage("products")}
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            See Location
                        </Button> */}
                        <div className="flex gap-3 justify-center">
                            {/* <a
                                href="https://maps.app.goo.gl/cFNvAkooc2y1bW6w8"
                                target="__blank"
                                // className="px-8"
                            > */}
                            <Button
                                className="bg-yellow-400 text-slate-800 rounded-xl text-xl p-7 2xl:text-2xl"
                                data-aos="fade-up"
                                data-aos-delay="600"
                                onClick={() => setPage("products")}
                            >
                                Lihat Lokasi
                            </Button>
                            {/* </a> */}
                            {/* <button
                                className="bg-pink-500 hover:bg-pink-200 text-white rounded-xl text-base p-3 px-4 2xl:text-2xl 2xl:p-6 "
                                onClick={openModal}
                                data-aos="fade-up"
                                data-aos-delay="600"
                            >
                                Konfirmasi Kehadiran
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
