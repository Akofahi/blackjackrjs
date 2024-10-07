import { klona } from "klona";


function shuffle(arr) {
    let tempdeck = klona(arr)
    let currentIndex = tempdeck.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;
        [tempdeck[currentIndex], tempdeck[randomIndex]] = [tempdeck[randomIndex], tempdeck[currentIndex]]
    }
    return tempdeck
}

export default shuffle;