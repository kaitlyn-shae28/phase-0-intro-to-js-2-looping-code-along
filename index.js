const cards = []
const myArray = ["Sam","Pete","Emily"]

function writeCards(friends, event) {
    for (let i = 0; i < friends.length; i++){
        cards.push(`Thank you, ${friends[i]}, for the wonderful ${event} gift!`)
        // console.log(`Thank you, ${friends[i]} for the wonderful birthday gift!`);
        // debugger;
    }
    return cards
}

function countDown(){
    for (let count = 10; count >= 0; count--)
   console.log(count)
}

