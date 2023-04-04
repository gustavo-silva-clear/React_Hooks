import React from "react";

const UseCallbackButtons = props => {

    return (

        <div>

            <button className="btn" onClick={() => props.inc(5)}>+5</button>
            <button className="btn" onClick={() => props.inc(10)}>+10</button>
            <button className="btn" onClick={() => props.inc(15)}>+15</button>

        </div>

    )

}

export default React.memo(UseCallbackButtons)