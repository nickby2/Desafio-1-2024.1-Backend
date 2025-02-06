function checkCashRegister(price,cash,cid){
    let changeDue = cash - price; //troco
    const currencyUnits = [
    //valores das moedas e cédulas
        ["PENNY", 0.01],
        ["NICKEL",0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ];

    let totalInDrawer = cid.reduce((sum, curr) => sum + curr[1], 0); // soma do dinheiro total
    totalInDrawer = Math.round(totalInDrawer * 100)/100;

    if (totalInDrawer < changeDue){
        return { status: "INSUFFICIENT_FUNDS", change: [] } //verifica se o dinheiro é insuficiente
    }

    if (totalInDrawer === changeDue) {
        return {status: "CLOSED", change: cid }; //se o total for igual ao caixa, retorna fechado
    }

    let changeArray = []; // armazena o troco
    let reversedCid = [...cid].reverse();

    for (let [unit, value] of currencyUnits.reverse()) {
        let available = reversedCid.find(item => item[0] === unit)[1]; // total disponivel de moedas/notas
        let amountToReturn = 0;

        while (changeDue >= value && available > 0) { // enquanto precisar dar troco e houver dinheiro disponivel
            changeDue -= value;
            available -= value;
            amountToReturn += value;
            changeDue = Math.round(changeDue * 100) / 100;
        }

        if(amountToReturn > 0) {
            changeArray.push([unit, amountToReturn]); // unidade e valor do troco
        }
    }

    if (changeDue > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    return {status: "OPEN", change: changeArray}; //retorna troco calculado
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED",100]]));