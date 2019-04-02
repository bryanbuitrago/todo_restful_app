let express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    log = console.log;

app.get('/', (req, res) => {
  res.send('Hi There From Express');
});

app.get('/happy', (req, res) => {
  res.send('Cause Im Happy');
});

app.listen(port, () => {
  log(`App is running on port: ${port}`)
})
