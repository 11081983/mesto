function diff(temp) {
    let res = temp - 32;
    console.log(res);
    return res;
}

function multiply(deltaTemp) {
    let res = deltaTemp/5*9;
    console.log(res);
    return res;
}

function fahrToCelsius(temp) {
    return temp + ' градусов по шкале Фаренгейта равны ' + multiply(diff(temp)) + ' градусов Цельсия';
}

console.log(fahrToCelsius(100));
