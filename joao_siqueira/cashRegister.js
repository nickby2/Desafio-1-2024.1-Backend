function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let CIDtotal = cid.reduce((sum, curr) => sum + curr[1], 0).toFixed(2);

    if (parseFloat(CIDtotal) < change) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    if (parseFloat(CIDtotal) === change) {
        return { status: "CLOSED", change: cid };
    }

    let cashDrawer = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ];

    cid = cid.reverse();
    let changeArray = [];

    for (let [unit, value] of cashDrawer.reverse()) {
        let amountInDrawer = cid.find(item => item[0] === unit)[1];
        let amountToReturn = 0;

        while (change >= value && amountInDrawer > 0) {
            change -= value;
            change = Math.round(change * 100) / 100;
            amountInDrawer -= value;
            amountToReturn += value;
        }

        if (amountToReturn > 0) {
            changeArray.push([unit, amountToReturn]);
        }
    }

    if (change > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change: changeArray };
}