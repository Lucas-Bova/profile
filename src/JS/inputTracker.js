export function getLetters(input) {
    let count = 0;
    for (let i = 0; i < input.length; ++i){
        if (input[i].match(/[a-z]/i)) ++count;
    }
    return count;
}

export function getNumbers(input) {
    let count = 0;
    for (let i = 0; i < input.length; ++i){
        if (input[i].match(/^\d+$/)) ++count;
    }
    return count;
}

export function getVowels(input) {
    let count = 0;
    for (let i = 0; i < input.length; ++i){
        if (input[i].match(/[aeiou]/gi)) ++count;
    }
    return count;

}
