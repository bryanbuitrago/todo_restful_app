let express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    log = console.log,
    todoRoutes = require('./routes/todos');

app.get('/', (req, res) => {
  res.send('HELLO FROM THE ROOT ROUTE');
});

app.use('/api/todos', todoRoutes);

app.listen(port, () => {
  log(`App is running on port: ${port}`)
})
