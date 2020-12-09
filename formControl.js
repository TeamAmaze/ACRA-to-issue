function beautify() {
    let json = JSON.parse(document.getElementById("jsonTextArea").value);
    let niceJson = JSON.stringify(json, null, 2);
    niceJson = "```\n" + niceJson + "\n```"
    document.getElementById("resultText").innerHTML = niceJson;
}