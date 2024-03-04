import React, { useEffect, useState } from 'react';
import '~/styles/clock.css';
const Clock = () => {
    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();
    let interval;
    const CountDown = () => {};
    useEffect(() => {
        CountDown();
    });
    return <div className="clock__wrapper d-flex align-item-center gap-3"></div>;
};

export default Clock;
