var https = require("https");

function getHTML (options, callback) {
  let output = "";

  https.get(options, function(response) {
    response.setEncoding("utf8");

    response.on("data", function(data) {
      output += data;
    })

    response.on("end", function() {
      console.log("Stream complete.  HERE'S THE DATA:");
      callback(output);
    })
  })
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);