import React from "react";

function BoardMaker(props) {
    const numbers = props.values
    const listItems = numbers.map((number) =>
        <div>
            <p>{number}</p>
        </div>)
    return ( <div>
        {listItems}
    </div> );
}

export default BoardMaker;