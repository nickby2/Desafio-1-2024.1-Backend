function palindrome(str){
    //regex remove tudo que não é letra ou número
    var re = /[^A-Za-z0-9]/g;

    //padroniza a string para que a comparação seja case-sensitive
    str = str.toLowerCase().replace(re, '');

    //verifica se os caracteres são simétricos
    var len = str.length;
    for(var i = 0; i < len/2; i++){
        if (str[i] !== str[len - 1 - i]){
            return false;
        }
    }
    return true;
}

console.log(palindrome("eye"));