function convertText() {
    const text = document.getElementById('text').value;
    let result = '';

    result = btoa(text);

    document.getElementById('result').value = result.trim();
}