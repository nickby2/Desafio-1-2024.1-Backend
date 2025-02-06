function telephoneCheck(str) {

    let cleaned = str.replace(/\s/g, "");

    //remove o codigo do país para facilitar a validação
    if (cleaned.startsWith("1")) {
        cleaned = cleaned.slice(1);
    }

    //verifica se a string tem apenas digitos, parenteses e hífens
    if (!/^\(?\d{3}\)?[-]?\d{3}[-]?\d{4}$/.test(cleaned)) {
        return false;
    }
    //verifica se os parenteses estão balanceados
    if (cleaned.includes("(") || cleaned.includes(")")) {
        if (!(cleaned.startsWith("(") && cleaned.includes(")") && cleaned.indexOf(")") == 4)){
            return false;
        }
    }
    return true;
}

console.log(telephoneCheck("555-555-5555")); 