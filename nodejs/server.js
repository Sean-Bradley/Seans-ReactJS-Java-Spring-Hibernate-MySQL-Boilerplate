import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from './webpack.config.dev';

const compiler = webpack(config);

//const port = process.env.PORT || 8080;
const app = express();

app.use(require('webpack-dev-middleware')(
    compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }
));

