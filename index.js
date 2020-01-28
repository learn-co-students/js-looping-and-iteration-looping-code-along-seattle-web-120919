// Code your solutions in this file

name = [ 'Lisa', 'Kaitlin', 'Jan' ]
occasion = 'surprise'

function writeCards(name, occasion) {
    let tyCards = [];
    for (let i = 0; i < name.length; i++) {
        tyCards.push(`Thank you, ${name[i]}, for the wonderful ${occasion} gift!`);
    }
    return tyCards;
}

function countDown(fromNum) {
    while (fromNum > 0) {
        console.log(fromNum);
        fromNum -= 1;
    }
    console.log (fromNum);
}