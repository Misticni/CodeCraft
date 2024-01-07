function convertText() {
    const text = document.getElementById('text').value;
    let result = '';

    if (/^[0-9A-Fa-f ]+$/.test(text)) {
        
        const hexArray = text.split(" ");
        for (let i = 0; i < hexArray.length; i++) {
            result += String.fromCharCode(parseInt(hexArray[i], 16));
        }
    } else {
        
        for (let i = 0; i < text.length; i++) {
            result += text.charCodeAt(i).toString(16) + " ";
        }
    }

    document.getElementById('result').value = result.trim();
}