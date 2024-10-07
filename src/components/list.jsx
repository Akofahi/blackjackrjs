import { useEffect, useState } from "react";
import cardsDeck from "../Constant/cards";

function List(props) {
    let cardsTotalValue = 0;
    const cards = props.cards.map((card) => {
        cardsTotalValue += card.value;
        return (
            <li key={card.name}>{card.name}</li>
        )
    })
    return (
        <div>
        <ul>{cards}</ul>
        <p>Total = {cardsTotalValue}</p>
        </div>
    )
}

export default List;