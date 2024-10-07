import { useEffect, useState } from 'react';
import './App.css';
import Hand from './components/hand.jsx'
import Play from './components/play.jsx'
import cardsDeck from './Constant/cards.js';
import shuffle from './util/suffle.js';
import { klona } from 'klona';
import Card from './components/card.jsx'


function App() {
    const [deck, setDeck] = useState(shuffle(cardsDeck))
    const [playerCards, setPlayerCards] = useState([])
    const [computerCards, setComputerCards] = useState([])
    const [winner, setWinner] = useState([]);

    const drawCard = (player) => {
        const drawedCard = deck.pop();
        const newDeck = [...deck]
        setDeck(newDeck)
        giveCard(drawedCard, player)
    }

    const giveCard = (card, player) => {
        if (player === "player") {
            setPlayerCards((current) => {
                return [...current, card];
            })
        } else if (player === "computer") {
            setComputerCards((current) => {
                return [...current, card];
            })
        }
    }

    const initGame = () => {
        setComputerCards([]);
        setPlayerCards([]);
        setWinner([]);
        drawCard("player");
        drawCard("computer");
        drawCard("player");
        drawCard("computer");
    }

    const stand = () => {
        drawCard("computer");
    }

    const hit = () => {
        drawCard("player");
    }

    const compareScore = () => {
        let playerCardsScore = 0;
        playerCards.forEach((card) => {
            playerCardsScore += card.value;
        })
        let computerCardsScore = 0;
        computerCards.forEach((card) => {
            computerCardsScore += card.value;
        })

       if(playerCardsScore === 21){
        setWinner("Blackjack! Player Wins");
       }else if(computerCardsScore === 21){
        setWinner("Blackjack! Computer Wins")
       }else if(playerCardsScore < 21 && computerCardsScore < 21){
        setWinner("Play your next move")
       }else if(playerCardsScore>21){
        setWinner("Computer Wins")
       }else if(computerCardsScore>21){
        setWinner("Player Wins")
       }
    }

    useEffect(() => {
        initGame();
    }, [])
    useEffect(()=>{
        compareScore();
    },[playerCards,computerCards])
    return (
        <div className="App">
            {/* <div className='allCards'>{deck.map((card,index) => {
                    return (
                        <div>
                    <p>{index+1}</p>
                    <Card pick={card.pic}></Card>
                    </div>)
                })}</div> */}

            <Hand playerName="computer" cards={computerCards} ></Hand>
            <Hand playerName="Player" cards={playerCards} ></Hand>
            <div><p>{winner}</p></div>
            <div className="buttons">
                <button onClick={initGame}>New Game</button>
                <button onClick={hit} disabled={winner == "Play your next move"? false : true}>Hit</button>
                <button onClick={stand} disabled={winner == "Play your next move"? false : true}>Stand</button>
            </div>

        </div>

    )
}



export default App;

