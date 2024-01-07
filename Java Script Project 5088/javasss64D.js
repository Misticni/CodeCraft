function convertText() {
    const text = document.getElementById('text').value;
    let result = '';

    result = atob(text);

    document.getElementById('result').value = result.trim();
}