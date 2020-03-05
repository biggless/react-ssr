import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/app';
import {StaticRouter} from 'react-router-dom';

const app = express();
const PORT = process.env.PORT || 3000;

const handler = (req, res) => {
  fs.readFile(path.resolve(__dirname, '..', 'build', 'index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Something went wrong');
    }

    const context = {};
    const content = ReactDOMServer.renderToString(
      <StaticRouter context={context} location={req.originalUrl}>
        <App />
      </StaticRouter>
    );

    if (context.url) return res.redirect(301, context.url);

    const html = data.replace(
      '<div id="root"></div>',
      `<div id="root">${content}</div>`
    );

    return res.send(html);
  });
}

app.use('^/$', handler);
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use('*', handler);

app.listen(PORT, () => {
  console.log(`🚀 Launched on port ${PORT} 🚀`)
});
