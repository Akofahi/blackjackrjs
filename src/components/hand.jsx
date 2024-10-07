import Card from './card';
import List from './list';
import App from '../App';
import { useEffect } from 'react';

function Hand(props) {
const cards = props.cards.map((card)=>{
    return(
        <Card pick={card.pic} key={card.pic}></Card>
    )
})
    return (
        <div className='deck'>
            <div className="list">
                <h3 className='playerName'>{props.playerName}</h3>
                <List cards={props.cards}></List>
            </div>
            <div className="images">
                {cards}
            </div>
        </div>
    )
}

export default Hand;