const xpress = require("express");
const server = xpress();
const bodyParser = require("body-parser");


server.use("/", (req, res, next) => {
  res.status(200).json({
    message: "Welcome toNodejs push notification api....yihaaaaaa",
  });
});

server.listen("5050", () => {
  console.log("server running on port 5050.....");
});

// const sw = require('./src/service-worker');

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//       navigator.serviceWorker.register(sw).then(function(registration) {
//         // Registration was successful
//         console.log('ServiceWorker registration successful with scope: ', registration.scope);
//       }, function(err) {
//         // registration failed :(
//         console.log('ServiceWorker registration failed: ', err);
//       });
//     });
//   }

//   console.log("I got Here........");
