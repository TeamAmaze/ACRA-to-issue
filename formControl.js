function beautify() {
    let json = JSON.parse(document.getElementById("jsonTextArea").value);
    let niceJson = JSON.stringify(json, null, 2);
    document.getElementById("resultText").innerHTML = niceJson;
}