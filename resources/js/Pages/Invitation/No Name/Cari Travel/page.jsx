import { Head, usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { Button } from "@/Components/ui/button";
import Map from "../../Cari Travel/Components/Map";
// import Invitations from "./Components/Invitation";
import Thanks from "../../Cari Travel/Components/Thanks";
import Opening from "./Components/Opening";
import MainEvent from "./Components/MainEvent";

export default function CariTravel() {
    const [page, setPage] = useState("home");

    const renderPage = () => {
        switch (page) {
            case "home":
                return <Opening setPage={setPage} />;
            case "about":
                return <MainEvent setPage={setPage} />;
            case "products":
                return <Map setPage={setPage} />;
            // case "invitation":
            //     return <Invitations setPage={setPage} />;
            case "thanks":
                return <Thanks setPage={setPage} />;
            default:
                return null;
        }
    };

    return (
        <>
            <Head title="Grand Opening PT. CariTravel Indonesia" />
            <nav className="mx-auto fixed bottom-0 inset-x-0 bg-pink-600 py-4 text-slate-50 z-50 px-4">
                <ul className="flex justify-center gap-4 md:gap-8">
                    <li onClick={() => setPage("home")}>
                        <button>
                            <img
                                src={
                                    page === "home"
                                        ? "/images/icon/Frame 15.svg"
                                        : "/images/icon/Frame 18.svg"
                                }
                                alt="home"
                            />
                        </button>
                    </li>
                    <li onClick={() => setPage("about")}>
                        <button>
                            <img
                                src={
                                    page === "about"
                                        ? "/images/icon/Frame 17.svg"
                                        : "/images/icon/Frame 16.svg"
                                }
                                alt="event"
                            />
                        </button>
                    </li>
                    <li onClick={() => setPage("products")}>
                        <button>
                            <img
                                src={
                                    page === "products"
                                        ? "/images/icon/Frame 22.svg"
                                        : "/images/icon/Frame 19.svg"
                                }
                                alt="map"
                            />
                        </button>
                    </li>
                    {/* <li onClick={() => setPage("invitation")}>
                        <button>
                            <img
                                src={
                                    page === "invitation"
                                        ? "/images/icon/Frame 20.svg"
                                        : "/images/icon/Frame 21.svg"
                                }
                                alt="rsvp"
                            />
                        </button>
                    </li> */}
                    <li onClick={() => setPage("thanks")}>
                        <button>
                            <img
                                src={
                                    page === "thanks"
                                        ? "/images/icon/Frame 24.svg"
                                        : "/images/icon/Frame 23.svg"
                                }
                                alt="thanks"
                            />
                        </button>
                    </li>
                </ul>
            </nav>
            {renderPage()}
        </>
    );
}
