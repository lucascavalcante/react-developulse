const app = require('./express')();
const port = app.get('port');

app.listen(port, () => {
  console.log(`API rodando na porta ${port}.`);
});