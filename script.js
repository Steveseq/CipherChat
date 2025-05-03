// Name: Steve Sequeira
// Example using CryptoJS (would need to include the library)
function realEncrypt(message, key) {
    return CryptoJS.AES.encrypt(message, key).toString();
}

function realDecrypt(encrypted, key) {
    return CryptoJS.AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8);
}