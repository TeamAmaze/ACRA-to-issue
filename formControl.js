function beautify() {
    const raw = document.getElementById("jsonTextArea").value;
    const json = JSON.parse(raw);
    let output = "";
    const rawExceptions = json["exceptions"];
    const exceptions = rawExceptions.substring(1, json["exceptions"].length-1).split(",");

    output += "**Smartphone:**\n";
    output += "- Device: " +  json["device"] + "\n";
    output += "- OS: " +  json["os"] + "\n";
    output += "- Rooted: Maybe\n";
    output += "- Version: " +  json["version"] + "\n";

    output += "### Stack traces:\n";

    for(const exception of exceptions) {
        output += "**Trace:**\n";
        output +=  "```java\n" +  exception +  "```\n";
    }

    output +=  "<details><summary><b>Raw mail</b></summary><p>\n";
    output += "```json\n" +  JSON.stringify(json, undefined, 2) + "\n```\n";

    document.getElementById("resultText").innerHTML = output;
}