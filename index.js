const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

const db = require("./db");
const userRoutes = require("./routes/user.route");
const authRoutes = require("./routes/auth.route");
const cookieParser = require('cookie-parser');
app.use(cookieParser('kjjcfxrdnnjfgf'));
db.defaults({ users: [] })
    .write()
app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get('/', (req, res) => res.render('index', {
    name: "Dam Thien Phuc"
}))
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))