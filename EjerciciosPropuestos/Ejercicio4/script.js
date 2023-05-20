function extractCode() {
    var url = document.getElementById("urlInput").value;
    var code = extractMeetCode(url);
    document.getElementById("codeResult").textContent = "Código de la sesión: " + code;
  }
  
  function extractMeetCode(url) {
    if (url.substring(0, 8) === "https://") {
      url = url.substring(8, url.length);
    }
  
    const beginsMeetCode = 16;
    const amountLettersMeetCode = 12;
    url = url.substring(beginsMeetCode, beginsMeetCode + amountLettersMeetCode);
  
    let meetCode = "";
    for (let i = 0; i < url.length; i++) {
      if (!(url[i] === "-")) {
        meetCode += url[i];
      }
    }
  
    return meetCode;
  }
  