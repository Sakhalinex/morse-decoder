const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let exp = expr.split(''),
    arr = [],
    morse = [],
    current = ''

    // Разбил входящую строку по кодировке для каждой буквы
    for (let i = 0; i < exp.length / 10; i++) {
        arr[i] = []
        for (let j = i * 10; j < (i + 1) * 10; j++) {
            arr[i].push(exp[j])
        }
    }
    // Ковертирую цифры в символы + формирую новый массив morse
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j+=2) {
            if (arr[i][j] + arr[i][j + 1] == 10) {
                current += '.'
            } else if (arr[i][j] + arr[i][j + 1] == 11) {
                current += '-'
            } else if (arr[i][j] == '*') {
                current += '**'
            }
        }

        morse.push(current)
        current = ''
    }
    // 
    return morse.map(code => code[0] == "*" ? ' ' : MORSE_TABLE[code]).join('')
}

module.exports = {
    decode
}