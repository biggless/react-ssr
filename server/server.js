import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/app';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('^/$', (req, res) => {
  fs.readFile(path.resolve(__dirname, '..', 'build', 'index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Something went wrong');
    }
    const content = ReactDOMServer.renderToString(<App />);
    const html = data.replace(
      '<div id="root"></div>',
      `<div id="root">${content}</div>`
    );

    return res.send(html);
  });
});

app.use(express.static(
  path.resolve(__dirname, '..', 'build')
));

app.listen(PORT, () => {
  console.log(`🚀 Launched on port ${PORT} 🚀`)
});
