import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from '../models';
import routes from '../routes';

import 'core-js/proposals/string-replace-all';

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));
app.use('/api', routes);
app.options('*', cors());

const port = process.env.port || 8080;

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Listening on localhost ${port}`);
    });
});

module.exports = app;