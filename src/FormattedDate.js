import React from "react";

export default function FormattedDate(props) {
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    let day = days[props.date.getDay()];
    let month = months[props.date.getMonth()];
    let dateday = props.date.getDate();
    let year = props.date.getFullYear();
    let hour = props.date.getHours();
    if (hour < 10) {
        hour = `0${hour}`;
    }
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return (
        <span>
            {day}, {month} {dateday}, {year}, {hour}h{minutes}
        </span>
    );
}




