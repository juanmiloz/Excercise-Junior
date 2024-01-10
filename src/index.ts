import dotenv from "dotenv";
import express, {Express} from "express";
import routes from "./router/routes";
import {db} from "./config/connect";

dotenv.config()

const app: Express = express()

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const port = process.env.PORT || 3000

routes(app)

db.then(() => {
    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });
})
