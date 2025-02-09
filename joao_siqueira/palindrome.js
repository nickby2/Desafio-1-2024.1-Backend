function palindrome(str) {

    let string = str.replace(/[^a-z0-9]/gi, '').toLowerCase();


    return string === string.split('').reverse().join('');
}