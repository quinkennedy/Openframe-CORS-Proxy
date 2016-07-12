var cors_proxy = require('cors-anywhere');
var debug = require('debug')('openframe-proxy');
var Extension = require('openframe-extension');
var fs = require('fs');
 
// restrict access to localhost only
var host = '127.0.0.1';
// random port that hopefully won't clash with anything
var port = 8425;

module.exports = new Extension({
  init: function() {

    // taken straight from the cors-anywhere example
    cors_proxy.createServer({
      originWhitelist: [], // Allow all origins 
      requireHeader: ['origin', 'x-requested-with'],
      removeHeaders: ['cookie', 'cookie2'],
      httpsOptions: {key: fs.readFileSync(
                            __dirname + '/cors-proxy-key.pem'),
                     cert : fs.readFileSync(
                              __dirname + '/cors-proxy-cert.pem')}
    }).listen(port, host, function() {
      debug('Running on ' + host + ':' + port);
    });

  }
});
