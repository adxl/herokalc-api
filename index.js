const express = require('express')
const app = express()

app.use(express.json())

// app.get('/', (req, res) => {
//     res.send('FETCH')
// })

app.post('/add/', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    res.send(`${a + b}`)
})

app.post('/sub/', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    res.send(`${a - b}`)
})

app.post('/mul/', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    res.send(`${a * b}`)
})

app.post('/div/', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    if (b)
        res.send(`${a / b}`)
    res.send("Error")
})

app.listen(process.env.PORT || 5000)