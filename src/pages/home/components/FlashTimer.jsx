import { useEffect, useState } from "react";

const FlashTimer = ({ endDate }) => {
    const calculateTimeLeft = () => {
        const diff = new Date(endDate) - new Date();
        if (diff <= 0) return null;

        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, [endDate]);

    if (!timeLeft) return <span>Sale Ended</span>;

    return (
        <div className="duration">
            <div className="wrap">
                <span>
                    Days</span><strong>{timeLeft.days}</strong></div>
            <span className="colon">:</span>
            <div className="wrap">
                <span>
                    Hours</span><strong>{timeLeft.hours}</strong></div>
            <span className="colon">:</span>
            <div className="wrap">
                <span>
                    Minutes</span><strong>{timeLeft.minutes}</strong></div>
            <span className="colon">:</span>
            <div className="wrap">
                <span>
                    Seconds</span><strong>{timeLeft.seconds}</strong></div>
        </div>
    );
};

export default FlashTimer;
