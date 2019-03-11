var https = require("https");

module.exports = function getHTML(options, callback) {
 let output = "";

  https.get(options, function(response) {
    response.setEncoding("utf8");

    response.on("data", function(data) {
      output += data;
    })

    response.on("end", function() {
      console.log("Stream complete.  HERE'S THE DATA:", callback(output));
    })
  })

};
