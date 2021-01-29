let a1 = 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/mTzj/UfMqGggau?x-email=flyvem%40mail.ru'
let ax = 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/o1Di/1vgMr8NdW?x-email=flyvem%40mail.ru'
let ao = 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/4Di6/vYHSTi8KH?x-email=flyvem%40mail.ru'
let ax2 = 'https://cloclo50.cloud.mail.ru/weblink/view/erAc/c9195RdzT?etag=29494D9E111EFF201DC1DB0918CF578D42209039'
let ao2 = 'https://cloclo57.cloud.mail.ru/weblink/view/YwdW/ZsGKyzivH?etag=B97CE255C6D9C5396DCEC80840C9EF88D32BB4AF'
let xAndO = true;
let flagEnd = true;
let flagCrossZero = true;
let counter = 0;
let ppp = 0
let elem = document.getElementById('change');
let xVictory = document.getElementById('gameR')
let playInput = document.getElementById('gameS');
let imgAll = document.getElementsByTagName('img');
let click = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [7, 5, 3]]
let altArr = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0}
let sumXw = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];


function xo(go) {
    if (go.alt === '0' && flagEnd === true) {
        if (flagCrossZero === false) {
            write(go, -2);
            go.src = ao;
            go.alt = -2;
            compO()
            forClick()
        } else {
            write(go, 2);
            go.src = ax;
            go.alt = 2;
            compX()
            forClick()
        }
    }
}

function comp() {
    let crossZero = document.getElementById('change').value
    if (crossZero === 'Крестик') {
        compX()
    } else {
        compO()
    }
}

function forClick() {
    for (let i = 0; i < 8; i++) {
        if (sumStringXw(i) === 6) {
            for (let j = 0; j < 3; j++) {
                let a = click[i][j];
                imgAll[a].src = ax2;
            }
            xVictory.style.display = 'block';
            if (flagCrossZero === true) {
                xVictory.style.background = 'yellow'
                xVictory.value = 'Вы победили! Restart!'
            } else {
                xVictory.style.background = '#ce0000'
                xVictory.value = 'Вы проиграли! Restart!'
            }
            flagEnd = false;
            break;
        } else if (sumStringXw(i) === -6) {
            for (let j = 0; j < 3; j++) {
                let a = click[i][j];
                imgAll[a].src = ao2;
            }
            xVictory.style.display = 'block';
            if (flagCrossZero === false) {
                xVictory.style.background = 'yellow'
                xVictory.value = 'Вы победили! Restart!'
            } else {
                xVictory.style.background = '#ce0000'
                xVictory.value = 'Вы проиграли! Restart!'
            }
            flagEnd = false;
            break;
        } else if (counter >= 9) {
            xVictory.style.display = 'block';
            xVictory.value = 'Ничья! Restart!';
            flagEnd = false;
            break;
        }
    }
}


function compX() {
    ppp = counter
    if (counter === 1) {
        if (+altArr[4] === 0) {
            imgAll[5].src = ao;
            imgAll[5].alt = -2;
            altArr[4] = -2;
            sumXw[1][1] = -2;
            sumXw[4][1] = -2;
            sumXw[6][1] = -2;
            sumXw[7][1] = -2;
            counter+=1;
        } else if (+altArr[0] === 0) {
            imgAll[1].src = ao;
            imgAll[1].alt = -2;
            altArr[0] = -2;
            sumXw[0][0] = -2;
            sumXw[3][0] = -2;
            sumXw[6][0] = -2;
            counter+=1;
        } else if (+altArr[2] === 0) {
            imgAll[3].src = ao;
            imgAll[3].alt = -2;
            altArr[2] = -2;
            sumXw[0][2] = -2;
            sumXw[5][0] = -2;
            sumXw[7][2] = -2;
            counter+=1;
        } else if (+altArr[6] === 0) {
            imgAll[7].src = ao;
            imgAll[7].alt = -2;
            altArr[6] = -2;
            sumXw[2][0] = -2;
            sumXw[3][2] = -2;
            sumXw[7][0] = -2;
            counter+=1;
        } else if (+altArr[8] === 0) {
            imgAll[9].src = ao;
            imgAll[9].alt = -2;
            altArr[8] = -2;
            sumXw[2][2] = -2;
            sumXw[5][2] = -2;
            sumXw[6][2] = -2;
            counter+=1;
        }
    } else if (counter === 3) {
        if (+altArr[4] === 0) {
            imgAll[5].src = ao;
            imgAll[5].alt = -2;
            altArr[4] = -2;
            sumXw[1][1] = -2;
            sumXw[4][1] = -2;
            sumXw[6][1] = -2;
            sumXw[7][1] = -2;
            counter+=1;
        } else {
            check(-4, 4, -2, 2, 0, ao)
        }
    } else if (counter === 5) {
        check(-4, 4, -2, 2, 0, ao)

    } else if (counter === 7) {
        check(-4, 4, -2, 2, 0, ao)

    } else if (counter === 9) {
        check(-4, 4, -2, 2, 0, ao)
    }
}

function check(m4, p4, m2, p2, z, a) {
    if (checkSection(m4, a, m2)) {
    } else {
        if (checkSection(p4, a, m2)) {
        } else {
            if (checkSection(m2, a, m2)) {
            } else {
                if (checkSection(p2, a, m2)) {
                } else {
                    if (checkSection(z, a, m2)) {
                    }
                }
            }
        }
    }
}

function checkSection(npo, k, l) {
    if (+sumStringXw(0) === npo && counter === ppp) {
        zeroZero(0, 0, 1, 2, k, l);
    } else if (+sumStringXw(1) === npo && counter === ppp) {
        zeroZero(1, 3, 4, 5, k, l)
    } else if (+sumStringXw(2) === npo && counter === ppp) {
        zeroZero(2, 6, 7, 8, k, l)
    } else if (+sumStringXw(3) === npo && counter === ppp) {
        zeroZero(3, 0, 3, 6, k, l)
    } else if (+sumStringXw(4) === npo && counter === ppp) {
        zeroZero(4, 1, 4, 7, k, l)
    } else if (+sumStringXw(5) === npo && counter === ppp) {
        zeroZero(5, 2, 5, 8, k, l)
    } else if (+sumStringXw(6) === npo && counter === ppp) {
        zeroZero(6, 0, 4, 8, k, l)
    } else if (+sumStringXw(7) === npo && counter === ppp) {
        zeroZero(7, 6, 4, 2, k, l)
    }
}

function compO() {
ppp = counter
    if (counter === 0) {
        imgAll[5].src = ax
        imgAll[5].alt = 2;
        altArr[4] = 2;
        sumXw[1][1] = 2;
        sumXw[4][1] = 2;
        sumXw[6][1] = 2;
        sumXw[7][1] = 2;
        counter+=1;
    } else if (counter === 2) {
        if (+altArr[0] === 0 && altArr[8] === 0) {
            imgAll[1].src = ax;
            imgAll[1].alt = 2;
            altArr[0] = 2;
            sumXw[0][0] = 2;
            sumXw[3][0] = 2;
            sumXw[6][0] = 2;
            counter+=1;
        } else if (+altArr[2] === 0) {
            imgAll[3].src = ax;
            imgAll[3].alt = 2;
            altArr[2] = 2;
            sumXw[0][2] = 2;
            sumXw[5][0] = 2;
            sumXw[7][2] = 2;
            counter+=1;
        } else if (+altArr[6] === 0) {
            imgAll[7].src = ax;
            imgAll[7].alt = 2;
            altArr[6] = 2;
            sumXw[2][0] = 2;
            sumXw[3][2] = 2;
            sumXw[7][0] = 2;
            counter+=1;
        } else if (+altArr[8] === 0) {
            imgAll[9].src = ax;
            imgAll[9].alt = 2;
            altArr[8] = 2;
            sumXw[2][2] = 2;
            sumXw[5][2] = 2;
            sumXw[6][2] = 2;
            counter+=1;
        }
    } else if (counter === 4) {
        check(4, -4, 2, -2, 0, ax)

    } else if (counter === 6) {
        check(4, -4, 2, -2, 0, ax)

    } else if (counter === 8) {
        check(4, -4, 2, -2, 0, ax)
    }
}

function sumStringXw(n) {
    return sumXw[n].reduce((cell, element) => (+cell) + (+element))
}

function zeroZero(n, z, x, c, v, b) {
    let indexZero = sumXw[n].findIndex(cell => +cell === 0);
    if (n === 0) {
        if (indexZero === 0 && +imgAll[z + 1].alt === 0) {
            sumXw[0][0] = b;
            sumXw[3][0] = b;
            sumXw[6][0] = b;
            imgAll[z + 1].src = v;
            imgAll[z + 1].alt = b;
            altArr[z] = b;
            counter+=1;
        } else if (indexZero === 1 && +imgAll[x + 1].alt === 0) {
            sumXw[0][1] = b;
            sumXw[4][0] = b;
            imgAll[x + 1].src = v;
            imgAll[x + 1].alt = b;
            altArr[x] = b;
            counter+=1;
        } else if (indexZero === 2 && +imgAll[c + 1].alt === 0) {
            sumXw[0][2] = b;
            sumXw[5][0] = b;
            sumXw[7][2] = b;
            imgAll[c + 1].src = v;
            imgAll[c + 1].alt = b;
            altArr[c] = b;
            counter+=1;
        }
    } else if (n === 1) {
        if (indexZero === 0 && +imgAll[z + 1].alt === 0) {
            sumXw[1][0] = b;
            sumXw[3][1] = b;
            imgAll[z + 1].src = v;
            imgAll[z + 1].alt = b;
            altArr[z] = b;
            counter+=1;
        } else if (indexZero === 1 && +imgAll[x + 1].alt === 0) {
            sumXw[1][1] = b;
            sumXw[4][1] = b;
            sumXw[6][1] = b;
            sumXw[7][1] = b;
            imgAll[x + 1].src = v;
            imgAll[x + 1].alt = b;
            altArr[x] = b;
            counter+=1;
        } else if (indexZero === 2 && +imgAll[c + 1].alt === 0) {
            sumXw[1][2] = b;
            sumXw[5][1] = b;
            imgAll[c + 1].src = v;
            imgAll[c + 1].alt = b;
            altArr[c] = b;
            counter+=1;
        }
    } else if (n === 2) {
        if (indexZero === 0 && +imgAll[z + 1].alt === 0) {
            sumXw[2][0] = b;
            sumXw[3][2] = b;
            sumXw[7][0] = b;
            imgAll[z + 1].src = v;
            imgAll[z + 1].alt = b;
            altArr[z] = b;
            counter+=1;
        } else if (indexZero === 1 && +imgAll[x + 1].alt === 0) {
            sumXw[2][1] = b;
            sumXw[4][2] = b;
            imgAll[x + 1].src = v;
            imgAll[x + 1].alt = b;
            altArr[x] = b;
            counter+=1;
        } else if (indexZero === 2 && +imgAll[c + 1].alt === 0) {
            sumXw[2][2] = b;
            sumXw[5][2] = b;
            sumXw[6][2] = b;
            imgAll[c + 1].src = v;
            imgAll[c + 1].alt = b;
            altArr[c] = b;
            counter+=1;
        }
    } else if (n === 3) {
        if (indexZero === 0 && +imgAll[z + 1].alt === 0) {
            sumXw[0][0] = b;
            sumXw[3][0] = b;
            sumXw[6][0] = b;
            imgAll[z + 1].src = v;
            imgAll[z + 1].alt = b;
            altArr[z] = b;
            counter+=1;
        } else if (indexZero === 1 && +imgAll[x + 1].alt === 0) {
            sumXw[1][0] = b;
            sumXw[3][1] = b;
            imgAll[x + 1].src = v;
            imgAll[x + 1].alt = b;
            altArr[x] = b;
            counter+=1;
        } else if (indexZero === 2 && +imgAll[c + 1].alt === 0) {
            sumXw[2][0] = b;
            sumXw[3][2] = b;
            sumXw[7][0] = b;
            imgAll[c + 1].src = v;
            imgAll[c + 1].alt = b;
            altArr[c] = b;
            counter+=1;
        }
    } else if (n === 4) {
        if (indexZero === 0 && +imgAll[z + 1].alt === 0) {
            sumXw[0][1] = b;
            sumXw[4][0] = b;
            imgAll[z + 1].src = v;
            imgAll[z + 1].alt = b;
            altArr[z] = b;
            counter+=1;
        } else if (indexZero === 1 && +imgAll[x + 1].alt === 0) {
            sumXw[1][1] = b;
            sumXw[4][1] = b;
            sumXw[6][1] = b;
            sumXw[7][1] = b;
            imgAll[x + 1].src = v;
            imgAll[x + 1].alt = b;
            altArr[x] = b;
            counter+=1;
        } else if (indexZero === 2 && +imgAll[c + 1].alt === 0) {
            sumXw[2][1] = b;
            sumXw[4][2] = b;
            imgAll[c + 1].src = v;
            imgAll[c + 1].alt = b;
            altArr[c] = b;
            counter+=1;
        }
    } else if (n === 5) {
        if (indexZero === 0 && +imgAll[z + 1].alt === 0) {
            sumXw[0][2] = b;
            sumXw[5][0] = b;
            sumXw[7][2] = b;
            imgAll[z + 1].src = v;
            imgAll[z + 1].alt = b;
            altArr[z] = b;
            counter+=1;
        } else if (indexZero === 1 && +imgAll[x + 1].alt === 0) {
            sumXw[1][2] = b;
            sumXw[5][1] = b;
            imgAll[x + 1].src = v;
            imgAll[x + 1].alt = b;
            altArr[x] = b;
            counter+=1;
        } else if (indexZero === 2 && +imgAll[c + 1].alt === 0) {
            sumXw[2][2] = b;
            sumXw[5][2] = b;
            sumXw[6][2] = b;
            imgAll[c + 1].src = v;
            imgAll[c + 1].alt = b;
            altArr[c] = b;
            counter+=1;
        }
    } else if (n === 6) {
        if (indexZero === 0 && +imgAll[z + 1].alt === 0) {
            sumXw[0][0] = b;
            sumXw[3][0] = b;
            sumXw[6][0] = b;
            imgAll[z + 1].src = v;
            imgAll[z + 1].alt = b;
            altArr[z] = b;
            counter+=1;
        } else if (indexZero === 1 && +imgAll[x + 1].alt === 0) {
            sumXw[1][1] = b;
            sumXw[4][1] = b;
            sumXw[6][1] = b;
            sumXw[7][1] = b;
            imgAll[x + 1].src = v;
            imgAll[x + 1].alt = b;
            altArr[x] = b;
            counter+=1;
        } else if (indexZero === 2 && +imgAll[c + 1].alt === 0) {
            sumXw[2][2] = b;
            sumXw[5][2] = b;
            sumXw[6][2] = b;
            imgAll[c + 1].src = v;
            imgAll[c + 1].alt = b;
            altArr[c] = b;
            counter+=1;
        }
    } else if (n === 7) {
        if (indexZero === 0 && +imgAll[z + 1].alt === 0) {
            sumXw[2][0] = b;
            sumXw[3][2] = b;
            sumXw[7][0] = b;
            imgAll[z + 1].src = v;
            imgAll[z + 1].alt = b;
            altArr[z] = b;
            counter+=1;
        } else if (indexZero === 1 && +imgAll[x + 1].alt === 0) {
            sumXw[1][1] = b;
            sumXw[4][1] = b;
            sumXw[6][1] = b;
            sumXw[7][1] = b;
            imgAll[x + 1].src = v;
            imgAll[x + 1].alt = b;
            altArr[x] = b;
            counter+=1;
        } else if (indexZero === 2 && +imgAll[c + 1].alt === 0) {
            sumXw[0][2] = b;
            sumXw[5][0] = b;
            sumXw[7][2] = b;
            imgAll[c + 1].src = v;
            imgAll[c + 1].alt = b;
            altArr[c] = b;
            counter+=1;
        }
    }
}

function write(go, d) {
    if (go.id === '1') {
        sumXw[0][0] = d;
        sumXw[3][0] = d;
        sumXw[6][0] = d;
        altArr[0] = d;
        imgAll[1].alt = d;
        counter += 1;
    } else if (go.id === '2') {
        sumXw[0][1] = d;
        sumXw[4][0] = d;
        altArr[1] = d;
        imgAll[2].alt = d;
        counter += 1;
    } else if (go.id === '3') {
        sumXw[0][2] = d;
        sumXw[5][0] = d;
        sumXw[7][2] = d;
        altArr[2] = d;
        imgAll[3].alt = d;
        counter += 1;
    } else if (go.id === '4') {
        sumXw[1][0] = d;
        sumXw[3][1] = d;
        altArr[3] = d;
        imgAll[4].alt = d;
        counter += 1;
    } else if (go.id === '5') {
        sumXw[1][1] = d;
        sumXw[4][1] = d;
        sumXw[6][1] = d;
        sumXw[7][1] = d;
        altArr[4] = d;
        imgAll[5].alt = d;
        counter += 1;
    } else if (go.id === '6') {
        sumXw[1][2] = d;
        sumXw[5][1] = d;
        altArr[5] = d;
        imgAll[6].alt = d;
        counter += 1;
    } else if (go.id === '7') {
        sumXw[2][0] = d;
        sumXw[3][2] = d;
        sumXw[7][0] = d;
        altArr[6] = d;
        imgAll[7].alt = d;
        counter += 1;
    } else if (go.id === '8') {
        sumXw[2][1] = d;
        sumXw[4][2] = d;
        altArr[7] = d;
        imgAll[8].alt = d;
        counter += 1;
    } else if (go.id === '9') {
        sumXw[2][2] = d;
        sumXw[5][2] = d;
        sumXw[6][2] = d;
        altArr[8] = d;
        imgAll[9].alt = d;
        counter += 1;
    }
}

function change() {
    let cha = document.getElementById('chan')
    if (xAndO === true) {
        elem.value = 'Нолик';
        cha.src = ao;
        xAndO = false;
    } else {
        cha.src = ax;
        elem.value = 'Крестик';
        xAndO = true;
    }
}

function play() {
    comp()
    let block = document.getElementById('gameBlock');
    let elemR = document.getElementById('gameR');
    playInput.disabled = true;
    elemR.style.display = 'block'
    elemR.disabled = false;
    elem.disabled = true;
    block.style.display = 'block'
    flagCrossZero = elem.value !== 'Нолик';
}

function restart() {
    let elemR = document.getElementById('gameR');
    elemR.value = 'Restart!'
    xoReset()
}

function xoReset() {
    let block = document.getElementById('gameBlock');
    if (elem.value === 'Нолик') comp();
    xAndO = elem.value === 'Крестик';
    playInput.disabled = false;
    block.style.display = 'none'
    flagEnd = true;
    elem.disabled = false;
    altArr = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0}
    sumXw = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
    counter = 0;
    ppp = 0;

    xVictory.style.background = '#07788d';
    for (let i = 1; i < imgAll.length; i++) {
        imgAll[i].alt = '0';
        imgAll[i].src = a1;
    }
    comp()
}