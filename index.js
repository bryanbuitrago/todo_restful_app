let express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    log = console.log,
    bodyParser = require('body-parser'),
    todoRoutes = require('./routes/todos');

// body-parser setup
// allows access to request body from put or post request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('HELLO FROM THE ROOT ROUTE');
});

app.use('/api/todos', todoRoutes);

app.listen(port, () => {
  log(`App is running on port: ${port}`)
})
