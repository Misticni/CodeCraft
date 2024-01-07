function convertText() {
    const text = document.getElementById('text').value;
    let result = '';

    if (/^[01 ]+$/.test(text)) {
        
        const binaryArray = text.split(" ");
        for (let i = 0; i < binaryArray.length; i++) {
            result += String.fromCharCode(parseInt(binaryArray[i], 2));
        }
    } else {
        
        for (let i = 0; i < text.length; i++) {
            result += text.charCodeAt(i).toString(2) + " ";
        }
    }

    document.getElementById('result').value = result.trim();
}


    