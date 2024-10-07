
import { useEffect } from 'react';
import cardsDeck from '../Constant/cards';



function Card(props) {
    
return(
    <div>
    <img className={"card"} src={"/images/"+props.pick}/>
    </div>
)
}

export default Card;