chrome.runtime.onMessage.addListener((message, sender, responce) => {
    var resp = window.getSelection().toString().trim();
    var url = "";
    if (resp == "") {
        url = "no Word Selected";
    } else {
        url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + resp;
    }
    responce(url);

});