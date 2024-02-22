var Nightmare = require('nightmare');

let nightmare = Nightmare({
      switches: {
        'proxy-server': 'gate.smartproxy.com:7000', // Your desired endpoint within punctuation marks ('')
        'ignore-certificate-errors': true
      }
    });

    nightmare
    .authentication('username','password') // Your proxy username and password within punctuation marks ('')
    .goto('https://ip.smartproxy.com/json')
    .evaluate(() => document.querySelector('body').textContent)
    .end()
    .then(ip => console.log(ip))
    .catch(error => console.error('Something went wrong...', error));
