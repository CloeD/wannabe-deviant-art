import * as express from 'express';
import { homeRoute } from './routes/homeRouter';

const app = express();
app.set('view engine', 'pug');
app.use("/", homeRoute());
const port = 3000;

app.listen(port, () => {
    console.log("App is ready on port " + port + " ! :D")
});
