const fetch = require('node-fetch');

module.exports.callAPI = async (req, res) => {
    const response = await fetch('https://api.wazirx.com/api/v2/tickers');
    const json = await response.json();
    res.render('home', {
        title: 'Rendered from ejs',
        data: json
    });
}