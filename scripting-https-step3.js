var https = require("https");

function getAndPrintHTML (options) {

  let output = "";

  https.get(options, function(response) {
    response.setEncoding("utf8");

    response.on("data", function(data) {
      output += data;
    })

    response.on("end", function() {
      console.log("Stream complete.  HERE'S THE DATA:", output);
    })
  })
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);