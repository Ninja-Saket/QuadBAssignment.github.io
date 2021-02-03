const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 8000;

app.use(expressLayouts);

//  Setting up the view engine
app.set('view engine', 'ejs');
app.set('views','./views');

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.use(express.static('./assets'));
app.use('/', require('./routes'));


app.listen(port, function(err) {
    if(err) {
        console.log(`Error in running the server !! ${err}`);
    }
    console.log(`Server is running on port ${port} ...`);
});