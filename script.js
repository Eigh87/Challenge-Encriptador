function encryptText() {
    let inputText = document.getElementById('inputText').value;
    let image = document.getElementById('image');
    if (inputText) {
        let encryptedText = inputText
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        document.getElementById('outputText').innerText = encryptedText;
        image.src = 'image2.png';
    } else {
        document.getElementById('outputText').innerText = '¿Que paso? Ningún mensaje fue encontrado';
        image.src = 'image3.png';
    }
}

function decryptText() {
    let inputText = document.getElementById('inputText').value;
    let image = document.getElementById('image');
    if (inputText) {
        let decryptedText = inputText
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        document.getElementById('outputText').innerText = decryptedText;
        image.src = 'image2.png';
    } else {
        document.getElementById('outputText').innerText = 'Ningún mensaje fue encontrado';
        image.src = 'image3.png';
    }
}
