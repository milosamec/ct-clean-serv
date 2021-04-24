import React from 'react'

const DateUtil = ({date}) => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currentMonth = monthNames[date.getMonth()]
    let currentMonthShort = currentMonth.slice(0, 3)
    let year = new Date().getFullYear()
    let day = new Date().getUTCDate()
    return (
        <span>
            {`${currentMonthShort} ${day}, ${year}`}
        </span>
    )
}

export default DateUtil
