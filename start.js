const app = require('./app');
const config = require('./config');

app.listen(config.web.port, () => {
    console.log(`server listening on port ${config.web.port}`);
});