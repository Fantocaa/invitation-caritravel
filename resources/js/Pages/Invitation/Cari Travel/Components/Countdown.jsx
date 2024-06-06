import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        AOS.init({
            // disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    function calculateTimeLeft() {
        const eventDate = new Date("2024-06-19T09:00:00+07:00");
        const currentTime = new Date();
        const difference = eventDate - currentTime;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }

    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };
    return (
        <>
            {timeLeft && (
                <div
                    className="countdown xl:text-2xl text-sm py-4 my-8 rounded-xl max-w-fit px-4 mx-auto font-futura bg-purple-600 text-white"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <p>{`${formatTime(timeLeft.days)} Days ${formatTime(
                        timeLeft.hours
                    )} Hours ${formatTime(
                        timeLeft.minutes
                    )} Minutes ${formatTime(timeLeft.seconds)} Seconds`}</p>
                </div>
            )}
        </>
    );
}
