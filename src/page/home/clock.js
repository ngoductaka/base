import React, { useEffect, useState } from 'react';
import moment from 'moment'
export const Clock = ({ getCurrentTime, style = {}, sliceDate = false, ...props }) => {
    const [value, setValue] = useState(getClock());

    useEffect(() => {
        const interval = setInterval(() => {
            setValue({ time: moment().format("HH:mm:ss"), date: moment().format("DD/MM/YYYY") })
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div style={{ position: 'fixed', top: '2vh', right: '2vh', color: props.color || '#000', fontSize: '5vh', fontWeight: '500', display: 'flex' }}>
            {/* <div style={{height: '5vh', textAlign: 'center'}}>{value.date}</div> */}
            <div style={{height: '5vh', textAlign: 'center'}}>{value.time}</div>
        </div>
    )
}

const getClock = format => {
    return moment().format(format)
}

export const getClock_ = (format) => {
    const today = new Date();

    const ss = String(today.getSeconds()).padStart(2, "0");
    const mi = String(today.getMinutes()).padStart(2, "0");
    const hh = today.getHours();

    if (hh == 0 && mi == 0 && ss == 0) {
        window.location.replace("/");
    }

    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return hh + ":" + mi + ":" + ss + " - " + dd + "/" + mm + "/" + yyyy;
};