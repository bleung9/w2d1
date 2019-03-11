var https = require("https");

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  let output = "";

  https.get(requestOptions, function(response) {
    response.setEncoding("utf8");

    response.on("data", function(data) {
      output += data;
    })

    response.on("end", function () {
      console.log("Stream complete.  HERE'S THE DATA:", output);
    })
  })
}

getAndPrintHTMLChunks();