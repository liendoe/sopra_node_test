const config = {};

config.jwt = { 
    key : 'my_secret_key',
    expiry_seconds: 1800
};
config.endpoints = {
    clients: "http://www.mocky.io/v2/5808862710000087232b75ac",
    policies: "http://www.mocky.io/v2/580891a4100000e8242b75c5"
};
config.web = { port: 3001 };

module.exports = config;