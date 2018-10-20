//ES6 with https://github.com/standard-things/esm
import next from 'next';
import path from 'path';
import os from 'os';
import server from 'polka';
const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev,
  dir: path.resolve(__dirname, '../client')
});
const handle = app.getRequestHandler();
const port = parseInt(process.env.PORT, 10) || 3000;
process.env.ABSOLUTE_URL = process.env.ABSOLUTE_URL || `${os.hostname()}:${port}`;

app.prepare().then(() => {
  server()
    .get('*', (req, res) => {
      return handle(req, res);
    })
    .listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://${os.hostname()}:${port}`); //eslint-disable-line no-console
    });
});
