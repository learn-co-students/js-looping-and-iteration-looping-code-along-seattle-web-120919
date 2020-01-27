// Code your solutions in this file

function writeCards(names) {
    const result = [];
    for (let i = 0; i < names.length; i++) {
        result.push("Thank you, " + names[i] + ", for the wonderful surprise gift!");
    };
    return result;
}

function countDown(max) {
    for (let i = max; i >= 0; i--) {
        console.log(i);
    }
}