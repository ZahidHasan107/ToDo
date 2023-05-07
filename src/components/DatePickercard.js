import React, { useState } from "react";

const DatePickercard = () => {
    
    const [date, setDate] = useState();
    
    return (
        <div>
        <input type="date" onChange={e=>setDate(e.target.value)}></input>
        </div>
    );
};

export default DatePickercard;