chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {

    chrome.tabs.sendMessage(tabs[0].id, "give Sel Word", (resp) => {
        if (resp != "no Word Selected") {
            var r = new XMLHttpRequest();
            r.onreadystatechange = function() {
                if (r.readyState == 4) {
                    var txt = r.responseText;
                    var p = document.createElement("p");
                    p.innerHTML = (JSON.parse(txt))[0].meanings[0].definitions[0].definition;
                    document.body.appendChild(p);
                    console.log((JSON.parse(txt))[0].meanings[0].definitions[0].definition)
                }
            };
            r.open("GET", resp, true);
            r.send();
        } else {
            var p = document.createElement("p");
            p.innerHTML = "Select A Word";
            document.body.appendChild(p);
        }
    });
});