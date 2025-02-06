function rot13(str){
    let decodedStr = "";

    // percorre cada caractere da string de entrada
    for(let i = 0; i < str.length; i++){
        let char = str[i];

        // verifica se é uma letra do alfabeto e converte para ASCII
        if(char.match(/[A-Z]/)){
            let charCode = char.charCodeAt(0);

            let newCharCode = charCode + 13;

            // se ultrapassa 'Z' volta para 'A'
            if (newCharCode > 90) {
                newCharCode = charCode - 13;
            }

            //Concatena o carectere decodificado
            decodedStr += String.fromCharCode(newCharCode);

        } else {
            decodedStr += char;
        }
    }
    return decodedStr;
}

console.log(rot13('SERR PBQR PNZC')); 