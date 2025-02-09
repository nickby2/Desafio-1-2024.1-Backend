function rot13(str) {
    return str.replace(/[A-Z]/g, (char) => {
        const charCode = char.charCodeAt(0);
        return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
    });
}